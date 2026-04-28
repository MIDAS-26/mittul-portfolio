"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, Briefcase, FolderGit2 } from "lucide-react";

export type NodeData = {
  id: string;
  label: string;
  type: "center" | "category" | "skill";
  angle?: number;
  radius?: number;
  parent?: string;
  color?: string;
  summary?: string;
  experiences?: string[];
  projects?: string[];
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
    
    // Adjust radius for smaller screens to prevent overflow
    const scale = dimensions.width < 768 ? 0.6 : 1;
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
      y: [0, -8, 0, 8, 0],
      x: [0, 4, 0, -4, 0],
      transition: {
        duration: 7 + (i % 3),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[700px] md:h-[900px] overflow-hidden bg-black", className)}
    >
      {/* Background SVG Links */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
        </defs>
        {nodes.map((node) => {
          if (!node.parent) return null;
          const parentPos = nodePositions[node.parent];
          const currentPos = nodePositions[node.id];
          if (!parentPos || !currentPos) return null;

          const isHovered = hoveredNode?.id === node.id || hoveredNode?.id === node.parent || selectedNode?.id === node.id || selectedNode?.id === node.parent;

          return (
            <motion.line
              key={`link-${node.parent}-${node.id}`}
              x1={parentPos.x}
              y1={parentPos.y}
              x2={currentPos.x}
              y2={currentPos.y}
              stroke={isHovered ? (node.color || "rgba(255,255,255,0.5)") : "url(#line-gradient)"}
              strokeWidth={isHovered ? 2 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="transition-colors duration-300"
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
                "relative flex items-center justify-center rounded-full text-center cursor-pointer transition-all duration-300 backdrop-blur-md",
                isCenter
                  ? "w-32 h-32 bg-white/10 text-white font-bold text-lg border-2"
                  : isCategory
                  ? "w-24 h-24 bg-neutral-900/90 text-white font-semibold text-sm border"
                  : "w-20 h-20 bg-black/80 text-neutral-300 text-xs border hover:text-white"
              )}
              style={{
                borderColor: isHovered ? color : isCenter ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.1)",
                boxShadow: isHovered ? `0 0 20px ${color}40` : isCenter ? "0 0 40px rgba(255,255,255,0.1)" : "none",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            >
              <span className="p-2 leading-tight">{node.label}</span>
            </motion.div>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {isHovered && node.type === "skill" && node.summary && !selectedNode && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-4 w-64 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl pointer-events-none z-50"
                  style={{ borderTopColor: color }}
                >
                  <h4 className="text-white font-bold mb-1">{node.label}</h4>
                  <p className="text-xs text-neutral-400 mb-2">{node.summary}</p>
                  <div className="flex gap-4 text-xs text-neutral-500">
                    {node.experiences && node.experiences.length > 0 && (
                      <span className="flex items-center gap-1"><Briefcase size={12}/> {node.experiences.length}</span>
                    )}
                    {node.projects && node.projects.length > 0 && (
                      <span className="flex items-center gap-1"><FolderGit2 size={12}/> {node.projects.length}</span>
                    )}
                  </div>
                  <div className="mt-2 text-[10px] text-neutral-500 font-medium tracking-wider uppercase">Click to explore</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-neutral-950 border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md"
                style={{ borderTop: `4px solid ${selectedNode.color || '#fff'}` }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedNode.label}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{selectedNode.summary}</p>
                </div>
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {selectedNode.experiences && selectedNode.experiences.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                      <Briefcase className="text-neutral-400" size={20}/> Professional Experience
                    </h4>
                    <div className="space-y-3">
                      {selectedNode.experiences.map((exp, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <p className="text-sm text-neutral-300">{exp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedNode.projects && selectedNode.projects.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                      <FolderGit2 className="text-neutral-400" size={20}/> Associated Projects
                    </h4>
                    <div className="space-y-3">
                      {selectedNode.projects.map((proj, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5">
                          <p className="text-sm text-neutral-300">{proj}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {(!selectedNode.experiences?.length && !selectedNode.projects?.length) && (
                  <div className="text-center text-neutral-500 py-8">
                    Select a more specific skill to see detailed associations.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};