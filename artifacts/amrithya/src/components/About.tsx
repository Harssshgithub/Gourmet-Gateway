import { motion } from "framer-motion";
import aboutImg from "@/assets/about.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4">
              The Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Where moments become memories
            </h2>
            <div className="space-y-6 text-foreground/70 font-light leading-relaxed text-lg">
              <p>
                Nestled on Rajpur Road, Amrithya is more than a restaurant—it is a sanctuary of taste and atmosphere. Designed for those who seek the extraordinary, our dining spaces blend intimate warmth with architectural grandeur.
              </p>
              <p>
                From private candle-lit dome dining to tables set over still water mirrors, every detail is orchestrated to elevate your evening. Whether you are celebrating life's grandest milestones or sharing a quiet dinner for two, Amrithya offers an environment as refined as its cuisine.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-primary/20 rounded-sm translate-x-2 translate-y-2 z-0"></div>
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Intimate dining experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}