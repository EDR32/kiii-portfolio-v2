"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import { ProjectItem } from "../@types/type";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetail: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <div className="relative group/work-card h-full">
      {/* Cahaya putih di bawah card */}
      <div className="hidden dark:block absolute -bottom-3 inset-x-8 h-8 bg-white/20 blur-xl rounded-full pointer-events-none group-hover/work-card:bg-white/40 group-hover/work-card:h-10 transition-all duration-500" />
      <div className="hidden dark:block absolute -bottom-1 inset-x-14 h-4 bg-white/35 blur-md rounded-full pointer-events-none group-hover/work-card:bg-white/60 transition-all duration-500" />

      <div className="relative overflow-hidden bg-white dark:bg-[#121215]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 rounded-2xl hover:border-black/20 dark:hover:border-white/30 transition-all duration-300 shadow-sm dark:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)] flex flex-col justify-between group hover:-translate-y-1.5 h-full">
        {/* Gradient putih di bawah card */}
        <div className="hidden dark:block absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white/14 via-white/3 to-transparent pointer-events-none group-hover:from-white/20 transition-all duration-500" />

        {/* Garis cahaya putih di bawah card */}
        <div className="hidden dark:block absolute bottom-0 inset-x-4 h-0.5 bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none" />

        <div className="relative w-full h-64 sm:h-64 overflow-hidden bg-black/10 dark:bg-black/40">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-xs text-zinc-900 dark:text-accent font-bold flex items-center gap-1.5 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>
        </div>

        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-accent-darker dark:group-hover:text-accent transition-colors duration-300 mb-2.5">
              {project.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-white/70 leading-relaxed mb-6">
              {project.shortDesc}
            </p>
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenDetail(project)}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent/20 hover:bg-accent text-black dark:text-accent dark:hover:text-black border border-accent/50 hover:border-accent px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-xs hover:shadow-[0_0_15px_rgba(255,221,51,0.3)] group/btn"
            >
              <span>Lihat Detail</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
