import { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Eye, Github, Play, Terminal } from 'lucide-react';
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
      className="py-16 sm:py-20 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            Featured Builds &amp; Case Studies
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            Projects &amp; Prototypes
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Hands-on programming builds in Python, C, and TypeScript alongside conceptual Agentic
            AI exploration—each documenting its core challenge and solution.
          </p>
        </div>

        <p className="font-mono text-xs tabular-nums text-[var(--accent-secondary)] whitespace-nowrap shrink-0">
          {filteredProjects.length} of {PROJECTS.length} shown
        </p>
      </div>

      {/* Category Filter Bar */}
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
              className={`px-4 py-2 rounded-lg text-xs font-mono whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                isActive
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-semibold shadow-[var(--shadow-glow)]'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
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
              className="group theme-card border border-[var(--border-subtle)] hover:border-[var(--border-strong)] overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-[var(--shadow-card)] theme-surface"
            >
              <div>
                {/* Visual Preview Banner */}
                <div className="relative h-44 sm:h-48 lg:h-52 bg-[var(--bg-code)] overflow-hidden border-b border-[var(--border-subtle)]">
                  <ProjectVisualBanner theme={project.visualTheme} />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <p className="font-mono text-xs text-[var(--accent)]">
                    {project.subtitle} · {project.status}
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution Snapshot */}
                  <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-3.5 space-y-2 text-xs">
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-mono font-semibold text-[var(--accent)]">
                        Challenge:
                      </span>{' '}
                      {project.challenge}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-mono font-semibold text-[var(--accent-secondary)]">
                        Solution:
                      </span>{' '}
                      {project.solution}
                    </p>
                  </div>

                  <p className="font-mono text-xs text-[var(--text-muted)] pt-1">
                    {project.concepts.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => openModal(project, 'overview')}
                  className="flex-1 min-w-[115px] inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Case Study</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal(project, 'code')}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                  <span>Code</span>
                </button>

                {project.hasInteractiveVisualizer && (
                  <button
                    type="button"
                    onClick={() => openModal(project, 'demo')}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[var(--accent-soft)] border border-[var(--border-strong)] text-xs font-medium text-[var(--text-primary)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <Play className="w-3.5 h-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span>Live Demo</span>
                  </button>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors whitespace-nowrap"
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[var(--bg-elevated)] flex items-center justify-center mx-auto text-[var(--text-secondary)]">
            <Terminal className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-base font-semibold text-[var(--text-primary)]">No Projects Found</h3>
          <p className="text-sm text-[var(--text-muted)] max-w-sm mx-auto">
            No builds match the selected filter. Reset to view all projects.
          </p>
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--accent-contrast)] text-xs font-semibold cursor-pointer"
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
