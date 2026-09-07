import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Zap, Activity, Bot, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/siteData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIcon = () => {
    switch (project.visualTheme) {
      case 'power': return <Zap className="text-[#C83E3D]" size={28} />;
      case 'circuit': return <Cpu className="text-[#C83E3D]" size={28} />;
      case 'ai': return <Activity className="text-[#C83E3D]" size={28} />;
      case 'automation': return <Bot className="text-[#C83E3D]" size={28} />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#09090B]/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-[#F4F0EA] border border-[#09090B]/30 w-full max-w-4xl p-6 md:p-12 relative shadow-2xl space-y-8 my-auto text-[#09090B]"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between border-b border-[#09090B]/15 pb-4">
            <div className="flex items-center space-x-3 font-mono-editorial text-xs text-[#C83E3D] font-bold">
              {renderIcon()}
              <span>PROJECT SPREAD N° {project.number}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-[#09090B]/20 text-[#09090B] hover:bg-[#C83E3D] hover:text-white hover:border-[#C83E3D] transition-colors focus:outline-none"
              aria-label="Close project spread"
              data-cursor="CLOSE"
            >
              <X size={20} />
            </button>
          </div>

          {/* Project Title & Timeline */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono-editorial text-xs text-[#09090B]/60 mb-2">
              <span>{project.subtitle}</span>
              <span>TIMELINE: {project.timeline}</span>
            </div>
            <h3 className="font-display-editorial font-extrabold text-3xl sm:text-5xl text-[#09090B] uppercase tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Overview */}
          <div className="bg-[#EAE6DF] border border-[#09090B]/15 p-6">
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-2 font-bold">
              EXECUTIVE OVERVIEW
            </span>
            <p className="font-sans-editorial text-sm md:text-base text-[#09090B]/90 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* System Architecture Specifications */}
          <div className="space-y-3">
            <h4 className="font-mono-editorial text-xs text-[#09090B]/70 uppercase tracking-widest flex items-center space-x-2 font-bold">
              <Layers size={14} className="text-[#C83E3D]" />
              <span>SYSTEM ARCHITECTURE & MODULES</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.details.architecture.map((arch, i) => (
                <div key={i} className="bg-[#EAE6DF] border border-[#09090B]/15 p-4 font-sans-editorial text-xs text-[#09090B]/85 flex items-start space-x-3">
                  <span className="font-mono-editorial text-[#C83E3D] font-bold">›</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="font-mono-editorial text-xs text-[#09090B]/70 uppercase tracking-widest font-bold">
                ENGINEERING HIGHLIGHTS
              </h4>
              <div className="space-y-2">
                {project.details.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs font-sans-editorial text-[#09090B]/80">
                    <CheckCircle2 size={14} className="text-[#C83E3D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="font-mono-editorial text-xs text-[#09090B]/70 uppercase tracking-widest font-bold">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2 font-mono-editorial text-xs text-[#09090B]">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-[#EAE6DF] border border-[#09090B]/20 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer inside modal */}
          <div className="pt-4 border-t border-[#09090B]/15 flex items-center justify-between font-mono-editorial text-[11px] text-[#09090B]/50">
            <span>PRESS ESCAPE TO CLOSE SPREAD</span>
            <span>PRANAV KAMBLE // PORTFOLIO</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
