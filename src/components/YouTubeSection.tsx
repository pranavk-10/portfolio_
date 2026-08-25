import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Radio, Volume2, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const YouTubeSection: React.FC = () => {
  const { youtube } = siteData;
  const [activeVideo, setActiveVideo] = useState(youtube.videos[0]);

  return (
    <section id="youtube" className="py-24 bg-[#09090B] text-[#F4F0EA] border-b border-[#F4F0EA]/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C83E3D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F4F0EA]/20 pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-editorial text-xs text-[#C83E3D] uppercase tracking-widest block mb-1 font-bold">
              <Radio size={14} className="animate-pulse" />
              <span>06 — CREATIVE MEDIA & BROADCAST STUDIO</span>
            </div>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-[#F4F0EA] tracking-tight uppercase">
              {youtube.channelName}
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-[#F4F0EA]/70 max-w-sm">
            {youtube.handle} // {youtube.tagline}
          </div>
        </div>

        {/* Hero Interactive Broadcast Studio Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Broadcast Terminal & Channel CTA */}
          <div className="lg:col-span-5 bg-[#121215] border border-[#F4F0EA]/15 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#F4F0EA]/10 pb-4">
                <span className="bg-[#C83E3D] text-white px-3 py-1 font-mono-editorial text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
                  <Sparkles size={14} />
                  <span>OFFICIAL YOUTUBE BROADCAST</span>
                </span>
                <span className="font-mono-editorial text-xs text-[#F4F0EA]/50">{youtube.handle}</span>
              </div>

              <h3 className="font-display-editorial font-bold text-2xl sm:text-4xl text-[#F4F0EA] uppercase leading-tight">
                CINEMATIC EDITS, GUITAR SESSIONS & TECH BREAKDOWNS
              </h3>

              <p className="font-sans-editorial text-xs sm:text-sm text-[#F4F0EA]/80 leading-relaxed">
                Exploring soundscapes, analog guitar riffs, film direction, and hardware engineering breakdowns. Visual logs crafted with intentional aesthetics.
              </p>
            </div>

            {/* Currently Playing Track/Video Info */}
            <div className="bg-[#09090B] border border-[#F4F0EA]/20 p-4 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono-editorial text-[#C83E3D] font-bold uppercase tracking-widest">
                <span className="flex items-center space-x-1">
                  <Volume2 size={12} className="animate-bounce" />
                  <span>NOW SELECTING</span>
                </span>
                <span>{activeVideo.duration}</span>
              </div>
              <p className="font-display-editorial text-sm font-bold text-[#F4F0EA] truncate uppercase">
                {activeVideo.title}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={youtube.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#C83E3D] text-white px-6 py-4 font-mono-editorial text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#09090B] transition-all group"
                data-cursor="SUBSCRIBE"
              >
                <span>VISIT @PANNU_CORE</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Monitor Display Frame */}
          <div className="lg:col-span-7 bg-[#121215] border border-[#F4F0EA]/20 p-3 flex flex-col justify-between shadow-2xl relative group">
            {/* Monitor Bezel Header */}
            <div className="bg-[#09090B] px-4 py-2 flex items-center justify-between border-b border-[#F4F0EA]/10 font-mono-editorial text-[10px] text-[#F4F0EA]/60 mb-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#C83E3D] animate-ping" />
                <span className="text-[#F4F0EA] font-bold">STUDIO MONITOR 01</span>
              </div>
              <span>4K CINEMATIC DISPLAY</span>
            </div>

            {/* Video Canvas Container */}
            <div className="relative w-full aspect-video bg-[#09090B] border border-[#F4F0EA]/10 overflow-hidden group/canvas">
              <img
                src={activeVideo.thumbnailUrl}
                alt={activeVideo.title}
                className="w-full h-full object-cover brightness-95 group-hover/canvas:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-black/30 flex items-center justify-center">
                <a
                  href={activeVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-[#C83E3D] text-white flex items-center justify-center group-hover/canvas:scale-110 transition-transform shadow-2xl border-2 border-white/40"
                  data-cursor="PLAY"
                >
                  <Play size={36} className="fill-white ml-1" />
                </a>
              </div>

              {/* Video Title Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono-editorial text-xs text-white z-10">
                <span className="bg-[#09090B]/90 backdrop-blur-md px-3 py-1.5 border border-[#F4F0EA]/20">
                  {activeVideo.category}
                </span>
                <span className="bg-[#C83E3D] px-3 py-1.5 font-bold uppercase tracking-widest">
                  WATCH ON YOUTUBE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Reel Selector Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {youtube.videos.map((vid) => (
            <motion.div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              whileHover={{ y: -4 }}
              className={`p-5 bg-[#121215] border cursor-pointer transition-all duration-300 ${
                activeVideo.id === vid.id
                  ? 'border-[#C83E3D] shadow-lg bg-[#18181C]'
                  : 'border-[#F4F0EA]/15 hover:border-[#F4F0EA]/40'
              }`}
              data-cursor="SELECT"
            >
              <div className="relative aspect-video bg-[#09090B] overflow-hidden mb-4 border border-[#F4F0EA]/10 group">
                <img
                  src={vid.thumbnailUrl}
                  alt={vid.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="fill-white text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-[#09090B]/90 text-white font-mono-editorial text-[10px] px-2 py-0.5 border border-[#F4F0EA]/20">
                  {vid.duration}
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-mono-editorial text-[10px] text-[#C83E3D] uppercase tracking-wider font-bold block">
                  [{vid.category}]
                </span>
                <h4 className="font-display-editorial font-bold text-sm text-[#F4F0EA] uppercase line-clamp-1">
                  {vid.title}
                </h4>
                <p className="font-sans-editorial text-xs text-[#F4F0EA]/70 line-clamp-2 leading-relaxed">
                  {vid.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
