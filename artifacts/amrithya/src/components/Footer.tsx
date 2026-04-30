import { scrollToId } from "@/lib/scroll";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/15 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary tracking-[0.25em] text-[10px] uppercase font-medium">
                THE ETERNAL DINING
              </span>
              <div className="flex-1 border-t border-primary/15" />
            </div>
            <span className="font-serif text-4xl text-foreground mb-6 tracking-[-0.02em]">Amrithya</span>
            <p className="text-foreground/60 font-light text-sm max-w-xs leading-[1.7]">
              A luxury dining destination in Dehradun, crafting timeless moments through exceptional culinary artistry and immersive ambience.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-primary tracking-[0.25em] text-[10px] uppercase font-medium">
                EXPLORE
              </span>
              <div className="flex-1 border-t border-primary/15" />
            </div>
            {["About", "Experiences", "Menu", "Gallery", "Events"].map(link => (
              <button 
                key={link}
                onClick={() => scrollToId(link.toLowerCase())}
                className="text-foreground/60 hover:text-primary transition-colors text-left text-[13px] uppercase tracking-[0.1em] w-max font-light"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-primary tracking-[0.25em] text-[10px] uppercase font-medium">
                CONNECT
              </span>
              <div className="flex-1 border-t border-primary/15" />
            </div>
            <div className="flex items-center gap-6 mb-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300"><Facebook className="w-4 h-4" /></a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors duration-300"><MessageCircle className="w-4 h-4" /></a>
            </div>
            <p className="text-foreground/60 font-light text-[13px] leading-[1.7]">
              Rajpur Road, Dehradun<br/>
              +91 99999 99999
            </p>
          </div>
        </div>

        <div className="border-t border-primary/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary/50 text-[10px] tracking-[0.2em] uppercase font-light">
            &copy; 2026 Amrithya. All rights reserved.
          </p>
          <p className="text-primary/50 text-[11px] tracking-[0.1em] font-serif italic">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}