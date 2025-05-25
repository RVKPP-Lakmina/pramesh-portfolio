"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Globe } from "lucide-react"

const projects = [
  {
    title: "Horizon Bank Web App",
    description:
      "A modern banking application with real-time transactions, account management, and financial analytics.",
    tech: ["Next.js", "Tailwind CSS", "Appwrite", "Dwolla", "Plaid"],
    github: "https://github.com/RVKPP-Lakmina/horizon-banking.git",
    live: "https://banking-ecru.vercel.app",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Modern banking dashboard with financial charts and transaction interface",
  },
  {
    title: "Smart Score Card Builder",
    description: "Dynamic scoring system with smart analytics, reducing configuration dependency by 30%.",
    tech: ["React", "Tailwind CSS", "NestJS", "ShadCN", "HookState"],
    github: "https://github.com/RVKPP-Lakmina/smart-score-card-builder.git",
    live: "https://smart-score-card.netlify.app/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Analytics dashboard with charts, graphs and performance metrics",
  },
  {
    title: "Rug Guide Platform",
    description: "Data-driven recommendation system using ML regression models with predictive analytics.",
    tech: ["React", "Flask", "Machine Learning", "Python", "Regression"],
    github: "https://github.com/RVKPP-Lakmina/rug-guide-platform.git",
    live: null,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Machine learning visualization with data points and regression analysis",
  },
  {
    title: "Real Time Ticketing System",
    description: "Multi-threaded ticketing system using producer-consumer pattern for high concurrency.",
    tech: ["Spring Boot", "Java", "Producer-Consumer Pattern", "Multi-threading"],
    github: "https://github.com/RVKPP-Lakmina/multithread-ticketing-app-server.git",
    live: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Event ticketing interface with seat selection and booking system",
  },
  {
    title: "Java Real-Time Chat Application",
    description: "Multi-threaded real-time chat system with instant messaging using WebSockets.",
    tech: ["Java", "WebSockets", "Sockets", "Multi-threading"],
    github: "https://github.com/RVKPP-Lakmina/chat-application-iit-csa-exam-2024.git",
    live: null,
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Real-time chat interface with message bubbles and online status indicators",
  },
  {
    title: "Fitness Center Management System",
    description: "Full-featured responsive platform for bookings and client management with optimized performance.",
    tech: ["PHP", "JavaScript", "HTML5", "Tailwind CSS", "MySQL"],
    github: "https://github.com/RVKPP-Lakmina/Fitness-Center.git",
    live: null,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop&auto=format",
    imageAlt: "Modern fitness center with equipment and workout areas",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.imageAlt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500/90 to-purple-600/90 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                  {project.tech[0]}
                </div>

                {/* Live/Demo Badge */}
                {project.live && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Live
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600 hover:border-cyan-400/50 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group/link"
                  >
                    <Github size={18} className="group-hover/link:rotate-12 transition-transform duration-200" />
                    <span className="text-sm">Code</span>
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 group/link"
                    >
                      <Globe size={18} className="group-hover/link:rotate-12 transition-transform duration-200" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.a
            href="https://github.com/RVKPP-Lakmina"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform duration-200" />
            <span>View All Projects</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
