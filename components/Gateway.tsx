'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const terminalLines = [
  '> Boot sequence initiated: Mohammad.exe',
  '> Authenticating secure protocols...',
  '> .NET Runtime environment online',
  '> Backend systems: Optimal performance mode engaged',
  '',
  '> Welcome, Esteemed Visitor',
  '> Press Enter or tap anywhere to continue',
]

interface GatewayProps {
  onComplete?: () => void
}

export default function Gateway({ onComplete }: GatewayProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [showGateway, setShowGateway] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  const handleEnter = () => {
    if (currentLine >= terminalLines.length - 1 && !isExiting) {
      setIsExiting(true)
      setTimeout(() => {
        setShowGateway(false)
        onComplete?.()
      }, 500)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentLine, isExiting])

  if (!showGateway) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        onClick={handleEnter}
      >
        <div className="max-w-2xl w-full px-6">
          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-black/90 border border-primary/30 rounded-lg overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Terminal Header */}
            <div className="bg-primary/10 px-4 py-3 border-b border-primary/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-primary/70 text-sm font-mono">
                  terminal@mohammad.exe
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base min-h-[300px]">
              <div className="space-y-2">
                {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={
                      line === 'Press ENTER to continue'
                        ? 'text-primary animate-pulse'
                        : 'text-green-400'
                    }
                  >
                    {line.startsWith(' ') ? '\u00A0' : '➜ '}{line}
                  </motion.div>
                ))}

                {/* Blinking Cursor */}
                {currentLine >= terminalLines.length && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-primary"
                  />
                )}
              </div>
            </div>

            {/* Instructions */}
            {currentLine >= terminalLines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 pb-6"
              >
                <p className="text-xs text-gray-500 text-center">
                  Enter the World of Mohammad Al-Mokdad
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}