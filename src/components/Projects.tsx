import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { portfolioData, ProjectItem } from "../data/portfolio";

export const Projects: React.FC = () => {
  const [expandedPlaceholderIndex, setExpandedPlaceholderIndex] = useState<string | null>(null);

  const handleLiveDemoClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    project: ProjectItem
  ) => {
    if (project.isLivePlaceholder) {
      e.preventDefault();
      setExpandedPlaceholderIndex((prev) =>
        prev === project.index ? null : project.index
      );
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-mono text-[#14532D] mb-2">
              04. Selected Engineering Systems
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141413] tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-[#52514E] max-w-md">
            Production-oriented full-stack architectures, automated testing pipelines, and applied AI systems.
          </p>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="space-y-10">
          {portfolioData.projects.map((project) => {
            const isNoticeOpen = expandedPlaceholderIndex === project.index;

            return (
              <article
                key={project.index}
                className="border border-[#E4E1DA] bg-[#FAF9F6] hover:border-[#141413]/40 transition-colors duration-200 rounded p-6 sm:p-10"
              >
                {/* Top Row: Editorial Numbering + Category Kicker */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-6 border-b border-[#E4E1DA]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-medium text-[#14532D] tabular-nums">
                      {project.index} —
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#52514E]">
                      {project.category}
                    </span>
                  </div>

                  {/* Unboxed Tech Stack with Interpuncts */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#52514E]">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#141413] font-medium">{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[#787672]">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Middle Row: Title + Description + Key Technical Highlights */}
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left: Project Name & Overview */}
                  <div className="lg:col-span-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141413] tracking-tight mb-4 text-balance">
                      {project.title}
                    </h3>
                    <p className="text-base text-[#333230] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Right: Key Technical Highlights */}
                  <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-[#E4E1DA]">
                    <h4 className="text-xs font-mono text-[#52514E] mb-3.5">
                      Key Technical Highlights
                    </h4>
                    <ul className="space-y-2.5 text-sm text-[#333230]">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="font-mono text-xs text-[#14532D] mt-1 shrink-0 tabular-nums"
                          >
                            0{i + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Row: Actions (GitHub & Live Demo) */}
                <div className="pt-6 border-t border-[#E4E1DA] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-[#141413] text-[#FAF9F6] rounded hover:bg-[#14532D] transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <span>GitHub Repository</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveDemoUrl}
                      target={project.isLivePlaceholder ? undefined : "_blank"}
                      rel={project.isLivePlaceholder ? undefined : "noopener noreferrer"}
                      onClick={(e) => handleLiveDemoClick(e, project)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium bg-transparent text-[#141413] border border-[#141413]/25 rounded hover:border-[#141413] hover:bg-[#F3F1EC] transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <span>
                        {project.isLivePlaceholder
                          ? "Live Demo (Placeholder)"
                          : "Live Demo"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#52514E]" />
                    </a>
                  </div>

                  <span className="text-xs font-mono text-[#787672]">
                    Stack: {project.technologies.length} Core Technologies
                  </span>
                </div>

                {/* Optional Inline Notice when Placeholder Live Demo is Clicked */}
                {isNoticeOpen && (
                  <div className="mt-4 pt-4 border-t border-[#E4E1DA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52514E] bg-[#F3F1EC]/70 px-4 py-3 rounded">
                    <div className="flex items-start sm:items-center gap-2.5">
                      <Info className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5 sm:mt-0" />
                      <span>
                        Live deployment link placeholder for{" "}
                        <strong className="text-[#141413]">{project.title}</strong>.
                        Update <code className="font-mono text-[#14532D]">liveDemoUrl</code>{" "}
                        and set <code className="font-mono text-[#14532D]">isLivePlaceholder: false</code>{" "}
                        in <code className="font-mono">src/data/portfolio.ts</code>, or inspect the source on{" "}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-[#141413] hover:text-[#14532D]"
                        >
                          GitHub
                        </a>
                        .
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setExpandedPlaceholderIndex(null)}
                      className="text-xs font-mono text-[#141413] hover:text-[#14532D] underline self-end sm:self-auto whitespace-nowrap shrink-0"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
