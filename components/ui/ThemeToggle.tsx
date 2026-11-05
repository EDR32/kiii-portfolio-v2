"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const handleToggle = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    if (
      typeof document === "undefined" ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

      document.documentElement.animate(
        [
          {
            clipPath: "circle(0px at 100% 0%)",
          },
          {
            clipPath: `circle(${maxRadius * 1.05}px at 100% 0%)`,
          },
        ],
        {
          duration: 2000,
          easing: "cubic-bezier(0.2, 0, 0, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-muted border border-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Aktifkan Tema Terang" : "Aktifkan Tema Gelap"}
      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-card/80 hover:bg-card text-foreground transition-all duration-300 focus:outline-hidden cursor-pointer shadow-xs hover:border-accent hover:shadow-[0_0_12px_rgba(255,221,51,0.35)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-accent"
          >
            <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center text-amber-500"
          >
            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
