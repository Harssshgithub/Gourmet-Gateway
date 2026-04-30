import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A surreal experience. The dome dining at sunset felt like a scene from a movie. Every bite was perfection.",
    name: "Anaya & Rohan",
    occasion: "Anniversary Dinner, Oct 2025"
  },
  {
    quote: "We hosted my father's 60th here. The staff was incredibly attentive and the saffron kofta was divine.",
    name: "The Mehra Family",
    occasion: "Father's 60th Birthday"
  },
  {
    quote: "Dehradun finally has a world-class dining room. The ambience, the lighting, the cocktails—absolutely stunning.",
    name: "Vikram S.",
    occasion: "Business Dinner"
  },
  {
    quote: "He proposed by the water reflecting pool! The concierge went above and beyond to make it magical.",
    name: "Priya T.",
    occasion: "Engagement"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 bg-background relative border-t border-primary/15">
      <div className="container mx-auto px-6 max-w-5xl">
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
              WORDS OF GUESTS
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
            Moments Relived
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col relative"
            >
              <div className="text-primary font-serif text-6xl leading-none mb-4">"</div>
              <p className="font-serif text-xl md:text-2xl text-foreground/90 leading-[1.6] mb-10 italic font-light">
                {t.quote}
              </p>
              
              <div className="mt-auto">
                <div className="w-16 h-[1px] bg-primary/20 mb-6" />
                <p className="text-primary text-[11px] tracking-[0.25em] uppercase font-medium mb-1">{t.name}</p>
                <p className="text-foreground/50 text-[10px] tracking-[0.1em] uppercase font-light">{t.occasion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}