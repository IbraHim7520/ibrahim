"use client";
import jsImage from "../assets/js.png"
import nodejs from "../assets/nodejs.png"
import express from "../assets/express.png"
import typescript from "../assets/typescript.png"
import nextjs from "../assets/nextjs.png"
import reactjs from "../assets/react.png"
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { name: "Node", icon: nodejs, radius: 100 },
  { name: "React", icon: reactjs , radius: 160 },
  { name: "Next", icon: nextjs, radius: 220 },
  { name: "TypeScript", icon: typescript, radius: 280 },
  { name: "Express", icon: express, radius: 340 },
];

export default function TechOrbit() {
  return (
    // Added a wrapper with scale to handle mobile screens easily
    <div className="w-full flex justify-center items-center py-10 md:py-20 bg-transparent overflow-hidden">
      
      {/* Container: Scale down on small devices using Tailwind transform */}
      <div className="relative w-87.5 h-87.5 md:w-145 md:h-145 lg:h-175 lg:w-175 flex items-center justify-center scale-[0.5] sm:scale-[0.7] md:scale-100 transition-transform duration-500">

        {/* CENTER JAVASCRIPT */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)] z-20"
        >
          <Image
            src={jsImage}
            alt="javascript"
            width={60}
            height={60}
            className="object-contain"
          />
        </motion.div>

        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * (2 * Math.PI)
          const x = tech.radius * Math.cos(angle)
          const y = tech.radius * Math.sin(angle)

          return (
            <div key={tech.name} className="absolute inset-0 flex items-center justify-center">

              {/* ORBIT RING */}
              <div
                className="absolute rounded-full border border-neutral-300 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)]"
                style={{
                  width: tech.radius * 2,
                  height: tech.radius * 2,
                }}
              />

              {/* FLOATING ICON */}
              <motion.div
                className="absolute z-10"
                style={{ x, y }}
                animate={{
                  y: [y - 10, y + 10, y - 10],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="group relative">
                  
                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50">
                    {tech.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
                  </span>

                  {/* Icon Card */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm border border-neutral-100 shadow-lg rounded-2xl flex items-center justify-center hover:scale-110 hover:border-indigo-400 transition-all duration-300 cursor-pointer">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>

                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  );
}