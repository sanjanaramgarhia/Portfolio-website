import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiCpu, FiLayers } from 'react-icons/fi'

const Skills = () => {

  const skillCategories = [
    {
      title: 'Programming',
      icon: <FiCode className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'SQL', 'JavaScript']
    },
    {
      title: 'Machine Learning',
      icon: <FiCpu className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: ['Scikit-learn', 'NLP', 'Deep Learning']
    },
    {
      title: 'Data Science',
      icon: <FiDatabase className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500',
      skills: ['Pandas', 'NumPy', 'Visualization']
    },
    {
      title: 'Web Development',
      icon: <FiLayers className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: ['Django', 'FastAPI', 'REST APIs']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-dark-card/30 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-display">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            Technical expertise and tools I use to bring ideas to life
          </motion.p>

          {/* Skill Categories Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass rounded-xl p-5 h-full hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white">{category.icon}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 gradient-text">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
