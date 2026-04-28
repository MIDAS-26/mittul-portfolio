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
      <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center w-full pt-20">
        <RetroGrid className="z-0" />
        
        <div className="z-10 flex flex-col items-center text-center space-y-8 px-4 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-indigo-500 drop-shadow-sm">
              Mittul Daswani
            </h1>
            <p className="text-xl md:text-2xl text-cyan-50/80 font-medium tracking-wide">
              AI Engineer <span className="text-cyan-400">|</span> Architecting the Future of Intelligence.
            </p>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a href="https://linkedin.com/in/mittul-daswani/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:bg-cyan-900/40 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mmdaswani9009@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-cyan-200 hover:text-white hover:bg-cyan-900/40 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-cyan-200 text-sm">
               <MapPin className="w-4 h-4 text-cyan-400" /> Los Angeles, CA
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Matrix (Knowledge Graph) */}
      <section id="skills" className="relative w-full z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">The Intelligence Matrix</h2>
          <p className="text-neutral-400">An interactive constellation of my core technical proficiencies. <strong className="text-pink-300">Hover & Click to explore.</strong></p>
        </div>
        <KnowledgeGraph nodes={knowledgeNodes} className="border-b border-white/10" />
      </section>

      {/* Professional Timeline */}
      <section id="experience" className="relative w-full z-10 bg-black">
         <Timeline data={experienceData} />
      </section>

      {/* Visual Resume / Bento Grid */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-white/10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">Projects & Achievements</h2>
          <p className="text-neutral-400">Academic milestones, publications, and engineered systems.</p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {bentoItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
      
      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-white/10 py-16 mt-12 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-6 text-center relative z-10">
          <h3 className="text-3xl font-bold text-white tracking-tight">Ready to innovate together?</h3>
          <p className="text-neutral-400 max-w-lg">I am currently open for opportunities in AI and Software Engineering. Let's build something remarkable.</p>
          <a href="mailto:mmdaswani9009@gmail.com" className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            Contact Me
          </a>
          <p className="text-neutral-600 text-xs pt-8">© 2026 Mittul Daswani. All rights reserved.</p>
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
      <div>
        <p className="text-cyan-400 font-bold mb-4 text-lg">Research Assistant | Oct 2024 - Present</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-4">
          <li className="flex items-start gap-3">
             <span className="text-cyan-500 mt-1">✦</span>
             <span>Authoring 2 research papers on relations between activity and compulsions, DSWPD using Fitbit data, time series analysis, linear mixed models, and anomaly detection.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-cyan-500 mt-1">✦</span>
             <span>Implemented anomaly detection using isolation forests and z-score analysis on physiological data, increasing accuracy of behavioral trigger identification by 30%.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-cyan-500 mt-1">✦</span>
             <span>Leveraged PCA and t-SNE for dimensionality reduction, improving model efficiency and interpretability, decreasing training time by 35%.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Hyphenova",
    content: (
      <div>
        <p className="text-purple-400 font-bold mb-4 text-lg">AI / ML Developer & Program Manager | May 2024 - Aug 2024</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-4">
          <li className="flex items-start gap-3">
             <span className="text-purple-500 mt-1">✦</span>
             <span>Developed a Multimodal AI Chatbot using custom LLMs, NLP, computer vision, and song analysis, improving user engagement by 58%.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-purple-500 mt-1">✦</span>
             <span>Built a Profanity Detection Model with n-grams, Perspective API, and KeyBERT with 95% precision.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-purple-500 mt-1">✦</span>
             <span>Steered AI and ML strategy as a core management team member, aligning technical projects with business goals.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "GlobalShala",
    content: (
      <div>
        <p className="text-emerald-400 font-bold mb-4 text-lg">Data Visualization Domain Expert & Analyst | Feb 2022 - July 2022</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-4">
          <li className="flex items-start gap-3">
             <span className="text-emerald-500 mt-1">✦</span>
             <span>Designed predictive models and dynamic dashboards using Python, Power BI, and Tableau to enhance decision making.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-emerald-500 mt-1">✦</span>
             <span>Developed a machine learning pipeline to automate data processing and visualization, reducing manual effort by 40%.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-emerald-500 mt-1">✦</span>
             <span>Managed and mentored a team of 10-15, drove client acquisition efforts expanding the client base by 30%.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Wheel and Time",
    content: (
      <div>
        <p className="text-amber-400 font-bold mb-4 text-lg">Data Analyst | June 2021 - July 2021</p>
        <ul className="list-none text-neutral-300 text-sm md:text-base space-y-4">
          <li className="flex items-start gap-3">
             <span className="text-amber-500 mt-1">✦</span>
             <span>Developed quantitative analysis models to support key operation decisions, optimizing processes and improving efficiency.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-amber-500 mt-1">✦</span>
             <span>Compiled monthly logistics financial reports, ensuring accurate data presentation and aiding in financial decision making.</span>
          </li>
        </ul>
      </div>
    )
  }
];

const knowledgeNodes: NodeData[] = [
  { id: "center", label: "Mittul Daswani", type: "center", color: "#ffffff" },
  
  { id: "ai", label: "AI/ML", type: "category", parent: "center", radius: 160, angle: -90, color: "#a855f7" },
  { id: "data", label: "Data Science", type: "category", parent: "center", radius: 160, angle: 30, color: "#10b981" },
  { id: "dev", label: "Software Eng", type: "category", parent: "center", radius: 160, angle: 150, color: "#3b82f6" },
  
  // AI Skills (around -90)
  { 
    id: "python", label: "Python", type: "skill", parent: "ai", radius: 300, angle: -125, color: "#eab308",
    summary: "Primary language for developing AI models, data pipelines, and backend logic.",
    experiences: ["Keck School of Medicine USC (Data Processing & Models)", "Hyphenova (AI/ML Backend)", "GlobalShala (Predictive Models)"],
    projects: ["Live Pothole Detection System"]
  },
  { 
    id: "pytorch", label: "PyTorch", type: "skill", parent: "ai", radius: 330, angle: -100, color: "#ef4444",
    summary: "Used for building and training complex neural networks and computer vision models.",
    experiences: ["Keck School of Medicine USC (Research Models)", "Hyphenova (Profanity Detection & CV)"],
    projects: ["Live Pothole Detection System (Custom CNN)"]
  },
  { 
    id: "llms", label: "LLMs", type: "skill", parent: "ai", radius: 300, angle: -75, color: "#8b5cf6",
    summary: "Integration and customization of Large Language Models for natural language processing.",
    experiences: ["Hyphenova (Multimodal AI Chatbot)"],
    projects: []
  },
  { 
    id: "cnn", label: "CNNs", type: "skill", parent: "ai", radius: 330, angle: -50, color: "#ec4899",
    summary: "Convolutional Neural Networks for image classification and real-time object detection.",
    experiences: ["Hyphenova (Computer Vision)"],
    projects: ["Live Pothole Detection System"]
  },
  { 
    id: "nlp", label: "NLP", type: "skill", parent: "ai", radius: 350, angle: -115, color: "#6366f1",
    summary: "Natural Language Processing for text analysis, sentiment tracking, and entity extraction.",
    experiences: ["Hyphenova (Profanity Detection with n-grams & KeyBERT)"],
    projects: []
  },

  // Data Skills (around 30)
  { 
    id: "sql", label: "SQL", type: "skill", parent: "data", radius: 300, angle: 5, color: "#f97316",
    summary: "Relational database management, complex querying, and data manipulation.",
    experiences: ["Keck School of Medicine USC", "Hyphenova", "GlobalShala"],
    projects: ["Custom Query Language and Scalable Database System"]
  },
  { 
    id: "powerbi", label: "Power BI", type: "skill", parent: "data", radius: 330, angle: 30, color: "#eab308",
    summary: "Creating interactive dashboards and dynamic data visualizations for business intelligence.",
    experiences: ["Keck School of Medicine USC", "GlobalShala", "Wheel and Time"],
    projects: []
  },
  { 
    id: "tableau", label: "Tableau", type: "skill", parent: "data", radius: 300, angle: 55, color: "#3b82f6",
    summary: "Advanced data visualization to influence marketing strategies and business decisions.",
    experiences: ["GlobalShala (Domain Expert)"],
    projects: []
  },
  { 
    id: "r", label: "R", type: "skill", parent: "data", radius: 330, angle: 75, color: "#06b6d4",
    summary: "Statistical computing and graphics for rigorous data analysis.",
    experiences: ["Keck School of Medicine USC (Linear mixed models, time series)", "Hyphenova"],
    projects: []
  },
  { 
    id: "matlab", label: "MATLAB", type: "skill", parent: "data", radius: 350, angle: 15, color: "#ef4444",
    summary: "Numeric computing and algorithm development.",
    experiences: ["Keck School of Medicine USC", "GlobalShala"],
    projects: []
  },

  // Dev Skills (around 150)
  { 
    id: "ts", label: "TypeScript", type: "skill", parent: "dev", radius: 300, angle: 125, color: "#3b82f6",
    summary: "Strongly typed JavaScript for robust web application development.",
    experiences: ["Hyphenova (Web integrations)"],
    projects: ["Live Pothole Detection System (Web Interface)"]
  },
  { 
    id: "nextjs", label: "Next.js", type: "skill", parent: "dev", radius: 330, angle: 150, color: "#ffffff",
    summary: "React framework for server-side rendered and static web applications.",
    experiences: [],
    projects: ["Live Pothole Detection System (Frontend)"]
  },
  { 
    id: "react", label: "React", type: "skill", parent: "dev", radius: 300, angle: 175, color: "#06b6d4",
    summary: "Building interactive and dynamic user interfaces.",
    experiences: ["Hyphenova"],
    projects: ["Live Pothole Detection System (Web/Mobile)"]
  },
  { 
    id: "cpp", label: "C++", type: "skill", parent: "dev", radius: 330, angle: 195, color: "#8b5cf6",
    summary: "High-performance computing and systems level programming.",
    experiences: [],
    projects: ["Custom Query Language and Scalable Database System (Engine logic)"]
  },
];

const Skeleton = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
    <BorderBeam size={200} duration={12} delay={9} colorFrom="#22d3ee" colorTo="#c084fc" />
  </div>
);

const bentoItems = [
  {
    title: "Live Pothole Detection System",
    description: "ML Engineer & Website Developer. Built a real-time detection system using live traffic feeds, custom CNNs, and geolocation for automated reporting.",
    header: (
      <Skeleton className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
         <div className="h-full flex flex-col gap-2 p-4 rounded-lg bg-black border border-cyan-500/20 relative overflow-hidden group/card shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <div className="absolute inset-0 bg-cyan-500/10 translate-y-[100%] group-hover/card:translate-y-0 transition-transform duration-300" />
            <Cpu className="text-cyan-400 z-10" />
            <div className="text-sm font-bold text-white z-10">Custom CNN</div>
            <div className="text-xs text-neutral-400 z-10">Computer Vision Object Detection</div>
         </div>
         <div className="h-full flex flex-col gap-2 p-4 rounded-lg bg-black border border-purple-500/20 relative overflow-hidden group/card shadow-[0_0_15px_rgba(192,132,252,0.1)]">
            <div className="absolute inset-0 bg-purple-500/10 translate-y-[100%] group-hover/card:translate-y-0 transition-transform duration-300" />
            <MapPin className="text-purple-400 z-10" />
            <div className="text-sm font-bold text-white z-10">Geolocation</div>
            <div className="text-xs text-neutral-400 z-10">Instant Local Authority Notification</div>
         </div>
      </Skeleton>
    ),
    icon: <Cpu className="h-4 w-4 text-cyan-500" />,
  },
  {
    title: "Education",
    description: "Master's in Applied Data Science (USC) & Bachelor's in Computer Engineering (TSEC).",
    header: (
      <Skeleton className="flex flex-col items-center justify-center p-4 gap-4">
         <div className="text-center group">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 tracking-tighter group-hover:scale-110 transition-transform inline-block">USC</span>
            <p className="text-xs text-neutral-400 mt-1">2023 - 2025</p>
         </div>
         <div className="w-full h-[1px] bg-white/10" />
         <div className="text-center group">
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-tighter group-hover:scale-110 transition-transform inline-block">TSEC</span>
            <p className="text-xs text-neutral-400 mt-1">2019 - 2023</p>
         </div>
      </Skeleton>
    ),
    icon: <GraduationCap className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Publications",
    description: "International Conference on Intelligent Computing & Networking 2023",
    header: (
      <Skeleton className="flex items-center justify-center p-6 group cursor-pointer relative">
         <div className="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
         <FileText className="w-16 h-16 text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300 relative z-10 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
      </Skeleton>
    ),
    icon: <FileText className="h-4 w-4 text-emerald-500" />,
  },
  {
    title: "Scalable Database Engine",
    description: "Engineered an efficient data pipeline and custom query language supporting both relational and NoSQL models with chunked I/O operations.",
    header: (
      <Skeleton className="p-4 flex flex-col gap-4 overflow-hidden relative">
         <div className="w-full bg-black border border-emerald-500/30 rounded p-3 text-xs font-mono text-emerald-400/90 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]">
             <span className="text-purple-400">&gt;</span> <span className="text-blue-300">SELECT</span> * <span className="text-blue-300">FROM</span> chunks <span className="text-blue-300">WHERE</span> optimized = <span className="text-orange-300">true</span>;<br/>
             <span className="text-emerald-500 font-bold">[OK]</span> 1.2M rows returned in 0.04s<br/><br/>
             <span className="text-purple-400">&gt;</span> <span className="text-cyan-300">SYNC I/O PIPELINE...</span><br/>
             <span className="text-emerald-500 font-bold">[OK]</span> Memory usage optimized
         </div>
      </Skeleton>
    ),
    icon: <Database className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Certifications",
    description: "IBM GenAI, Google Advanced Data Analytics, Stanford ML, DeepLearning.AI, Kaggle",
    header: (
      <Skeleton className="flex flex-wrap gap-2 p-4 content-start">
        {["IBM GenAI", "Google Data Analytics", "Stanford ML", "DeepLearning.AI", "Microsoft BA", "PMP"].map((cert, i) => (
          <span key={cert} className="px-2 py-1 text-xs rounded-md bg-white/5 text-neutral-200 border border-white/10 flex items-center gap-1 hover:bg-white/10 hover:scale-105 transition-all cursor-default" style={{ animationDelay: `${i * 100}ms` }}>
            <Award className="w-3 h-3 text-yellow-400" />
            {cert}
          </span>
        ))}
      </Skeleton>
    ),
    icon: <Award className="h-4 w-4 text-yellow-500" />,
  }
];