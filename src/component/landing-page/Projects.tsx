'use client';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiSpring, SiMongodb, SiDocker, SiReact, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons";

interface Project {
    title: string;
    description: string;
    technologies: { icon: IconType; name: string; color: string }[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

const projects: Project[] = [
    {
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and clean design.",
        technologies: [
            { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
            { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
            { icon: SiReact, name: "React", color: "#61DAFB" },
        ],
        githubUrl: "https://github.com/hoang-mai",
    },
    {
        title: "Chat Application",
        description: "Real-time chat application with microservices architecture, supporting group chats, file sharing, and message search.",
        technologies: [
            { icon: SiSpring, name: "Spring Boot", color: "#6DB33F" },
            { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
            { icon: SiDocker, name: "Docker", color: "#2496ED" },
        ],
        githubUrl: "https://github.com/hoang-mai",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0, 0, 0.2, 1] }}
            whileHover={{
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.12)"
            }}
        >
            {/* Project image placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 flex items-center justify-center">
                <motion.div
                    className="text-6xl text-blue-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    🚀
                </motion.div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={i}
                                className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-50 text-xs font-medium"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Icon style={{ color: tech.color }} />
                                <span className="text-gray-600">{tech.name}</span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.githubUrl && (
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub />
                            <span>Code</span>
                        </motion.a>
                    )}
                    {project.liveUrl && (
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt />
                            <span>Demo</span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <div className="min-h-screen py-20 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    A selection of projects I've worked on
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
