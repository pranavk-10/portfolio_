import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteData, ProjectItem } from '../data/siteData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectArchive: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { projects } = siteData;

  return (
    <section id="projects" className="py-24 bg-[#F4F0EA] text-[#09090B] border-b border-[#09090B]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#09090B]/20 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1 font-bold">
              04 — SELECTED ENGINEERING & AI PROJECTS
            </span>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-[#09090B] tracking-tight uppercase">
              PROJECT ARCHIVE
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-[#09090B]/70 max-w-sm">
            Interactive editorial showcase covering power electronics, Verilog digital microprocessors, RAG AI systems, and browser automation platforms.
          </div>
        </div>

        {/* Asymmetrical Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#EAE6DF] border border-[#09090B]/15 p-8 flex flex-col justify-between cursor-pointer group hover:border-[#C83E3D] transition-all duration-300 relative min-h-[380px] shadow-sm hover:shadow-md"
              data-cursor="EXPAND"
            >
              {/* Corner Tag */}
              <div className="flex items-center justify-between font-mono-editorial text-xs border-b border-[#09090B]/10 pb-4 mb-6">
                <span className="text-[#C83E3D] font-bold">PROJECT {project.number}</span>
                <span className="text-[#09090B]/60">{project.timeline}</span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-3 mb-6">
                <h3 className="font-display-editorial font-bold text-2xl sm:text-3xl text-[#09090B] group-hover:text-[#C83E3D] transition-colors uppercase tracking-tight flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#C83E3D]" size={24} />
                </h3>
                <p className="font-mono-editorial text-xs text-[#09090B]/70 uppercase tracking-wide">
                  {project.subtitle}
                </p>
                <p className="font-sans-editorial text-xs sm:text-sm text-[#09090B]/80 leading-relaxed pt-2">
                  {project.summary}
                </p>
              </div>

              {/* Tech Tags & CTA */}
              <div className="pt-6 border-t border-[#09090B]/10 flex flex-wrap items-center justify-between gap-4 font-mono-editorial text-[11px]">
                <div className="flex flex-wrap gap-2 text-[#09090B]/80">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="bg-[#F4F0EA] border border-[#09090B]/15 px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[#C83E3D] font-bold group-hover:underline flex items-center space-x-1">
                  <span>OPEN SPREAD</span>
                  <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Component for full-screen spread */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
