# PRANAV KAMBLE — Editorial Digital Magazine Portfolio

A production-ready, frontend-only editorial digital magazine portfolio website for **Pranav Kamble** (`Engineer | Movie Buff | Learner`), designed with contemporary fashion/art magazine aesthetics (*Carcy*, *Vogue*, *The Source*) overlaying hardware engineering, RTL Verilog digital design, and leadership achievements.

---

## 🌟 Primary Features

- **Interactive Digital Magazine Layout**: Visual storytelling inspired by high-fashion magazine covers and contemporary spreads.
- **Authentic Portrait Hero (X1)**: Cover masthead with custom issue volume tags, barcode graphics, quote banner, and editorial hierarchy.
- **Centralized Data Management (`src/data/siteData.ts`)**: Edit ONE file to update all personal info, socials, projects, experience, YouTube videos, and education.
- **02 Editorial Proficiency**: Features exact CGPA (`9.34`) and relative skill indicators with animated progress bars.
- **03 Texas Instruments FAE Experience**: Dedicated spread spotlighting the 4.6 kW Residential Battery Energy Storage System (BESS).
- **04 Interactive Project Archive**: Full-screen modal expansion spreads for hardware, RTL processor, RAG AI, and multi-agent platforms.
- **05 Education Timeline**: VJTI B.Tech, VJTI Diploma (State Rank 9), and St. Xavier's High School.
- **06 YouTube Media Feature**: Official channel spread for `@pannu_core`.
- **07 Hobbies & Personality**: High-typography editorial mosaic covering Cinema, DJing, Guitar, Fashion, Gastronomy, and Lightheartedness.
- **08 Achievements & Leadership**: "MORE THAN ENGINEERING" spread highlighting Case Competition 3rd Prize and Pratibimb VJTI COO (2,000+ student festival).
- **09 Editorial Footer**: Back cover featuring `"LET'S TALK."` and instant email copying.
- **Desktop Custom Cursor**: Smooth dual-ring cursor with magnetic hover label triggers (automatically disabled on touch devices).

---

## 🚀 Quick Start & Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build Production Bundle
```bash
npm run build
```

---

## ⚙️ Environment Variables & Content Editing Guide

### 1. Environment Variables (`.env`)
All social media links and redirect URLs are managed in **`.env`** (prefixed with `VITE_SITE_` for Vite):
```env
VITE_SITE_EMAIL="your.email@example.com"
VITE_SITE_LINKEDIN="https://linkedin.com/in/your-profile"
VITE_SITE_INSTAGRAM="https://instagram.com/your-handle"
VITE_SITE_YOUTUBE="https://youtube.com/@pannu_core"
VITE_SITE_X="https://x.com/your-handle"
VITE_SITE_GITHUB="https://github.com/your-username"
```

The YouTube section refreshes the three latest uploads every five minutes from `public/youtube.json`. The GitHub Action updates that file every 15 minutes from the public YouTube RSS feed and derives the channel ID from `@pannu_core`; no API key is required. If the feed is unavailable, the existing fallback entries remain visible.
A template file **`.env.example`** is committed to the repository for reference.

### 2. Git Configuration (`.gitignore`)
The repository includes a production-grade **`.gitignore`** to ensure `node_modules/`, local `.env` files, build outputs (`dist/`), and OS temporary files are excluded when pushing to GitHub.

---

## ☁️ Deploying to Vercel

This repository is **100% frontend static SPA** with zero backend infrastructure requirements:

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Add your environment variables (`VITE_SITE_EMAIL`, `VITE_SITE_LINKEDIN`, etc.) under project settings.
5. Click **"Deploy"**.

