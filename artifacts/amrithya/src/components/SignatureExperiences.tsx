import { motion } from "framer-motion";
import expDome from "@/assets/exp-dome.png";
import expWater from "@/assets/exp-water.png";
import expRomantic from "@/assets/exp-romantic.png";
import expFamily from "@/assets/exp-family.png";
import expCelebration from "@/assets/exp-celebration.png";

const experiences = [
  {
    id: "dome",
    title: "Dome Dining",
    desc: "Private geodesic domes under the stars.",
    img: expDome,
  },
  {
    id: "water",
    title: "Water-side Ambience",
    desc: "Tables set over a serene, candle-lit reflecting pool.",
    img: expWater,
  },
  {
    id: "romantic",
    title: "Romantic Dinner",
    desc: "Intimate seating designed for deep conversations.",
    img: expRomantic,
  },
  {
    id: "family",
    title: "Family Dining",
    desc: "Spacious luxury for your closest gatherings.",
    img: expFamily,
  },
  {
    id: "celebration",
    title: "Event Celebrations",
    desc: "Curated moments for anniversaries and birthdays.",
    img: expCelebration,
  },
];

export function SignatureExperiences() {
  return (
    <section id="experiences" className="py-32 md:py-40 bg-background relative border-t border-primary/15">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 border-t border-primary/15" />
            <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
              SIGNATURE SPACES
            </span>
            <div className="w-8 border-t border-primary/15" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl lg:text-6xl text-foreground tracking-[-0.02em] leading-[1.05] max-w-2xl"
          >
            Curated Environments
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/60 font-light mt-6 max-w-xl"
          >
            Each space is designed to cultivate a distinct atmosphere, tailored to the emotion of your evening.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Feature Card - Left 8 columns */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer md:col-span-8 flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-card border border-primary/15">
              <motion.img
                src={experiences[0].img}
                alt={experiences[0].title}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-[1.2s]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/20 w-10 group-hover:w-full transition-all duration-[1.2s] ease-out" />
            </div>
            <div className="flex flex-col group-hover:-translate-y-1 transition-transform duration-[1.2s] ease-out">
              <span className="text-[10px] tracking-[0.25em] text-primary uppercase mb-3">01 / EXPERIENCE</span>
              <h3 className="font-serif text-3xl text-foreground mb-2">{experiences[0].title}</h3>
              <p className="text-foreground/70 font-light text-[15px]">{experiences[0].desc}</p>
            </div>
          </motion.div>

          {/* Stacked Cards - Right 4 columns */}
          <div className="md:col-span-4 flex flex-col gap-12">
            {[experiences[1], experiences[2]].map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, delay: 0.2 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-card border border-primary/15">
                  <motion.img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-[1.2s]" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/20 w-10 group-hover:w-full transition-all duration-[1.2s] ease-out" />
                </div>
                <div className="flex flex-col group-hover:-translate-y-1 transition-transform duration-[1.2s] ease-out">
                  <span className="text-[10px] tracking-[0.25em] text-primary uppercase mb-3">0{i+2} / EXPERIENCE</span>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{exp.title}</h3>
                  <p className="text-foreground/70 font-light text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom row - 2 columns */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
            {[experiences[3], experiences[4]].map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.9, delay: 0.1 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-card border border-primary/15">
                  <motion.img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-[1.2s]" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary/20 w-10 group-hover:w-full transition-all duration-[1.2s] ease-out" />
                </div>
                <div className="flex flex-col group-hover:-translate-y-1 transition-transform duration-[1.2s] ease-out">
                  <span className="text-[10px] tracking-[0.25em] text-primary uppercase mb-3">0{i+4} / EXPERIENCE</span>
                  <h3 className="font-serif text-2xl text-foreground mb-2">{exp.title}</h3>
                  <p className="text-foreground/70 font-light text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}