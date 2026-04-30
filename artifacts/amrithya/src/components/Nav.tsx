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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => scrollToId("top")}>
          <span className="text-xs tracking-[0.2em] text-primary font-medium uppercase">
            The Eternal Dining
          </span>
          <span className="font-serif text-2xl lg:text-3xl font-medium tracking-wide">
            AMRITHYA
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("reserve")}
            className="text-sm uppercase tracking-widest text-background bg-primary px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-colors"
          >
            Reserve
          </button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-foreground hover:text-primary transition-colors p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-border flex flex-col pt-20 px-10">
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    className="text-xl uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav("reserve")}
                  className="text-xl uppercase tracking-widest text-background bg-primary px-6 py-4 rounded-sm hover:bg-primary/90 transition-colors text-center mt-8"
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