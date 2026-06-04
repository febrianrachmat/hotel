"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { locationInfo } from "@/data/location";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/5 bg-bg-deep section-padding">
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Concierge"
          title="Contact & Location"
          description="Our dedicated concierge team is available around the clock to craft your perfect stay."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-champagne" />
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="mt-1 text-sm text-text-muted">
                    {locationInfo.address}
                    <br />
                    {locationInfo.city}, {locationInfo.country}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="size-5 shrink-0 text-champagne" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:${locationInfo.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-text-muted transition-colors hover:text-champagne"
                  >
                    {locationInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="size-5 shrink-0 text-champagne" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${locationInfo.email}`}
                    className="mt-1 block text-sm text-text-muted transition-colors hover:text-champagne"
                  >
                    {locationInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-white/10">
              <iframe
                src={locationInfo.mapEmbedUrl}
                title="VELMONT location map"
                className="h-64 w-full grayscale invert opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="glass-luxury-strong space-y-5 p-8"
          >
            <p className="editorial-spacing">Send a Message</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  className="rounded-none border-white/10 bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@email.com"
                  className="rounded-none border-white/10 bg-white/5"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                placeholder="How may we assist you?"
                className="rounded-none border-white/10 bg-white/5"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Tell us about your ideal stay..."
                className="w-full resize-none border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground outline-none placeholder:text-text-muted/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-none tracking-[0.15em] uppercase"
            >
              Send Inquiry
              <Send className="size-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
