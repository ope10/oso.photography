"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Calendar, User } from "lucide-react";
import { Project } from "@/types";

interface LightboxProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function Lightbox({ project, projects, onClose, onSelectProject }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (project) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-xl p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close dialog"
        className="absolute top-6 right-6 z-50 p-3 rounded-full border border-dark-700 bg-dark-900/80 text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full border border-dark-700 bg-dark-900/80 text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full border border-dark-700 bg-dark-900/80 text-dark-300 hover:text-white hover:bg-dark-800 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main Lightbox Content Card */}
      <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-dark-700 bg-dark-900 shadow-2xl flex flex-col lg:flex-row">
        {/* Photo View */}
        <div className="relative w-full lg:w-3/5 min-h-[360px] sm:min-h-[480px] bg-dark-950 flex items-center justify-center p-4">
          <div className="relative w-full h-full min-h-[360px] sm:min-h-[480px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Project Details Sidebar */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-dark-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full border border-dark-700 bg-dark-800 text-[11px] font-semibold uppercase tracking-wider text-dark-300">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-dark-400">
                {currentIndex + 1} of {projects.length}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {project.title}
            </h3>

            <p className="text-sm text-dark-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="space-y-3 pt-6 border-t border-dark-800 text-xs">
              {project.client && (
                <div className="flex items-center justify-between text-dark-400">
                  <span className="flex items-center gap-1.5 text-dark-500">
                    <User className="w-3.5 h-3.5" /> Client
                  </span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-dark-400">
                <span className="flex items-center gap-1.5 text-dark-500">
                  <Calendar className="w-3.5 h-3.5" /> Date
                </span>
                <span className="text-white font-medium">{project.date}</span>
              </div>

              {project.camera && (
                <div className="flex items-center justify-between text-dark-400">
                  <span className="flex items-center gap-1.5 text-dark-500">
                    <Camera className="w-3.5 h-3.5" /> Camera
                  </span>
                  <span className="text-white font-medium">{project.camera}</span>
                </div>
              )}

              {project.lens && (
                <div className="flex items-center justify-between text-dark-400">
                  <span className="text-dark-500">Lens</span>
                  <span className="text-white font-medium">{project.lens}</span>
                </div>
              )}

              {project.iso && (
                <div className="flex items-center justify-between text-dark-400">
                  <span className="text-dark-500">Settings</span>
                  <span className="text-white font-medium font-mono text-[11px]">{project.iso}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-dark-800 flex items-center justify-between">
            <span className="text-[11px] text-dark-400 uppercase tracking-widest">
              High-Res Digital Archive
            </span>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-white hover:text-dark-300 font-semibold transition-colors"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
