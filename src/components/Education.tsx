import React from "react";
import { portfolioData } from "../data/portfolio";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#14532D] mb-2">
            07. Academic Foundation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
            Education
          </h2>
        </div>

        {/* Clean Editorial Education Rows */}
        <div className="border-t border-[#E4E1DA] divide-y divide-[#E4E1DA]">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={edu.degree}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left: Period & Location */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#787672] tabular-nums w-6 shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <p className="text-sm font-mono text-[#14532D] tabular-nums font-medium">
                    {edu.period}
                  </p>
                  <p className="text-xs font-mono text-[#52514E] mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>

              {/* Right: Degree, Institution & Academic Metrics */}
              <div className="md:col-span-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141413] tracking-tight mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base text-[#333230] font-medium">
                  {edu.institution}
                </p>

                {edu.metrics && edu.metrics.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#E4E1DA] flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono">
                    {edu.metrics.map((metric, mIdx) => (
                      <React.Fragment key={metric}>
                        <span className="text-[#141413] font-semibold tabular-nums">
                          {metric}
                        </span>
                        {mIdx < edu.metrics!.length - 1 && (
                          <span aria-hidden="true" className="text-[#787672]">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
