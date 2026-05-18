import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is BhaiLog paid or free?",
    answer: "It's absolutely free to join. You just need to be a true fan and support the journey."
  },
  {
    question: "How do discounts work?",
    answer: "You'll get an exclusive promo code via WhatsApp before general tickets go live. Use it at checkout to claim your Bhai Log pricing."
  },
  {
    question: "Will I get WhatsApp updates?",
    answer: "Yes, but we promise no spam. Only the good stuff—show announcements, exclusive drops, and surprise gifts."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Of course. You can opt out whenever you want, but trust us, you won't want to miss out on the perks."
  },
  {
    question: "Is this only for Bay Area?",
    answer: "Nope! Bhai Log is global. While physical shows happen in specific cities, online content and merch drops are for everyone."
  },
  {
    question: "When do merch rewards unlock?",
    answer: "Your rewards stack up the more shows you attend. Check the rewards timeline to see exactly what you get at each milestone."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative bg-black border-y border-white/10 z-10">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-black text-5xl md:text-6xl text-primary text-neon mb-4 uppercase">
            FAQ
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10 bg-card/50 px-6 backdrop-blur-sm border-l-4 border-l-primary hover:border-l-yellow-400 transition-colors">
              <AccordionTrigger className="font-display text-xl text-white hover:text-primary transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
