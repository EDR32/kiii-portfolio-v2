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
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full bg-transparent font-sans md:px-6 xl:px-0", className)}
      ref={containerRef}
    >
      {(title || description) && (
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
          {title && (
            <div className="text-2xl md:text-5xl font-bold mb-4 text-white">
              {title}
            </div>
          )}
          {description && (
            <div className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed">
              {description}
            </div>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-28 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-primary border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
                <div className="h-4 w-4 rounded-full bg-accent border border-accent/50 shadow-[0_0_10px_rgba(241,48,36,0.6)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-white/40">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-accent">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-white/15 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-accent via-purple-600 to-transparent from-0% via-20% rounded-full shadow-[0_0_12px_rgba(241,48,36,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};
