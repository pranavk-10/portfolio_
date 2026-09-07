import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { socials, personalInfo } = siteData;

  const socialLinks = [
    { label: 'EMAIL', href: `mailto:${socials.email}`, value: socials.email },
    { label: 'LINKEDIN', href: socials.linkedin, value: socials.linkedin },
    { label: 'INSTAGRAM', href: socials.instagram, value: socials.instagram },
    { label: 'YOUTUBE', href: socials.youtube, value: socials.youtube },
    { label: 'X (TWITTER)', href: socials.x, value: socials.x },
    { label: 'GITHUB', href: socials.github, value: socials.github },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-24 bg-[#08080A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Huge Masthead Ending */}
        <div className="border-b border-white/15 pb-12 mb-16">
          <div className="flex items-center justify-between font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest mb-4 font-bold">
            <span>09 — BACK COVER / EDITORIAL CONCLUSION</span>
            <span>MUMBAI, INDIA // {personalInfo.metadata.year}</span>
          </div>

          <h2 className="font-display-editorial font-black text-6xl sm:text-8xl xl:text-9xl text-white tracking-tighter uppercase leading-[0.85] hover:text-stroke-white transition-all">
            LET'S TALK.
          </h2>
          <p className="font-serif-editorial italic text-xl sm:text-3xl text-white/80 mt-6 max-w-2xl">
            Whether it’s power electronics, RTL Verilog architecture, product strategy, film recommendations, or just keeping things light.
          </p>
        </div>

        {/* Social Links & Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Email Copy Box */}
          <div className="md:col-span-6 bg-[#121217] border border-white/15 p-8 space-y-6">
            <span className="font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest block font-bold">
              DIRECT INQUIRIES & COLLABORATIONS
            </span>

            <div className="flex items-center justify-between bg-[#08080A] border border-white/20 p-4 font-mono-editorial text-sm sm:text-base text-white">
              <span className="truncate mr-4">{socials.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-[#FF3B30] text-white hover:bg-white hover:text-[#08080A] transition-colors shrink-0 flex items-center space-x-2 text-xs font-bold uppercase"
                data-cursor="COPY"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>


            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-white text-[#08080A] px-6 py-4 font-mono-editorial text-xs font-bold uppercase tracking-widest hover:bg-[#FF3B30] hover:text-white transition-all group"
              data-cursor="RESUME"
            >
              <span>VIEW RESUME (PDF)</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </div>

          {/* Social Media Index */}
          <div className="md:col-span-6 space-y-4">
            <span className="font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest block mb-4 font-bold">
              CENTRALIZED SOCIAL CHANNELS
            </span>

            <div className="grid grid-cols-2 gap-4 font-mono-editorial text-xs">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121217] border border-white/15 p-4 flex items-center justify-between hover:border-[#FF3B30] hover:text-[#FF3B30] transition-colors group text-white"
                  data-cursor="LINK"
                >
                  <span className="font-bold tracking-wider">{link.label}</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#FF3B30]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final Colophon & Editorial Credits */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono-editorial text-white/40 gap-4">
          <div className="flex items-center space-x-4">
            <span>PRANAV KAMBLE © {personalInfo.metadata.year}</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="text-center md:text-right space-y-1">
            <div className="italic font-serif-editorial text-sm text-white/70">
              "Are you hungry? I haven't eaten since later this afternoon."
            </div>
            <div className="font-mono-editorial text-[10px] text-white/30 uppercase tracking-widest">
              — Aaron, Primer (2004)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
