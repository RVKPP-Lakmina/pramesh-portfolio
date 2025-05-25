"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TypewriterText() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const fullText = `Full Stack Engineer skilled in React, Node, Nest, MongoDB, and RESTful APIs. 

Passionate about building scalable web applications with modern JavaScript/TypeScript frameworks. 

Proven ability to work in Agile teams and deliver high-quality code in fast-paced environments.`

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
    >
      {/* Code Editor Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-600">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-400 font-mono">about.js</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>

      {/* Code Content */}
      <div className="font-mono text-sm">
        <div className="flex">
          <div className="text-gray-500 pr-4 select-none">
            {displayedText.split("\n").map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <div className="flex-1">
            <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span>{" "}
              <span className="text-white">=</span> <span className="text-green-400">{`{`}</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-400">description</span>
              <span className="text-white">:</span> <span className="text-yellow-400">{`"`}</span>
              <span className="text-yellow-400">
                {displayedText}
                <motion.span animate={{ opacity: showCursor ? 1 : 0 }} className="text-cyan-400 font-bold">
                  |
                </motion.span>
              </span>
              {currentIndex >= fullText.length && (
                <>
                  <span className="text-yellow-400">{`"`}</span>
                  {"\n"}
                  <span className="text-green-400">{`}`}</span>
                  {"\n\n"}
                  <span className="text-purple-400">export default</span>{" "}
                  <span className="text-cyan-400">developer</span>
                  <span className="text-white">;</span>
                </>
              )}
            </pre>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: currentIndex >= fullText.length ? 1 : 0 }}
        transition={{ delay: 1 }}
        className="mt-4 pt-3 border-t border-gray-600 flex items-center justify-between text-xs text-gray-400"
      >
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>JavaScript</span>
          </span>
          <span>UTF-8</span>
          <span>LF</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Ln {displayedText.split("\n").length}</span>
          <span>Col {displayedText.split("\n").pop()?.length || 0}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
