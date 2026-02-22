"use client";

import { useState, useMemo } from "react";

interface Project {
  id: number;
  name: string;
  team: string;
  description: string;
  github: string;
  liveUrl?: string;
  category: string;
  emoji: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "KaamWali.AI",
    team: "Femgineers",
    description:
      "A resume platform with voice onboarding and skill extraction built with React.",
    github: "https://github.com/Gladiespriyanka/kaamwali-ai.git",
    category: "AI/ML",
    emoji: "👩‍💼",
  },
  {
    id: 2,
    name: "Jainsphere",
    team: "Aastha Jain",
    description:
      "A one-stop digital platform blending faith with technology.",
    github: "https://github.com/Aastha7078/Jainverse",
    category: "Web App",
    emoji: "🕉️",
  },
  {
    id: 3,
    name: "AutoArchitect",
    team: "Utkarsh Salunke",
    description:
      "A platform that gives you architecture diagrams and suggestions automatically.",
    github: "https://github.com/Catalyst20104/AutoArchitect-",
    category: "Developer Tool",
    emoji: "🏗️",
  },
  {
    id: 4,
    name: "PayloadGate",
    team: "Sunday Aspita Abraham",
    description:
      "A zero-trust security checkpoint web application with AI-powered vault scanning.",
    github: "https://github.com/saaga23/PayloadGate",
    liveUrl: "https://payload-gate.vercel.app/",
    category: "Security",
    emoji: "🔒",
  },
  {
    id: 5,
    name: "Voice-to-Text AI",
    team: "Praveen P",
    description:
      "A real-time voice-to-text AI application deployed on AWS.",
    github: "https://github.com/Praveenredm/AWS-deploy",
    category: "AI/ML",
    emoji: "🎙️",
  },
  {
    id: 6,
    name: "IP-Lock",
    team: "Rehan Shaikh",
    description:
      "A website to send personalized content to friends with IP-based access control.",
    github: "https://github.com/rehan-shaikh-1/IP-Locksmith",
    category: "Web App",
    emoji: "🔐",
  },
  {
    id: 7,
    name: "Divya Darshan",
    team: "Team Ram",
    description:
      "A platform to explore all the spiritual places and cultural heritage.",
    github: "https://github.com/Skylord1609/divya-darshan",
    category: "Web App",
    emoji: "🛕",
  },
  {
    id: 8,
    name: "CineMentor AI",
    team: "Guhan B",
    description:
      "AI-powered platform for creating next-gen cinema experiences.",
    github: "https://github.com/GDGuhan/CineMentorAI-9bf4mj.git",
    category: "AI/ML",
    emoji: "🎬",
  },
  {
    id: 9,
    name: "Proof of Skills",
    team: "Dishant Shastrakar",
    description:
      "A decentralized resume platform with blockchain-verified skill credentials.",
    github: "https://github.com/Dishant25-tech/Proof-of-Skill-Resume-Web3.git",
    category: "Web3",
    emoji: "📜",
  },
  {
    id: 10,
    name: "Eterna (CuratorX)",
    team: "Anika Jha",
    description:
      "A living digital museum to store and curate digital artifacts.",
    github: "https://github.com/Anika-Jha/Eterna",
    category: "Web App",
    emoji: "🏛️",
  },
  {
    id: 11,
    name: "FoundrAI",
    team: "Isam Ali",
    description:
      "AI Startup Risk Analyzer — type your startup idea and get instant risk assessment.",
    github: "https://github.com/isamm-ali/FoundrAI",
    category: "AI/ML",
    emoji: "🚀",
  },
  {
    id: 12,
    name: "Market Dashboard",
    team: "CalvinSkunnies",
    description:
      "A dashboard showing BTC and ETH performance metrics in real-time.",
    github: "https://github.com/CalvinSkunnies/MarketDataResearch",
    category: "Web3",
    emoji: "📊",
  },
  {
    id: 13,
    name: "Aya VibeShield",
    team: "Sowmmya G",
    description:
      "AI-powered pre-transaction security tool for safe crypto transactions.",
    github: "https://github.com/Miss-Sowmmya/aya-vibeshield",
    category: "Security",
    emoji: "🛡️",
  },
  {
    id: 14,
    name: "TaskFlow AI",
    team: "ApexGrid",
    description:
      "A web app that connects Google services with AI-powered task management.",
    github: "https://github.com/birajlamsal/taskflow-ai",
    category: "AI/ML",
    emoji: "📋",
  },
  {
    id: 15,
    name: "QuestLog",
    team: "SheCodes",
    description:
      "A gamified stack developer learning platform with RPG mechanics and AI chronicler.",
    github: "https://github.com/Hariniha/QuestLog",
    liveUrl: "https://quest-log-sepia.vercel.app",
    category: "Education",
    emoji: "⚔️",
  },
  {
    id: 16,
    name: "HabitCore",
    team: "Tanmay Thombare",
    description:
      "A game-themed habit tracking app with gamified progress and streaks.",
    github: "https://github.com/heyy-tanmay/habitcore",
    category: "Productivity",
    emoji: "🎮",
  },
  {
    id: 17,
    name: "DrugForge AI",
    team: "Mohammed Aashik F",
    description:
      "A full-stack drug discovery platform powered by AI for early-stage research.",
    github: "https://github.com/Aashik1701/DRUG_FORGE_HackTHeVibe",
    liveUrl: "https://drug-forge.vercel.app/",
    category: "AI/ML",
    emoji: "💊",
  },
  {
    id: 18,
    name: "EmoSPACE",
    team: "404_NOT_FURRED",
    description:
      "An interactive chatbot environment for emotional well-being support.",
    github: "https://github.com/rk-005/EmoSPACE.git",
    liveUrl: "https://emo-space.vercel.app/",
    category: "AI/ML",
    emoji: "💬",
  },
  {
    id: 19,
    name: "AgroPulse",
    team: "Sucheta Mondal",
    description:
      "Modern agricultural intelligence with AI-driven insights, real-time monitoring, and plant doctor.",
    github: "https://github.com/Suchetamon27/AgroPulse",
    category: "AI/ML",
    emoji: "🌾",
  },
  {
    id: 20,
    name: "CitizenOne",
    team: "Techy-Viber",
    description:
      "Privacy-first browser extension for secure automated form filling using zero-knowledge analysis.",
    github: "https://github.com/KesavGopan10/CitizenOne",
    category: "Security",
    emoji: "🔐",
  },
  {
    id: 21,
    name: "StoryStudio",
    team: "Error 404",
    description:
      "AI-powered interactive text-to-story generator with rich media output.",
    github: "https://github.com/Fah218/Text-to-Story-Generator",
    category: "AI/ML",
    emoji: "📖",
  },
  {
    id: 22,
    name: "Paxr Events",
    team: "Moses",
    description:
      "A decentralized blockchain-based event ticketing platform.",
    github: "https://github.com/Moses-main/paxr-events",
    liveUrl: "https://paxr.vercel.app/",
    category: "Web3",
    emoji: "🎟️",
  },
  {
    id: 23,
    name: "EasyAlgo",
    team: "Chinmayi D S",
    description:
      "A gamified code learning platform with interactive algorithm visualization.",
    github: "https://github.com/urgetolearn/easyalgo-app",
    liveUrl: "https://easyalgo-app.vercel.app/",
    category: "Education",
    emoji: "🧩",
  },
  {
    id: 24,
    name: "GitBuddy",
    team: "R Nithya Sree",
    description:
      "A virtual pet that tracks your commits, suggests messages, and checks repo health.",
    github: "https://github.com/nithya6875/gitbuddy",
    category: "Developer Tool",
    emoji: "🐾",
  },
  {
    id: 25,
    name: "WorkDock",
    team: "Aditya Kadam",
    description:
      "A platform built for small and medium enterprises for streamlined work management.",
    github: "https://github.com/xvaditya/WorkDock",
    category: "Productivity",
    emoji: "🏢",
  },
  {
    id: 26,
    name: "SkillBridge AI",
    team: "Neural Ninjas",
    description:
      "AI-generated personalized career roadmaps with skill gap analysis and free resources.",
    github: "https://github.com/harshitapathak44/skillbridge.git",
    category: "AI/ML",
    emoji: "🌉",
  },
  {
    id: 27,
    name: "Prompt Guard",
    team: "Quadrabytes",
    description:
      "A lightweight CPU-first security gateway that filters and sanitizes AI model inputs/outputs.",
    github: "https://github.com/Pavani3005/Prompt-Guard",
    category: "Security",
    emoji: "🧱",
  },
  {
    id: 28,
    name: "Pudding",
    team: "Rifa Tasfia Chowdhury",
    description:
      "A Chrome extension for cognitive adaptation — focus mode, complexity mapping, and smart restructuring.",
    github: "https://github.com/Tasfia-17/Pudding.git",
    category: "Productivity",
    emoji: "🍮",
  },
  {
    id: 29,
    name: "IntervAI",
    team: "Daksh Verma",
    description:
      "An AI-powered HR replacement tool for automated interview screening.",
    github: "https://github.com/dakshverma-dev/Hack-the-vibe.git",
    liveUrl: "https://intervai-mu.vercel.app/",
    category: "AI/ML",
    emoji: "🤖",
  },
  {
    id: 30,
    name: "Stellar Strike",
    team: "Potato Dev",
    description:
      "A 3D multiplayer arena game with on-chain integration and AI-powered features.",
    github: "https://github.com/krnkiran22/hack_the_vibe",
    liveUrl: "https://stellar-strike.vercel.app/",
    category: "Web3",
    emoji: "🎯",
  },
  {
    id: 31,
    name: "Blockbits",
    team: "Bikash Deka",
    description:
      "A Web3 dashboard aggregating news feeds, market metrics, and trending coins.",
    github: "https://github.com/NickRig7/blockbits",
    liveUrl: "https://blockbits-rose.vercel.app",
    category: "Web3",
    emoji: "⛓️",
  },
  {
    id: 32,
    name: "AI Study Platform",
    team: "NeuroByte",
    description:
      "An AI-powered learning platform with personalized study plans and subject selection.",
    github: "https://github.com/sujaltamboli99/ai-study-buddy",
    category: "Education",
    emoji: "📚",
  },
  {
    id: 33,
    name: "Startup Sage",
    team: "Teamdev",
    description:
      "A web-based startup validation platform with AI-driven analysis.",
    github: "https://github.com/NischayUpadhya/startup_sage",
    category: "AI/ML",
    emoji: "🧙",
  },
  {
    id: 34,
    name: "AyaShield",
    team: "BlinderNet",
    description:
      "A web app protecting crypto users from scams with risk scoring and contract analysis.",
    github: "https://github.com/blinderchief/AyaShield.git",
    liveUrl: "https://aya-shield.vercel.app/",
    category: "Web3",
    emoji: "🛡️",
  },
  {
    id: 35,
    name: "Copilot CoLab",
    team: "Rootables",
    description:
      "A VS Code extension for real-time collaborative coding experiences.",
    github: "https://github.com/n4bi10p/copilot-colab",
    category: "Developer Tool",
    emoji: "👥",
  },
  {
    id: 36,
    name: "AI Bookmark Manager",
    team: "Harshal Newaskar",
    description:
      "A Chrome extension with AI backend for smart bookmarks, WhatsApp summaries, and mail organization.",
    github: "https://github.com/harshal-newaskar64/AI-Browser-Agent.git",
    category: "Productivity",
    emoji: "🔖",
  },
  {
    id: 37,
    name: "AyaShield DeFi",
    team: "Apurva Khangal",
    description:
      "Institutional-style DeFi Risk Intelligence Engine with scenario simulation and accessibility features.",
    github: "https://github.com/apurvakhangal/AyaShield",
    liveUrl: "https://ayashield.vercel.app/",
    category: "Web3",
    emoji: "🏦",
  },
  {
    id: 38,
    name: "Mandator",
    team: "Aryan Saxena",
    description:
      "A web application to visually manage and organize tasks and mandates.",
    github: "https://github.com/AryanSaxenaa/Mandator",
    liveUrl: "https://mandator-psi.vercel.app/",
    category: "Productivity",
    emoji: "✅",
  },
  {
    id: 39,
    name: "Re-Autonomous Life",
    team: "Haruki Kondo",
    description:
      "A new take on the Game of Life with React.js frontend and AI-powered simulation.",
    github: "https://github.com/mashharuki/Re-Autonomus-World-Game",
    category: "AI/ML",
    emoji: "🧬",
  },
  {
    id: 40,
    name: "UniFlow",
    team: "SPAMBOTSxTDS",
    description:
      "A collaborative proposal management tool with smart document breakdown and automated approvals.",
    github: "https://github.com/work-dwivediishivam/hackthevibe",
    category: "Productivity",
    emoji: "📝",
  },
  {
    id: 41,
    name: "Food Allergy Detection",
    team: "ByteBusters",
    description:
      "A web-based food allergy detection system for improved food safety awareness.",
    github: "https://github.com/Niveditha5123456/FoodAllergyDetectionSystem.git",
    category: "AI/ML",
    emoji: "🍽️",
  },
  {
    id: 42,
    name: "DoseGuard",
    team: "Swetha S",
    description:
      "A web-based medication safety platform with AI risk prediction and caregiver dashboard.",
    github: "https://github.com/swetha111003?tab=repositories",
    category: "AI/ML",
    emoji: "💉",
  },
  {
    id: 43,
    name: "TruMuse",
    team: "QuadraBytes",
    description:
      "AI-powered visual attribution tool with influence scores and comparison graphs.",
    github: "https://github.com/Supreetha2513/TruMuse_Final",
    category: "AI/ML",
    emoji: "🎨",
  },
  {
    id: 44,
    name: "blendGPT",
    team: "Mansi Ruhil",
    description:
      "An AI-powered research assistant with document processing and dual analysis modes.",
    github: "https://github.com/ruhilmansi/blendGPT",
    category: "AI/ML",
    emoji: "🔬",
  },
  {
    id: 45,
    name: "StartUp Copilot",
    team: "Team Nexus",
    description:
      "Validate startup ideas, generate structured plans with clean UI and motion design.",
    github: "https://github.com/VivekGoudAdula/startup-copilot",
    liveUrl: "https://start-up-copilot.vercel.app",
    category: "AI/ML",
    emoji: "🛫",
  },
  {
    id: 46,
    name: "VibeShield",
    team: "SyntaxCode",
    description:
      "A smart spending tracker helping users manage budgets with Python FastAPI backend.",
    github: "https://github.com/Rohan9731/HackTheVibe.git",
    liveUrl: "https://hack-the-vibe.vercel.app",
    category: "Web App",
    emoji: "💰",
  },
  {
    id: 47,
    name: "FarmWise AI",
    team: "Sanyam Kansal",
    description:
      "A smart, multilingual web application designed for farmers with AI-powered insights.",
    github: "https://github.com/sanyamkansal/farm-project",
    liveUrl: "https://farmwise-ai.vercel.app",
    category: "AI/ML",
    emoji: "🌱",
  },
  {
    id: 48,
    name: "FlickAI",
    team: "Maaz",
    description:
      "A tap-to-summon desktop AI assistant that sees your screen and responds contextually.",
    github: "https://github.com/somewherelostt/FlickAI_",
    category: "AI/ML",
    emoji: "✨",
  },
  {
    id: 49,
    name: "ScamBait",
    team: "Arcane",
    description:
      "Turning tables on scammers through Telegram bots and Twilio phone-based traps.",
    github: "https://github.com/diyaavirmani/SCAM-BAIT",
    category: "Security",
    emoji: "🎣",
  },
  {
    id: 50,
    name: "CivicConnect",
    team: "ASPR",
    description:
      "A high-end digital governance terminal for citizen services and civic engagement.",
    github: "https://github.com/Puskar2Sora/Civic-Connect",
    liveUrl: "https://civic-kisok.vercel.app/",
    category: "Web App",
    emoji: "🏛️",
  },
  {
    id: 51,
    name: "Hindsight",
    team: "Hari Raja Prabhu",
    description:
      "A desktop app tracking app usage with SQLite search, timeline view, and activity stats.",
    github: "https://github.com/hariprabhu571/Hindsight",
    category: "Productivity",
    emoji: "🔍",
  },
  {
    id: 52,
    name: "AI Classroom Assistant",
    team: "Doom's Dynasty",
    description:
      "A web-based classroom management system powered by AI for students and educators.",
    github: "https://github.com/Akaash-S/classroomAssistant",
    category: "Education",
    emoji: "🎓",
  },
  {
    id: 53,
    name: "FOSSEE Visualizer",
    team: "Shivam Kumar Mishra",
    description:
      "Chemical equipment parameter visualizer using GitHub Copilot.",
    github: "https://github.com/Shiv2717/FOSSEE",
    category: "Developer Tool",
    emoji: "⚗️",
  },
  {
    id: 54,
    name: "LaunchAgent.ai",
    team: "Khushal Sarode",
    description:
      "Drop a simple idea and watch it transform into a startup foundation with branding, docs, and MVP preview.",
    github: "https://github.com/khushalsarode/hackthevibe.git",
    category: "AI/ML",
    emoji: "🛸",
  },
];

const CATEGORIES = [
  "All",
  "AI/ML",
  "Web3",
  "Security",
  "Web App",
  "Developer Tool",
  "Productivity",
  "Education",
];

export default function ProjectsGrid() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.team.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section className="projects-section">
      {/* Search & Filters */}
      <div className="projects-toolbar">
        <div className="projects-search-wrapper">
          <svg
            className="projects-search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="projects-search-input"
            placeholder="Search for projects by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="projects-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`projects-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="projects-subtitle">
          {PROJECTS.length} amazing projects built during HackTheVibe
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="projects-grid-new">
        {filtered.map((project) => (
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-new"
          >
            <div className="project-card-header">
              <div className="project-card-avatar">{project.emoji}</div>
              <div className="project-card-info">
                <h3 className="project-card-name">{project.name}</h3>
                <p className="project-card-team">By {project.team}</p>
              </div>
              <div className="project-card-stats">
                <span className="project-card-category-badge">
                  {project.category}
                </span>
              </div>
            </div>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-card-footer">
              <span className="project-card-built-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Built at Hack The Vibe 2026
              </span>
              {project.liveUrl && (
                <span className="project-card-live-badge">🌐 Live</span>
              )}
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="projects-empty">
          <p>No projects found matching your search.</p>
        </div>
      )}
    </section>
  );
}
