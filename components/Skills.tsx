'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C#', 'Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: '.NET Ecosystem',
    icon: '🔷',
    skills: ['ASP.NET Core', 'Entity Framework Core', 'ASP.NET Core Identity', 'Razor Pages', 'Minimal APIs'],
    color: 'from-purple-500 to-blue-600',
  },
  {
    title: 'Backend & Architecture',
    icon: '⚙️',
    skills: ['REST APIs', 'Microservices', 'Layered Architecture', 'JWT Authentication', 'Dependency Injection'],
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Databases & ORM',
    icon: '🗄️',
    skills: ['SQL Server', 'PostgreSQL', 'SQLite', 'Entity Framework Core', 'Database Design', 'Migrations'],
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Frontend & UI Frameworks',
    icon: '🎨',
    skills: ['React', 'Next.js', 'Bootstrap', 'TailwindCSS', 'jQuery', 'Kendo UI', 'Telerik UI'],
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Azure Blob Storage', 'Azure DevOps', 'CI/CD Pipelines', 'Git', 'Docker'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: ['Android Studio', 'Java for Android', 'Mobile UI/UX', 'RESTful Integration'],
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Tools & Libraries',
    icon: '🛠️',
    skills: ['ImageSharp', 'Aspose.Imaging', 'Telerik Reporting', 'Swagger/OpenAPI', 'QR Code Generation', 'Font Awesome'],
    color: 'from-indigo-500 to-purple-600',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Full-stack .NET developer with expertise in building scalable, secure, and modern web applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    custom={skillIndex}
                    variants={badgeVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                    }}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-gray-300 text-xs font-medium rounded-lg border border-white/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-sm text-gray-400">
              Continuously learning and expanding my skillset with modern development practices
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}