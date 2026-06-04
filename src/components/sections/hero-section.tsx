"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/data/hero";
import { brand } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeLuxury },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={heroContent.backgroundImage}
          alt="VELMONT luxury hotel lobby"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/80 via-bg-deep/55 to-bg-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/60 via-transparent to-bg-deep/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 pt-28 pb-32 md:px-10 md:pt-32 lg:px-16 xl:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.p variants={itemVariants} className="editorial-spacing mb-8">
            {brand.tagline}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl leading-[1.1] text-foreground md:text-7xl lg:text-8xl xl:text-[5.5rem]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl"
          >
            {heroContent.subtext}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={heroContent.primaryCta.href}
              data-cursor-hover
              className={cn(
                buttonVariants(),
                "rounded-none px-10 py-6 text-xs tracking-[0.2em] uppercase"
              )}
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              data-cursor-hover
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-none border-white/20 bg-white/5 px-10 py-6 text-xs tracking-[0.2em] uppercase backdrop-blur-md hover:bg-white/10"
              )}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#suites"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-champagne"
        aria-label="Scroll to suites"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5 text-champagne" />
        </motion.div>
      </motion.a>
    </section>
  );
}
