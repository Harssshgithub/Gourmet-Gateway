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
    <section id="experiences" className="py-24 lg:py-48 bg-background relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 border-t border-primary/30" />
            <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
              SIGNATURE SPACES
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em] leading-[1.0] max-w-2xl mb-6"
          >
            Curated Environments
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/70 font-light text-base md:text-lg max-w-xl"
          >
            Each space is designed to cultivate a distinct atmosphere, tailored to the emotion of your evening.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`group flex flex-col ${i === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-card border-b border-primary/20">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-background/10 transition-colors duration-[0.7s]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 tracking-[-0.02em]">{exp.title}</h3>
                <p className="text-foreground/70 font-light text-sm md:text-base leading-[1.6]">{exp.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}