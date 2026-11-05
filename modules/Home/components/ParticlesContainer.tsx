"use client";

import { useMemo, useCallback, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const emptySubscribe = () => () => {};

const ParticlesContainer = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isLight = mounted && resolvedTheme === "light";

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: isLight ? "#B8860B" : "#FFDD33",
        },
        links: {
          color: isLight ? "#B48228" : "#FFE566",
          distance: 150,
          enable: true,
          opacity: isLight ? 0.6 : 0.35,
          width: isLight ? 1.2 : 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 45,
        },
        opacity: {
          value: isLight ? 0.8 : 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isLight]
  );

  return (
    <div className="w-full h-full absolute translate-z-0 pointer-events-none">
      <ParticlesProvider init={init}>
        <Particles
          key={isLight ? "particles-light" : "particles-dark"}
          id="tsparticles"
          className="w-full h-full"
          options={options}
        />
      </ParticlesProvider>
    </div>
  );
};

export default ParticlesContainer;
