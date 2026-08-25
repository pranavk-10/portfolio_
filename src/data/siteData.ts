export interface ProficiencyItem {
  name: string;
  displayValue: string;
  barPercent: number;
  category: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  timeline: string;
  location: string;
  spotlight: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  technologies: string[];
  timeline: string;
  summary: string;
  details: {
    overview: string;
    architecture: string[];
    highlights: string[];
    outcomes: string[];
  };
  visualTheme: 'power' | 'circuit' | 'ai' | 'automation';
}

export interface EducationItem {
  institution: string;
  degree: string;
  timeline: string;
  grade: string;
  location: string;
  details: string;
}

export interface AchievementItem {
  title: string;
  role: string;
  date: string;
  location?: string;
  badge: string;
  bullets: string[];
}

export interface YouTubeVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

export const siteData = {
  navigation: [
    { label: "HOME", href: "#cover" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EDUCATION", href: "#education" },
    { label: "HOBBIES", href: "#hobbies" },
    { label: "CONTACT", href: "#contact" }
  ],
  personalInfo: {
    name: "PRANAV KAMBLE",
    title: "Engineer | Movie Buff | Learner",
    quote: "“Your Friendly Neighbourhood Comic Relief”",
    location: "Mumbai, Maharashtra, India",
    metadata: {
      volume: "VOL. 01",
      year: "2026",
      city: "MUMBAI",
      issueTag: "SPRING / SUMMER EDITORIAL",
      barcode: "9 771234 567003 01"
    },
    heroImage: "/images/pranav-hero.jpg",
    portraitImage: "/images/pranav-portrait.jpg"
  },

  socials: {
    email: (import.meta.env.VITE_SITE_EMAIL as string) || "YOUR_EMAIL_HERE",
    linkedin: (import.meta.env.VITE_SITE_LINKEDIN as string) || "YOUR_LINKEDIN_URL_HERE",
    instagram: (import.meta.env.VITE_SITE_INSTAGRAM as string) || "YOUR_INSTAGRAM_URL_HERE",
    youtube: (import.meta.env.VITE_SITE_YOUTUBE as string) || "https://youtube.com/@pannu_core",
    x: (import.meta.env.VITE_SITE_X as string) || "YOUR_X_URL_HERE",
    github: (import.meta.env.VITE_SITE_GITHUB as string) || "YOUR_GITHUB_URL_HERE"
  },

  proficiency: [
    {
      name: "CGPA",
      displayValue: "9.34",
      barPercent: 93.4,
      category: "Academic Record",
      description: "Consistent academic excellence across B.Tech engineering coursework at VJTI."
    },
    {
      name: "Verilog",
      displayValue: "Strong working practice",
      barPercent: 85,
      category: "Digital Logic",
      description: "RTL design, a complete 4-bit processor, testbenches, and Xilinx Vivado simulations."
    },
    {
      name: "Coding",
      displayValue: "Growing range",
      barPercent: 68,
      category: "Software & AI",
      description: "Python, C, JavaScript, SQL, React, Next.js, FastAPI, RAG, and browser automation."
    },
    {
      name: "Communication & Relationship Building",
      displayValue: "Confident collaborator",
      barPercent: 84,
      category: "People & Practice",
      description: "Customer engineering collaboration at TI, stakeholder communication, and cross-functional leadership."
    },
    {
      name: "Creativity",
      displayValue: "Always in motion",
      barPercent: 86,
      category: "Creative Practice",
      description: "Visual storytelling, music curation, editorial thinking, and finding a clear angle."
    },
    {
      name: "Electronics",
      displayValue: "Deep foundation",
      barPercent: 92,
      category: "Hardware Engineering",
      description: "Analog electronics, power electronics, battery energy storage systems, and embedded hardware."
    }
  ] as ProficiencyItem[],

  experience: {
    company: "Texas Instruments India",
    role: "Field Applications Engineering (FAE) Intern",
    timeline: "May 2026 – Jul 2026",
    location: "Bangalore, Karnataka",
    spotlight: "4.6 kW Residential Battery Energy Storage System (BESS)",
    bullets: [
      "Architected a comprehensive 4.6 kW residential Battery Energy Storage System (BESS) based on market research, topology selection, and system-level trade-off analysis.",
      "Selected TI components across power conversion, battery management, isolation, sensing, communication, and C2000 controller subsystems.",
      "Collaborated closely with customer engineering teams to understand application requirements, system architectures, and complex hardware design challenges.",
      "Recommended optimized TI analog and power solutions, supporting customer design-in and hardware debugging workflows.",
      "Developed system architectures, application notes, power electronics circuit simulations, and customer solution proposals.",
      "Collaborated effectively across multiple Texas Instruments Business Units to drive cross-functional engineering deliverables."
    ]
  } as ExperienceItem,

  projects: [
    {
      id: "bess",
      number: "01",
      title: "Battery Energy Storage System (BESS)",
      subtitle: "Residential 4.6 kW Power System & Topology Design",
      technologies: ["Power Electronics", "System Architecture", "TI Portfolio", "C2000 Microcontrollers"],
      timeline: "May – Jul 2026",
      summary: "High-efficiency 4.6kW residential BESS featuring a 16S LiFePO4 battery pack, bidirectional DC-DC converter, and Heric inverter topology.",
      details: {
        overview: "An architectural blueprint and system-level solution for a 4.6kW residential Battery Energy Storage System (BESS) designed during the Field Applications Engineering internship at Texas Instruments India.",
        architecture: [
          "16S LiFePO4 Battery Pack (48V nominal distribution)",
          "Bidirectional DC-DC Converter Stage for efficient charge/discharge",
          "Heric Inverter Topology for high transformerless grid tie efficiency",
          "TI C2000 Controller Subsystem for real-time digital power PWM control",
          "Isolated Sensing & High-Speed Galvanic Isolation Gate Drivers"
        ],
        highlights: [
          "Complete TI component selection spanning power conversion, isolated voltage/current sensing, and battery management.",
          "System-level component selection spanning power conversion, battery monitoring, isolation, sensing, and communication."
        ],
        outcomes: [
          "System architecture designed with efficiency, safety, and scalability in mind."
        ]
      },
      visualTheme: "power"
    },
    {
      id: "verilog-processor",
      number: "02",
      title: "4-bit Mini Processor",
      subtitle: "Custom RTL Design & ISA Implementation in Verilog",
      technologies: ["Verilog HDL", "RTL Design", "Xilinx Vivado", "Digital Logic"],
      timeline: "Jan – Mar 2025",
      summary: "Complete custom 4-bit processor featuring dedicated ALU, register files, program counter, and memory modules verified with Vivado testbenches.",
      details: {
        overview: "A custom 4-bit microprocessor implemented from scratch at the Register-Transfer Level (RTL) using Verilog HDL and verified via timing simulations in Xilinx Vivado.",
        architecture: [
          "Custom 4-bit Instruction Set Architecture (ISA) with opcode decoder",
          "Arithmetic Logic Unit (ALU) supporting arithmetic and bitwise logic operations",
          "4-bit Register File with concurrent read/write channels",
          "Program Counter (PC) with jump and branch control logic",
          "Synchronous RAM and Instruction Memory Blocks"
        ],
        highlights: [
          "Testbenches and Vivado simulations supported RTL verification and digital system integration."
        ],
        outcomes: [
          "Demonstrated digital system integration through a custom processor architecture."
        ]
      },
      visualTheme: "circuit"
    },
    {
      id: "asha-ai",
      number: "03",
      title: "A.S.H.A. — AI Symptom & Healthcare Advisor",
      subtitle: "Multilingual Health RAG & Emergency Guidance Platform",
      technologies: ["FastAPI", "ChromaDB", "Gemini AI", "React", "OpenStreetMap API"],
      timeline: "Jan – Feb 2026",
      summary: "Multilingual AI assistant providing structured symptom assessments using Retrieval-Augmented Generation and real-time hospital recommendations.",
      details: {
        overview: "A.S.H.A. is a responsive AI healthcare assistant designed to provide accessible, structured medical guidance and emergency resource routing across multiple local languages.",
        architecture: [
          "Retrieval-Augmented Generation (RAG) pipeline powered by ChromaDB vector store",
          "Gemini AI LLM core with strict medical prompt guardrails",
          "FastAPI high-performance asynchronous backend microservice",
          "OpenStreetMap & Geolocation API for immediate nearest-hospital dispatch",
          "React modern frontend with intuitive voice & text input modes"
        ],
        highlights: [
          "Structured multi-step symptom assessment flow prioritizing triage severity.",
          "Context-aware localized language translation for regional patient accessibility."
        ],
        outcomes: [
          "Connected structured symptom assessment with real-time hospital recommendations."
        ]
      },
      visualTheme: "ai"
    },
    {
      id: "wardha-intern",
      number: "04",
      title: "Wardha's Best Intern",
      subtitle: "Multi-Agent Internship Discovery & Automation Platform",
      technologies: ["Next.js", "Node.js", "Playwright", "Multi-Agent AI"],
      timeline: "Nov 2025",
      summary: "Automated multi-agent platform utilizing Playwright browser automation to discover, index, and alert candidates regarding prime internships.",
      details: {
        overview: "An automated web intelligence system built to track, evaluate, and alert students regarding top engineering internships using headless browser automation and multi-agent coordination.",
        architecture: [
          "Playwright headless browser automation cluster for real-time site crawling",
          "Multi-agent AI coordinator for candidate-to-internship matching",
          "Node.js modular background queue & worker dispatchers",
          "Next.js reactive dashboard with instant push notification integration"
        ],
        highlights: [
          "Modular services support browser automation, discovery, and notification workflows."
        ],
        outcomes: [
          "Built a scalable workflow for internship discovery and user notifications."
        ]
      },
      visualTheme: "automation"
    }
  ] as ProjectItem[],

  education: [
    {
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      degree: "B.Tech in Electronics and Telecommunication Engineering",
      timeline: "Aug 2024 – Present",
      grade: "CGPA: 9.34",
      location: "Mumbai, India",
      details: "Top engineering institute in Maharashtra. Focused on advanced communications, signal processing, power electronics, embedded systems, and machine learning."
    },
    {
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      degree: "Diploma in Electronics Engineering",
      timeline: "Jun 2021 – May 2024",
      grade: "State Rank: 9",
      location: "Mumbai, India",
      details: "Achieved State Rank 9 across Maharashtra. Rigorous curriculum in analog circuits, microcontrollers, digital logic design, and power electronics."
    },
    {
      institution: "St. Xavier’s High School, Airoli",
      degree: "Secondary Education (10th Grade)",
      timeline: "2009 – 2021",
      grade: "10th Grade: 89.80%",
      location: "Navi Mumbai, India",
      details: "Foundational academic training with strong emphasis on mathematics, physical sciences, creative arts, and extracurricular leadership."
    }
  ] as EducationItem[],

  youtube: {
    channelName: "pannu core",
    handle: "@pannu_core",
    channelUrl: "https://youtube.com/@pannu_core",
    tagline: "Exploring sound, cinema, tech, and cultural commentaries through a personal visual lens.",
    subscribersNote: "Updated regularly with creative edits and visual logs",
    videos: [
      {
        id: "vid-1",
        title: "PANNU CORE — VOL. 01 EDITORIAL LOG",
        category: "Cinema & Visuals",
        duration: "03:45",
        thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://youtube.com/@pannu_core",
        description: "A cinematic visual synthesis combining modern edit dynamics, vinyl beats, and urban aesthetics."
      },
      {
        id: "vid-2",
        title: "SOUNDSCAPES & GUITAR SESSIONS",
        category: "Music & Curation",
        duration: "05:12",
        thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://youtube.com/@pannu_core",
        description: "Lofi jams, analog guitar riffs, and curated playlists for late-night engineering sessions."
      },
      {
        id: "vid-3",
        title: "BUILDING THE BESS ARCHITECTURE",
        category: "Engineering Tech",
        duration: "08:30",
        thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        videoUrl: "https://youtube.com/@pannu_core",
        description: "Breakdown of the 4.6kW battery storage topology, controller loops, and TI power components."
      }
    ] as YouTubeVideo[]
  },

  hobbies: [
    { title: "Cinema & Film", tag: "VISUAL STORYTELLING", desc: "Obsessed with cinematography, intentional color palettes, retro film stocks, and Denis Villeneuve framing." },
    { title: "Music & Sound", tag: "AURAL CURATION", desc: "Deep diving into genre-blending soundscapes, indie electronic, vinyl warmth, and synth textures." },
    { title: "DJing & Curation", tag: "RHYTHM & TEMPO", desc: "Crafting high-energy mixsets, track transitions, and vibe alignment for live crowds and creative sessions." },
    { title: "Playing Guitar", tag: "ANALOG EXPRESSION", desc: "Riffing on acoustic and electric guitar, experimenting with ambient delay pedals and chord progressions." },
    { title: "Fashion & Style", tag: "EDITORIAL SILHOUETTE", desc: "Appreciating high-fashion tailoring, streetwear silhouettes, plaid patterns, and timeless personal aesthetic." },
    { title: "Culinary Experiments", tag: "GASTRONOMY", desc: "Fiddling with flavours, precision knife skills, and mastering comfort food recipes from scratch." },
    { title: "Meaningful Conversations", tag: "HUMAN CONNECTION", desc: "Engaging in late-night philosophical debates on tech, culture, movies, and human nature." },
    { title: "Life & Perspectives", tag: "CURIOSITY", desc: "Observing urban pulse, learning from people of diverse backgrounds, and maintaining endless curiosity." },
    { title: "Keeping Things Light", tag: "COMIC RELIEF", desc: "Bringing humor and warm energy to stressful engineering sprints. Serious work without taking oneself too seriously." }
  ],

  achievements: [
    {
      title: "National Level Tech & Case Competition",
      role: "Product Strategy Lead",
      date: "Jan 2026",
      badge: "3rd Prize Winner",
      bullets: [
        "Secured 3rd Prize in a high-stakes National-Level Tech & Business Case Competition competing against top engineering universities.",
        "Engineered an innovative hardware-software product strategy, performing rigorous engineering trade-off analyses.",
        "Led product scoping, technical feasibility validation, financial viability modelling, and final executive deck presentation.",
        "Coordinated a cross-functional four-member team under strict 48-hour hackathon deadlines."
      ]
    },
    {
      title: "Pratibimb VJTI Festival",
      role: "Chief Operating Officer (COO)",
      date: "Feb 2026",
      location: "Mumbai, Maharashtra",
      badge: "Festival Operations Lead",
      bullets: [
        "Directed end-to-end operational planning and execution for VJTI's landmark annual festival hosting over 2,000+ student attendees.",
        "Managed cross-functional teams spanning logistics, hospitality, finance, marketing, security, and stage operations.",
        "Executed real-time problem solving, resource allocation, and stakeholder communications across multi-day events.",
        "Maintained flawless venue operations and budget management while enhancing attendee experience."
      ]
    }
  ] as AchievementItem[],

  coursework: [
    "Analog Electronics",
    "Power Electronics",
    "Product Lifecycle (PLM)",
    "Systems Architecture",
    "Verilog Programming",
    "RTL Design",
    "Machine Learning",
    "Deep Learning & NLP",
    "Microcontrollers",
    "Computer Vision"
  ],

  technicalSkills: {
    programming: ["Python", "C", "Verilog HDL", "JavaScript", "HTML5 / CSS3", "SQL"],
    hardware: ["Analog Electronics", "Power Electronics", "RTL Design", "Embedded Systems", "Battery Energy Storage Systems (BESS)"],
    aiSoftware: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "RAG", "ChromaDB", "React", "Next.js", "FastAPI", "Node.js"],
    tools: ["Xilinx Vivado", "TINA-TI", "VS Code", "Git", "GitHub", "Postman", "Jupyter Notebook"]
  }
};
