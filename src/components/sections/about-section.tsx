"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-white/5 bg-bg-deep section-padding">
      <div className="mx-auto max-w-[1920px]">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={aboutContent.image}
              alt="VELMONT resort"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 to-transparent" />
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={aboutContent.headline}
              description={aboutContent.subheadline}
              align="left"
              className="mb-8"
            />
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-sm leading-relaxed text-text-muted md:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
            >
              {aboutContent.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl text-champagne md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-[0.1em] text-text-muted uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
