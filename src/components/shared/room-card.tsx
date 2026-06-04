"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Users, Maximize2 } from "lucide-react";
import type { Room } from "@/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface RoomCardProps {
  room: Room;
  index?: number;
}

export function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden"
      data-cursor-hover
    >
      <Link href="/book" className="block">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
          <Image
            src={room.image}
            alt={room.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

          {/* Default info bar */}
          <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
            <div className="flex items-center gap-1 text-champagne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "size-3",
                    i < Math.floor(room.rating)
                      ? "fill-champagne text-champagne"
                      : "text-champagne/30"
                  )}
                />
              ))}
              <span className="ml-2 text-xs text-text-muted">
                {room.rating.toFixed(1)}
              </span>
            </div>
            <h3 className="mt-2 font-heading text-2xl text-foreground">
              {room.name}
            </h3>
            <p className="mt-1 text-sm text-champagne">
              from {formatPrice(room.pricePerNight)}
              <span className="text-text-muted"> / night</span>
            </p>
          </div>

          {/* Glass overlay on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
            <div className="glass-luxury-strong translate-y-4 p-6 transition-transform duration-500 group-hover:translate-y-0">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-xl text-foreground">
                  {room.name}
                </h3>
                <span className="text-sm font-medium text-champagne">
                  {formatPrice(room.pricePerNight)}
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-muted">
                {room.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Users className="size-3.5 text-champagne" />
                  {room.capacity} Guests
                </span>
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="size-3.5 text-champagne" />
                  {room.size}
                </span>
              </div>
              <p className="mt-4 text-xs tracking-[0.2em] text-champagne uppercase">
                View & Reserve →
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
