"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-2xl backdrop-blur-sm bg-white/10 border border-white/50 p-6">
      <div className="flex items-center gap-x-3 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          GitHub <span className="text-accent">Contributions</span>
        </h3>
        <span className="text-sm uppercase tracking-wider bg-accent/15 border border-accent/30 text-accent px-4 py-0.5 rounded-full font-medium">
          @EDR32
        </span>
      </div>

      <div className="w-full overflow-x-auto flex justify-center py-2">
        <GitHubCalendar
          username="EDR32"
          blockSize={24}
          blockMargin={4}
          fontSize={13}
          colorScheme="dark"
          theme={{
            dark: [
              "#161b22", // empty block
              "#0e4429", // level 1
              "#006d32", // level 2
              "#26a641", // level 3
              "#f13024", // level 4 (accent color)
            ],
          }}
        />
      </div>
    </div>
  );
}
