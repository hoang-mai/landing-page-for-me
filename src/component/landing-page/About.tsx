'use client';
import { motion } from "framer-motion";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0, 0, 0.2, 1] as const,
            },
        },
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0, 0, 0.2, 1] as const,
            },
        },
    };

    return (
        <div className="h-screen flex justify-center items-center flex-row">
            <motion.div
                className="flex-1"
                variants={leftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                abc
            </motion.div>
            <motion.div
                className="flex-1 flex justify-center items-center flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h1 className="text-4xl font-semibold mb-10" variants={itemVariants}>
                    About Me
                </motion.h1>
                <motion.p className="text-md text-gray-600" variants={itemVariants}>
                    I&#39;m a Fullstack Developer and have a Bachelor&#39;s degree in
                    Computer Science from Hanoi University of Science and Technology with CPA 3.61. As a fresher, I focus on
                    building modern, scalable web applications using Next.js for the frontend and Spring Boot for the
                    backend.
                </motion.p>
                <motion.p className="text-md text-gray-600" variants={itemVariants}>
                    I enjoy solving complex problems, writing clean and maintainable code,
                    and creating user-friendly digital experiences. I am eager to learn, improve my skills, and contribute to
                    real-world projects while growing as a professional Software Engineer.
                </motion.p>
            </motion.div>
        </div>
    );
}
