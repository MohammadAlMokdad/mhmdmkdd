'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, Send, MessageCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:mhmdmkdd@hotmail.com',
    description: 'Send me a direct message',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammadal-mokdad/',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/MohammadAlMokdad',
    description: 'View my repositories',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/76032425',
    description: 'Chat on WhatsApp',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Access Portal
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Ready to collaborate? Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and projects.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(59, 130, 246, 0.8)',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {method.label}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm text-primary font-medium">
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="mailto:mhmdmkdd@hotmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-500 text-sm mt-6"
          >
            Based in Beirut, Lebanon | Available for remote work
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}