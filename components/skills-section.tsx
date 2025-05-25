"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Code2,
  Database,
  Server,
  Palette,
  Cloud,
  GitBranch,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Settings,
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React", icon: <Code2 className="w-5 h-5" />, level: "expert" },
      { name: "Next.js", icon: <Globe className="w-5 h-5" />, level: "expert" },
      { name: "TypeScript", icon: <Code2 className="w-5 h-5" />, level: "advanced" },
      { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" />, level: "expert" },
      { name: "Vue.js", icon: <Code2 className="w-5 h-5" />, level: "intermediate" },
      { name: "JavaScript", icon: <Code2 className="w-5 h-5" />, level: "expert" },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js", icon: <Server className="w-5 h-5" />, level: "expert" },
      { name: "NestJS", icon: <Layers className="w-5 h-5" />, level: "advanced" },
      { name: "Express", icon: <Server className="w-5 h-5" />, level: "expert" },
      { name: "RESTful APIs", icon: <Globe className="w-5 h-5" />, level: "expert" },
      { name: "Flask", icon: <Code2 className="w-5 h-5" />, level: "intermediate" },
      { name: "JWT & OAuth", icon: <Settings className="w-5 h-5" />, level: "advanced" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: <Database className="w-5 h-5" />, level: "expert" },
      { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, level: "advanced" },
      { name: "Oracle", icon: <Database className="w-5 h-5" />, level: "intermediate" },
      { name: "Redis", icon: <Cpu className="w-5 h-5" />, level: "intermediate" },
      { name: "Firebase", icon: <Cloud className="w-5 h-5" />, level: "advanced" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "AWS", icon: <Cloud className="w-5 h-5" />, level: "advanced" },
      { name: "Docker", icon: <Layers className="w-5 h-5" />, level: "intermediate" },
      { name: "GitLab CI/CD", icon: <GitBranch className="w-5 h-5" />, level: "advanced" },
      { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: "expert" },
      { name: "Linux CLI", icon: <Terminal className="w-5 h-5" />, level: "advanced" },
      { name: "Nginx", icon: <Server className="w-5 h-5" />, level: "intermediate" },
    ],
  },
]

const levelColors = {
  expert: "from-emerald-400 to-green-500",
  advanced: "from-blue-400 to-cyan-500",
  intermediate: "from-yellow-400 to-orange-500",
}

const levelLabels = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={categoryVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies and tools I master to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={categoryVariants} className="relative group">
              {/* Category Header */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl mb-6 text-center relative overflow-hidden`}
              >
                <motion.div animate={floatingAnimation} className="text-white mb-3">
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Skills Grid for Category */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className={`relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group/skill overflow-hidden`}
                  >
                    {/* Skill Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-2 text-gray-300 group-hover/skill:text-cyan-400 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-sm font-medium text-center text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>

                      {/* Level Indicator */}
                      <div className="mt-2 flex justify-center">
                        <span
                          className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${levelColors[skill.level]} text-white font-medium opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                    </div>

                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                      animate={
                        hoveredSkill === `${categoryIndex}-${skillIndex}`
                          ? {
                              background: [
                                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
                                "linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))",
                                "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover/skill:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Cloud */}
        <motion.div variants={categoryVariants} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React Native",
              "GraphQL",
              "WebSockets",
              "Microservices",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
              "Sass",
              "Material-UI",
              "Prisma",
              "Mongoose",
              "Socket.io",
              "Stripe",
              "PayPal",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -5, 0],
                      }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  y: {
                    duration: 2 + (index % 3),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                }}
                className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={categoryVariants} className="mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  🏆
                </motion.div>
                Certifications & Learning
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  ☁️
                </div>
                <div>
                  <h4 className="text-white font-semibold">AWS Solution Architect</h4>
                  <p className="text-yellow-400 text-sm">In Progress</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h4 className="text-white font-semibold">Generative AI</h4>
                  <a
                    href="https://www.linkedin.com/learning/certificates/c44b4e88bdbf20c23716fe944d4039347c1302d195a346065d0bf13114803956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                  >
                    LinkedIn Learning ↗
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
