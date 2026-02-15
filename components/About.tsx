'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Mohammad is a Full-Stack .NET developer specializing in ASP.NET Core systems, database architecture, and secure backend services.
              </p>
              
              <p>
                He builds scalable platforms with clean architecture principles, strong database design, and production-ready API integrations.
              </p>
              
              <p>
                Currently working at <span className="text-primary font-semibold">Octopus / Codewave</span>, contributing to real-world software systems with a focus on maintainability and performance.
              </p>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  📍 Beirut, Lebanon | 💻 Full Stack .NET Developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}