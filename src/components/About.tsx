import React from "react";
import { portfolioData } from "../data/portfolio";

export const About: React.FC = () => {
  const { summary, quickProfile, stats } = portfolioData.about;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#14532D] mb-2">
            01. Profile & Academic Standing
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
            Professional Summary
          </h2>
        </div>

        {/* Two-Column Editorial Layout: Narrative + Quick Profile Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#141413] leading-[1.8] max-w-2xl font-normal">
              {summary}
            </p>

            <div className="mt-8 pt-6 border-t border-[#E4E1DA] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-[#52514E]">
              <span className="font-medium text-[#141413]">Core Focus:</span>
              <span>Full-Stack Systems (MERN)</span>
              <span aria-hidden="true">·</span>
              <span>AI-Driven Applications (Gemini, RAG, Agentic AI)</span>
              <span aria-hidden="true">·</span>
              <span>Data Structures & OOP in Java</span>
            </div>
          </div>

          {/* Quick Profile Ledger Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#F3F1EC]/70 border border-[#E4E1DA] rounded p-6 sm:p-7">
            <h3 className="text-xs font-mono text-[#52514E] pb-4 border-b border-[#E4E1DA] mb-4">
              Quick Profile
            </h3>

            <dl className="divide-y divide-[#E4E1DA] text-sm">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Degree</dt>
                <dd className="text-[#141413] font-medium text-right">
                  {quickProfile.degree}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Institution</dt>
                <dd className="text-[#141413] font-medium text-right">
                  {quickProfile.college}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Affiliation</dt>
                <dd className="text-[#141413] text-right">
                  {quickProfile.group}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Location</dt>
                <dd className="text-[#141413] text-right">
                  {quickProfile.location}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Academic Tenure</dt>
                <dd className="text-[#141413] font-mono tabular-nums text-right">
                  {quickProfile.duration}
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Cumulative GPA</dt>
                <dd className="text-[#14532D] font-mono font-medium tabular-nums text-right">
                  CGPA: {quickProfile.cgpa}
                </dd>
              </div>
              <div className="pt-2.5 flex justify-between gap-4">
                <dt className="text-[#52514E]">Semester 2 Standing</dt>
                <dd className="text-[#141413] font-mono font-medium tabular-nums text-right">
                  Sem 2 GPA: {quickProfile.sem2Gpa}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Simple Editorial Statistics Row (Unboxed hairlines, tabular numerals) */}
        <div className="mt-16 pt-10 border-t border-[#E4E1DA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E4E1DA]">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={idx === 0 ? "lg:pr-8" : "lg:px-8"}
              >
                <p className="font-serif text-3xl sm:text-4xl text-[#141413] tabular-nums tracking-tight mb-1.5">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#141413]">
                  {stat.label}
                </p>
                <p className="text-xs text-[#52514E] mt-1">
                  {stat.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
