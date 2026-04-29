"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, Briefcase, FolderGit2, Award, ExternalLink, Calendar, Building2 } from "lucide-react";

export type NodeData = {
  id: string;
  label: string;
  type: "center" | "category" | "skill";
  angle?: number;
  radius?: number;
  parent?: string;
  color?: string;
  summary?: string;
  experiences?: { role: string; company: string; details: string }[];
  projects?: { name: string; description: string; tech?: string[] }[];
  certifications?: { name: string; provider: string; date: string; url?: string }[];
};

interface KnowledgeGraphProps {
  nodes: NodeData[];
  className?: string;
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ nodes, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height: height || 800 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  const getNodePosition = (node: NodeData) => {
    if (node.type === "center") return { x: centerX, y: centerY };
    const scale = dimensions.width < 768 ? 0.55 : 1;
    const r = (node.radius || 150) * scale;
    const a = ((node.angle || 0) * Math.PI) / 180;
    return {
      x: centerX + r * Math.cos(a),
      y: centerY + r * Math.sin(a),
    };
  };

  const nodePositions = nodes.reduce((acc, node) => {
    acc[node.id] = getNodePosition(node);
    return acc;
  }, {} as Record<string, { x: number; y: number }>);

  const floatVariants: any = {
    initial: { y: 0, x: 0 },
    animate: (i: number) => ({
      y: [0, -12, 0, 12, 0],
      x: [0, 6, 0, -6, 0],
      transition: {
        duration: 8 + (i % 4),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[700px] md:h-[950px] overflow-hidden bg-black selection:bg-cyan-500/30", className)}
    >
      {/* Dynamic Ambient Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {nodes.map((node) => {
          if (!node.parent) return null;
          const parentPos = nodePositions[node.parent];
          const currentPos = nodePositions[node.id];
          if (!parentPos || !currentPos) return null;

          const isActive = hoveredNode?.id === node.id || hoveredNode?.id === node.parent || selectedNode?.id === node.id || selectedNode?.id === node.parent;

          return (
            <motion.line
              key={`link-${node.parent}-${node.id}`}
              x1={parentPos.x}
              y1={parentPos.y}
              x2={currentPos.x}
              y2={currentPos.y}
              stroke={isActive ? (node.color || "#fff") : "rgba(255,255,255,0.4)"}
              strokeWidth={isActive ? 3 : 2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: isActive ? 1 : 0.7 }}
              transition={{ duration: 1 }}
              style={isActive ? { filter: "url(#glow)" } : {}}
              className="transition-all duration-500"
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const pos = nodePositions[node.id];
        if (!pos) return null;

        const isCenter = node.type === "center";
        const isCategory = node.type === "category";
        const isHovered = hoveredNode?.id === node.id;
        const color = node.color || "#ffffff";

        return (
          <div
            key={node.id}
            className="absolute z-10 flex items-center justify-center"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredNode(node)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => node.type !== 'center' && setSelectedNode(node)}
          >
            <motion.div
              custom={i}
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className={cn(
                "relative flex items-center justify-center rounded-full text-center cursor-pointer transition-all duration-500 backdrop-blur-md border-2 group",
                isCenter ? "w-32 h-32 text-lg font-black" : isCategory ? "w-24 h-24 text-sm font-bold" : "w-20 h-20 text-xs font-semibold"
              )}
              style={{
                backgroundColor: isHovered ? `${color}20` : "rgba(0,0,0,0.4)",
                borderColor: isHovered ? color : `${color}30`,
                boxShadow: isHovered ? `0 0 30px ${color}60` : isCenter ? "0 0 50px rgba(255,255,255,0.1)" : "none",
                color: isHovered || isCenter ? "#fff" : "rgba(255,255,255,0.6)",
                scale: isHovered ? 1.15 : 1
              }}
            >
              <span className="p-2 tracking-tight group-hover:scale-110 transition-transform">{node.label}</span>
              
              {/* Particle rings on hover */}
              {isHovered && (
                <motion.div 
                  className="absolute -inset-2 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.div>

            {/* Hover Summary Window */}
            <AnimatePresence>
              {isHovered && node.type === "skill" && !selectedNode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  className="absolute top-full mt-6 w-72 bg-neutral-950/90 backdrop-blur-2xl border-t-4 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 pointer-events-none overflow-hidden"
                  style={{ borderTopColor: color }}
                >
                  {/* Glass highlight effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                  
                  <h4 className="text-white font-black text-lg mb-2 flex items-center justify-between">
                    {node.label}
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{node.summary || "Explore associations with this expertise."}</p>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
                      <Briefcase size={14} className="text-blue-400 mb-1" />
                      <span className="text-[10px] font-bold text-white">{node.experiences?.length || 0}</span>
                      <span className="text-[8px] text-neutral-500 uppercase">Exp</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
                      <FolderGit2 size={14} className="text-purple-400 mb-1" />
                      <span className="text-[10px] font-bold text-white">{node.projects?.length || 0}</span>
                      <span className="text-[8px] text-neutral-500 uppercase">Projects</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
                      <Award size={14} className="text-yellow-400 mb-1" />
                      <span className="text-[10px] font-bold text-white">{node.certifications?.length || 0}</span>
                      <span className="text-[8px] text-neutral-500 uppercase">Certs</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Detailed Associations Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-neutral-950 border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div 
                className="relative p-8 md:p-12 overflow-hidden flex flex-col md:flex-row md:items-end justify-between gap-6"
                style={{ background: `linear-gradient(to bottom right, ${selectedNode.color}15, transparent)` }}
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                    Expertise Profile
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">{selectedNode.label}</h3>
                  <p className="text-lg text-neutral-300 max-w-2xl font-medium leading-relaxed">{selectedNode.summary}</p>
                </div>
                
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-8 right-8 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:rotate-90"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 scrollbar-hide">
                
                {/* Experiences */}
                {selectedNode.experiences && selectedNode.experiences.length > 0 && (
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <Briefcase className="text-blue-400" size={20}/>
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider">Experience Associations</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedNode.experiences.map((exp, idx) => (
                        <div key={idx} className="group p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all">
                          <div className="flex justify-between items-start mb-4">
                             <div className="font-bold text-white text-lg">{exp.role}</div>
                             <div className="flex items-center gap-2 text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                               <Building2 size={12}/> {exp.company}
                             </div>
                          </div>
                          <p className="text-neutral-400 text-sm leading-relaxed">{exp.details}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Projects */}
                {selectedNode.projects && selectedNode.projects.length > 0 && (
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <FolderGit2 className="text-purple-400" size={20}/>
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider">Engineered Systems</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedNode.projects.map((proj, idx) => (
                        <div key={idx} className="p-6 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between">
                          <div>
                            <div className="font-bold text-white text-lg mb-2">{proj.name}</div>
                            <p className="text-neutral-400 text-xs leading-relaxed mb-4">{proj.description}</p>
                          </div>
                          {proj.tech && (
                            <div className="flex flex-wrap gap-2">
                              {proj.tech.map(t => (
                                <span key={t} className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-500 border border-white/5">{t}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Certifications */}
                {selectedNode.certifications && selectedNode.certifications.length > 0 && (
                  <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <Award className="text-yellow-400" size={20}/>
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-wider">Accreditations</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedNode.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-neutral-900/60 to-transparent border border-white/5 group hover:border-yellow-500/30 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                               <Award size={20}/>
                            </div>
                            <div>
                               <div className="font-bold text-white text-sm">{cert.name}</div>
                               <div className="text-xs text-neutral-500 font-medium">{cert.provider}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                             <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-neutral-500 font-bold uppercase tracking-tighter bg-white/5 px-3 py-1 rounded-full">
                               <Calendar size={10}/> {cert.date}
                             </div>
                             {cert.url ? (
                               <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
                                 <ExternalLink size={16} />
                               </a>
                             ) : (
                               <ExternalLink size={16} className="text-neutral-800" />
                             )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
                {(!selectedNode.experiences?.length && !selectedNode.projects?.length && !selectedNode.certifications?.length) && (
                  <div className="text-center text-neutral-500 py-12 flex flex-col items-center gap-4">
                    <div className="h-12 w-12 rounded-full border border-dashed border-neutral-800 flex items-center justify-center text-neutral-700">?</div>
                    <p>Select a specific skill node to see detailed professional associations.</p>
                  </div>
                )}
              </div>
              
              {/* Footer status bar */}
              <div className="px-12 py-6 border-t border-white/5 bg-black/40 text-[10px] text-neutral-600 font-bold uppercase tracking-[0.3em] flex justify-between items-center">
                 <span>Identity Verified: Mittul Daswani</span>
                 <span className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"/> System Ready</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};