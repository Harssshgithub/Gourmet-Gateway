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
    <section id="experiences" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
            Signature Spaces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Curated Environments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-sm cursor-pointer aspect-square ${
                i === 3 || i === 4 ? "lg:aspect-[3/2] lg:col-span-1" : ""
              }`}
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-500 group-hover:bg-background/80" />
              
              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/0 transition-colors duration-500 group-hover:border-primary/80" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/0 transition-colors duration-500 group-hover:border-primary/80" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-foreground mb-2">{exp.title}</h3>
                <p className="text-foreground/70 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}