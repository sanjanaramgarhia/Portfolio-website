import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiLayers, FiBarChart, FiServer } from 'react-icons/fi'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Python Development',
      description: 'Building robust and scalable applications using Python, Django, and FastAPI with best practices and clean code.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Developing predictive models and ML solutions using Scikit-learn, TensorFlow, and state-of-the-art algorithms.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: 'Data Science',
      description: 'Data analysis, visualization, and insights generation using Pandas, NumPy, and visualization libraries.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: 'NLP Solutions',
      description: 'Building chatbots, text analysis systems, and RAG applications using LLMs and modern NLP techniques.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: 'Data Visualization',
      description: 'Creating interactive dashboards and visual reports using Power BI, Matplotlib, and Streamlit.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack web development with Django, REST APIs, and modern frontend technologies.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-dark-card/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-40 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-40 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-display"
          >
            My <span className="gradient-text">Services</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            Professional services I offer to help bring your ideas to life
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="text-white">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
