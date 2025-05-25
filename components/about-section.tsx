"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import TerminalAnimation from "./terminal-animation"
import TypewriterText from "./typewriter-text"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Terminal Animation for Main Statement */}
            <TerminalAnimation />

            {/* Typewriter Animation for Description */}
            <div className="space-y-6">
              <TypewriterText />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-4xl font-bold text-cyan-400 mb-2"
                >
                  2+
                </motion.div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Years Experience
                </div>
                <div className="mt-2 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="text-4xl font-bold text-purple-400 mb-2"
                >
                  6+
                </motion.div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Projects Completed
                </div>
                <div className="mt-2 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 bg-gray-800/30 rounded-xl p-6 border border-gray-700"
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Contact Information
              </h4>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                >
                  <span className="text-cyan-400">📍</span>
                  <span className="text-gray-300">Kiriwaththuduwa, Homagama, Colombo</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                >
                  <span className="text-cyan-400">📧</span>
                  <span className="text-gray-300">rvkpplakmina2000@gmail.com</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
                >
                  <span className="text-cyan-400">🎓</span>
                  <span className="text-gray-300">
                    Bachelor of Computer Science - University Westminster (IIT Sri Lanka)
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-500 p-1"
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
                  <Image
                    src="/images/pramesh-profile.jpg"
                    alt="Pramesh Lakmina"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg"
              >
                💻
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-xl shadow-lg"
              >
                🚀
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-sm shadow-lg"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
