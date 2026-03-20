import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-bold text-lg">GigGuard</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#" className="hover:text-foreground transition-colors">Features</a>
        <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
      </div>
      <Button size="sm">Get Started</Button>
    </div>
  </nav>
);

export default Navbar;
