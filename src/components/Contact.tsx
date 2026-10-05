import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Contact: React.FC = () => {
  const { personal, contact } = portfolioData;

  const [name, setName] = useState<string>("");
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [mailtoPrepared, setMailtoPrepared] = useState<boolean>(false);

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      name.trim()
        ? `Portfolio Inquiry from ${name.trim()}`
        : "Portfolio Inquiry — Software Engineering Opportunity"
    );
    const bodyLines = [
      name.trim() ? `Name: ${name.trim()}` : "",
      senderEmail.trim() ? `Email: ${senderEmail.trim()}` : "",
      "",
      message.trim() || "Hello Minhaj, I came across your portfolio and would like to connect.",
    ].filter((line, idx, arr) => !(line === "" && arr[idx - 1] === ""));

    const body = encodeURIComponent(bodyLines.join("\n"));
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailtoPrepared(true);
    window.location.href = buildMailtoHref();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-b border-[#E4E1DA] scroll-mt-16"
    >
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: CTA Heading, Context & Direct Channels */}
          <div className="lg:col-span-6">
            <p className="text-xs font-mono text-[#14532D] mb-2">
              08. Direct Correspondence
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141413] tracking-tight text-balance mb-5">
              {contact.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#333230] leading-relaxed mb-10 max-w-xl">
              {contact.subtext}
            </p>

            {/* Direct Contact Channels Ledger */}
            <dl className="border-t border-[#E4E1DA] divide-y divide-[#E4E1DA] text-sm">
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <dt className="font-mono text-xs text-[#52514E]">Email</dt>
                <dd className="flex items-center gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-mono text-[#141413] hover:text-[#14532D] transition-colors font-medium"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-[#52514E] hover:text-[#141413] border border-[#E4E1DA] rounded bg-[#F3F1EC]/60 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#14532D]" />
                        <span className="text-[#14532D]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </dd>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <dt className="font-mono text-xs text-[#52514E]">LinkedIn</dt>
                <dd>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[#141413] hover:text-[#14532D] transition-colors"
                  >
                    <span>{personal.linkedinDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#787672]" />
                  </a>
                </dd>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <dt className="font-mono text-xs text-[#52514E]">GitHub</dt>
                <dd>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[#141413] hover:text-[#14532D] transition-colors"
                  >
                    <span>{personal.githubDisplay}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#787672]" />
                  </a>
                </dd>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <dt className="font-mono text-xs text-[#52514E]">Phone & Location</dt>
                <dd className="font-mono text-[#141413] tabular-nums">
                  {personal.phone} · {personal.location}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Clean Mailto Contact Form */}
          <div className="lg:col-span-6">
            <div className="border border-[#E4E1DA] bg-[#F3F1EC]/50 rounded p-6 sm:p-8">
              <div className="mb-6 pb-4 border-b border-[#E4E1DA]">
                <h3 className="font-serif text-2xl font-normal text-[#141413]">
                  Compose an Email Inquiry
                </h3>
                <p className="text-xs text-[#52514E] mt-1">
                  Opens your default email client addressed to{" "}
                  <span className="font-mono text-[#141413]">{personal.email}</span>{" "}
                  with your message pre-filled.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-[#141413] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name or organization"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E4E1DA] rounded text-[#141413] placeholder:text-[#787672] focus:outline-none focus:border-[#14532D] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-[#141413] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E4E1DA] rounded text-[#141413] placeholder:text-[#787672] focus:outline-none focus:border-[#14532D] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#141413] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Details about the internship, project, or collaboration..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F6] border border-[#E4E1DA] rounded text-[#141413] placeholder:text-[#787672] focus:outline-none focus:border-[#14532D] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#14532D] text-[#FAF9F6] rounded hover:bg-[#0F3F22] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </button>

                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs font-mono text-[#52514E] hover:text-[#141413] underline whitespace-nowrap"
                  >
                    Direct mailto link
                  </a>
                </div>

                {mailtoPrepared && (
                  <div className="mt-4 p-3.5 bg-[#FAF9F6] border border-[#14532D]/30 rounded text-xs text-[#333230]">
                    <p className="font-medium text-[#14532D] mb-1">
                      Email draft prepared for your mail client.
                    </p>
                    <p className="text-[#52514E]">
                      If your browser did not open a mail app automatically, you can email{" "}
                      <a
                        href={buildMailtoHref()}
                        className="font-mono underline text-[#141413]"
                      >
                        {personal.email}
                      </a>{" "}
                      directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
