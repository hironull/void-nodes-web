import { Button } from "@/components/ui/button";
import { ExternalLink, Home, CreditCard, Gift, Info, FileText, HelpCircle } from "lucide-react";
import logoImg from "@/assets/logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "plans", label: "Paid Plans" },
    { id: "free", label: "Free VPS" },
    { id: "about", label: "About" },
    { id: "legal", label: "Legal" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass rounded-b-3xl mx-4 mt-2">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src={logoImg} 
                alt="Void Nodes Logo" 
                className="w-8 h-8 rounded-lg animate-float"
              />
              <span className="quirky-font text-xl text-primary">VOID NODES</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-xl transition-all hover:text-foreground hover:bg-secondary/50 text-muted-foreground hover-glow"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://voidhost.pro/docs", "_blank")}
                className="rounded-xl"
              >
                <ExternalLink size={16} className="mr-2" />
                Docs
              </Button>
              <Button 
                size="sm"
                onClick={() => window.open("https://discord.gg/vdx", "_blank")}
                className="rounded-xl"
              >
                Try Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-card rounded-t-3xl mx-4 mb-2 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoImg} 
                  alt="Void Nodes Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="quirky-font text-lg text-primary">VOID NODES</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Next-generation VPS hosting platform offering unbeatable performance and pricing.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Hosting</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('plans')} className="hover:text-foreground cursor-pointer">Paid VPS Plans</button></li>
                <li><button onClick={() => scrollToSection('free')} className="hover:text-foreground cursor-pointer">Free VPS Rewards</button></li>
                <li><a href="#" className="hover:text-foreground">Game Hosting</a></li>
                <li><a href="#" className="hover:text-foreground">Bot Hosting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-foreground cursor-pointer">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-foreground cursor-pointer">Contact</button></li>
                <li><button onClick={() => scrollToSection('legal')} className="hover:text-foreground cursor-pointer">Legal</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <Button 
                onClick={() => window.open("https://discord.gg/vdx", "_blank")}
                className="w-full rounded-xl hover-glow"
              >
                Join Discord
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 VoidNodes. All rights reserved. • Made with ❤️ for the community
          </div>
        </div>
      </footer>
    </div>
  );
}