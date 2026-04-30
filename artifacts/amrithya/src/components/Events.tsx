import { motion } from "framer-motion";
import eventsImg from "@/assets/events.png";
import { scrollToId } from "@/lib/scroll";

export function Events() {
  return (
    <section id="events" className="py-24 relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 z-0">
        <img
          src={eventsImg}
          alt="Private Events"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
            Private Gatherings
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Celebrate the Extraordinary
          </h2>
          <p className="text-foreground/80 font-light text-lg mb-10 leading-relaxed">
            From intimate anniversary dinners to corporate celebrations and grand birthdays, our private dining spaces offer exclusivity, bespoke menus, and dedicated service to make your event unforgettable.
          </p>
          <button
            onClick={() => scrollToId("reserve")}
            className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-background uppercase tracking-widest text-sm font-medium transition-all"
          >
            Enquire for Private Dining
          </button>
        </motion.div>
      </div>
    </section>
  );
}