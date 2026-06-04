"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { amenities } from "@/data/amenities";
import { getAmenityIcon } from "@/lib/amenity-icons";
import { cn } from "@/lib/utils";

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="border-t border-white/5 bg-bg-elevated section-padding"
    >
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="The VELMONT Experience"
          title="Luxury Amenities"
          description="Every amenity is thoughtfully curated to elevate your stay beyond expectation — from dawn to dusk and into the night."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => {
            const Icon = getAmenityIcon(amenity.icon);

            return (
              <motion.article
                key={amenity.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                data-cursor-hover
                className={cn(
                  "group relative border border-white/10 bg-bg-deep/50 p-8 transition-all duration-500",
                  "hover:border-champagne/30 hover:shadow-luxury-lg"
                )}
              >
                <div className="mb-6 flex size-14 items-center justify-center border border-champagne/20 bg-champagne/5 transition-colors duration-500 group-hover:border-champagne/50 group-hover:bg-champagne/10">
                  <Icon className="size-6 text-champagne transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-heading text-2xl text-foreground">
                  {amenity.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {amenity.description}
                </p>

                <div className="mt-6 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-12" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
