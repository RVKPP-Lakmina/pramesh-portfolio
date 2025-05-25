"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "julia"
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Julia, Pramesh's AI assistant. I can tell you about his skills, projects, and experience. What would you like to know?",
      sender: "julia",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const lowerMessage = userMessage.toLowerCase()

    // Knowledge base about Pramesh
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
      return "Pramesh is skilled in React, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, TypeScript, and many more technologies. He's particularly strong in full-stack development with modern JavaScript frameworks. Would you like to know about any specific technology?"
    }

    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job")) {
      return "Pramesh has 2+ years of experience as an Associate Software Engineer at XGEN Group. He's improved system performance by 20%, built dynamic form builders, and implemented CI/CD pipelines. He's proven in Agile environments and real-time bug fixes."
    }

    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work")) {
      return "Pramesh has built amazing projects like the Horizon Bank Web App, Smart Score Card Builder, Real-Time Ticketing System, and more. His projects showcase full-stack development, machine learning integration, and modern UI/UX design. Which project interests you most?"
    }

    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("university")) {
      return "Pramesh is pursuing a Bachelor of Computer Science at University Westminster (IIT Sri Lanka). He's also working on AWS Solution Architect certification and has completed Generative AI courses on LinkedIn Learning."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("hire") || lowerMessage.includes("email")) {
      return "You can reach Pramesh at rvkpplakmina2000@gmail.com or connect with him on LinkedIn. He's based in Colombo, Sri Lanka, and is available for full-time opportunities and freelance projects. Should I help you get in touch?"
    }

    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("based")) {
      return "Pramesh is located in Kiriwaththuduwa, Homagama, Colombo, Sri Lanka. He's available for both local and remote opportunities worldwide."
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Great to meet you! I'm here to help you learn more about Pramesh's incredible journey as a Full Stack Engineer. What aspect of his expertise would you like to explore?"
    }

    if (lowerMessage.includes("julia") || lowerMessage.includes("you") || lowerMessage.includes("who are you")) {
      return "I'm Julia, Pramesh's AI assistant! I'm here to showcase his skills and help visitors learn about his expertise. I'm built with modern AI technology - just like the kind of innovative solutions Pramesh creates in his projects!"
    }

    if (lowerMessage.includes("aws") || lowerMessage.includes("cloud")) {
      return "Pramesh has hands-on experience with AWS cloud services and is currently pursuing AWS Solution Architect certification. He's deployed applications on AWS and managed cloud infrastructure for scalable solutions."
    }

    if (lowerMessage.includes("react") || lowerMessage.includes("frontend")) {
      return "Pramesh is an expert in React and modern frontend development! He's built dynamic UIs with React, Next.js, and Vue.js, using Tailwind CSS for styling. He's also experienced with state management using HookState and Zustand."
    }

    if (lowerMessage.includes("backend") || lowerMessage.includes("node") || lowerMessage.includes("api")) {
      return "Pramesh excels in backend development with Node.js, NestJS, and Express. He's built RESTful APIs, implemented authentication systems, and worked with various databases. His backend solutions are scalable and efficient."
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! Pramesh's expertise spans full-stack development, cloud technologies, and modern frameworks. Could you be more specific about what you'd like to know?",
      "I'd love to help you learn more about Pramesh! He's accomplished so much in his career. Are you interested in his technical skills, projects, or professional experience?",
      "Pramesh is truly a talented Full Stack Engineer! Feel free to ask me about his projects, skills, experience, or how to get in touch with him.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      const response = await generateResponse(inputValue)
      const juliaMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "julia",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, juliaMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm having trouble connecting right now. Please try asking me something else about Pramesh!",
        sender: "julia",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />

            {/* Notification Pulse */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
            />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Chat with Julia AI
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{
              opacity: 1,
              scale: isMinimized ? 0.3 : 1,
              y: isMinimized ? 100 : 0,
              height: isMinimized ? "60px" : "500px",
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 z-50 w-80 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Julia AI</h3>
                  <p className="text-white/80 text-sm">Pramesh's Assistant</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-800">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-cyan-500 to-purple-600"
                              : "bg-gradient-to-r from-purple-500 to-pink-500"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>

                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                              : "bg-gray-700 text-gray-100"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-700 px-4 py-2 rounded-2xl">
                          <div className="flex space-x-1">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask Julia about Pramesh..."
                      className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                      disabled={isTyping}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
