import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/data/hero";
import { brand } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const sectionPlaceholders = [
  { id: "suites", label: "Featured Suites" },
  { id: "amenities", label: "Luxury Amenities" },
  { id: "gallery", label: "Gallery" },
  { id: "dining", label: "Dining" },
  { id: "experiences", label: "Experiences" },
  { id: "about", label: "Our Story" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <SiteShell>
      {/* Hero placeholder — full section in Step 5 */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg-deep/50 to-bg-deep" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center md:px-10">
          <p className="editorial-spacing mb-6">{brand.tagline}</p>
          <h1 className="font-heading text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl">
            {heroContent.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
            {heroContent.subtext}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={heroContent.primaryCta.href}
              className={cn(
                buttonVariants(),
                "rounded-none px-8 tracking-[0.15em] uppercase"
              )}
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-none border-white/20 bg-white/5 px-8 tracking-[0.15em] uppercase backdrop-blur-sm"
              )}
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Section anchors for nav — content added in Steps 5–8 */}
      {sectionPlaceholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-[40vh] items-center justify-center border-t border-white/5 section-padding"
        >
          <div className="text-center">
            <p className="editorial-spacing mb-3">Coming Soon</p>
            <h2 className="font-heading text-3xl text-foreground md:text-4xl">
              {section.label}
            </h2>
          </div>
        </section>
      ))}
    </SiteShell>
  );
}
