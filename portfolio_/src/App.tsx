import React from 'react';
import { InteractiveCursor } from './components/InteractiveCursor';
import { Navbar } from './components/Navbar';
import { MagazineHero } from './components/MagazineHero';
import { ProficiencySection } from './components/ProficiencySection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectArchive } from './components/ProjectArchive';
import { EducationTimeline } from './components/EducationTimeline';
import { YouTubeSection } from './components/YouTubeSection';
import { HobbyEditorial } from './components/HobbyEditorial';
import { AchievementSection } from './components/AchievementSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F4F0EA] selection:bg-[#C83E3D] selection:text-white">
      {/* Desktop Interactive Custom Cursor */}
      <InteractiveCursor />

      {/* Global Editorial Navigation */}
      <Navbar />

      {/* Main Storytelling Sections */}
      <main>
        {/* 01 — MAGAZINE COVER */}
        <MagazineHero />

        {/* 02 — PROFICIENCY */}
        <ProficiencySection />

        {/* 03 — EXPERIENCE */}
        <ExperienceSection />

        {/* 04 — PROJECTS */}
        <ProjectArchive />

        {/* 05 — EDUCATION */}
        <EducationTimeline />

        {/* 06 — YOUTUBE */}
        <YouTubeSection />

        {/* 07 — HOBBIES */}
        <HobbyEditorial />

        {/* 08 — ACHIEVEMENTS & LEADERSHIP */}
        <AchievementSection />
      </main>

      {/* 09 — FOOTER / BACK COVER */}
      <Footer />
    </div>
  );
}

export default App;
