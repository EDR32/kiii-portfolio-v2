"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import { ProjectItem } from "../@types/type";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetail: (project: ProjectItem) => void;
}

export default function ProjectCard({
  project,
  onOpenDetail,
}: ProjectCardProps) {
  return (
    <div className="bg-[rgba(65,47,123,0.15)] border border-white/10 rounded-2xl overflow-hidden hover:border-accent/40 hover:bg-[rgba(89,65,169,0.22)] transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between group hover:-translate-y-1.5">
      <div className="relative w-full h-64 sm:h-64 overflow-hidden bg-black/40">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-accent font-medium flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2.5">
            {project.title}
          </h3>

          <p className="text-sm text-white/70 leading-relaxed mb-6">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenDetail(project)}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent/15 hover:bg-accent text-accent hover:text-white border border-accent/40 hover:border-accent px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-accent/30 group/btn"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
