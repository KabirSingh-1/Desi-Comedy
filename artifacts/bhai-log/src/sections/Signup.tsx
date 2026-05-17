import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  city: z.string().min(2, "City is required"),
});

export function Signup() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "+1 ",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 5000);
  }

  return (
    <section id="join" className="py-24 relative overflow-hidden bg-black z-10 clip-rough my-12 border-y border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase leading-tight mb-6">
            READY TO BECOME <br className="hidden md:block" />
            <span className="text-primary text-neon">BHAI LOG?</span>
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-md">
            Join the inner circle. Get the drops, the discounts, and the absolute chaos delivered straight to your phone.
          </p>
          
          <div className="hidden md:block mt-12 relative h-32">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-0 right-12 font-['Caveat',cursive] text-white text-3xl -rotate-12 bg-secondary/80 px-4 py-2 border border-secondary"
            >
              Fill it up! ➔
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-card/80 backdrop-blur-xl border-4 border-primary p-8 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
            {isSubmitted ? (
              <div className="text-center py-12">
                <h3 className="font-display text-4xl text-primary mb-4 uppercase">You're In, Bhai!</h3>
                <p className="text-white font-sans">Check your WhatsApp soon for the next steps.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-mono uppercase text-xs">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jolly Bhai" className="bg-black/50 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-mono uppercase text-xs">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="jolly@example.com" className="bg-black/50 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-mono uppercase text-xs">WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="bg-black/50 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-mono uppercase text-xs">City</FormLabel>
                        <FormControl>
                          <Input placeholder="San Francisco" className="bg-black/50 border-white/20 text-white h-12 focus-visible:ring-primary focus-visible:border-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-secondary" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary text-primary-foreground font-display font-bold text-xl uppercase hover:bg-yellow-400 transition-all neon-glow skew-x-[-2deg] rounded-none mt-4"
                  >
                    <div className="skew-x-[2deg]">BECOME BHAI LOG ⚡</div>
                  </Button>
                  
                  <p className="text-center font-mono text-[10px] text-muted-foreground uppercase mt-4">
                    No spam. Only laughs and updates.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
