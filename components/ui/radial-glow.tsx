import React from "react";
import { cn } from "@/lib/utils";

export type RadialGlowVariant = "default" | "center" | "hero" | "about" | "contact";

export interface RadialGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: RadialGlowVariant;
}

const variantStyles: Record<RadialGlowVariant, string> = {
  default:
    "top-0 left-1/2 -translate-x-1/2 w-212.5 max-w-full h-95 blur-xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)]",
  center:
    "top-0 left-1/2 -translate-x-1/2 w-212.5 max-w-full h-95 blur-xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)]",
  hero:
    "top-1/4 left-1/4 -translate-x-1/2 w-200 max-w-full h-125 blur-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_50%,transparent_70%)]",
  about:
    "top-12 left-1/3 -translate-x-1/2 w-212.5 max-w-full h-125 blur-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)]",
  contact:
    "top-16 left-1/2 -translate-x-1/2 w-200 max-w-full h-100 blur-xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)]",
};

export const RadialGlow = React.forwardRef<HTMLDivElement, RadialGlowProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "hidden dark:block absolute pointer-events-none -z-10",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

RadialGlow.displayName = "RadialGlow";

export default RadialGlow;

