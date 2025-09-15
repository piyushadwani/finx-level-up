import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  RotateCcw, 
  Flame, 
  Crown, 
  Lock, 
  UserPlus, 
  Smile,
  Coins,
  Target,
  Zap
} from 'lucide-react';
import featuresImage from '@/assets/features-grid.jpg';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Gamified Saving Challenges',
      description: 'Set personalized savings goals and unlock achievement badges as you progress. Earn XP points for every dollar saved and level up your financial status.',
      icon: Trophy,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      details: [
        'Weekly & monthly challenges',
        'Custom goal setting',
        'Achievement badges system',
        'XP rewards for milestones',
        'Progress tracking dashboard'
      ],
      comingSoon: false
    },
    {
      id: 2,
      title: 'Daily Spin Wheel Rewards',
      description: 'Spin the wheel every day to earn random bonuses, cashback rewards, or bonus XP points. The more you save, the better your rewards become.',
      icon: RotateCcw,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      details: [
        'Daily spin opportunities',
        'Random cashback rewards',
        'Bonus XP multipliers',
        'Special discount codes',
        'Premium feature unlocks'
      ],
      comingSoon: false
    },
    {
      id: 3,
      title: 'Streak System',
      description: 'Build daily savings habits with our streak system. Maintain consecutive days of saving to unlock streak multipliers and exclusive rewards.',
      icon: Flame,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      details: [
        'Daily saving streaks',
        'Streak multiplier bonuses',
        'Habit building tools',
        'Streak recovery options',
        'Special streak achievements'
      ],
      comingSoon: false
    },
    {
      id: 4,
      title: 'Leaderboard Competition',
      description: 'Compete with friends and other users on monthly leaderboards. Climb the ranks by consistently saving and completing challenges.',
      icon: Crown,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      details: [
        'Monthly leaderboards',
        'Friend competitions',
        'Global rankings',
        'Seasonal tournaments',
        'Winner rewards & recognition'
      ],
      comingSoon: false
    },
    {
      id: 5,
      title: 'Goal Vaults',
      description: 'Lock your money into short-term or long-term saving goals. Choose from flexible or locked vaults with different interest rates and withdrawal options.',
      icon: Lock,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      details: [
        'Flexible & locked vault options',
        'Competitive interest rates',
        'Goal-specific savings',
        'Auto-save features',
        'Early withdrawal penalties'
      ],
      comingSoon: false
    },
    {
      id: 6,
      title: 'Referral Rewards',
      description: 'Invite friends to join FinX and earn boosters, bonus XP, and cash rewards. Build your network and grow your savings together.',
      icon: UserPlus,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      details: [
        'Friend referral bonuses',
        'XP boost multipliers',
        'Cash reward system',
        'Team challenges',
        'Social savings network'
      ],
      comingSoon: false
    },
    {
      id: 7,
      title: 'Mood-Based Saving',
      description: 'Save money based on your current mood using our interactive emoji slider. Happy? Save more! Stressed? Save a comfort amount.',
      icon: Smile,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      details: [
        'Emoji mood tracker',
        'Mood-based saving amounts',
        'Emotional spending alerts',
        'Wellness integration',
        'Personalized recommendations'
      ],
      comingSoon: true
    }
  ];

  const additionalFeatures = [
    {
      icon: Coins,
      title: 'Round-Up Savings',
      description: 'Automatically round up purchases and save the spare change'
    },
    {
      icon: Target,
      title: 'Smart Budgeting',
      description: 'AI-powered budget recommendations based on your spending'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Real-time alerts for savings milestones and achievements'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Game-Changing <span className="neon-text">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how FinX transforms boring financial management into an engaging, 
            rewarding experience that motivates you to save more and spend smarter.
          </p>
          
          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <img
              src={featuresImage}
              alt="FinX Gaming Features Overview"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Main Features */}
        <div className="grid gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.id} 
                className={`game-card animate-bounce-in ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex items-center`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="lg:w-1/2 lg:pr-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl ${feature.bgColor} animate-pulse-glow`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold flex items-center gap-3">
                        {feature.title}
                        {feature.comingSoon && (
                          <Badge variant="secondary" className="text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                
                <CardContent className="lg:w-1/2 p-6">
                  <div className={`aspect-square rounded-2xl ${feature.bgColor} flex items-center justify-center relative overflow-hidden`}>
                    <Icon className={`h-24 w-24 ${feature.color} animate-float`} />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Plus Many More <span className="neon-text">Smart Features</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="game-card text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 animate-pulse-glow">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience These <span className="neon-text">Features</span>?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already leveling up their finances with FinX's gamified approach to saving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero px-8 py-4 rounded-2xl font-bold">
              Start Your Journey
            </button>
            <button className="btn-secondary px-8 py-4 rounded-xl font-semibold">
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;