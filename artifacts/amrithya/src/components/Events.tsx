import { motion } from "framer-motion";
import eventsImg from "@/assets/events.png";
import { scrollToId } from "@/lib/scroll";

export function Events() {
  return (
    <section id="events" className="py-24 lg:py-48 bg-background relative border-t border-primary/15 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-5 lg:col-start-1 z-10 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 border-t border-primary/30" />
              <span className="text-primary tracking-[0.3em] text-[11px] uppercase font-medium">
                PRIVATE GATHERINGS
              </span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.0] tracking-[-0.02em]">
              Celebrate the <br/>Extraordinary
            </h2>
            
            <p className="text-foreground/70 font-light leading-[1.7] text-base md:text-lg mb-12 max-w-xl">
              From intimate anniversary dinners to corporate celebrations and grand birthdays, our private dining spaces offer exclusivity, bespoke menus, and dedicated service to make your event unforgettable.
            </p>

            <button
              onClick={() => scrollToId("reserve")}
              className="inline-block w-max px-10 py-4 border border-primary/20 text-foreground hover:border-primary hover:text-primary uppercase tracking-[0.2em] text-[11px] font-medium transition-colors duration-500 rounded-[2px]"
            >
              Enquire for Private Dining
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7 lg:col-start-6 lg:-mr-12 xl:-mr-32 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden border border-primary/20 bg-card">
              <img
                src={eventsImg}
                alt="Private Events"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}