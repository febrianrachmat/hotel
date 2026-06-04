"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/experiences";

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="border-t border-white/5 bg-bg-deep section-padding"
    >
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Curated Moments"
          title="Extraordinary Experiences"
          description="Beyond the suite — discover curated adventures crafted exclusively for VELMONT guests."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group flex flex-col overflow-hidden border border-white/10 sm:flex-row"
              data-cursor-hover
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <span className="editorial-spacing mb-3 w-fit">{exp.tag}</span>
                <h3 className="font-heading text-xl text-foreground md:text-2xl">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {exp.description}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs text-champagne">
                  <Clock className="size-3.5" />
                  {exp.duration}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
