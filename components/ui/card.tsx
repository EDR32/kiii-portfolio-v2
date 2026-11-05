import React from "react";
import { cn } from "@/lib/utils";

export const cardBaseClasses =
  "relative overflow-hidden bg-card/95 backdrop-blur-xl border border-border hover:border-foreground/20 rounded-2xl transition-all duration-300 shadow-sm group group/card";

export interface CardUnderglowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardUnderglow({ className, ...props }: CardUnderglowProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn(
          "hidden dark:block absolute -bottom-3 inset-x-8 h-8 bg-white/20 blur-xl rounded-full pointer-events-none group-hover/card-wrapper:bg-white/40 group-hover/card-wrapper:h-10 group-hover/card:bg-white/40 group-hover/card:h-10 group-hover:bg-white/40 group-hover:h-10 transition-all duration-500",
          className
        )}
        {...props}
      />
      <div
        aria-hidden="true"
        className={cn(
          "hidden dark:block absolute -bottom-1 inset-x-14 h-4 bg-white/35 blur-md rounded-full pointer-events-none group-hover/card-wrapper:bg-white/60 group-hover/card:bg-white/60 group-hover:bg-white/60 transition-all duration-500",
          className
        )}
        {...props}
      />
    </>
  );
}

export interface CardInnerGlowProps {
  beamClassName?: string;
  gradientClassName?: string;
}

export function CardInnerGlow({
  beamClassName,
  gradientClassName,
}: CardInnerGlowProps) {
  return (
    <>
      {/* Bottom glowing beam line */}
      <div
        aria-hidden="true"
        className={cn(
          "hidden dark:block absolute bottom-0 inset-x-4 h-[1.5px] bg-linear-to-r from-transparent via-white/80 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none",
          beamClassName
        )}
      />
      {/* Inner rising white gradient at bottom of card */}
      <div
        aria-hidden="true"
        className={cn(
          "hidden dark:block absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/12 via-white/3 to-transparent pointer-events-none group-hover:from-white/20 group-hover/card:from-white/20 transition-all duration-500",
          gradientClassName
        )}
      />
    </>
  );
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  underglow?: boolean;
  hoverLift?: boolean;
  wrapperClassName?: string;
  hideInnerGlow?: boolean;
  beamClassName?: string;
  gradientClassName?: string;
  as?: React.ElementType;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      underglow = false,
      hoverLift = false,
      wrapperClassName,
      hideInnerGlow = false,
      beamClassName,
      gradientClassName,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const cardContent = (
      <Component
        ref={ref}
        className={cn(
          cardBaseClasses,
          hoverLift && "hover:-translate-y-1.5",
          className
        )}
        {...props}
      >
        {!hideInnerGlow && (
          <CardInnerGlow
            beamClassName={beamClassName}
            gradientClassName={gradientClassName}
          />
        )}
        {children}
      </Component>
    );

    if (underglow) {
      return (
        <div
          className={cn(
            "relative group group/card-wrapper group/card",
            className?.includes("h-full") && "h-full",
            (props.onClick || className?.includes("cursor-pointer")) && "cursor-pointer",
            wrapperClassName
          )}
        >
          <CardUnderglow />
          {cardContent}
        </div>
      );
    }

    return cardContent;
  }
);

Card.displayName = "Card";

export default Card;

