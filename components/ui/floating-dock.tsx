"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom center / bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  activeHref,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  activeHref?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} activeHref={activeHref} className={desktopClassName} />
      <FloatingDockMobile items={items} activeHref={activeHref} className={mobileClassName} />
    </>
  );
};

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfterScroll?: () => void,
) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (el: Element, opts?: object) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", href);
      onAfterScroll?.();
    } else {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/" + href;
    }
  }
};

const FloatingDockMobile = ({
  items,
  className,
  activeHref,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeHref?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-3 flex flex-col items-center gap-2"
          >
            {items.map((item, idx) => {
              const isActive = activeHref === item.href;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href, () => setOpen(false))}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900/90 border backdrop-blur-md shadow-lg transition-all",
                      isActive
                        ? "border-accent text-accent shadow-[0_0_12px_rgba(241,48,36,0.35)]"
                        : "border-white/15 text-white/80 hover:text-accent hover:border-accent"
                    )}
                  >
                    <div className="h-5 w-5 flex items-center justify-center">{item.icon}</div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/90 border border-white/20 backdrop-blur-md shadow-xl text-white hover:text-accent hover:border-accent transition-colors"
        aria-label="Toggle navigation"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  activeHref,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeHref?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-neutral-950/80 border border-white/15 backdrop-blur-xl px-4 pb-3 shadow-2xl md:flex",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          isActive={activeHref === item.href}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [42, 72, 42]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [42, 72, 42]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 36, 20],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} onClick={(e) => handleSmoothScroll(e, href)}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full bg-neutral-900/90 border transition-all group",
          isActive
            ? "border-accent text-accent shadow-[0_0_14px_rgba(241,48,36,0.35)]"
            : "border-white/10 text-neutral-300 hover:text-white hover:border-accent/60"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-9 left-1/2 w-fit rounded-lg border border-white/15 bg-neutral-950/95 px-2.5 py-1 text-xs whitespace-pre font-medium text-white shadow-xl backdrop-blur-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
        {isActive && (
          <span className="w-1.5 h-1.5 rounded-full bg-accent absolute bottom-1" />
        )}
      </motion.div>
    </a>
  );
}
