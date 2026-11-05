import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "accent"
  | "solid"
  | "muted"
  | "outline"
  | "secondary"
  | "success"
  | "danger";

export type BadgeSize = "sm" | "md" | "lg";
export type BadgeRounded = "full" | "lg" | "md" | "sm" | "none";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: BadgeRounded;
  uppercase?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-card border border-accent text-accent font-bold shadow-xs",
  solid: "bg-accent text-black font-bold border border-accent shadow-xs",
  muted: "bg-muted border border-border text-foreground font-medium",
  secondary: "bg-secondary border border-border text-secondary-foreground font-medium",
  outline: "bg-transparent border border-border text-foreground font-medium",
  success:
    "bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold",
  danger: "bg-rose-500/15 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-semibold",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "text-sm px-2.5 py-0.5 gap-1",
  md: "text-sm sm:text-sm px-3.5 py-1 gap-1.5",
  lg: "text-sm sm:text-base px-4 py-1.5 gap-2",
};

const roundedClasses: Record<BadgeRounded, string> = {
  full: "rounded-full",
  lg: "rounded-xl",
  md: "rounded-lg",
  sm: "rounded-md",
  none: "rounded-none",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "accent",
      size = "md",
      rounded = "full",
      uppercase = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-colors duration-200 select-none",
          variantClasses[variant],
          sizeClasses[size],
          roundedClasses[rounded],
          uppercase && "uppercase tracking-wider",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
