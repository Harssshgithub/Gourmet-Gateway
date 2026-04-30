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
    <section id="reserve" className="py-24 md:py-32 relative border-t border-border/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
              Book a Table
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Reserve your experience
            </h2>
            <p className="text-foreground/70 font-light mb-12 max-w-md">
              Secure your place at Amrithya. For same-day reservations or groups larger than 12, please reach out directly via WhatsApp.
            </p>

            <a
              href="https://wa.me/919999999999?text=I%20would%20like%20to%20reserve%20a%20table%20at%20Amrithya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border hover:border-primary text-foreground hover:text-primary transition-colors rounded-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-medium">Book via WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-10 border border-border/50 rounded-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    placeholder="Full Name" 
                    {...register("name", { required: true })}
                    className="bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-foreground"
                  />
                  {errors.name && <span className="text-destructive text-xs mt-1 block">Required</span>}
                </div>
                <div>
                  <Input 
                    placeholder="Phone Number" 
                    type="tel"
                    {...register("phone", { required: true, pattern: /^\+?[0-9\s-]{10,}$/ })}
                    className="bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-foreground"
                  />
                  {errors.phone && <span className="text-destructive text-xs mt-1 block">Valid phone required</span>}
                </div>
                <div>
                  <Input 
                    type="date" 
                    {...register("date", { required: true })}
                    className="bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-foreground"
                  />
                  {errors.date && <span className="text-destructive text-xs mt-1 block">Required</span>}
                </div>
                <div>
                  <Input 
                    type="time" 
                    {...register("time", { required: true })}
                    className="bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-foreground"
                  />
                  {errors.time && <span className="text-destructive text-xs mt-1 block">Required</span>}
                </div>
              </div>
              
              <div>
                <select 
                  {...register("guests", { required: true })}
                  className="w-full bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 py-2 focus-visible:outline-none focus-visible:border-primary text-foreground appearance-none cursor-pointer"
                >
                  <option value="" disabled selected className="text-muted-foreground bg-card">Number of Guests</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i+1} value={i+1} className="bg-card text-foreground">{i+1} {i===0?'Guest':'Guests'}</option>
                  ))}
                </select>
                {errors.guests && <span className="text-destructive text-xs mt-1 block">Required</span>}
              </div>

              <div>
                <Textarea 
                  placeholder="Special Requests (Allergies, Occasions, Seating Preference)" 
                  {...register("request")}
                  className="bg-transparent border-b border-x-0 border-t-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-foreground min-h-[100px] resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-background py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Request Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}