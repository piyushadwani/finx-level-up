import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold neon-text mb-4 animate-bounce-in">404</div>
        <h1 className="text-3xl font-bold mb-4">Oops! Page not found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like this page got lost in the financial universe. 
          Let's get you back to saving money and earning XP!
        </p>
        <div className="space-y-4">
          <Link to="/" className="btn-hero inline-block px-8 py-3 rounded-xl font-semibold">
            Return to Home
          </Link>
          <div className="text-sm text-muted-foreground">
            Or explore our{' '}
            <Link to="/features" className="text-primary hover:underline">features</Link>,{' '}
            <Link to="/about" className="text-primary hover:underline">about us</Link>, or{' '}
            <Link to="/contact" className="text-primary hover:underline">get in touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
