import React from "react";
import { portfolioData } from "../data/portfolio";

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 sm:py-24 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[#14532D] mb-2">
            06. Verified Credentials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#141413] tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Clean 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="border border-[#E4E1DA] bg-[#FAF9F6] rounded p-6 sm:p-7 flex flex-col justify-between hover:border-[#141413]/40 transition-colors duration-150"
            >
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <span className="text-xs font-mono text-[#787672] tabular-nums">
                  0{idx + 1}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-[#52514E]">
                  <span className="text-[#141413] font-medium">
                    {cert.issuerOrCode}
                  </span>
                  {cert.distinction && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#14532D] font-medium">
                        {cert.distinction}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141413] tracking-tight">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
