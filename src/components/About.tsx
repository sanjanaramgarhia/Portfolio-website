import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-dark-card/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
              I'm a Python developer specializing in AI/ML, data science, and full-stack development. 
              I build intelligent applications with Django, machine learning models, and NLP solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
