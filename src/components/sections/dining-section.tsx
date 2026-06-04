"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { diningVenues } from "@/data/dining";

export function DiningSection() {
  return (
    <section id="dining" className="border-t border-white/5 bg-bg-elevated section-padding">
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Culinary Arts"
          title="Fine Dining & Culinary"
          description="A constellation of world-class venues where every meal is an occasion worth savoring."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {diningVenues.map((venue, index) => (
            <motion.article
              key={venue.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group overflow-hidden border border-white/10 bg-bg-deep/50"
              data-cursor-hover
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent" />
                <span className="editorial-spacing absolute top-4 left-4 bg-bg-deep/60 px-3 py-1 backdrop-blur-sm">
                  {venue.cuisine}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground">
                  {venue.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {venue.description}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs text-champagne">
                  <Clock className="size-3.5" />
                  {venue.hours}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
