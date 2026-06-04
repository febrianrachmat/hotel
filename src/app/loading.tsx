import { brand } from "@/lib/design-tokens";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-deep">
      <span className="font-heading text-3xl tracking-[0.2em] text-gradient-gold">
        {brand.name}
      </span>
      <div className="mt-6 h-px w-24 animate-pulse bg-champagne/40" />
    </div>
  );
}
