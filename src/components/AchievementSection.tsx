import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import { siteData } from '../data/siteData';

export const AchievementSection: React.FC = () => {
  const { achievements } = siteData;

  return (
    <section id="achievements" className="py-24 bg-[#08080A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/15 pb-6 mb-12 gap-4">
          <div>
            <span className="font-mono-editorial text-xs text-[#FF3B30] uppercase tracking-widest block mb-1">
              08 — MORE THAN ENGINEERING
            </span>
            <h2 className="font-display-editorial font-extrabold text-4xl sm:text-6xl text-white tracking-tight uppercase">
              ACHIEVEMENTS & LEADERSHIP
            </h2>
          </div>
          <div className="font-mono-editorial text-xs text-white/60 max-w-sm">
            High-impact product strategy competitions and executive operations directing 2,000+ attendee cultural events.
          </div>
        </div>

        {/* Achievements Editorial Spreads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#121217] border border-white/15 p-8 relative flex flex-col justify-between group hover:border-[#FF3B30] transition-colors"
              data-cursor="LEADERSHIP"
            >
              {/* Badge & Date Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="bg-[#FF3B30] text-white font-mono-editorial text-xs font-bold px-3 py-1 uppercase tracking-widest flex items-center space-x-2">
                    {index === 0 ? <Trophy size={14} /> : <Users size={14} />}
                    <span>{item.badge}</span>
                  </span>
                  <span className="font-mono-editorial text-xs text-white/50">
                    {item.date} {item.location ? `// ${item.location}` : ''}
                  </span>
                </div>

                {/* Title & Role */}
                <div>
                  <h3 className="font-display-editorial font-bold text-2xl sm:text-4xl text-white group-hover:text-[#FF3B30] transition-colors uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono-editorial text-sm font-bold text-white/80 uppercase mt-2">
                    {item.role}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-3 pt-2">
                  {item.bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm font-sans-editorial text-white/80 leading-relaxed">
                      <span className="font-mono-editorial text-[#FF3B30] font-bold">★</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between font-mono-editorial text-[10px] text-white/40 uppercase tracking-widest">
                <span>VERIFIED LEADERSHIP RECORD</span>
                <span>PRANAV KAMBLE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
