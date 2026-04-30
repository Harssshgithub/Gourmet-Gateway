import { scrollToId } from "@/lib/scroll";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col">
            <span className="font-serif text-3xl text-foreground mb-2">AMRITHYA</span>
            <span className="text-primary tracking-[0.2em] text-[10px] uppercase mb-6">The Eternal Dining</span>
            <p className="text-foreground/60 font-light text-sm max-w-xs">
              A luxury dining destination in Dehradun, crafting timeless moments through exceptional culinary artistry and immersive ambience.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground uppercase tracking-widest text-xs font-medium mb-2">Explore</h4>
            {["About", "Experiences", "Menu", "Gallery", "Events"].map(link => (
              <button 
                key={link}
                onClick={() => scrollToId(link.toLowerCase())}
                className="text-foreground/60 hover:text-primary transition-colors text-left text-sm w-max"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground uppercase tracking-widest text-xs font-medium mb-2">Connect</h4>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /></a>
            </div>
            <p className="text-foreground/60 font-light text-sm">
              Rajpur Road, Dehradun<br/>
              +91 99999 99999
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-xs tracking-wide">
            &copy; 2026 Amrithya. All rights reserved.
          </p>
          <p className="text-foreground/40 text-xs tracking-wide italic font-serif">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}