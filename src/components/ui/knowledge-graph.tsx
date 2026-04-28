"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

export type NodeData = {
  id: string;
  label: string;
  type: "center" | "category" | "skill";
  angle?: number;
  radius?: number;
  parent?: string;
  color?: string;
};

interface KnowledgeGraphProps {
  nodes: NodeData[];
  className?: string;
}

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ nodes, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height: height || 800 });
    }
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  const getNodePosition = (node: NodeData) => {
    if (node.type === "center") return { x: centerX, y: centerY };
    const r = node.radius || 150;
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

  // Floating animation variance
  const floatVariants: any = {
    initial: { y: 0, x: 0 },
    animate: (i: number) => ({
      y: [0, -10, 0, 10, 0],
      x: [0, 5, 0, -5, 0],
      transition: {
        duration: 6 + (i % 4),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black", className)}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {nodes.map((node) => {
          if (!node.parent) return null;
          const parentPos = nodePositions[node.parent];
          const currentPos = nodePositions[node.id];
          if (!parentPos || !currentPos) return null;

          return (
            <motion.line
              key={`link-${node.parent}-${node.id}`}
              x1={parentPos.x}
              y1={parentPos.y}
              x2={currentPos.x}
              y2={currentPos.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => {
        const pos = nodePositions[node.id];
        if (!pos) return null;

        const isCenter = node.type === "center";
        const isCategory = node.type === "category";

        return (
          <motion.div
            key={node.id}
            custom={i}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className={cn(
              "absolute flex items-center justify-center rounded-full text-center p-4 cursor-pointer hover:scale-110 transition-transform duration-300 backdrop-blur-md border",
              isCenter
                ? "w-32 h-32 bg-white/10 border-white/20 text-white font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] z-20"
                : isCategory
                ? "w-24 h-24 bg-neutral-900/80 border-neutral-700 text-neutral-200 font-semibold text-sm z-10"
                : "w-16 h-16 bg-black border-neutral-800 text-neutral-400 text-xs z-10 hover:border-white/50 hover:text-white"
            )}
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {node.label}
          </motion.div>
        );
      })}
    </div>
  );
};