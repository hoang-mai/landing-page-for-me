'use client';
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

interface TimelineItem {
    title: string;
    organization: string;
    period: string;
    description: string;
    type: 'work' | 'education';
}

const experiences: TimelineItem[] = [
    {
        title: "Fresher Software Developer",
        organization: "Looking for opportunities",
        period: "2024 - Present",
        description: "Actively seeking opportunities to apply my skills in building scalable web applications using Next.js and Spring Boot.",
        type: 'work'
    },
    {
        title: "Bachelor's Degree in Computer Science",
        organization: "Hanoi University of Science and Technology",
        period: "2020 - 2024",
        description: "Graduated with CPA 3.61. Focused on software engineering, algorithms, and web development technologies.",
        type: 'education'
    },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0, 0, 0.2, 1] }}
        >
            <motion.div
                className={`relative w-full md:w-[45%] p-6 bg-white rounded-2xl shadow-lg border border-gray-100`}
                whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <div className="flex items-center gap-3 mb-3">
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === 'work' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                            }`}
                    >
                        {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{item.organization}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <div className="min-h-screen py-20 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience & Education</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    My journey in software development and education
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-green-400"></div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <TimelineCard key={index} item={exp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
