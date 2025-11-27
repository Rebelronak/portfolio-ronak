"use client";
import React from "react";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { FEATURES } from "@/config/features";

const ThreeDKeyboard = dynamic(() => import("../3d-keyboard"), {
  ssr: false,
  loading: () => <div className="text-center">Loading 3D Keyboard...</div>,
});

const SkillsGrid = dynamic(() => import("./skills-grid"), {
  ssr: false,
  loading: () => <div className="text-center">Loading Skills...</div>,
});

const SkillsAlternative = () => {
  return (
    <section id="skills" className="w-full min-h-screen">
      <div className="w-full">
        {FEATURES.SKILLS_DISPLAY === '3d' ? <ThreeDKeyboard /> : <SkillsGrid />}
      </div>
    </section>
  );
};

export default SkillsAlternative;
