import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToId } from "@/lib/scroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 100);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experiences", id: "experiences" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "Events", id: "events" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-primary/15 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => scrollToId("top")}>
          <span className="text-[10px] tracking-[0.25em] text-primary font-medium uppercase mb-0.5">
            The Eternal Dining
          </span>
          <span className="font-serif text-2xl lg:text-3xl tracking-wide text-foreground">
            Amrithya
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-[11px] uppercase tracking-[0.2em] text-foreground/75 hover:text-primary transition-colors duration-500"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("reserve")}
            className="group relative overflow-hidden text-[11px] uppercase tracking-[0.2em] text-background bg-primary px-8 py-3 rounded-sm font-medium transition-colors duration-500"
          >
            <span className="relative z-10">Reserve</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.2s_ease-out]" />
          </button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-foreground hover:text-primary transition-colors p-2">
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-primary/15 flex flex-col pt-24 px-10">
              <div className="flex flex-col gap-10">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="font-serif text-2xl tracking-wide text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav("reserve")}
                  className="mt-8 text-[11px] uppercase tracking-[0.2em] text-background bg-primary px-6 py-4 rounded-sm font-medium transition-colors text-center"
                >
                  Reserve a Table
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}