"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RoomCard } from "@/components/shared/room-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { cn } from "@/lib/utils";

export function FeaturedRoomsSection() {
  const featuredRooms = rooms.filter((room) => room.featured);

  return (
    <section id="suites" className="bg-bg-elevated section-padding">
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Accommodations"
          title="Featured Suites & Villas"
          description="Each residence is a curated masterpiece — designed for those who seek the extraordinary in every detail."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="#booking"
            data-cursor-hover
            className={cn(
              buttonVariants({ variant: "outline" }),
              "group rounded-none border-champagne/30 px-8 tracking-[0.15em] uppercase hover:border-champagne"
            )}
          >
            Check Availability
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
