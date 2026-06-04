"use client";

import { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryCategories, galleryImages } from "@/data/gallery";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (image: GalleryImage) => {
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setLightboxIndex(index >= 0 ? index : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goNext, goPrev]);

  const currentImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="border-t border-white/5 bg-bg-elevated section-padding">
      <div className="mx-auto max-w-[1920px]">
        <SectionHeading
          eyebrow="Visual Journey"
          title="The VELMONT Gallery"
          description="A curated collection of moments — from serene suites to world-class dining and tranquil spa sanctuaries."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              data-cursor-hover
              className={cn(
                "border px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300",
                activeCategory === cat.id
                  ? "border-champagne bg-champagne/10 text-champagne"
                  : "border-white/10 text-text-muted hover:border-champagne/40 hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                onClick={() => openLightbox(image)}
                data-cursor-hover
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden"
                style={{
                  aspectRatio: `${image.width} / ${image.height}`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg-deep/0 transition-colors duration-500 group-hover:bg-bg-deep/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="glass-luxury flex size-12 items-center justify-center">
                    <ZoomIn className="size-5 text-champagne" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-bg-deep/90 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs tracking-[0.15em] text-champagne uppercase">
                    {image.category}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{image.alt}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent
          showCloseButton={false}
          className="max-h-[95vh] max-w-[95vw] border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
        >
          <DialogTitle className="sr-only">
            {currentImage?.alt ?? "Gallery image"}
          </DialogTitle>

          {currentImage && (
            <div className="relative">
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-10 flex size-10 items-center justify-center text-foreground transition-colors hover:text-champagne"
                aria-label="Close lightbox"
              >
                <X className="size-6" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-deep">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative size-full"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      sizes="95vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="editorial-spacing text-[10px]">
                    {currentImage.category}
                  </p>
                  <p className="font-heading text-lg text-foreground">
                    {currentImage.alt}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex size-10 items-center justify-center border border-white/20 transition-colors hover:border-champagne hover:text-champagne"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <span className="min-w-[3rem] text-center text-xs text-text-muted">
                    {(lightboxIndex ?? 0) + 1} / {filteredImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex size-10 items-center justify-center border border-white/20 transition-colors hover:border-champagne hover:text-champagne"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
