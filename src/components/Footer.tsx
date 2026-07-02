import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-gradient-to-t from-primary-50 to-transparent dark:from-dark-card dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Sanjana Ramgarhia</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Python Developer | AI/ML Engineer | Full Stack Developer
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://github.com/sanjanaramgarhia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 glass rounded-full hover:shadow-lg transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sanjana-ramgarhia-b95515257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 glass rounded-full hover:shadow-lg transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              href="mailto:sanjanaramgarhia@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 glass rounded-full hover:shadow-lg transition-all"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <FiHeart className="text-red-500" /> by Sanjana Ramgarhia © {currentYear}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
