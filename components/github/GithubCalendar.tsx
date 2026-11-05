"use client";

import React, { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

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
    <Card
      underglow
      className="w-full flex flex-col items-center justify-center p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            GitHub <span className="text-accent">Contributions</span>
          </h3>
          <Badge size="sm" variant="accent" uppercase>
            @EDR32
          </Badge>
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
      </Card>
    );
  }
