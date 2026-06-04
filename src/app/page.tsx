import { Button } from "@/components/ui/button";
import { brand } from "@/lib/design-tokens";

/** Temporary design-system shell — replaced in Step 4+ */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 section-padding text-center">
      <p className="editorial-spacing">{brand.tagline}</p>
      <h1 className="font-heading text-5xl text-gradient-gold md:text-7xl lg:text-8xl">
        {brand.name}
      </h1>
      <p className="max-w-md text-text-muted">
        Design system loaded. Full experience building in progress.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg">Book Your Stay</Button>
        <Button variant="outline" size="lg">
          Explore Suites
        </Button>
      </div>
    </main>
  );
}
