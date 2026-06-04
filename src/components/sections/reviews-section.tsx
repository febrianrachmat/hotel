"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/utils";

function ReviewCard({ index }: { index: number }) {
  const review = reviews[index];
  if (!review) return null;

  return (
    <div className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-12 lg:px-20">
      <Quote className="mb-6 size-10 text-champagne/40" />

      <blockquote className="font-heading text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl lg:text-4xl lg:leading-snug">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <div className="mt-10 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < review.rating
                ? "fill-champagne text-champagne"
                : "text-champagne/25"
            )}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="relative size-16 overflow-hidden rounded-full border-2 border-champagne/30">
          <Image
            src={review.avatar}
            alt={review.guestName}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-heading text-xl text-foreground">
            {review.guestName}
          </p>
          <p className="mt-1 text-sm tracking-[0.15em] text-champagne uppercase">
            {review.country}
          </p>
          <p className="mt-2 text-xs text-text-muted">{review.stayDate}</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-white/5 bg-bg-deep section-padding"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(198_169_114/6%),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Voices of VELMONT"
          description="Stories from our distinguished guests — each stay a chapter in an ongoing legacy of excellence."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={review.id}>
                  <div className="glass-luxury border-champagne/10">
                    <ReviewCard index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex items-center justify-center gap-6">
              <CarouselPrevious className="relative inset-auto translate-0 border-champagne/30" />
              <CarouselNext className="relative inset-auto translate-0 border-champagne/30" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
