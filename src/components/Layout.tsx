import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ChatBot from './ChatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;