import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-border/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
              Find the Eternal
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-foreground uppercase tracking-widest text-sm mb-1">Address</h4>
                  <p className="text-foreground/70 font-light">Rajpur Road,<br/>Dehradun, Uttarakhand 248009</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-foreground uppercase tracking-widest text-sm mb-1">Reservations & Enquiries</h4>
                  <p className="text-foreground/70 font-light">+91 99999 99999</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-foreground uppercase tracking-widest text-sm mb-1">Opening Hours</h4>
                  <p className="text-foreground/70 font-light">12:00 PM – 11:30 PM<br/>Open Daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Instagram className="w-6 h-6 text-primary mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-foreground uppercase tracking-widest text-sm mb-1">Follow our journey</h4>
                  <a href="https://instagram.com/amrithya" target="_blank" rel="noopener noreferrer" className="text-foreground/70 font-light hover:text-primary transition-colors">
                    @amrithya
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-auto w-full p-1 border border-border/50 rounded-sm bg-card"
          >
            <iframe 
              src="https://www.google.com/maps?q=Rajpur+Road+Dehradun&output=embed" 
              className="w-full h-full rounded-sm opacity-80 hover:opacity-100 transition-opacity grayscale contrast-125" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}