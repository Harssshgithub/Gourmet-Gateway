import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import g1 from "@/assets/gallery-1.png";
import g2 from "@/assets/gallery-2.png";
import g3 from "@/assets/gallery-3.png";
import g4 from "@/assets/gallery-4.png";
import g5 from "@/assets/gallery-5.png";
import g6 from "@/assets/gallery-6.png";
import g7 from "@/assets/gallery-7.png";
import g8 from "@/assets/gallery-8.png";

const images = [
  { src: g1, className: "col-span-1 md:col-span-2 row-span-2" },
  { src: g2, className: "col-span-1 md:col-span-1 row-span-1" },
  { src: g3, className: "col-span-1 md:col-span-1 row-span-2" },
  { src: g4, className: "col-span-1 md:col-span-1 row-span-1" },
  { src: g5, className: "col-span-1 md:col-span-2 row-span-1" },
  { src: g6, className: "col-span-1 md:col-span-1 row-span-1" },
  { src: g7, className: "col-span-1 md:col-span-1 row-span-1" },
  { src: g8, className: "col-span-1 md:col-span-2 row-span-1" },
];

function GalleryImage({ img, index }: { img: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-card border border-primary/10 ${img.className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <motion.img
        style={{ rotateX, rotateY }}
        src={img.src}
        alt="Amrithya Gallery"
        className="w-full h-full object-cover min-h-[240px] transform-gpu scale-[1.02] group-hover:scale-[1.04] transition-transform duration-[0.6s] ease-out origin-center grayscale-[10%]"
      />
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-40 bg-background relative border-t border-primary/15">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 border-t border-primary/15" />
            <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
              ATMOSPHERE
            </span>
            <div className="w-8 border-t border-primary/15" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl lg:text-6xl text-foreground tracking-[-0.02em]"
          >
            A Visual Journey
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {images.map((img, i) => (
            <GalleryImage key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}