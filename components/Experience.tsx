'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, MapPin, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack .NET Developer',
    company: 'Octopus / Codewave',
    location: 'Beirut, Lebanon',
    period: '13/NOV/2025 - Present',
    description: [
      'Developing full-stack systems using ASP.NET Core',
      'Database design and optimization',
      'API integrations and third-party service connections',
      'Implementing clean architecture principles',
      'Contributing to real-world software systems',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Experience
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-3">
                {exp.description.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-400 mt-12"
        >
          Focused on professional development roles in software engineering
        </motion.p>
      </div>
    </section>
  )
}