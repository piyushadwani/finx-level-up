import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Apple, Smartphone, Star, Users, Trophy, Zap, Flame, Gift, Plus, Check } from 'lucide-react';

const EXPENSE_CATEGORIES = [
  { emoji: '🍔', label: 'Food' },
  { emoji: '🚗', label: 'Transport' },
  { emoji: '🛒', label: 'Shopping' },
  { emoji: '🎬', label: 'Entertainment' },
  { emoji: '💡', label: 'Bills' },
  { emoji: '☕', label: 'Coffee' },
];

const FRIENDS_STREAKS = [
  { name: 'Arjun K.', avatar: '🧑‍💻', streak: 142, status: 'online', lastLogged: '2 min ago' },
  { name: 'Priya S.', avatar: '👩‍🎨', streak: 98, status: 'online', lastLogged: '15 min ago' },
  { name: 'Rohan M.', avatar: '🧑‍🎤', streak: 203, status: 'offline', lastLogged: '1 hr ago' },
  { name: 'Sneha D.', avatar: '👩‍🚀', streak: 67, status: 'online', lastLogged: '5 min ago' },
  { name: 'Karan P.', avatar: '🧑‍🏫', streak: 301, status: 'online', lastLogged: 'Just now' },
];

const MILESTONE_REWARDS = [
  { day: 100, reward: '🎟️ ₹500 Amazon Voucher', unlocked: true },
  { day: 200, reward: '🎫 ₹1000 Swiggy Coupon', unlocked: true },
  { day: 300, reward: '🏆 ₹2000 Flipkart Voucher', unlocked: true },
  { day: 400, reward: '💎 Premium Membership (1 Month)', unlocked: false },
  { day: 500, reward: '🚀 ₹5000 Cash Reward', unlocked: false },
];

const AppDemo = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expenses, setExpenses] = useState<{ amount: string; category: string; emoji: string; time: string }[]>([]);
  const [logged, setLogged] = useState(false);
  const userStreak = 142;

  const handleLogExpense = () => {
    if (!expenseAmount || !selectedCategory) return;
    const cat = EXPENSE_CATEGORIES.find(c => c.label === selectedCategory);
    setExpenses(prev => [{ amount: expenseAmount, category: selectedCategory, emoji: cat?.emoji || '💸', time: 'Just now' }, ...prev]);
    setExpenseAmount('');
    setSelectedCategory(null);
    setLogged(true);
    setTimeout(() => setLogged(false), 2000);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            See <span className="neon-text">FinX</span> in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Log your daily expenses, build savings streaks with friends like Snapchat, 
            and unlock real rewards at every 100-day milestone.
          </p>
        </div>

        {/* Main Demo: Phone Mockup + Streaks */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Phone Mockup - Expense Logger */}
          <div className="flex justify-center">
            <div className="relative w-[340px]">
              <div className="bg-background border-[6px] border-foreground/10 rounded-[3rem] p-3 shadow-2xl" style={{ boxShadow: 'var(--shadow-neon)' }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-foreground/10 rounded-b-2xl z-10" />
                
                <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-[2.2rem] overflow-hidden min-h-[600px] flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground px-6 pt-4 pb-2">
                    <span>9:41 AM</span>
                    <span className="font-bold text-primary text-xs">FinX</span>
                    <span>🔋 100%</span>
                  </div>

                  {/* Streak Banner */}
                  <div className="mx-4 mb-3 p-3 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/20 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Flame className="h-5 w-5 text-accent" />
                      <span className="text-2xl font-bold text-accent">{userStreak}</span>
                      <span className="text-sm text-muted-foreground">day streak!</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground">58 days to your next ₹2000 reward 🎁</p>
                  </div>

                  {/* Expense Input */}
                  <div className="px-4 mb-3">
                    <p className="text-xs font-semibold mb-2 text-foreground">Log Today's Expense</p>
                    <div className="flex gap-2 mb-3">
                      <Input
                        type="number"
                        placeholder="₹ Amount"
                        value={expenseAmount}
                        onChange={(e) => setExpenseAmount(e.target.value)}
                        className="bg-muted/50 border-border text-sm h-9 rounded-xl"
                      />
                      <Button
                        size="sm"
                        className="rounded-xl bg-primary text-primary-foreground h-9 px-3"
                        onClick={handleLogExpense}
                        disabled={!expenseAmount || !selectedCategory}
                      >
                        {logged ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </Button>
                    </div>
                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {EXPENSE_CATEGORIES.map(cat => (
                        <button
                          key={cat.label}
                          onClick={() => setSelectedCategory(cat.label)}
                          className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                            selectedCategory === cat.label
                              ? 'bg-primary/20 border-primary/50 text-primary'
                              : 'bg-muted/30 border-border text-muted-foreground hover:border-primary/30'
                          }`}
                        >
                          {cat.emoji} {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Today's Expenses */}
                  <div className="px-4 flex-1 overflow-auto">
                    <p className="text-xs font-semibold mb-2 text-foreground">Today's Log</p>
                    <div className="space-y-1.5">
                      {expenses.length === 0 && (
                        <p className="text-[11px] text-muted-foreground text-center py-4">
                          No expenses yet. Start logging! ✨
                        </p>
                      )}
                      {expenses.map((exp, i) => (
                        <div key={i} className="flex items-center justify-between bg-muted/30 rounded-xl px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{exp.emoji}</span>
                            <div>
                              <p className="text-xs font-medium text-foreground">{exp.category}</p>
                              <p className="text-[10px] text-muted-foreground">{exp.time}</p>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-destructive">-₹{exp.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex justify-around items-center py-3 border-t border-border mt-2 text-muted-foreground">
                    <span className="text-lg">🏠</span>
                    <span className="text-lg">📊</span>
                    <span className="text-lg opacity-100 scale-125">➕</span>
                    <span className="text-lg">🔥</span>
                    <span className="text-lg">👤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Streaks Panel - Snapchat Style */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                <Flame className="inline h-8 w-8 text-accent mr-2" />
                Savings <span className="neon-text">Streaks</span>
              </h2>
              <p className="text-muted-foreground">
                Log expenses daily to keep your streak alive. Compete with friends just like Snapchat streaks!
              </p>
            </div>

            {/* Friends Streaks List */}
            <div className="space-y-3">
              {FRIENDS_STREAKS.map((friend, i) => (
                <Card key={friend.name} className="game-card animate-bounce-in" style={{ animationDelay: `${i * 0.08}s` }}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <span className="text-3xl">{friend.avatar}</span>
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${
                            friend.status === 'online' ? 'bg-accent' : 'bg-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{friend.name}</h4>
                          <p className="text-xs text-muted-foreground">Logged {friend.lastLogged}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flame className={`h-5 w-5 ${friend.streak >= 200 ? 'text-destructive' : friend.streak >= 100 ? 'text-accent' : 'text-primary'}`} />
                        <span className={`text-xl font-bold ${friend.streak >= 200 ? 'text-destructive' : friend.streak >= 100 ? 'text-accent' : 'text-primary'}`}>
                          {friend.streak}
                        </span>
                        {friend.streak >= 300 && <span className="text-sm">👑</span>}
                      </div>
                    </div>
                    {/* Streak progress to next 100 */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                        <span>Day {friend.streak}</span>
                        <span>Next reward: Day {Math.ceil((friend.streak + 1) / 100) * 100}</span>
                      </div>
                      <div className="progress-bar h-1.5">
                        <div
                          className="progress-fill"
                          style={{ width: `${(friend.streak % 100)}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Rewards Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Gift className="inline h-8 w-8 text-primary mr-2" />
            Milestone <span className="neon-text">Rewards</span>
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Hit every 100-day streak and unlock real rewards — vouchers, coupons, 
            premium perks, and cash prizes. The longer you save, the bigger the reward!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {MILESTONE_REWARDS.map((milestone, i) => (
              <Card
                key={milestone.day}
                className={`game-card text-center animate-bounce-in transition-all ${
                  milestone.unlocked
                    ? 'border-accent/40 bg-accent/5'
                    : 'border-border opacity-70'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-5">
                  <div className={`text-3xl font-bold mb-2 ${milestone.unlocked ? 'text-accent' : 'text-muted-foreground'}`}>
                    {milestone.day}
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Day Streak</p>
                  <div className="text-2xl mb-2">{milestone.reward.split(' ')[0]}</div>
                  <p className="text-xs text-foreground font-medium">{milestone.reward.substring(milestone.reward.indexOf(' ') + 1)}</p>
                  {milestone.unlocked ? (
                    <Badge className="mt-3 bg-accent/20 text-accent border-accent/30 text-[10px]">
                      ✅ Unlocked
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="mt-3 text-[10px]">
                      🔒 Locked
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            How <span className="neon-text">Streaks</span> Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '📝', title: 'Log Daily Expenses', desc: 'Add every expense to keep your streak alive. Miss a day and it resets!' },
              { icon: '🔥', title: 'Build Streaks With Friends', desc: 'Both you and your friend must log daily to maintain the mutual streak — just like Snapchat.' },
              { icon: '🎁', title: 'Earn Rewards at 100 Days', desc: 'Every 100-day milestone unlocks real vouchers, coupons, and cash rewards.' },
            ].map((step, i) => (
              <Card key={step.title} className="game-card text-center animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* App Stats */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, label: 'App Store Rating', value: '4.8/5', subtext: '12,489 reviews' },
              { icon: Users, label: 'Active Users', value: '50K+', subtext: 'Growing daily' },
              { icon: Trophy, label: 'Rewards Claimed', value: '25K+', subtext: 'Vouchers & coupons' },
              { icon: Zap, label: 'Daily Engagement', value: '85%', subtext: 'Users log daily' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="game-card text-center animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 animate-pulse-glow">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.subtext}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="neon-text">Streak</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download FinX, log your first expense, and start building streaks with friends today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="btn-hero group min-w-[200px]">
              <Apple className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" className="btn-secondary group min-w-[200px]">
              <Smartphone className="mr-2 h-5 w-5" />
              Get on Android
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Free to download</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No ads</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>Secure & encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
