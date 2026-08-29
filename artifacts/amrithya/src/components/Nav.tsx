import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { scrollToId } from "@/lib/scroll";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => scrollToId(id), 150);
      return;
    }
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
        scrolled ? "bg-background/95 border-b border-primary/15 py-4" : "bg-transparent py-6"
      }`}
    >
        <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Amrithya home"
          onClick={(event) => {
            if (location === "/") {
              event.preventDefault();
              scrollToId("top");
            }
          }}
          className="flex flex-col"
        >
          <span className="font-serif text-2xl lg:text-3xl tracking-wide text-foreground">
            Amrithya
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => link.id === "menu" ? (
            <Link
              key={link.id}
              href="/menu"
              data-testid="link-nav-menu"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
              className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </Link>
          ) : (
            <button
              key={link.id}
              type="button"
              data-testid={`button-nav-${link.id}`}
              onClick={() => handleNav(link.id)}
              className="text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("reserve")}
            className="group relative overflow-hidden text-[11px] uppercase tracking-[0.2em] text-background bg-primary px-8 py-3 rounded-[2px] font-medium transition-colors duration-500 hover:bg-primary/90"
          >
            <span className="relative z-10">Reserve</span>
          </button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation"
                data-testid="button-open-navigation"
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-primary/15 flex flex-col pt-24 px-10">
              <div className="flex flex-col gap-10">
                {navLinks.map((link) => link.id === "menu" ? (
                  <Link
                    key={link.id}
                    href="/menu"
                    data-testid="link-mobile-nav-menu"
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    }}
                    className="font-serif text-2xl tracking-wide text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    type="button"
                    data-testid={`button-mobile-nav-${link.id}`}
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