"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const codeSnippets = [
  {
    language: "React",
    code: `const App = () => {
  return (
    <div className="app">
      <h1>Hello World!</h1>
    </div>
  );
};`,
  },
  {
    language: "Node.js",
    code: `app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});`,
  },
  {
    language: "TypeScript",
    code: `interface User {
  id: string;
  name: string;
  email: string;
}

const createUser = (data: User): Promise<User> => {
  return api.post('/users', data);
};`,
  },
]

export default function CodeAnimation() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    let index = 0
    setDisplayedCode("")
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (index < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)

        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentSnippet])

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-gray-400">{codeSnippets[currentSnippet].language}</span>
        </div>

        <div className="p-4 font-mono text-sm">
          <pre className="text-gray-300">
            <code>{displayedCode}</code>
            <motion.span
              animate={{ opacity: isTyping ? [1, 0] : 0 }}
              transition={{ duration: 0.5, repeat: isTyping ? Number.POSITIVE_INFINITY : 0 }}
              className="text-cyan-400"
            >
              |
            </motion.span>
          </pre>
        </div>
      </motion.div>
    </div>
  )
}
