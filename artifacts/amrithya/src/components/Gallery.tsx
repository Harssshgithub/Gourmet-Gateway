import { motion, useMotionValue, useTransform } from "framer-motion";
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

function GalleryImage({ img }: { img: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-2deg", "2deg"]);

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
    <div
      className={`group relative overflow-hidden bg-card border border-primary/10 ${img.className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <motion.img
        style={{ rotateX, rotateY }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={img.src}
        alt="Amrithya Gallery"
        className="w-full h-full object-cover min-h-[240px] grayscale-[10%]"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-48 bg-background relative border-t border-primary/15">
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
              ATMOSPHERE
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em] leading-[1.0]"
          >
            A Visual Journey
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 auto-rows-[240px]"
        >
          {images.map((img, i) => (
            <GalleryImage key={i} img={img} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}