import { motion } from "framer-motion";
import eventsImg from "@/assets/events.png";
import { scrollToId } from "@/lib/scroll";

export function Events() {
  return (
    <section id="events" className="py-32 md:py-40 bg-background relative border-t border-primary/15 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-5 lg:col-start-1 z-10 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
                PRIVATE GATHERINGS
              </span>
              <div className="flex-1 border-t border-primary/15" />
            </div>
            
            <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-8 leading-[1.05] tracking-[-0.02em]">
              Celebrate the <br/>Extraordinary
            </h2>
            
            <p className="text-foreground/75 font-light leading-[1.7] text-[17px] mb-12">
              From intimate anniversary dinners to corporate celebrations and grand birthdays, our private dining spaces offer exclusivity, bespoke menus, and dedicated service to make your event unforgettable.
            </p>

            <button
              onClick={() => scrollToId("reserve")}
              className="inline-block w-max px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-background uppercase tracking-[0.2em] text-[11px] font-medium transition-colors duration-500 rounded-[2px]"
            >
              Enquire for Private Dining
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7 lg:col-start-6 lg:-mr-12 xl:-mr-32 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden border border-primary/20 bg-card">
              <img
                src={eventsImg}
                alt="Private Events"
                className="w-full h-full object-cover grayscale-[20%] hover:scale-[1.03] transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}