import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Twitter, 
  Youtube, 
  Send,
  Clock,
  Users,
  Headphones
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully! 🚀",
        description: "We'll get back to you within 24 hours. Thanks for reaching out!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'General inquiries and support',
      contact: 'hello@finx.app',
      link: 'mailto:hello@finx.app',
      color: 'text-primary'
    },
    {
      icon: Headphones,
      title: 'Support Chat',
      description: '24/7 customer support',
      contact: 'Live Chat Available',
      link: '#',
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit our headquarters',
      contact: 'San Francisco, CA',
      link: '#',
      color: 'text-accent'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/finxapp', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/finxapp', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@finxapp', color: 'hover:text-red-400' },
    { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/finx', color: 'hover:text-indigo-400' },
  ];

  const faqs = [
    {
      question: 'How secure is my financial data?',
      answer: 'We use bank-level encryption and are FDIC insured. Your data is never shared without permission.'
    },
    {
      question: 'Is FinX really free to use?',
      answer: 'Yes! FinX is completely free to download and use. We make money through optional premium features.'
    },
    {
      question: 'How do the rewards actually work?',
      answer: 'Real cash bonuses are deposited directly into your FinX account. XP and badges unlock app features and challenges.'
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Get in <span className="neon-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about FinX? Want to join our community? We're here to help you 
            level up your financial journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/40"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/40 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-hero w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="game-card animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-background/50 ${method.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                          <a 
                            href={method.link} 
                            className={`text-sm font-medium ${method.color} hover:underline`}
                          >
                            {method.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <Card className="game-card">
              <CardHeader>
                <CardTitle className="text-lg">Follow Our Journey</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  Join our community on social media for tips, updates, and user stories.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 ${social.color} hover:scale-105`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="game-card bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h3 className="font-bold mb-2">Quick Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within <span className="text-primary font-semibold">2-4 hours</span> during business days
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Card key={faq.question} className="game-card animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-12">
          <Users className="h-12 w-12 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h3 className="text-3xl font-bold mb-4">
            Join the <span className="neon-text">FinX Community</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with thousands of users sharing their financial journeys, 
            tips, and celebrating their wins together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              Join Discord Community
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary">
              Follow on Social
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;