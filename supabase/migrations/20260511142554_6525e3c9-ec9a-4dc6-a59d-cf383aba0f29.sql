
-- profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "view own profile" on public.profiles for select using (auth.uid() = id);
create policy "insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "update own profile" on public.profiles for update using (auth.uid() = id);

-- savings
create table public.savings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  amount numeric(12,2) not null check (amount > 0),
  note text,
  created_at timestamptz not null default now()
);
alter table public.savings enable row level security;
create policy "select own savings" on public.savings for select using (auth.uid() = user_id);
create policy "insert own savings" on public.savings for insert with check (auth.uid() = user_id);
create policy "update own savings" on public.savings for update using (auth.uid() = user_id);
create policy "delete own savings" on public.savings for delete using (auth.uid() = user_id);
create index savings_user_id_idx on public.savings(user_id);

-- friend streaks
create table public.friend_streaks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  friend_name text not null,
  streak_days int not null default 0,
  last_activity date not null default current_date,
  created_at timestamptz not null default now()
);
alter table public.friend_streaks enable row level security;
create policy "select own streaks" on public.friend_streaks for select using (auth.uid() = user_id);
create policy "insert own streaks" on public.friend_streaks for insert with check (auth.uid() = user_id);
create policy "update own streaks" on public.friend_streaks for update using (auth.uid() = user_id);
create policy "delete own streaks" on public.friend_streaks for delete using (auth.uid() = user_id);

-- chat messages
create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  created_at timestamptz not null default now()
);
alter table public.chat_messages enable row level security;
create policy "select own messages" on public.chat_messages for select using (auth.uid() = user_id);
create policy "insert own messages" on public.chat_messages for insert with check (auth.uid() = user_id);
create policy "delete own messages" on public.chat_messages for delete using (auth.uid() = user_id);
create index chat_messages_user_idx on public.chat_messages(user_id, created_at);

-- auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();
