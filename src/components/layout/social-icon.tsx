import type { SocialLink } from "@/types";

interface SocialIconProps {
  platform: SocialLink["platform"];
  className?: string;
}

export function SocialIcon({ platform, className = "size-4" }: SocialIconProps) {
  const props = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (platform) {
    case "instagram":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...props}>
          <path d="M4 4l7.5 9.5L4 20h2.5l6-7 5 7H20l-8-10.5L19 4h-2.5l-5.5 6.5L8 4H4z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
  }
}
