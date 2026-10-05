import React, { useState } from "react";
import { portfolioData, SkillGroup } from "../data/portfolio";

type SkillFilter = "all" | "core" | "web" | "ai-tools";

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("all");

  const filterOptions: { id: SkillFilter; label: string }[] = [
    { id: "all", label: "All Domains (6)" },
    { id: "core", label: "Languages & Core CS" },
    { id: "web", label: "Full-Stack Web & Databases" },
    { id: "ai-tools", label: "AI & Engineering Practices" },
  ];

  const visibleGroups: SkillGroup[] =
    activeFilter === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((g) => g.domain === activeFilter);

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header + Interactive Domain Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono text-[#14532D] mb-2">
              02. Technical Capabilities
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
              Technical Skills
            </h2>
          </div>

          {/* Functional Segmented Filter Controls */}
          <div
            role="group"
            aria-label="Filter skill categories"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3F1EC] border border-[#E4E1DA] rounded self-start md:self-auto"
          >
            {filterOptions.map((option) => {
              const isSelected = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveFilter(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-[#FAF9F6] text-[#141413] shadow-xs border border-[#E4E1DA]/80"
                      : "text-[#52514E] hover:text-[#141413]"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Typography-Based Ledger Layout (Zero Pill Enclosures) */}
        <div className="border-t border-[#E4E1DA] divide-y divide-[#E4E1DA]">
          {visibleGroups.map((group, index) => (
            <div
              key={group.id}
              className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline transition-colors duration-150 hover:bg-[#F3F1EC]/40"
            >
              {/* Index & Category Name */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#787672] tabular-nums w-6 shrink-0">
                  0{index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#141413] tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Unboxed Typography List with Interpunct Separators */}
              <div className="md:col-span-8 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-sm sm:text-base text-[#141413]">
                {group.items.map((skill, idx) => (
                  <React.Fragment key={skill}>
                    <span className="leading-relaxed">{skill}</span>
                    {idx < group.items.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-[#787672] select-none"
                      >
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
