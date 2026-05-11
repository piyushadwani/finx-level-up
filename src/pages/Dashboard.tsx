import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Flame, Plus, Wallet, Trophy, LogOut, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface Saving { id: string; amount: number; note: string | null; created_at: string; }
interface Streak { id: string; friend_name: string; streak_days: number; last_activity: string; }

const GOAL = 10000;

const Dashboard = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [savings, setSavings] = useState<Saving[]>([]);
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [friendName, setFriendName] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate('/auth');
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (!user) return;
    void loadData();
  }, [user]);

  const loadData = async () => {
    const [{ data: s }, { data: st }] = await Promise.all([
      supabase.from('savings').select('*').order('created_at', { ascending: false }),
      supabase.from('friend_streaks').select('*').order('streak_days', { ascending: false }),
    ]);
    setSavings(s ?? []);
    setStreaks(st ?? []);
  };

  const total = savings.reduce((sum, s) => sum + Number(s.amount), 0);
  const progress = Math.min((total / GOAL) * 100, 100);

  const addSaving = async (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return toast.error('Enter a valid amount');
    setBusy(true);
    const { error } = await supabase.from('savings').insert({ user_id: user!.id, amount: amt, note: note || null });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success(`+₹${amt} saved! 🎉`);
    setAmount(''); setNote('');
    void loadData();
  };

  const deleteSaving = async (id: string) => {
    const { error } = await supabase.from('savings').delete().eq('id', id);
    if (error) return toast.error(error.message);
    void loadData();
  };

  const addStreak = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!friendName.trim()) return;
    const { error } = await supabase.from('friend_streaks').insert({
      user_id: user!.id,
      friend_name: friendName.trim(),
      streak_days: 1,
    });
    if (error) return toast.error(error.message);
    toast.success(`Started streak with ${friendName}! 🔥`);
    setFriendName('');
    void loadData();
  };

  const bumpStreak = async (s: Streak) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    if (s.last_activity === today) return toast.info('Already logged today!');
    const { error } = await supabase
      .from('friend_streaks')
      .update({ streak_days: s.streak_days + 1, last_activity: today })
      .eq('id', s.id);
    if (error) return toast.error(error.message);
    toast.success(`🔥 ${s.streak_days + 1} day streak with ${s.friend_name}!`);
    void loadData();
  };

  const deleteStreak = async (id: string) => {
    await supabase.from('friend_streaks').delete().eq('id', id);
    void loadData();
  };

  if (authLoading || !user) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-gaming font-bold neon-text">Your FinX Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.email}</p>
        </div>
        <Button variant="outline" onClick={async () => { await signOut(); navigate('/'); }}>
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
      </div>

      {/* Total Savings */}
      <Card className="game-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Wallet className="text-primary" /> Total Saved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-gaming font-bold neon-text mb-3">₹{total.toLocaleString('en-IN')}</div>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Goal Progress</span>
            <span>₹{total.toLocaleString('en-IN')} / ₹{GOAL.toLocaleString('en-IN')}</span>
          </div>
          <Progress value={progress} className="h-3" />
          {progress >= 100 && (
            <div className="mt-3 flex items-center gap-2 text-accent font-medium">
              <Trophy className="h-5 w-5" /> Goal smashed! Keep stacking 💪
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Add Saving */}
        <Card className="game-card">
          <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="text-accent" /> Add to Savings</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={addSaving} className="space-y-3">
              <div>
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input id="amount" type="number" step="0.01" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="500" required />
              </div>
              <div>
                <Label htmlFor="note">Note (optional)</Label>
                <Input id="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Skipped coffee ☕" maxLength={100} />
              </div>
              <Button type="submit" className="w-full btn-hero" disabled={busy}>Add Saving</Button>
            </form>
          </CardContent>
        </Card>

        {/* Friend Streaks */}
        <Card className="game-card">
          <CardHeader><CardTitle className="flex items-center gap-2"><Flame className="text-orange-500" /> Friend Streaks</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={addStreak} className="flex gap-2 mb-4">
              <Input value={friendName} onChange={(e) => setFriendName(e.target.value)} placeholder="Friend's name" maxLength={50} />
              <Button type="submit">Start</Button>
            </form>
            <div className="space-y-2">
              {streaks.length === 0 && <p className="text-sm text-muted-foreground">No streaks yet. Add a friend!</p>}
              {streaks.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">{s.friend_name}</div>
                      <div className="text-xs text-muted-foreground">{s.streak_days} day streak</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" onClick={() => bumpStreak(s)}>+1</Button>
                    <Button size="sm" variant="ghost" onClick={() => deleteStreak(s.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Savings */}
      <Card className="game-card">
        <CardHeader><CardTitle>Recent Savings</CardTitle></CardHeader>
        <CardContent>
          {savings.length === 0 && <p className="text-sm text-muted-foreground">Start adding to see your history here.</p>}
          <div className="space-y-2">
            {savings.slice(0, 10).map((s) => (
              <div key={s.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <div className="font-bold text-accent">+₹{Number(s.amount).toLocaleString('en-IN')}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.note || 'No note'} · {format(new Date(s.created_at), 'dd MMM, hh:mm a')}
                  </div>
                </div>
                <Button size="sm" variant="ghost" onClick={() => deleteSaving(s.id)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;