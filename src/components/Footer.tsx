import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'App Demo', href: '/demo' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/finxapp' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/finxapp' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@finxapp' },
    { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/finx' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-primary animate-pulse-glow" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
              </div>
              <span className="font-gaming text-2xl font-bold neon-text">
                FinX
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We're redefining the way Gen Z thinks about saving. It's not just about money, 
              it's about making financial wellness fun.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get the App</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-105 border border-primary/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">📱</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Download on the</div>
                    <div className="font-semibold text-foreground">App Store</div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="block p-3 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-all duration-300 hover:scale-105 border border-secondary/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-sm">🤖</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="font-semibold text-foreground">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} FinX. All rights reserved.
          </div>
          <div className="text-center md:text-right">
            <p className="neon-text font-medium italic">
              "Empower your wallet, level up your future."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;