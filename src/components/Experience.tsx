import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const experiences = [
    {
      title: 'Data Science & AI/ML Intern',
      company: 'Alpha IT Managed Services',
      location: 'Mohali',
      period: 'Recent',
      description: [
        'Gained hands-on experience in building and deploying machine learning models',
        'Worked with NLP techniques and understanding deep learning concepts',
        'Contributed to real-world data processing workflows',
        'Participated in model training and evaluation processes',
        'Collaborated on AI/ML projects with industry-standard tools and practices'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            My professional journey in the tech industry
          </motion.p>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 gradient-bg rounded-full border-4 border-white dark:border-dark-bg shadow-lg" />

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 gradient-bg rounded-lg">
                          <FiBriefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 gradient-bg rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
