"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  description,
  className,
}: {
  data: TimelineEntry[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setHeight(rect.height);
        }
      };
      updateHeight();
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, height - 180)]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full bg-transparent font-sans md:px-6 xl:px-0", className)}
      ref={containerRef}
    >
      {(title || description) && (
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          {title && <div className="text-2xl md:text-5xl font-bold mb-4 text-white">{title}</div>}
          {description && (
            <div className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
              {description}
            </div>
          )}
        </div>
      )}

      <div ref={ref} className="relative w-full mx-auto pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-28 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-0 sm:left-1 w-10 rounded-full bg-white dark:bg-card border border-black/10 dark:border-white/10 flex items-center justify-center shadow-md dark:shadow-black/60">
                <div className="h-4 w-4 rounded-full bg-accent border border-accent shadow-[0_0_12px_rgba(255,221,51,0.6)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-zinc-400 dark:text-white/40">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 md:pr-0 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-accent-darker dark:text-accent">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height - 180 + "px",
          }}
          className="absolute md:left-6 left-6 top-10 md:top-28 w-0.5 bg-black/10 dark:bg-white/15 rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-accent rounded-full shadow-[0_0_10px_#FFDD33,0_0_25px_rgba(255,221,51,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};
