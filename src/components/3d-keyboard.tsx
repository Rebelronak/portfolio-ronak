"use client";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { SKILLS, Skill } from "@/data/constants";

// Individual Keycap Component
function Keycap({
  position,
  skill,
  onHover,
  onClick,
  isSelected,
}: {
  position: [number, number, number];
  skill: Skill;
  onHover: (skill: Skill | null) => void;
  onClick: (skill: Skill) => void;
  isSelected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.02;

      // Scale animation
      const targetScale = isSelected || hovered ? 1.15 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(skill);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
        document.body.style.cursor = "default";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(skill);
      }}
      castShadow
      receiveShadow
    >
      {/* Keycap body */}
      <boxGeometry args={[0.9, 0.2, 0.9]} />
      <meshStandardMaterial
        color={isSelected || hovered ? skill.color : "#2a2a2a"}
        roughness={0.4}
        metalness={0.7}
        emissive={isSelected || hovered ? skill.color : "#000000"}
        emissiveIntensity={isSelected || hovered ? 0.4 : 0}
      />

      {/* Icon on top */}
      <Html
        position={[0, 0.15, 0]}
        center
        distanceFactor={6}
        style={{
          pointerEvents: "none",
          userSelect: "none",
          transition: "all 0.2s",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: isSelected || hovered ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.2s",
          }}
        >
          <img
            src={skill.icon}
            alt={skill.label}
            style={{
              width: "35px",
              height: "35px",
              objectFit: "contain",
              filter:
                skill.color === "#000000" || skill.color === "#181717"
                  ? "brightness(0) invert(1)"
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </Html>
    </mesh>
  );
}

// Keyboard Base
function KeyboardBase() {
  return (
    <mesh position={[0, -0.4, 0]} receiveShadow>
      <boxGeometry args={[9, 0.4, 5]} />
      <meshStandardMaterial color="#1a1a1a" roughness={0.5} metalness={0.8} />
    </mesh>
  );
}

// Main Keyboard Scene
function KeyboardScene({
  selectedSkill,
  setSelectedSkill,
  hoveredSkill,
  setHoveredSkill,
}: {
  selectedSkill: Skill | null;
  setSelectedSkill: (skill: Skill | null) => void;
  hoveredSkill: Skill | null;
  setHoveredSkill: (skill: Skill | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const skillsArray = Object.values(SKILLS);

  // Gentle rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  // 4 rows x 4 columns layout
  const cols = 4;
  const rows = 4;

  return (
    <group ref={groupRef}>
      <KeyboardBase />
      
      {skillsArray.slice(0, 16).map((skill, index) => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = (col - cols / 2 + 0.5) * 1.1;
        const z = (row - rows / 2 + 0.5) * 1.1;

        return (
          <Keycap
            key={skill.id}
            position={[x, 0, z]}
            skill={skill}
            onHover={setHoveredSkill}
            onClick={(s) =>
              setSelectedSkill(selectedSkill?.id === s.id ? null : s)
            }
            isSelected={selectedSkill?.id === skill.id}
          />
        );
      })}

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 5, -5]} intensity={0.5} color="#4a90e2" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.3}
        castShadow
      />
    </group>
  );
}

// Main Component
export default function ThreeDKeyboard() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const displaySkill = hoveredSkill || selectedSkill;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      {/* 3D Canvas */}
      <div className="w-full h-[500px] md:h-[600px] mb-8 rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800">
        <Canvas
          camera={{ position: [0, 4, 7], fov: 60 }}
          shadows
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <KeyboardScene
              selectedSkill={selectedSkill}
              setSelectedSkill={setSelectedSkill}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              minDistance={4}
              maxDistance={12}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2.2}
              autoRotate={!hoveredSkill && !selectedSkill}
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Skill Info */}
      {displaySkill && (
        <div className="w-full max-w-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-6 md:p-8 shadow-2xl border-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          style={{ borderColor: displaySkill.color }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: displaySkill.color + "20" }}
            >
              <img
                src={displaySkill.icon}
                alt={displaySkill.label}
                className="w-12 h-12 object-contain"
                style={{
                  filter:
                    displaySkill.color === "#000000" ||
                    displaySkill.color === "#181717"
                      ? "brightness(0) invert(1)"
                      : "none",
                }}
              />
            </div>
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ color: displaySkill.color }}
              >
                {displaySkill.label}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {displaySkill.name}
              </p>
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
            {displaySkill.shortDescription}
          </p>
        </div>
      )}

      {!displaySkill && (
        <div className="text-center text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
          🖱️ Hover over keys or click to select • Drag to rotate • Scroll to zoom
        </div>
      )}
    </div>
  );
}
