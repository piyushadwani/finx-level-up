import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Download, Apple, Smartphone, Star, Users, Trophy, Zap } from 'lucide-react';

const AppDemo = () => {
  const [activeDemo, setActiveDemo] = useState('challenge');

  const features = [
    {
      id: 'challenge',
      title: 'Savings Challenge',
      description: 'Complete daily and weekly savings challenges to earn XP and unlock rewards',
      preview: '🎯',
    },
    {
      id: 'dashboard',
      title: 'Gaming Dashboard',
      description: 'Track your financial level, XP progress, and achievements in one place',
      preview: '📊',
    },
    {
      id: 'rewards',
      title: 'Reward System',
      description: 'Spin the wheel, earn badges, and get real cash bonuses for hitting your goals',
      preview: '🎁',
    },
    {
      id: 'social',
      title: 'Social Features',
      description: 'Compete with friends on leaderboards and share your financial victories',
      preview: '👥',
    },
  ];

  const appStats = [
    { icon: Star, label: 'App Store Rating', value: '4.8/5', subtext: 'Based on 12,489 reviews' },
    { icon: Users, label: 'Active Users', value: '50K+', subtext: 'Growing daily' },
    { icon: Trophy, label: 'Goals Completed', value: '100K+', subtext: 'Dreams achieved' },
    { icon: Zap, label: 'Daily Engagement', value: '85%', subtext: 'Users return daily' },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      age: '22',
      review: 'Finally, a savings app that doesn\'t make me feel guilty! The gaming elements keep me motivated.',
      rating: 5,
      achievement: '🏆 Level 15 Saver'
    },
    {
      name: 'Marcus T.',
      age: '24',
      review: 'I\'ve saved more money in 3 months with FinX than I did in 2 years with traditional banks.',
      rating: 5,
      achievement: '🎯 Goal Crusher'
    },
    {
      name: 'Riley K.',
      age: '20',
      review: 'The leaderboard competition with my roommates made saving money actually fun and social.',
      rating: 5,
      achievement: '👑 Social Saver'
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            See <span className="neon-text">FinX</span> in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the future of financial wellness. Watch how FinX transforms 
            saving money into an engaging, rewarding journey.
          </p>
        </div>

        {/* Video Demo Section */}
        <div className="mb-20">
          <Card className="game-card max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-background/60" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4 animate-pulse-glow cursor-pointer hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Watch the FinX Demo</h3>
                  <p className="text-muted-foreground">See how easy it is to start your financial journey</p>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 animate-float">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    💰 +$50 saved
                  </Badge>
                </div>
                <div className="absolute top-16 right-8 animate-float" style={{animationDelay: '1s'}}>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    🏆 Level Up!
                  </Badge>
                </div>
                <div className="absolute bottom-8 left-1/4 animate-float" style={{animationDelay: '2s'}}>
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    ⚡ Streak: 7 days
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Interactive <span className="neon-text">App Preview</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature Navigation */}
            <div className="lg:col-span-1 space-y-4">
              {features.map((feature) => (
                <Card
                  key={feature.id}
                  className={`game-card cursor-pointer transition-all duration-300 ${
                    activeDemo === feature.id ? 'border-primary/50 bg-primary/5' : 'hover:border-primary/30'
                  }`}
                  onClick={() => setActiveDemo(feature.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{feature.preview}</div>
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mock Phone Interface */}
            <div className="lg:col-span-2">
              <div className="max-w-sm mx-auto">
                <div className="relative bg-background border-8 border-foreground/10 rounded-[3rem] p-4 shadow-2xl">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl" />
                  
                  {/* Screen content */}
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-[2rem] p-6 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-6">
                      <span>9:41 AM</span>
                      <span>FinX</span>
                      <span>🔋 100%</span>
                    </div>
                    
                    {/* Dynamic content based on active demo */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                      <div className="text-6xl mb-4 animate-bounce-in">
                        {features.find(f => f.id === activeDemo)?.preview}
                      </div>
                      <h3 className="font-bold text-xl mb-2 neon-text">
                        {features.find(f => f.id === activeDemo)?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6">
                        {features.find(f => f.id === activeDemo)?.description}
                      </p>
                      
                      {/* Mock UI elements */}
                      <div className="w-full space-y-3">
                        <div className="progress-bar">
                          <div className="progress-fill" style={{width: '75%'}} />
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Level 5</span>
                          <span>1,250 / 1,500 XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Stats */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by <span className="neon-text">Thousands</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="game-card text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 animate-pulse-glow">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <h3 className="font-semibold mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.subtext}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* User Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Users Are <span className="neon-text">Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="game-card animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">Age {testimonial.age}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.achievement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="neon-text">Download</span> FinX?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already leveling up their finances. 
            Available on iOS and Android.
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