"use client";

import React, { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export default function GithubActivity() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isLight = mounted && resolvedTheme === "light";

  return (
    <div className="relative w-full">
      {/* Cahaya putih di bawah card */}
      <div className="hidden dark:block absolute -bottom-3 inset-x-12 h-8 bg-white/20 blur-xl rounded-full pointer-events-none" />

      <div className="relative overflow-hidden w-full flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 p-6 sm:p-8 shadow-sm dark:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.08)] transition-colors duration-300">
        {/* Garis cahaya putih di bawah card */}
        <div className="hidden dark:block absolute bottom-0 inset-x-8 h-0.5 bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none" />
        <div className="hidden dark:block absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/12 via-white/3 to-transparent pointer-events-none" />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
            GitHub <span className="text-accent-darker dark:text-accent">Contributions</span>
          </h3>
          <span className="text-sm uppercase tracking-wider bg-accent/25 dark:bg-accent/15 border border-accent/40 text-black dark:text-accent px-3.5 py-0.5 rounded-full font-bold">
            @EDR32
          </span>
        </div>

        <div className="w-full overflow-x-auto flex justify-center py-2 custom-scrollbar">
          {mounted && (
            <GitHubCalendar
              username="EDR32"
              blockSize={15}
              blockMargin={4}
              fontSize={12}
              colorScheme={isLight ? "light" : "dark"}
              tooltips={{
                activity: {
                  text: (activity) => {
                    const [year, month, day] = activity.date.split("-").map(Number);
                    const dateObj = new Date(year, month - 1, day);
                    const formattedDate = dateObj.toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    });

                    if (activity.count === 0) {
                      return `Tidak ada kontribusi pada ${formattedDate}`;
                    }
                    return `${activity.count} kontribusi pada ${formattedDate}`;
                  },
                  withArrow: true,
                  hoverRestMs: 40,
                  offset: 8,
                },
              }}
              theme={{
                dark: [
                  "#161619", // empty
                  "#3d3500", // level 1
                  "#7a6800", // level 2
                  "#c2a500", // level 3
                  "#FFDD33", // level 4
                ],
                light: [
                  "#f0f2f5", // empty
                  "#fef3c7", // level 1
                  "#fde047", // level 2
                  "#eab308", // level 3
                  "#ca8a04", // level 4
                ],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
