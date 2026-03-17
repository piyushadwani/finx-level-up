import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Target, Zap, Linkedin, Twitter, Github } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Piyush Adwani',
      role: 'CEO & Co-Founder',
      bio: 'Visionary leader driving FinX to make financial wellness fun for Gen Z.',
      image: '👨‍💼',
      socials: { linkedin: '#' }
    },
    {
      name: 'Apoorv Joshi',
      role: 'CFO & Co-Founder',
      bio: 'Financial strategist ensuring sustainable growth and smart money management.',
      image: '👨‍💻',
      socials: { linkedin: '#' }
    },
    {
      name: 'Aditya Gaikwad',
      role: 'MD & Co-Founder',
      bio: 'Operations expert building the backbone of the FinX platform.',
      image: '👨‍🎨',
      socials: { linkedin: '#' }
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Making financial wellness accessible and fun for everyone',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive network where users grow together',
      color: 'text-secondary'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in fintech and gamification',
      color: 'text-accent'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Understanding the real financial challenges faced by Gen Z',
      color: 'text-primary'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            About <span className="neon-text">FinX</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We're redefining the way Gen Z thinks about saving. It's not just about money, 
              it's about making <span className="text-primary font-semibold">financial wellness fun</span>.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="neon-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Traditional financial apps are boring, intimidating, and disconnected from how Gen Z actually lives. 
                We created FinX to bridge that gap by combining the engagement of gaming with the importance of financial health.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform transforms saving money from a chore into an adventure, making every dollar saved 
                feel like a victory and every financial goal an exciting quest to complete.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🎮 Gamification
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  💰 Financial Wellness
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🚀 Gen Z Focused
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🏆 Achievement System
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="game-card p-8 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <div className="text-6xl mb-6 animate-float">🎯</div>
                <h3 className="text-2xl font-bold mb-4 neon-text">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "To create a world where every young person feels empowered and excited 
                  about their financial future, turning savings goals into gaming achievements."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="neon-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="game-card text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-background/50 mb-4 animate-pulse-glow">
                      <Icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Meet the <span className="neon-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We're a diverse group of dreamers, builders, and financial advocates united by our passion 
            for making money management fun and accessible.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="game-card group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    {member.image}
                  </div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Want to Join Our <span className="neon-text">Mission</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to level up your finances or join our team, 
            we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero px-8 py-4 rounded-2xl font-bold">
              Start Saving Today
            </button>
            <button className="btn-secondary px-8 py-4 rounded-xl font-semibold">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;