"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-white/5 bg-bg-elevated section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Guest Services"
          title="Frequently Asked Questions"
          description="Everything you need to know before your VELMONT experience."
        />

        <Accordion className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-white/10"
            >
              <AccordionTrigger className="font-heading text-left text-lg text-foreground hover:text-champagne hover:no-underline md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-text-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
