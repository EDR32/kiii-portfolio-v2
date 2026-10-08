"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalDialog from "@/components/layout/ModalDialog";
import { ProjectItem } from "../@types/type";
import { ChevronLeft, ChevronRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevProject, setPrevProject] = useState(project);

  if (project !== prevProject) {
    setPrevProject(project);
    setActiveImageIndex(0);
  }

  if (!project) return null;

  const images =
    project.images && project.images.length > 0 ? project.images : [project.coverImage];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <ModalDialog
      open={isOpen}
      handleClose={onClose}
      title={project.title}
      desc={project.category}
      maxWidth="lg"
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>{images.length} tangkapan layar tersedia</span>
          </div>
          <div className="flex items-center gap-3">
            {/* {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-md shadow-accent/20 cursor-pointer"
              >
                <span>Kunjungi Repositori</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )} */}
            <button
              type="button"
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-y-6 pt-2">
        <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-xl group">
          <div className="relative w-auto h-90 sm:h-96 flex items-center justify-center">
            <Image
              src={images[activeImageIndex]}
              alt={`${project.title} - Screenshot ${activeImageIndex + 1}`}
              fill
              className="transition-all duration-300"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Gambar Sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-accent text-white p-2.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {images.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Gambar Selanjutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-accent text-white p-2.5 rounded-full border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-xs text-white/90 border border-white/15 flex items-center gap-1.5 shadow-md">
              <span className="font-semibold text-accent">{activeImageIndex + 1}</span>
              <span>/</span>
              <span>{images.length}</span>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? "border-accent scale-105 shadow-md shadow-accent/30"
                    : "border-white/15 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
          <h4 className="text-base sm:text-lg font-bold text-white mb-2.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            Deskripsi Proyek
          </h4>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">{project.fullDesc}</p>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Fitur Utama
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 bg-[rgba(65,47,123,0.15)] border border-white/10 p-3 rounded-xl text-xs sm:text-sm text-white/85"
                >
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" />
              Teknologi &amp; Arsitektur
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-accent/10 border border-accent/25 text-white/90 px-4 py-0.5 rounded-xl text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ModalDialog>
  );
}
