import { motion } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
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

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Swami Premanand Mahavidyalaya',
      location: 'Mukerian, India',
      period: '2022 - 2025',
      description: 'Pursuing degree in Computer Applications with focus on software development and programming.'
    },
    {
      degree: '12th Grade (PSEB)',
      institution: 'Dasmesh Girls College',
      location: 'Mukerian, India',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with Punjab School Education Board.'
    },
    {
      degree: '10th Grade (CBSE)',
      institution: 'Global Public School',
      location: 'Bhangala, India',
      period: '2019 - 2020',
      description: 'Completed secondary education with Central Board of Secondary Education.'
    }
  ]

  return (
    <section id="education" className="py-20">
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
            <span className="gradient-text">Education</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            My academic journey and qualifications
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full" />

              {education.map((edu, index) => (
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
                          <FiBook className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
                          <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
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

export default Education
