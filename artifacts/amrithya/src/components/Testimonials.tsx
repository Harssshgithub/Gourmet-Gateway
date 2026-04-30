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
    <section className="py-24 bg-card/30 relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
            Words of Guests
          </span>
          <h2 className="font-serif text-4xl text-foreground">
            Moments Relived
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-border/50 bg-background relative"
            >
              <div className="text-primary/40 font-serif text-6xl absolute top-4 left-6 leading-none">"</div>
              <p className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 relative z-10 pt-4">
                {t.quote}
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="text-primary text-sm tracking-wide font-medium uppercase">{t.name}</p>
                <p className="text-foreground/50 text-xs font-light">{t.occasion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}