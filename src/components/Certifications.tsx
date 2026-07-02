import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            Professional certifications and courses completed
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-12 text-center shadow-xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
              <FiAward className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Coming Soon</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm continuously learning and expanding my skillset. Check back soon for updates on my latest certifications and professional development achievements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
