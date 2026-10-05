import React from "react";
import { portfolioData } from "../data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#14532D] mb-2">
            03. Engineering & Open-Source Record
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
            Experience
          </h2>
        </div>

        {/* Editorial Timeline List */}
        <div className="relative border-t border-[#E4E1DA] divide-y divide-[#E4E1DA]">
          {portfolioData.experience.map((item, idx) => (
            <article
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              {/* Left Column: Chronology & Index */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#787672] tabular-nums w-6 shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <p className="text-sm font-mono text-[#14532D] tabular-nums font-medium">
                    {item.period}
                  </p>
                  <p className="text-sm text-[#52514E] mt-0.5 font-medium">
                    {item.organization}
                  </p>
                </div>
              </div>

              {/* Right Column: Role Title & Exact Scope */}
              <div className="md:col-span-8 md:pl-6 md:border-l md:border-[#E4E1DA] group-hover:md:border-[#14532D] transition-colors duration-150">
                <h3 className="text-lg sm:text-xl font-semibold text-[#141413] tracking-tight mb-2.5">
                  {item.role}
                </h3>
                <p className="text-sm sm:text-base text-[#333230] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
