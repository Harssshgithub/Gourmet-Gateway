import { motion } from "framer-motion";
import aboutImg from "@/assets/about.png";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-48 bg-background relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-5 lg:col-start-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 border-t border-primary/30" />
              <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
                THE EXPERIENCE
              </span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.0] tracking-[-0.02em]">
              Where moments <br/>become memories
            </h2>
            
            <div className="space-y-5 text-foreground/70 font-light leading-[1.7] text-base md:text-lg max-w-xl">
              <p>
                Nestled on Rajpur Road, Amrithya is more than a restaurant—it is a sanctuary of taste and atmosphere. Designed for those who seek the extraordinary, our dining spaces blend intimate warmth with architectural grandeur.
              </p>
              <p>
                From private candle-lit dome dining to tables set over still water mirrors, every detail is orchestrated to elevate your evening.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] border border-primary/20 bg-card">
              <img
                src={aboutImg}
                alt="Intimate dining experience"
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}