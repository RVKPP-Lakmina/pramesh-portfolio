"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import CodeAnimation from "./code-animation"

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-cyan-400 text-lg font-medium tracking-wider">HELLO, I'M</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            PRAMESH
          </span>
          <br />
          <span className="text-white">LAKMINA</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-4">Full Stack Engineer</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with modern JavaScript/TypeScript frameworks. Proven
            ability to deliver high-quality code in fast-paced environments.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <CodeAnimation />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-cyan-400 rounded-full text-cyan-400 font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
