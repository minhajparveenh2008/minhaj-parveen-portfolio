import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Hero: React.FC = () => {
  const { hero, personal, about } = portfolioData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-[#E4E1DA]"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Quiet Unboxed Editorial Kicker */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#52514E] mb-8 font-mono">
          <span>{personal.location}</span>
          <span aria-hidden="true">·</span>
          <span>{about.quickProfile.college} ({about.quickProfile.group})</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">CGPA {about.quickProfile.cgpa}</span>
        </div>

        {/* Main Typographic Anchor */}
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#14532D] mb-3">
            {hero.name}
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-[#141413] leading-[1.06] text-balance mb-6">
            {hero.role}
          </h1>

          <p className="text-base sm:text-xl text-[#333230] leading-relaxed max-w-2xl font-normal mb-10">
            {hero.introduction}
          </p>

          {/* Actions Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href={hero.primaryCta.href}
              onClick={(e) => scrollToSection(e, hero.primaryCta.href)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#14532D] text-[#FAF9F6] rounded hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
            >
              <span>{hero.primaryCta.label}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={hero.secondaryCta.href}
              onClick={(e) => scrollToSection(e, hero.secondaryCta.href)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-transparent text-[#141413] border border-[#141413]/25 rounded hover:border-[#141413] hover:bg-[#F3F1EC] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
            >
              <span>{hero.secondaryCta.label}</span>
            </a>

            <a
              href={hero.githubCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-[#52514E] hover:text-[#141413] transition-colors duration-150 whitespace-nowrap shrink-0 group"
            >
              <span className="border-b border-transparent group-hover:border-[#141413]">
                {hero.githubCta.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#787672] group-hover:text-[#141413] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Hairline Contact Strip */}
        <div className="mt-16 pt-6 border-t border-[#E4E1DA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#52514E]">
          <div>
            <span className="block text-[11px] font-mono text-[#787672] mb-0.5">
              Direct Email
            </span>
            <a
              href={`mailto:${personal.email}`}
              className="text-[#141413] hover:text-[#14532D] transition-colors font-mono"
            >
              {personal.email}
            </a>
          </div>
          <div>
            <span className="block text-[11px] font-mono text-[#787672] mb-0.5">
              GitHub Profile
            </span>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141413] hover:text-[#14532D] transition-colors font-mono"
            >
              {personal.githubDisplay}
            </a>
          </div>
          <div>
            <span className="block text-[11px] font-mono text-[#787672] mb-0.5">
              LinkedIn Profile
            </span>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141413] hover:text-[#14532D] transition-colors font-mono"
            >
              {personal.linkedinDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
