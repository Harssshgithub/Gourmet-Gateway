import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A surreal experience. The dome dining at sunset felt like a scene from a movie. Every bite was perfection.",
    name: "Anaya & Rohan",
    occasion: "Anniversary Dinner"
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
    <section className="py-24 lg:py-48 bg-background relative border-t border-primary/15">
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
              WORDS OF GUESTS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em] leading-[1.0]"
          >
            Moments Relived
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col relative"
            >
              <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-[1.6] mb-10 italic font-light">
                "{t.quote}"
              </p>
              
              <div className="mt-auto">
                <div className="w-12 h-[1px] bg-primary/30 mb-6" />
                <p className="text-primary text-[11px] tracking-[0.2em] uppercase font-medium mb-1">{t.name}</p>
                <p className="text-foreground/50 text-[10px] tracking-[0.1em] uppercase font-light">{t.occasion}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}