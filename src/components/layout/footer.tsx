"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SocialIcon } from "@/components/layout/social-icon";
import { footerContent } from "@/data/location";
import { brand } from "@/lib/design-tokens";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-luxury-black">
      <div className="section-padding mx-auto max-w-[1920px]">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl tracking-[0.15em] text-foreground">
                {brand.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              {footerContent.tagline}
            </p>
            <div className="mt-8 flex gap-4">
              {footerContent.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center border border-white/10 text-text-muted transition-all hover:border-champagne/40 hover:text-champagne"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <p className="editorial-spacing mb-6">Explore</p>
            <ul className="space-y-3">
              {footerContent.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <p className="editorial-spacing mb-6">Contact</p>
            <address className="space-y-3 not-italic">
              <p className="text-sm leading-relaxed text-text-muted">
                {footerContent.contact.address}
              </p>
              <a
                href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                className="block text-sm text-text-muted transition-colors hover:text-champagne"
              >
                {footerContent.contact.phone}
              </a>
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="block text-sm text-text-muted transition-colors hover:text-champagne"
              >
                {footerContent.contact.email}
              </a>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="editorial-spacing mb-6">Newsletter</p>
            <p className="mb-4 text-sm text-text-muted">
              Receive exclusive offers and curated travel inspiration.
            </p>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-none border-white/10 bg-white/5 text-foreground placeholder:text-text-muted/60"
                aria-label="Email address"
              />
              <Button
                type="submit"
                className="rounded-none tracking-[0.1em] uppercase"
              >
                Subscribe
                <ArrowUpRight className="size-4" />
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="my-12 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-text-muted sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-champagne">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-champagne">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
