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
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white/30">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center w-full pt-20">
        <RetroGrid className="z-0" />
        
        <div className="z-10 flex flex-col items-center text-center space-y-8 px-4 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
              Mittul Daswani
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-wide">
              AI Engineer | Architecting the Future of Intelligence.
            </p>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a href="https://linkedin.com/in/mittul-daswani/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <IconBrandLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mmdaswani9009@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
               <MapPin className="w-4 h-4" /> Los Angeles, CA
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Matrix (Knowledge Graph) */}
      <section id="skills" className="relative w-full z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">The Intelligence Matrix</h2>
          <p className="text-neutral-400">An interactive constellation of my core technical proficiencies.</p>
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
          <h2 className="text-4xl font-bold text-white mb-4">Projects & Achievements</h2>
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
      <footer id="contact" className="border-t border-white/10 py-16 mt-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-6 text-center">
          <h3 className="text-3xl font-bold text-white tracking-tight">Ready to innovate together?</h3>
          <p className="text-neutral-400 max-w-lg">I am currently open for opportunities in AI and Software Engineering. Let's build something remarkable.</p>
          <a href="mailto:mmdaswani9009@gmail.com" className="mt-6 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
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
        <p className="text-white font-medium mb-4 text-lg">Research Assistant | Oct 2024 - Present</p>
        <ul className="list-none text-neutral-400 text-sm md:text-base space-y-4">
          <li className="flex items-start gap-3">
             <span className="text-blue-500 mt-1">✦</span>
             <span>Authoring 2 research papers on relations between activity and compulsions, DSWPD using Fitbit data, time series analysis, linear mixed models, and anomaly detection.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-blue-500 mt-1">✦</span>
             <span>Implemented anomaly detection using isolation forests and z-score analysis on physiological data, increasing accuracy of behavioral trigger identification by 30%.</span>
          </li>
          <li className="flex items-start gap-3">
             <span className="text-blue-500 mt-1">✦</span>
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
        <p className="text-white font-medium mb-4 text-lg">AI / ML Developer & Program Manager | May 2024 - Aug 2024</p>
        <ul className="list-none text-neutral-400 text-sm md:text-base space-y-4">
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
        <p className="text-white font-medium mb-4 text-lg">Data Visualization Domain Expert & Analyst | Feb 2022 - July 2022</p>
        <ul className="list-none text-neutral-400 text-sm md:text-base space-y-4">
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
        <p className="text-white font-medium mb-4 text-lg">Data Analyst | June 2021 - July 2021</p>
        <ul className="list-none text-neutral-400 text-sm md:text-base space-y-4">
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
  { id: "center", label: "Mittul Daswani", type: "center" },
  
  { id: "ai", label: "AI/ML", type: "category", parent: "center", radius: 140, angle: -90 },
  { id: "data", label: "Data Science", type: "category", parent: "center", radius: 140, angle: 30 },
  { id: "dev", label: "Software Eng", type: "category", parent: "center", radius: 140, angle: 150 },
  
  // AI Skills (around -90)
  { id: "python", label: "Python", type: "skill", parent: "ai", radius: 260, angle: -120 },
  { id: "pytorch", label: "PyTorch", type: "skill", parent: "ai", radius: 280, angle: -100 },
  { id: "llms", label: "LLMs", type: "skill", parent: "ai", radius: 250, angle: -80 },
  { id: "cnn", label: "CNNs", type: "skill", parent: "ai", radius: 270, angle: -60 },
  { id: "nlp", label: "NLP", type: "skill", parent: "ai", radius: 290, angle: -105 },

  // Data Skills (around 30)
  { id: "sql", label: "SQL", type: "skill", parent: "data", radius: 260, angle: 10 },
  { id: "powerbi", label: "Power BI", type: "skill", parent: "data", radius: 280, angle: 30 },
  { id: "tableau", label: "Tableau", type: "skill", parent: "data", radius: 250, angle: 50 },
  { id: "r", label: "R", type: "skill", parent: "data", radius: 270, angle: 70 },
  { id: "matlab", label: "MATLAB", type: "skill", parent: "data", radius: 260, angle: 0 },

  // Dev Skills (around 150)
  { id: "ts", label: "TypeScript", type: "skill", parent: "dev", radius: 250, angle: 130 },
  { id: "nextjs", label: "Next.js", type: "skill", parent: "dev", radius: 270, angle: 150 },
  { id: "react", label: "React", type: "skill", parent: "dev", radius: 260, angle: 170 },
  { id: "cpp", label: "C++", type: "skill", parent: "dev", radius: 280, angle: 190 },
];

const Skeleton = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative ${className}`}>
    {children}
    <BorderBeam size={150} duration={12} delay={9} />
  </div>
);

const bentoItems = [
  {
    title: "Live Pothole Detection System",
    description: "ML Engineer & Website Developer. Built a real-time detection system using live traffic feeds, custom CNNs, and geolocation for automated reporting.",
    header: (
      <Skeleton className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
         <div className="h-full flex flex-col gap-2 p-4 rounded-lg bg-black border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <Cpu className="text-red-400 z-10" />
            <div className="text-sm font-bold text-white z-10">Custom CNN</div>
            <div className="text-xs text-neutral-400 z-10">Computer Vision Object Detection</div>
         </div>
         <div className="h-full flex flex-col gap-2 p-4 rounded-lg bg-black border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            <MapPin className="text-blue-400 z-10" />
            <div className="text-sm font-bold text-white z-10">Geolocation</div>
            <div className="text-xs text-neutral-400 z-10">Instant Local Authority Notification</div>
         </div>
      </Skeleton>
    ),
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Education",
    description: "Master's in Applied Data Science (USC) & Bachelor's in Computer Engineering (TSEC).",
    header: (
      <Skeleton className="flex flex-col items-center justify-center p-4 gap-4">
         <div className="text-center">
            <span className="text-4xl font-black text-red-600/80 tracking-tighter">USC</span>
            <p className="text-xs text-neutral-400 mt-1">2023 - 2025</p>
         </div>
         <div className="w-full h-[1px] bg-white/10" />
         <div className="text-center">
            <span className="text-2xl font-black text-blue-500/80 tracking-tighter">TSEC</span>
            <p className="text-xs text-neutral-400 mt-1">2019 - 2023</p>
         </div>
      </Skeleton>
    ),
    icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Publications",
    description: "International Conference on Intelligent Computing & Networking 2023",
    header: (
      <Skeleton className="flex items-center justify-center p-6 group cursor-pointer">
         <FileText className="w-16 h-16 text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300" />
      </Skeleton>
    ),
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Scalable Database Engine",
    description: "Engineered an efficient data pipeline and custom query language supporting both relational and NoSQL models with chunked I/O operations.",
    header: (
      <Skeleton className="p-4 flex flex-col gap-4 overflow-hidden relative">
         {/* Simulated DB queries animated */}
         <div className="w-full bg-black border border-neutral-800 rounded p-3 text-xs font-mono text-emerald-400/70 shadow-inner">
             &gt; SELECT * FROM chunks WHERE optimized = true;<br/>
             [OK] 1.2M rows returned in 0.04s<br/><br/>
             &gt; SYNC I/O PIPELINE...<br/>
             [OK] Memory usage optimized
         </div>
      </Skeleton>
    ),
    icon: <Database className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Certifications",
    description: "IBM GenAI, Google Advanced Data Analytics, Stanford ML, DeepLearning.AI, Kaggle",
    header: (
      <Skeleton className="flex flex-wrap gap-2 p-4 content-start">
        {["IBM GenAI", "Google Data Analytics", "Stanford ML", "DeepLearning.AI", "Microsoft BA", "PMP"].map((cert) => (
          <span key={cert} className="px-2 py-1 text-xs rounded-md bg-white/5 text-neutral-300 border border-white/10 flex items-center gap-1">
            <Award className="w-3 h-3 text-yellow-500/70" />
            {cert}
          </span>
        ))}
      </Skeleton>
    ),
    icon: <Award className="h-4 w-4 text-neutral-500" />,
  }
];