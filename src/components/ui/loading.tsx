import { Zap } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="relative">
        <Zap className="h-6 w-6 text-primary animate-pulse-glow" />
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
      </div>
      <span className="text-muted-foreground">Loading your financial journey...</span>
    </div>
  );
};

export default Loading;