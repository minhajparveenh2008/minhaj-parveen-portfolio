import React from "react";
import { portfolioData } from "../data/portfolio";

export const Achievements: React.FC = () => {
  const codingMilestones = portfolioData.achievements.filter(
    (item) => item.type === "academic-coding"
  );
  const hackathons = portfolioData.achievements.filter(
    (item) => item.type === "hackathon"
  );

  return (
    <section
      id="achievements"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono text-[#14532D] mb-2">
            05. Competitive Milestones & Recognition
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
            Achievements
          </h2>
        </div>

        {/* Part 1: Quantitative & Competitive Distinctions */}
        <div className="border-t border-[#E4E1DA] divide-y divide-[#E4E1DA]">
          {codingMilestones.map((item, idx) => (
            <div
              key={item.id}
              className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline"
            >
              {/* Highlighted Number / Metric */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#787672] tabular-nums w-6 shrink-0">
                  0{idx + 1}
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#14532D] tabular-nums tracking-tight">
                  {item.metric}
                </span>
              </div>

              {/* Exact Description */}
              <div className="md:col-span-8">
                <p className="text-base sm:text-lg text-[#141413] font-medium leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Hackathon Finalist & Participation Record */}
        <div className="mt-14 pt-10 border-t border-[#E4E1DA]">
          <h3 className="text-xs font-mono text-[#52514E] mb-6">
            Hackathon Finals & Participation
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathons.map((item) => (
              <div
                key={item.id}
                className="border border-[#E4E1DA] bg-[#F3F1EC]/50 rounded p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-mono text-[#14532D] mb-1.5">
                    {item.metric}
                  </p>
                  <h4 className="text-base font-semibold text-[#141413] tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#52514E] mt-4 pt-3 border-t border-[#E4E1DA]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
