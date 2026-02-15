'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

// Lazy load components for better performance
const Gateway = dynamic(() => import('@/components/Gateway'), {
  ssr: false,
  loading: () => null,
})

const Starfield = dynamic(() => import('@/components/Starfield'), {
  ssr: false,
  loading: () => null,
})

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  const [gatewayComplete, setGatewayComplete] = useState(false)

  useEffect(() => {
    // Check if gateway has been completed in session
    const completed = sessionStorage.getItem('gatewayCompleted')
    if (completed === 'true') {
      setGatewayComplete(true)
    }
  }, [])

  const handleGatewayComplete = () => {
    setGatewayComplete(true)
    sessionStorage.setItem('gatewayCompleted', 'true')
  }

  return (
    <main className="min-h-screen">
      {/* Gateway - Intro Animation */}
      <Gateway onComplete={handleGatewayComplete} />

      {/* Navigation - Animated entrance after gateway */}
      <AnimatePresence>
        {gatewayComplete && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Navigation />
            </motion.div>

            {/* 3D Starfield Background */}
            <Starfield />

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10"
            >
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Contact />

              {/* Footer */}
              <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                  <p className="text-gray-500 text-sm">
                    © 2026 Mohammad Al-Mokdad. All rights reserved.
                  </p>
                </div>
              </footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
