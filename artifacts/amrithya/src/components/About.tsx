import { motion } from "framer-motion";
import aboutImg from "@/assets/about.png";

export function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-background relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-5 lg:col-start-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
                THE EXPERIENCE
              </span>
              <div className="flex-1 border-t border-primary/15" />
            </div>
            
            <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05] tracking-[-0.02em]">
              Where moments <br/>become memories
            </h2>
            
            <div className="space-y-6 text-foreground/75 font-light leading-[1.7] text-[17px]">
              <p>
                Nestled on Rajpur Road, Amrithya is more than a restaurant—it is a sanctuary of taste and atmosphere. Designed for those who seek the extraordinary, our dining spaces blend intimate warmth with architectural grandeur.
              </p>
              <p>
                From private candle-lit dome dining to tables set over still water mirrors, every detail is orchestrated to elevate your evening. Whether you are celebrating life's grandest milestones or sharing a quiet dinner for two, Amrithya offers an environment as refined as its cuisine.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-8 border-t border-primary/15" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary">EST. DEHRADUN</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0"
          >
            {/* Offset Frame */}
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4" />
            
            {/* Main Image Frame */}
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