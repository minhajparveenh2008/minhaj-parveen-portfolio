import React from "react";
import { portfolioData } from "../data/portfolio";

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 bg-[#FAF9F6] text-sm text-[#52514E]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: Identity */}
        <div>
          <p className="font-semibold text-[#141413] tracking-tight">
            {personal.name}
          </p>
          <p className="text-xs text-[#52514E] mt-0.5">{personal.role}</p>
        </div>

        {/* Center: GitHub | LinkedIn | Email */}
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#141413] hover:text-[#14532D] transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-[#787672]">
            |
          </span>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#141413] hover:text-[#14532D] transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-[#787672]">
            |
          </span>
          <a
            href={`mailto:${personal.email}`}
            className="text-[#141413] hover:text-[#14532D] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-xs font-mono text-[#787672] tabular-nums">
          © 2026 {personal.name}
        </p>
      </div>
    </footer>
  );
};
