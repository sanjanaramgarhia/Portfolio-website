import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const roles = ['Python Developer', 'AI/ML Engineer', 'Full Stack Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setText(isDeleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1))
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex, roles])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-pink-50 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Sanjana</span>
            <br />
            <span className="gradient-text">Ramgarhia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8 h-12"
          >
            <span className="gradient-text font-semibold">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I am a Python developer enjoying to build intelligent systems with AI/ML, data science, and full-stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12 justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-bg text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/sanjanaramgarhia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 glass rounded-full hover:shadow-lg transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sanjana-ramgarhia-b95515257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 glass rounded-full hover:shadow-lg transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="mailto:sanjanaramgarhia@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 glass rounded-full hover:shadow-lg transition-all"
              aria-label="Email"
            >
              <FiMail className="w-7 h-7 text-gray-700 dark:text-gray-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
