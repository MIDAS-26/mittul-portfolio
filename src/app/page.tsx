import Navbar from "@/components/navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import RetroGrid from "@/components/ui/retro-grid";
import { Briefcase, Code, GraduationCap, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white/30">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center w-full">
        <RetroGrid className="z-0" />
        
        <div className="z-10 flex flex-col items-center text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Mittul Daswani
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl">
            AI Engineer | Architecting the Future of Intelligence.
          </p>
        </div>
      </section>

      {/* Visual Resume / Bento Grid */}
      <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Skills</h2>
          <p className="text-neutral-400">A visual overview of my professional journey.</p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
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
      <footer id="contact" className="border-t border-white/10 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
          <p className="text-neutral-400">Open for opportunities in AI and Software Engineering.</p>
          <a href="mailto:contact@mittul.info" className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
            Get in touch
          </a>
        </div>
      </footer>
    </main>
  );
}

const Skeleton = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative ${className}`}>
    {children}
    <BorderBeam size={150} duration={12} delay={9} />
  </div>
);

const items = [
  {
    title: "Professional Experience",
    description: "Building scalable AI solutions and driving engineering excellence.",
    header: (
      <Skeleton className="p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center"><Briefcase size={16} className="text-blue-400"/></div>
          <div>
            <div className="text-sm font-bold text-white">Senior AI Engineer</div>
            <div className="text-xs text-neutral-400">2022 - Present</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center"><Code size={16} className="text-purple-400"/></div>
          <div>
            <div className="text-sm font-bold text-white">Software Engineer</div>
            <div className="text-xs text-neutral-400">2020 - 2022</div>
          </div>
        </div>
      </Skeleton>
    ),
    icon: <Briefcase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Education",
    description: "Master's Degree, University of Southern California (USC)",
    header: (
      <Skeleton className="flex items-center justify-center">
         <div className="text-center">
            <span className="text-5xl font-black text-red-600/80 tracking-tighter">USC</span>
         </div>
      </Skeleton>
    ),
    icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Core Skills",
    description: "Python, TypeScript, React, Next.js, LLMs, PyTorch",
    header: <Skeleton className="flex flex-wrap gap-2 p-4 content-start">
      {["Python", "TypeScript", "React", "Next.js", "PyTorch", "LLMs", "Docker", "AWS"].map((skill) => (
        <span key={skill} className="px-2 py-1 text-xs rounded-md bg-white/10 text-neutral-300 border border-white/5">{skill}</span>
      ))}
    </Skeleton>,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Featured Projects",
    description: "Discover my latest work in Artificial Intelligence and Machine Learning.",
    header: (
      <Skeleton className="p-4 grid grid-cols-2 gap-4">
        <div className="h-full rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
           <Cpu className="text-neutral-500 group-hover:text-white transition-colors" />
        </div>
        <div className="h-full rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
           <Code className="text-neutral-500 group-hover:text-white transition-colors" />
        </div>
      </Skeleton>
    ),
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
];