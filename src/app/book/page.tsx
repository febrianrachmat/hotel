import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BookPage() {
  return (
    <SiteShell showFooter={false}>
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 section-padding pt-32 text-center">
        <CalendarDays className="size-10 text-champagne" />
        <p className="editorial-spacing">Booking Experience</p>
        <h1 className="font-heading text-4xl text-foreground md:text-6xl">
          Reserve Your Stay
        </h1>
        <p className="max-w-md text-text-muted">
          Multi-step booking flow coming in Step 8.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-none tracking-[0.15em] uppercase"
          )}
        >
          Return Home
        </Link>
      </section>
    </SiteShell>
  );
}
