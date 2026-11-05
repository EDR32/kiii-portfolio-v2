"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { ProjectItem } from "../@types/type";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetail: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <Card
      underglow
      hoverLift
      onClick={() => onOpenDetail(project)}
      className="cursor-pointer flex flex-col justify-between h-full"
    >
      <div className="relative w-full h-64 sm:h-64 overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          size="sm"
          variant="accent"
          className="absolute top-3 left-3"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </Badge>
      </div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2.5">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {project.shortDesc}
          </p>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenDetail(project)}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent/15 hover:bg-accent text-accent hover:text-accent-foreground border border-accent/40 hover:border-accent px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-xs hover:shadow-[0_0_15px_rgba(255,221,51,0.3)] group/btn"
          >
            <span>Lihat Detail</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </Card>
  );
}
