import Navbar from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import RetroGrid from "@/components/ui/retro-grid";
import { Timeline } from "@/components/ui/timeline";
import { KnowledgeGraph, NodeData } from "@/components/ui/knowledge-graph";
import { GraduationCap, Cpu, Database, FileText, Award, MapPin, Mail } from "lucide-react";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-cyan-500/30">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none animate-pulse" />

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center w-full pt-20">
        <RetroGrid className="z-0" />
        
        <div className="z-10 flex flex-col items-center text-center space-y-8 px-4 max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-indigo-400 drop-shadow-2xl">
              Mittul Daswani
            </h1>
            <p className="text-xl md:text-3xl text-cyan-50/70 font-bold tracking-widest uppercase">
              AI Engineer <span className="text-cyan-400">/</span> Data Architect
            </p>
          </div>
          
          <div className="flex items-center gap-6 pt-8">
            <a href="https://linkedin.com/in/mittul-daswani/" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 group">
              <IconBrandLinkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:mmdaswani9009@gmail.com" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:bg-cyan-600/20 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 group">
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-100 font-bold tracking-tight">
               <MapPin className="w-5 h-5 text-cyan-400" /> Los Angeles, CA
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Matrix (Knowledge Graph) */}
      <section id="skills" className="relative w-full z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-6">
             Neural Skill Mapping
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">The Intelligence Matrix</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">A multi-dimensional constellation of my engineering expertise. <br/><strong className="text-cyan-300">Hover nodes for insights & click for deep-dive associations.</strong></p>
        </div>
        <KnowledgeGraph nodes={knowledgeNodes} className="border-b border-white/10" />
      </section>

      {/* Professional Timeline */}
      <section id="experience" className="relative w-full z-10 bg-black py-24">
         <Timeline data={experienceData} />
      </section>

      {/* Visual Resume / Bento Grid */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-white/10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-500 mb-6 tracking-tighter">Engineered Impact</h2>
          <p className="text-neutral-400 text-lg">Showcasing academic research, publications, and production-ready systems.</p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 ? "md:col-span-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]" : "shadow-[0_0_50px_rgba(0,0,0,0.5)]"}
            />
          ))}
        </BentoGrid>
      </section>
      
      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10 py-24 mt-12 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-10 text-center relative z-10">
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Let&apos;s Architect the Future.</h3>
          <p className="text-neutral-400 text-xl max-w-2xl leading-relaxed">Focusing on high-impact AI Engineering and Data Science. Open to collaborations that push the boundaries of intelligence.</p>
          <a href="mailto:mmdaswani9009@gmail.com" className="group relative px-12 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:text-white transition-colors">Start a Conversation</span>
          </a>
          <div className="flex gap-8 text-neutral-600 font-bold uppercase tracking-widest text-xs pt-12">
             <span>Identity: Mittul Daswani</span>
             <span>USC Alum</span>
             <span>2026 Edition</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ---------------- Data Structures ----------------

const experienceData = [
  {
    title: "Keck School of Medicine USC",
    content: (
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500" />
        <p className="text-cyan-400 font-black mb-6 text-2xl tracking-tight">Research Assistant | Oct 2024 - Present</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-6">
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Authoring 2 research papers on relations between activity and compulsions using <strong className="text-white">Fitbit physiological data</strong>, utilizing <strong className="text-white">linear mixed models</strong> and <strong className="text-white">anomaly detection</strong>.</span>
          </li>
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Implemented <strong className="text-white">Isolation Forests</strong> and z-score analysis, increasing behavioral trigger identification accuracy by <strong className="text-cyan-400">30%</strong>.</span>
          </li>
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Leveraged <strong className="text-white">PCA & t-SNE</strong> for dimensionality reduction, improving model interpretability and decreasing training time by <strong className="text-cyan-400">35%</strong>.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Hyphenova",
    content: (
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-purple-500" />
        <p className="text-purple-400 font-black mb-6 text-2xl tracking-tight">AI / ML Developer & PM | May 2024 - Aug 2024</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-6">
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Developed a <strong className="text-white">Multimodal AI Chatbot</strong> using custom LLMs and computer vision, improving user engagement by <strong className="text-purple-400">58%</strong>.</span>
          </li>
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Engineered a <strong className="text-white">Profanity Detection Model</strong> using n-grams and KeyBERT with <strong className="text-purple-400">95% precision</strong>.</span>
          </li>
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Orchestrated AI strategy as core management member, aligning tech development with complex business goals.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "GlobalShala",
    content: (
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
        <p className="text-emerald-400 font-black mb-6 text-2xl tracking-tight">Data Vis Expert | Feb 2022 - July 2022</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-6">
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Architected <strong className="text-white">ML pipelines</strong> for automated data processing, reducing manual operational effort by <strong className="text-emerald-400">40%</strong>.</span>
          </li>
          <li className="flex items-start gap-4">
             <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0 animate-pulse" />
             <span className="leading-relaxed">Mentored a team of <strong className="text-white">15 engineers</strong> and drove client acquisition leading to <strong className="text-emerald-400">30% growth</strong>.</span>
          </li>
        </ul>
      </div>
    )
  }
];

const knowledgeNodes: NodeData[] = [
  { id: "center", label: "Mittul Daswani", type: "center", color: "#06b6d4" },
  
  { id: "ai", label: "AI Engineering", type: "category", parent: "center", radius: 180, angle: -90, color: "#a855f7" },
  { id: "data", label: "Data Architecture", type: "category", parent: "center", radius: 180, angle: 30, color: "#10b981" },
  { id: "dev", label: "Systems Design", type: "category", parent: "center", radius: 180, angle: 150, color: "#3b82f6" },
  
  // AI/ML Section
  { 
    id: "python", label: "Python Core", type: "skill", parent: "ai", radius: 320, angle: -130, color: "#fbbf24",
    summary: "Professional mastery of Python for backend engineering, high-performance ML pipelines, and research modeling.",
    experiences: [
      { role: "Research Assistant", company: "Keck School of Medicine USC", details: "Time series analysis and linear mixed modeling on large-scale Fitbit datasets." },
      { role: "AI/ML Developer", company: "Hyphenova", details: "Backend infrastructure for multimodal chatbot and profanity detection systems." }
    ],
    projects: [
      { name: "Live Pothole Detection", description: "Engineered core computer vision logic using custom Python frameworks.", tech: ["Python", "TensorFlow", "FastAPI"] }
    ],
    certifications: [
      { name: "Complete Python Bootcamp", provider: "Udemy", date: "May 2021", url: "https://ude.my/UC-e0a13ba4-fde5-4d8f-8cdf-4860ee470aea" },
      { name: "Python for Data Science", provider: "Kaggle", date: "July 2023", url: "https://www.kaggle.com/learn/certification/midas26/pandas" }
    ]
  },
  { 
    id: "llms", label: "Generative AI", type: "skill", parent: "ai", radius: 340, angle: -90, color: "#8b5cf6",
    summary: "Architecting and fine-tuning GenAI systems, custom LLMs, and multimodal interfaces.",
    experiences: [
      { role: "AI Developer", company: "Hyphenova", details: "Built custom multimodal chatbot integrating computer vision and song analysis." }
    ],
    projects: [],
    certifications: [
      { name: "Generative AI: Elevate Your Career", provider: "IBM / Coursera", date: "Sep 2024", url: "https://coursera.org/verify/64LZGTV71GN1" }
    ]
  },
  { 
    id: "pytorch", label: "PyTorch / DL", type: "skill", parent: "ai", radius: 360, angle: -110, color: "#ef4444",
    summary: "Deep Learning expertise focusing on neural network architectures and high-performance training.",
    experiences: [
      { role: "Research Assistant", company: "Keck School of Medicine USC", details: "Implemented Isolation Forests and advanced anomaly detection models." }
    ],
    projects: [
      { name: "Custom CNN Classifier", description: "Built specialized CNN architecture for real-time video defect identification.", tech: ["PyTorch", "OpenCV"] }
    ],
    certifications: [
      { name: "Deep Learning Specialization", provider: "DeepLearning.AI", date: "2024", url: "https://www.coursera.org/specializations/deep-learning" }
    ]
  },

  // Data Section
  { 
    id: "sql", label: "SQL & Databases", type: "skill", parent: "data", radius: 320, angle: 10, color: "#f97316",
    summary: "Expert in relational data modeling, query optimization, and scalable database architecture.",
    experiences: [
      { role: "Data Analyst", company: "Wheel and Time", details: "Optimized logistics databases for real-time financial reporting." }
    ],
    projects: [
      { name: "Scalable Database Engine", description: "Built a custom database engine supporting both SQL and NoSQL syntax.", tech: ["C++", "Regex", "File I/O"] }
    ],
    certifications: [
      { name: "Database Engineering", provider: "Kaggle", date: "2023", url: "https://www.kaggle.com/learn/certification/midas26/sql" }
    ]
  },
  { 
    id: "viz", label: "Business Intel", type: "skill", parent: "data", radius: 350, angle: 40, color: "#06b6d4",
    summary: "Transforming complex datasets into actionable insights using Power BI, Tableau, and custom R visualizations.",
    experiences: [
      { role: "Domain Expert", company: "GlobalShala", details: "Designed dynamic dashboards that drove a 30% increase in client base." }
    ],
    projects: [],
    certifications: [
      { name: "Data Visualization Virtual Internship", provider: "Saint Louis University / GlobalShala", date: "2022", url: "https://globalshala.com/internships/" },
      { name: "Business Analysis Essentials", provider: "Microsoft / LinkedIn", date: "Sep 2024", url: "https://www.linkedin.com/learning/paths/career-essentials-in-business-analysis-by-microsoft-and-linkedin" }
    ]
  },

  // Systems Section
  { 
    id: "cpp", label: "Systems Programming", type: "skill", parent: "dev", radius: 320, angle: 140, color: "#3b82f6",
    summary: "High-performance systems development using C++ for core engine logic and data processing.",
    experiences: [],
    projects: [
      { name: "Custom Query Engine", description: "Engineered high-throughput file processing and custom syntax parser.", tech: ["C++", "File I/O"] }
    ],
    certifications: [
      { name: "Advanced C++ Certification", provider: "HackerRank (3 Star)", date: "2023" }
    ]
  },
  { 
    id: "react", label: "Fullstack Eng", type: "skill", parent: "dev", radius: 340, angle: 170, color: "#06b6d4",
    summary: "Developing production-grade web interfaces with Next.js, React, and TypeScript.",
    experiences: [
      { role: "Web Developer", company: "Hyphenova", details: "Integrated ML backends with responsive React frontends." }
    ],
    projects: [
      { name: "Pothole Monitoring Portal", description: "Real-time dashboard for local authorities to monitor infrastructure.", tech: ["Next.js", "Mapbox", "Tailwind"] }
    ],
    certifications: []
  },
];

const Skeleton = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[8rem] rounded-[2rem] bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-white/10 relative overflow-hidden group shadow-2xl ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    {children}
    <BorderBeam size={300} duration={15} delay={9} colorFrom="#06b6d4" colorTo="#a855f7" borderWidth={2} />
  </div>
);

const bentoItems = [
  {
    title: "Live Pothole Detection System",
    description: "ML Engineer & Lead Developer. Engineered a computer vision system utilizing custom CNN architectures for real-time infrastructure monitoring.",
    header: (
      <Skeleton className="p-6 grid grid-cols-2 gap-4">
         <div className="h-full flex flex-col items-center justify-center p-6 rounded-3xl bg-black/60 border border-cyan-500/20 group/icon">
            <Cpu className="w-12 h-12 text-cyan-400 group-hover/icon:scale-110 transition-transform mb-2" />
            <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Neural Core</div>
         </div>
         <div className="h-full flex flex-col items-center justify-center p-6 rounded-3xl bg-black/60 border border-purple-500/20 group/icon">
            <MapPin className="w-12 h-12 text-purple-400 group-hover/icon:scale-110 transition-transform mb-2" />
            <div className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Geo-Mapping</div>
         </div>
      </Skeleton>
    ),
    icon: <Cpu className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "USC Alum",
    description: "Master of Science in Applied Data Science. Focusing on ML, predictive analytics, and large-scale data systems.",
    header: (
      <Skeleton className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-red-950/20 to-black">
         <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 tracking-tighter mb-2">USC</span>
         <div className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-500">Viterbi Engineering</div>
      </Skeleton>
    ),
    icon: <GraduationCap className="h-4 w-4 text-orange-500" />,
  },
  {
    title: "Research Publication",
    description: "Authored 'Live Pothole Detection: A Machine Learning Based Approach' presented at ICICN 2023.",
    header: (
      <Skeleton className="flex items-center justify-center p-8 group">
         <div className="relative">
           <div className="absolute inset-0 bg-emerald-400/20 blur-2xl group-hover:scale-150 transition-transform" />
           <FileText className="w-20 h-20 text-emerald-400 relative z-10 transition-transform group-hover:rotate-12" />
         </div>
      </Skeleton>
    ),
    icon: <FileText className="h-4 w-4 text-emerald-400" />,
  },
  {
    title: "Engineered Query Language",
    description: "Built a custom NoSQL/SQL database engine in C++ with optimized I/O pipelines and a specialized regex syntax parser.",
    header: (
      <Skeleton className="p-6">
         <div className="w-full h-full bg-neutral-950 rounded-2xl border border-white/5 p-4 font-mono text-[11px] leading-relaxed shadow-inner">
             <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
             </div>
             <span className="text-purple-400">mitl-db</span> <span className="text-neutral-600">--engine</span> <span className="text-cyan-400">start</span><br/>
             <span className="text-neutral-500">Initializing memory chunks...</span><br/>
             <span className="text-emerald-500 font-bold">[READY]</span> <span className="text-neutral-300 font-medium">Core pipeline active at 0.002ms latency</span>
         </div>
      </Skeleton>
    ),
    icon: <Database className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Global Certifications",
    description: "Accredited by IBM, Microsoft, Stanford, and Google in AI, Data Science, and Systems Architecture.",
    header: (
      <Skeleton className="p-6 flex flex-wrap gap-2 items-center justify-center">
        {["IBM GenAI", "Microsoft BA", "Stanford ML", "Kaggle Pandas", "Udemy Python"].map((cert) => (
          <div key={cert} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-[10px] font-bold text-white hover:bg-cyan-500/10 transition-colors">
            <Award className="w-3.5 h-3.5 text-yellow-500" />
            {cert}
          </div>
        ))}
        <div className="text-[9px] font-black text-neutral-600 mt-2 tracking-widest uppercase">Explore in Matrix Above</div>
      </Skeleton>
    ),
    icon: <Award className="h-4 w-4 text-yellow-500" />,
  }
];