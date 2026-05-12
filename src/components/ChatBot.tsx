import { useState, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Msg { role: 'user' | 'assistant'; content: string; }

const ChatBot = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load history when opened & logged in
  useEffect(() => {
    if (!open || !user) return;
    (async () => {
      const { data } = await supabase
        .from('chat_messages')
        .select('role, content')
        .order('created_at', { ascending: true })
        .limit(50);
      if (data && data.length) {
        setMessages(data.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })));
      } else {
        setMessages([{ role: 'assistant', content: "Hey! 👋 I'm FinX AI. Ask me anything about saving, investing, SIPs, budgeting — anything money-related!" }]);
      }
    })();
  }, [open, user]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => { if (open) inputRef.current?.focus(); }, [open, loading]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    if (!user) { toast.error('Please sign in to chat'); return; }

    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    await supabase.from('chat_messages').insert({ user_id: user.id, role: 'user', content: text });

    const { data, error } = await supabase.functions.invoke('finx-chat', {
      body: { messages: next.map((m) => ({ role: m.role, content: m.content })) },
    });

    setLoading(false);
    if (error || !data?.reply) {
      toast.error(data?.error || error?.message || 'Chat failed');
      return;
    }
    setMessages([...next, { role: 'assistant', content: data.reply }]);
    await supabase.from('chat_messages').insert({ user_id: user.id, role: 'assistant', content: data.reply });
  };

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Open FinX AI chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        {open ? <X className="h-6 w-6 text-primary-foreground" /> : <MessageCircle className="h-6 w-6 text-primary-foreground" />}
      </button>

      {open && (
        <Card className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[500px] flex flex-col game-card overflow-hidden">
          <div className="p-4 border-b border-border flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <div className="font-bold">FinX AI Coach</div>
              <div className="text-xs text-muted-foreground">Investment & savings help</div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {!user && (
              <div className="text-center text-sm text-muted-foreground py-8">
                <p className="mb-3">Sign in to chat with FinX AI 🤖</p>
                <Link to="/auth"><Button size="sm" className="btn-hero">Sign In</Button></Link>
              </div>
            )}
            {user && messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-3 py-2 text-sm text-muted-foreground">Thinking...</div>
              </div>
            )}
          </div>

          {user && (
            <form onSubmit={send} className="p-3 border-t border-border flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about SIPs, savings, budgets..."
                disabled={loading}
                maxLength={500}
              />
              <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </Card>
      )}
    </>
  );
};

export default ChatBot;