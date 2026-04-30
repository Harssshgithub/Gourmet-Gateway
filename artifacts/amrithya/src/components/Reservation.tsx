import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ReserveForm = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  request: string;
};

export function Reservation() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReserveForm>();
  const { toast } = useToast();

  const onSubmit = (data: ReserveForm) => {
    console.log("Reservation Request:", data);
    toast({
      title: "Reservation requested.",
      description: "Our concierge will confirm your table shortly.",
    });
    reset();
  };

  return (
    <section id="reserve" className="py-24 lg:py-48 relative border-t border-primary/15 bg-background">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-2xl">
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
              BOOK A TABLE
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground tracking-[-0.02em] leading-[1.0] mb-6"
          >
            Reserve your experience
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground/70 font-light text-base md:text-lg max-w-xl"
          >
            Secure your place at Amrithya. For same-day reservations or groups larger than 12, please reach out directly via WhatsApp.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative group">
                <Input 
                  placeholder="Full Name" 
                  {...register("name", { required: true })}
                  className="bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-foreground placeholder:text-foreground/40 text-[15px] transition-colors"
                />
                {errors.name && <span className="text-destructive text-[10px] uppercase tracking-wider mt-2 block">Required</span>}
              </div>
              <div className="relative group">
                <Input 
                  placeholder="Phone Number" 
                  type="tel"
                  {...register("phone", { required: true, pattern: /^\+?[0-9\s-]{10,}$/ })}
                  className="bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-foreground placeholder:text-foreground/40 text-[15px] transition-colors"
                />
                {errors.phone && <span className="text-destructive text-[10px] uppercase tracking-wider mt-2 block">Valid phone required</span>}
              </div>
              <div className="relative group">
                <Input 
                  type="date" 
                  {...register("date", { required: true })}
                  className="bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-foreground placeholder:text-foreground/40 text-[15px] transition-colors"
                />
                {errors.date && <span className="text-destructive text-[10px] uppercase tracking-wider mt-2 block">Required</span>}
              </div>
              <div className="relative group">
                <Input 
                  type="time" 
                  {...register("time", { required: true })}
                  className="bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-foreground placeholder:text-foreground/40 text-[15px] transition-colors"
                />
                {errors.time && <span className="text-destructive text-[10px] uppercase tracking-wider mt-2 block">Required</span>}
              </div>
            </div>
            
            <div className="relative group">
              <select 
                {...register("guests", { required: true })}
                className="w-full bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:outline-none focus-visible:border-primary text-foreground appearance-none cursor-pointer text-[15px] transition-colors"
              >
                <option value="" disabled selected className="text-foreground/40 bg-card">Number of Guests</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1} className="bg-card text-foreground">{i+1} {i===0?'Guest':'Guests'}</option>
                ))}
              </select>
              {errors.guests && <span className="text-destructive text-[10px] uppercase tracking-wider mt-2 block">Required</span>}
            </div>

            <div className="relative group">
              <Textarea 
                placeholder="Special Requests (Allergies, Occasions, Seating Preference)" 
                {...register("request")}
                className="bg-transparent border-b border-foreground/20 border-x-0 border-t-0 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-primary text-foreground placeholder:text-foreground/40 text-[15px] min-h-[100px] resize-none transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-background py-5 mt-8 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-primary/90 transition-colors duration-500 rounded-[2px]"
            >
              Request Reservation
            </button>
          </form>

          <div className="mt-16 flex flex-col items-center">
            <div className="flex items-center gap-4 w-full max-w-xs mb-8">
              <div className="flex-1 border-t border-primary/20" />
              <span className="text-primary/60 text-[10px] uppercase tracking-[0.2em]">OR</span>
              <div className="flex-1 border-t border-primary/20" />
            </div>

            <a
              href="https://wa.me/919999999999?text=I%20would%20like%20to%20reserve%20a%20table%20at%20Amrithya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 text-primary/60 hover:border-primary hover:text-primary transition-colors duration-500 rounded-[2px] w-full sm:w-auto justify-center group"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.2em] text-[11px] font-medium">Book via WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}