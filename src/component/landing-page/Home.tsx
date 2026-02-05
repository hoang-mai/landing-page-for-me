'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <div className="flex justify-center items-center flex-wrap flex-row gap-10 h-screen">
      <motion.div
        className="flex-1 flex flex-col gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-7xl font-semibold" key={animationKey}>
          <span className="animate-slide-up inline-block">Hi, I&apos;m a </span>
          <span className="animate-slide-up inline-block delay-200">Software </span>
          <span className="animate-slide-up inline-block delay-400 text-blue-500">Developer</span>
        </h1>
        <motion.p className="text-md text-gray-600" variants={itemVariants}>
          Experienced in building scalable web applications with a focus on clean architecture and robust performance.
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <motion.button
            className="cursor-pointer bg-blue-500 text-white px-8 py-2 rounded-lg font-medium"
            onClick={() => window.location.href = "#projects"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.button>
          <motion.button
            className="cursor-pointer border-2 border-gray-900/10 text-gray-900 px-8 py-2 rounded-lg font-medium"
            onClick={() => window.location.href = "#contact"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col items-center justify-center"
        variants={avatarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={"/avatar.jpg"}
              alt={"avatar"}
              width={280}
              height={280}
              className={"rounded-full w-70 h-70 object-cover"}
            />
          </motion.div>
          <motion.p
            className="text-2xl font-semibold text-gray-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Mai Anh Hoàng
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}