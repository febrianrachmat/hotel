import { BookingFlow } from "@/components/booking";
import { SiteShell } from "@/components/layout/site-shell";

export default function BookPage() {
  return (
    <SiteShell showFooter={false}>
      <section className="min-h-screen section-padding pt-28 pb-20">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="editorial-spacing mb-4">Reservations</p>
          <h1 className="font-heading text-4xl text-foreground md:text-6xl">
            Reserve Your Stay
          </h1>
          <p className="mt-4 text-text-muted">
            Complete your booking in a few elegant steps.
          </p>
        </div>
        <BookingFlow />
      </section>
    </SiteShell>
  );
}
