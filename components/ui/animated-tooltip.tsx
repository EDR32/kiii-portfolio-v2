"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TooltipItem {
  id: number | string;
  name: string;
  designation?: string;
  image?: string;
  icon?: React.ReactNode;
  url?: string;
}

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: TooltipItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const currentTarget = event.currentTarget;
    const nativeOffsetX = event.nativeEvent.offsetX;

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = currentTarget.offsetWidth / 2;
      x.set(nativeOffsetX - halfWidth);
    });
  };

  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item) => {
        const triggerContent = (
          <div
            className="group relative"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 12,
                    },
                  }}
                  exit={{ opacity: 0, y: 15, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-card/95 border border-border px-3.5 py-1.5 text-sm shadow-xl backdrop-blur-md pointer-events-none"
                >
                  {/* Glowing accent beam line at the bottom */}
                  <div className="absolute inset-x-3 -bottom-px z-30 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_8px_rgba(255,221,51,0.8)]" />
                  <div className="relative z-30 text-sm sm:text-sm font-bold text-foreground">
                    {item.name}
                  </div>
                  {item.designation && (
                    <div className="text-sm sm:text-sm text-muted-foreground">
                      {item.designation}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {item.icon ? (
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-muted border border-border text-foreground shadow-sm hover:border-accent hover:bg-accent/15 hover:shadow-[0_0_16px_rgba(255,221,51,0.4)] hover:scale-108 active:scale-95"
              >
                <span className="transition-all duration-300 group-hover:text-accent group-hover:scale-110">
                  {item.icon}
                </span>
              </div>
            ) : item.image ? (
              <img
                height={100}
                width={100}
                src={item.image}
                alt={item.name}
                className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
              />
            ) : null}
          </div>
        );

        if (item.url) {
          return (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="inline-block"
            >
              {triggerContent}
            </Link>
          );
        }

        return <React.Fragment key={item.name}>{triggerContent}</React.Fragment>;
      })}
    </div>
  );
};
