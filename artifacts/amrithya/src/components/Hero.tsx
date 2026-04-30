import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToId } from "@/lib/scroll";
import heroImg from "@/assets/hero.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 80]);

  return (
    <section id="top" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[110%] -top-[5%]">
        <motion.img
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src={heroImg}
          alt="Amrithya Dining Room"
          className="w-full h-full object-cover origin-center"
        />
        {/* Carefully tuned dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-10 border-t border-primary/20" />
          <span className="text-primary tracking-[0.25em] text-[11px] font-medium uppercase">
            PREMIUM DINING — DEHRADUN
          </span>
          <div className="w-10 border-t border-primary/20" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl md:text-8xl text-foreground leading-[0.95] tracking-[-0.02em] mb-8"
        >
          Amrithya<br />
          <span className="text-foreground/80 text-4xl md:text-6xl mt-4 inline-block">— <span className="text-primary italic font-light">The Eternal</span> Dining</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-foreground/60 text-lg font-light mb-12 max-w-xl leading-[1.7]"
        >
          Where ambience, flavour, and timeless moments come together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={() => scrollToId("reserve")}
            className="w-full sm:w-auto px-10 py-4 bg-primary text-background uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-primary/90 transition-colors duration-500"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => scrollToId("menu")}
            className="w-full sm:w-auto px-10 py-4 border border-primary/20 text-foreground uppercase tracking-[0.2em] text-[11px] font-medium hover:border-primary hover:text-primary transition-colors duration-500"
          >
            Explore Menu
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={() => scrollToId("about")}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/40 group-hover:text-primary transition-colors duration-500">Scroll</span>
        <div className="w-[1px] h-12 bg-primary/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/3 bg-primary absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}