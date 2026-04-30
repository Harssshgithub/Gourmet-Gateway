import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-background relative border-t border-primary/15">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:col-start-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary tracking-[0.25em] text-[11px] uppercase font-medium">
                VISIT US
              </span>
              <div className="w-8 border-t border-primary/15" />
            </div>
            
            <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-12 tracking-[-0.02em]">
              Find the Eternal
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-5 group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-primary uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Address</h4>
                  <p className="text-foreground/75 font-light leading-[1.6]">Rajpur Road,<br/>Dehradun, Uttarakhand 248009</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-primary uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Reservations & Enquiries</h4>
                  <p className="text-foreground/75 font-light leading-[1.6]">+91 99999 99999</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-primary uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Opening Hours</h4>
                  <p className="text-foreground/75 font-light leading-[1.6]">12:00 PM – 11:30 PM<br/>Open Daily</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <Instagram className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-primary uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Follow our journey</h4>
                  <a href="https://instagram.com/amrithya" target="_blank" rel="noopener noreferrer" className="text-foreground/75 font-light hover:text-primary transition-colors duration-300">
                    @amrithya
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 h-[500px] lg:h-full w-full border border-primary/20 bg-card relative"
          >
            <iframe 
              src="https://www.google.com/maps?q=Rajpur+Road+Dehradun&output=embed" 
              className="absolute inset-0 w-full h-full opacity-60 hover:opacity-80 transition-opacity duration-500 grayscale contrast-[1.1]" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}