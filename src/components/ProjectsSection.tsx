import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Eye, Play, Terminal } from 'lucide-react';
import {
  PROJECT_FILTERS,
  PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolioData';
import { ProjectVisualBanner } from './ProjectVisualBanner';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'code' | 'demo'>('overview');

  const filteredProjects =
    selectedFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedFilter);

  const openModal = (project: ProjectItem, tab: 'overview' | 'code' | 'demo') => {
    setModalTab(tab);
    setActiveProject(project);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-20 border-t border-white/[0.06]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[#cabeff]">
            Featured Builds &amp; Learning Labs
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#e0e2ed]"
          >
            Projects &amp; Prototypes
          </h2>
          <p className="text-sm sm:text-base text-[#c9c4d8] max-w-2xl">
            Hands-on programming builds in Python, C, and web utilities alongside conceptual
            Agentic AI exploration.
          </p>
        </div>

        <p className="font-mono text-xs text-[#a2e7ff] whitespace-nowrap shrink-0">
          {filteredProjects.length} of {PROJECTS.length} shown
        </p>
      </div>

      {/* Interactive Category Filter Bar */}
      <div
        role="group"
        aria-label="Filter projects by technology"
        className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar"
      >
        {PROJECT_FILTERS.map((filter) => {
          const isActive = selectedFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setSelectedFilter(filter.id)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-lg text-xs font-mono whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff] ${
                isActive
                  ? 'bg-[#947dff] text-[#1c0062] font-semibold shadow-[0_0_16px_rgba(148,125,255,0.35)]'
                  : 'bg-[#1d2027] text-[#c9c4d8] border border-white/[0.07] hover:text-[#e0e2ed] hover:bg-[#272a32]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-[#181b23] border border-white/[0.08] hover:border-[#947dff]/45 overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-md"
            >
              <div>
                {/* Visual Preview Canvas */}
                <div className="relative h-44 bg-[#0b0e15] overflow-hidden border-b border-white/[0.06]">
                  <ProjectVisualBanner theme={project.visualTheme} />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#181b23] via-transparent to-transparent opacity-80"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="font-mono text-xs text-[#a2e7ff]">
                    {project.subtitle} · {project.status}
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#e0e2ed] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#c9c4d8] leading-relaxed">
                    {project.summary}
                  </p>

                  <p className="font-mono text-xs text-[#938ea1] pt-1">
                    {project.concepts.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => openModal(project, 'code')}
                  className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#272a32] hover:bg-[#32353d] border border-white/[0.07] text-xs font-medium text-[#e0e2ed] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                  <span>View Code</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    openModal(project, project.hasInteractiveVisualizer ? 'demo' : 'overview')
                  }
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#947dff]/20 hover:bg-[#947dff]/30 border border-[#947dff]/40 text-xs font-medium text-[#e6deff] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cabeff]"
                >
                  {project.hasInteractiveVisualizer ? (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#a2e7ff]" aria-hidden="true" />
                      <span>Try Live Demo</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5 text-[#cabeff]" aria-hidden="true" />
                      <span>Explore Details</span>
                    </>
                  )}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-[#181b23] border border-white/[0.07] p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#272a32] flex items-center justify-center mx-auto text-[#c9c4d8]">
            <Terminal className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold text-[#e0e2ed]">No Projects Found</h3>
          <p className="text-sm text-[#938ea1] max-w-sm mx-auto">
            No builds match the selected filter. Reset to view all projects.
          </p>
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className="px-4 py-2 rounded-lg bg-[#947dff] text-[#1c0062] text-xs font-semibold cursor-pointer"
          >
            Show All Projects
          </button>
        </div>
      )}

      <ProjectModal
        project={activeProject}
        initialTab={modalTab}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
