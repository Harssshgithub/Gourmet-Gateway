import { scrollToId } from "@/lib/scroll";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/15 pt-24 lg:pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="flex flex-col md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 border-t border-primary/30" />
              <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
                THE ETERNAL DINING
              </span>
            </div>
            <span className="font-serif text-4xl text-foreground mb-6 tracking-[-0.02em]">Amrithya</span>
            <p className="text-foreground/70 font-light text-base max-w-sm leading-[1.7]">
              A luxury dining destination in Dehradun, crafting timeless moments through exceptional culinary artistry and immersive ambience.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:col-span-3 lg:col-span-3 lg:col-start-7">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 border-t border-primary/30" />
              <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
                EXPLORE
              </span>
            </div>
            {["About", "Experiences", "Menu", "Gallery", "Events"].map(link => (
              <button 
                key={link}
                onClick={() => scrollToId(link.toLowerCase())}
                className="text-foreground/70 hover:text-foreground transition-colors duration-[0.7s] text-left text-[11px] uppercase tracking-[0.2em] w-max font-medium"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 md:col-span-3 lg:col-span-3">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 border-t border-primary/30" />
              <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
                CONNECT
              </span>
            </div>
            <div className="flex items-center gap-6 mb-4">
              <a href="https://instagram.com/amrithya" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors duration-[0.7s]"><Instagram className="w-4 h-4" strokeWidth={1.5} /></a>
            </div>
            <p className="text-foreground/70 font-light text-sm leading-[1.7]">
              Rajpur Road, Dehradun<br/>
              +91 99999 99999
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary/60 text-[10px] tracking-[0.2em] uppercase font-medium">
            &copy; 2026 Amrithya. All rights reserved.
          </p>
          <p className="text-primary/60 text-[11px] tracking-[0.1em] font-serif italic">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}