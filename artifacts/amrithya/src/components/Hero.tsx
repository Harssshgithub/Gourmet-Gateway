import { motion } from "framer-motion";
import { scrollToId } from "@/lib/scroll";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="top" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImg}
          alt="Amrithya Dining Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary tracking-[0.3em] text-xs md:text-sm font-medium uppercase mb-6"
        >
          Premium Dining · Dehradun
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6"
        >
          Amrithya — <br />
          <span className="text-primary italic font-light">The Eternal</span> Dining
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-foreground/70 text-lg md:text-xl font-light mb-12 max-w-2xl"
        >
          A premium dining experience crafted around ambience, taste, and timeless moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => scrollToId("reserve")}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-background uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-all"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollToId("menu")}
            className="w-full sm:w-auto px-8 py-4 border border-border/50 text-foreground uppercase tracking-widest text-sm font-medium hover:border-primary hover:text-primary transition-all"
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollToId("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}