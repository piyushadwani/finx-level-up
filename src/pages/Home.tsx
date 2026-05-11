import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import heroImage from '@/assets/hero-finx.jpg';

const Home = () => {
  const { user } = useAuth();
  const ctaTo = user ? '/dashboard' : '/auth';

  const benefits = [
    {
      title: 'Gamified Experience',
      description: 'Turn saving into a fun game with XP, levels, and rewards',
      icon: '🎮',
    },
    {
      title: 'Smart Goals',
      description: 'AI-powered savings suggestions based on your spending habits',
      icon: '🧠',
    },
    {
      title: 'Social Features',
      description: 'Compete with friends and share your financial achievements',
      icon: '👥',
    },
    {
      title: 'Real Rewards',
      description: 'Earn actual money bonuses and unlock premium features',
      icon: '💰',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="FinX Gamified Savings Platform"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '2s'}} />
          <div className="absolute top-60 right-1/3 w-5 h-5 bg-primary rounded-full animate-float opacity-30" style={{animationDelay: '0.5s'}} />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce-in">
            <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-6">
              <span className="neon-text">Save Smart.</span>
              <br />
              <span className="neon-text">Play Hard.</span>
              <br />
              <span className="neon-text">Level Up</span>{' '}
              <span className="text-foreground">Your Finances.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              The first gamified savings platform designed for Gen Z. 
              Turn your financial goals into an epic adventure with XP, badges, and real rewards.
            </p>

            {/* Progress Bar Demo */}
            <div className="mb-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Savings Progress</span>
                <span>₹750 / ₹1,000</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>🏆 Level 3 Saver</span>
                <span>+50 XP to next level</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-hero group" asChild>
                <Link to={ctaTo}>
                  {user ? 'Go to Dashboard' : 'Start Saving Now'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary" asChild>
                <Link to="/demo">View Demo</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>FDIC insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Why <span className="neon-text">FinX</span> is Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've reimagined personal finance for the digital generation. 
              Here's what makes us special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="game-card group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="neon-text">Level Up</span> Your Money Game?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Gen Z users who are already crushing their financial goals with FinX.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero group" asChild>
              <Link to={ctaTo}>
                {user ? 'Open Dashboard' : 'Get Started Free'}
                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary" asChild>
              <Link to="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;