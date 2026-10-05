import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = [
      "about",
      "skills",
      "experience",
      "projects",
      "achievements",
      "certifications",
      "education",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Map certifications into education/achievements or keep active state accurate
            if (id === "certifications") {
              setActiveSection("education");
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#E4E1DA]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#top"
          className="text-sm sm:text-base font-semibold tracking-tight text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D]"
        >
          {portfolioData.personal.brandName}
        </a>

        {/* Zone 2: Clean text navigation links with subtle active/hover underlines */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm"
        >
          {portfolioData.navigation.map((item, idx) => {
            const sectionKey = item.href.replace("#", "");
            const isActive = activeSection === sectionKey;
            const hideOnMedium = idx >= 5 ? "hidden xl:inline-block" : "";

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`${hideOnMedium} py-1 whitespace-nowrap shrink-0 transition-colors duration-150 border-b-2 ${
                  isActive
                    ? "text-[#141413] font-medium border-[#14532D]"
                    : "text-[#52514E] border-transparent hover:text-[#141413] hover:border-[#141413]/30"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 ${
              activeSection === "contact"
                ? "bg-[#0F3F22] text-[#FAF9F6]"
                : "bg-[#141413] text-[#FAF9F6] hover:bg-[#14532D]"
            }`}
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#141413] hover:bg-[#F3F1EC] rounded transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E1DA] bg-[#FAF9F6] px-5 pt-3 pb-6">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {[
              ...portfolioData.navigation,
              { label: "Contact", href: "#contact" },
            ].map((item) => {
              const sectionKey = item.href.replace("#", "");
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`py-2.5 text-sm border-b border-[#E4E1DA]/60 flex items-center justify-between transition-colors duration-150 ${
                    isActive
                      ? "text-[#14532D] font-semibold"
                      : "text-[#141413] hover:text-[#14532D]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-mono text-[#14532D]">Active</span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
