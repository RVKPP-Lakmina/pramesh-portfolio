"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Bot, Monitor, Coffee, Code, Users, Lightbulb } from "lucide-react"

interface WorkplaceBotProps {
  selectedExperience: number
}

const workplaceScenes = [
  {
    title: "XGEN Group - Current Role",
    scene: "office-current",
    mood: "productive",
    activities: [
      { icon: <Code className="w-4 h-4" />, text: "Building scalable applications", color: "text-cyan-400" },
      { icon: <Monitor className="w-4 h-4" />, text: "Optimizing system performance", color: "text-green-400" },
      { icon: <Users className="w-4 h-4" />, text: "Collaborating with team", color: "text-purple-400" },
      { icon: <Lightbulb className="w-4 h-4" />, text: "Implementing CI/CD pipelines", color: "text-yellow-400" },
    ],
    botMessages: [
      "Currently crushing it at XGEN Group! 💪",
      "Just deployed another feature to production 🚀",
      "Performance optimization is my specialty! ⚡",
      "Building the future, one line of code at a time 👨‍💻",
    ],
  },
  {
    title: "XGEN Group - Internship",
    scene: "office-learning",
    mood: "learning",
    activities: [
      { icon: <Code className="w-4 h-4" />, text: "Learning React & Node.js", color: "text-blue-400" },
      { icon: <Monitor className="w-4 h-4" />, text: "Database query optimization", color: "text-orange-400" },
      { icon: <Users className="w-4 h-4" />, text: "Mentorship and training", color: "text-pink-400" },
      { icon: <Coffee className="w-4 h-4" />, text: "Absorbing knowledge", color: "text-amber-400" },
    ],
    botMessages: [
      "Learning so much during my internship! 📚",
      "Every day brings new challenges to solve 🧩",
      "From intern to full-time engineer! 📈",
      "Building my foundation in full-stack development 🏗️",
    ],
  },
]

export default function WorkplaceBot({ selectedExperience }: WorkplaceBotProps) {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  const currentScene = workplaceScenes[selectedExperience] || workplaceScenes[0]

  useEffect(() => {
    const message = currentScene.botMessages[currentMessage]
    let index = 0
    setDisplayedText("")
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)

        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % currentScene.botMessages.length)
        }, 3000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentMessage, selectedExperience])

  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 h-[600px] flex flex-col"
      >
        {/* Workplace Scene Header */}
        <div className="text-center mb-4 flex-shrink-0">
          <h3 className="text-lg font-bold text-white mb-2">{currentScene.title}</h3>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live from the workplace</span>
          </div>
        </div>

        {/* Bot Character */}
        <div className="flex-shrink-0 mb-4">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative mx-auto w-24 h-24"
          >
            {/* Bot Body */}
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Bot className="w-12 h-12 text-white" />

              {/* Animated Eyes */}
              <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full">
                <motion.div
                  animate={{ x: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-1 bg-gray-900 rounded-full mt-0.5 ml-0.5"
                />
              </div>
              <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full">
                <motion.div
                  animate={{ x: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-1 bg-gray-900 rounded-full mt-0.5 ml-0.5"
                />
              </div>

              {/* Thinking Particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    y: [-15, -25, -15],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                  }}
                  style={{
                    top: "5px",
                    left: `${40 + i * 6}%`,
                  }}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs"
            >
              💡
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -bottom-1 -left-1 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xs"
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>

        {/* Bot Message */}
        <div className="flex-shrink-0 mb-4">
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-700/50 rounded-xl p-3 relative min-h-[80px] flex items-center"
          >
            <div className="flex items-start space-x-3 w-full">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: isTyping ? [1, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: isTyping ? Number.POSITIVE_INFINITY : 0 }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                </p>
              </div>
            </div>

            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-700/50 transform translate-y-full"></div>
          </motion.div>
        </div>

        {/* Current Activities */}
        <div className="flex-1 overflow-hidden">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Current Activities</h4>
          <div className="space-y-2 overflow-y-auto max-h-[200px]">
            {currentScene.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-colors duration-200"
              >
                <div className={`${activity.color} flex-shrink-0`}>{activity.icon}</div>
                <span className="text-gray-300 text-xs">{activity.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mood Indicator */}
        <div className="flex-shrink-0 pt-3 border-t border-gray-600 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-400">
              Mood: <span className="text-green-400 font-medium capitalize">{currentScene.mood}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
