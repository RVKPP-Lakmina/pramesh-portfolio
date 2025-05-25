"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function TerminalAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const terminalLines = [
    { command: "whoami", output: "pramesh-lakmina" },
    { command: "cat /dev/experience", output: "FULL STACK ENGINEER" },
    { command: "echo $EXPERTISE", output: "I AM A FULLY EXPERIENCED" },
    { command: "ls -la skills/", output: "FULL STACK ENGINEER" },
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine]
      const fullText = `$ ${line.command}\n${line.output}`
      let index = 0

      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            if (currentLine < terminalLines.length - 1) {
              setCurrentLine(currentLine + 1)
              setDisplayedText("")
            }
          }, 1500)
        }
      }, 80)

      return () => clearInterval(typeInterval)
    }
  }, [currentLine])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">pramesh@fullstack:~</div>
        <div className="w-6"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm min-h-[200px]">
        <div className="space-y-2">
          {/* Previous completed lines */}
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="space-y-1">
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> {line.command}
              </div>
              <div className="text-white font-bold text-lg">{line.output}</div>
            </div>
          ))}

          {/* Current typing line */}
          {currentLine < terminalLines.length && (
            <div className="space-y-1">
              <pre className="text-green-400 whitespace-pre-wrap">
                {displayedText}
                <motion.span animate={{ opacity: showCursor ? 1 : 0 }} className="text-cyan-400 font-bold">
                  |
                </motion.span>
              </pre>
            </div>
          )}

          {/* Final state */}
          {currentLine >= terminalLines.length && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4">
              <div className="text-green-400">
                <span className="text-cyan-400">$</span> status --verbose
              </div>
              <div className="mt-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>System Status: READY FOR DEVELOPMENT</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span>Mode: FULL STACK ENGINEER</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
