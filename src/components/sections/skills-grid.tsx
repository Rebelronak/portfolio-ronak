"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS, SkillNames } from "@/data/constants";
import Image from "next/image";

const SkillsGrid = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillsArray = Object.values(SKILLS);
  const displaySkill = selectedSkill ? SKILLS[selectedSkill as SkillNames] : null;

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black/80 to-black/50 dark:from-white/80 dark:to-white/20 mb-4">
          Skills & Tools
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Click on any skill to learn more
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="w-full max-w-5xl mb-12">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 pb-12">
          {skillsArray.map((skill, index) => (
            <motion.button
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              className="relative aspect-square rounded-xl p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-200 flex items-center justify-center group"
              style={{
                boxShadow: selectedSkill === skill.name 
                  ? `0 10px 30px ${skill.color}30, 0 0 0 2px ${skill.color}` 
                  : undefined,
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.label}
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110"
                style={{
                  filter: skill.color === "#000000" || skill.color === "#181717"
                    ? "brightness(0) invert(1)"
                    : undefined,
                }}
              />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                <div 
                  className="text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Skill Details */}
      {displaySkill && (
        <motion.div
          key={displaySkill.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-3xl"
        >
          <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-6 mb-6">
              <div 
                className="w-20 h-20 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: displaySkill.color + "20" }}
              >
                <Image
                  src={displaySkill.icon}
                  alt={displaySkill.label}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                  style={{
                    filter: displaySkill.color === "#000000" || displaySkill.color === "#181717"
                      ? "brightness(0) invert(1)"
                      : undefined,
                  }}
                />
              </div>
              <div>
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: displaySkill.color }}
                >
                  {displaySkill.label}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {displaySkill.name}
                </p>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
              {displaySkill.shortDescription}
            </p>
          </div>
        </motion.div>
      )}

      {!displaySkill && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neutral-500 dark:text-neutral-400 text-sm"
        >
          👆 Click any skill card to see details
        </motion.p>
      )}
    </section>
  );
};

export default SkillsGrid;
