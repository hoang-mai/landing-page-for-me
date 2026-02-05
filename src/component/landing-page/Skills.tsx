"use client";

import { FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiSpring,
  SiMysql,
  SiElasticsearch,
  SiMinio,
  SiRedis,
  SiKeycloak,
} from "react-icons/si";
import { IconType } from "react-icons";
import { useEffect, useRef } from "react";

interface Skill {
  icon: IconType;
  name: string;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    icon: SiSpring,
    name: "Spring",
    description: "Java backend framework",
    color: "#6DB33F",
  },
  {
    icon: FaReact,
    name: "React",
    description: "Building interactive UIs",
    color: "#61DAFB",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description: "Full-stack React framework",
    color: "#000000",
  },
  {
    icon: FaDocker,
    name: "Docker",
    description: "Container platform",
    color: "#2496ED",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    description: "Relational database",
    color: "#4479A1",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "Advanced SQL database",
    color: "#4169E1",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    description: "NoSQL document database",
    color: "#47A248",
  },
  {
    icon: SiElasticsearch,
    name: "Elasticsearch",
    description: "Search & analytics engine",
    color: "#005571",
  },
  {
    icon: SiMinio,
    name: "Minio",
    description: "Object storage solution",
    color: "#C72E49",
  },
  {
    icon: SiRedis,
    name: "Redis",
    description: "In-memory data store",
    color: "#DC382D",
  },
  {
    icon: SiKeycloak,
    name: "KeyCloak",
    description: "Identity management",
    color: "#6cacffff",
  },
  {
    icon: FaGitAlt,
    name: "Git",
    description: "Version control",
    color: "#F05032",
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="skill-card flex-shrink-0 w-64 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 mx-3 transition-transform duration-100">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        <Icon className="text-3xl" style={{ color: skill.color }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
      <p className="text-sm text-gray-500">{skill.description}</p>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: Skill[];
  direction: "left" | "right";
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(".skill-card");
      const viewportCenter = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        const maxDistance = window.innerWidth / 2;
        const scale = 1 - (distance / maxDistance) * 0.7;
        const clampedScale = Math.max(0.3, Math.min(1, scale));

        (card as HTMLElement).style.transform = `scale(${clampedScale})`;
      });
    };

    let animationId: number;
    const animate = () => {
      updateScale();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative mb-6">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyan-50/90 to-transparent z-10 pointer-events-none"></div>
      <div
        ref={containerRef}
        className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {skills.map((skill, index) => (
          <SkillCard key={`row-${index}`} skill={skill} />
        ))}
        {skills.map((skill, index) => (
          <SkillCard key={`row-dup-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          My Expertise
        </h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <MarqueeRow skills={skills} direction="left" />
      <MarqueeRow skills={[...skills].reverse()} direction="right" />
    </div>
  );
}
