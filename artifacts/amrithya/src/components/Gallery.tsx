import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
// Reusing some generated images for gallery grid
import g3 from "@/assets/events.png";
import g4 from "@/assets/about.png";
import g5 from "@/assets/hero.png";
import g6 from "@/assets/exp-dome.png";

const images = [
  { src: g1, className: "col-span-1 row-span-2 aspect-[3/4]" },
  { src: g2, className: "col-span-1 row-span-1 aspect-square" },
  { src: g3, className: "col-span-2 row-span-1 aspect-[2/1] hidden md:block" },
  { src: g4, className: "col-span-1 row-span-2 aspect-[3/4]" },
  { src: g5, className: "col-span-2 row-span-1 aspect-[2/1] hidden md:block" },
  { src: g6, className: "col-span-1 row-span-1 aspect-square" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
            Atmosphere
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            A Visual Journey
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-min">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-sm bg-muted ${img.className}`}
            >
              <img
                src={img.src}
                alt="Amrithya Gallery"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                <Plus className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}