import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCpu, FiStar } from 'react-icons/fi'

const Projects = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const projects = [
    {
      title: 'GreatKart - Django E-Commerce Application',
      description: 'A full-featured E-Commerce web application built with Django that simulates a real-world online shopping platform. Includes user authentication, product management, shopping cart, PayPal payment integration, order processing, product reviews, ratings, and user profile management.',
      technologies: ['Django', 'Python', 'SQLite', 'PayPal API', 'Authentication'],
      github: 'https://github.com/sanjanaramgarhia/Greatkart-Django',
      demo: 'https://greatkart-django-y976.onrender.com/',
      icon: <FiCode className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      featured: true
    },
    {
      title: 'AI Powered House Price Prediction App',
      description: 'Developed a complete ML app with authentication, price prediction model, and an NLP chatbot. Used Streamlit for UI and deployed the model for real-time user interaction.',
      technologies: ['Python', 'Machine Learning', 'Streamlit', 'NLP', 'Authentication'],
      github: 'https://github.com/sanjanaramgarhia/California-House-Price-Prediction-using-Machine-Learning',
      icon: <FiCpu className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cardio Pro - Heart Disease Prediction',
      description: 'Built an end-to-end supervised machine learning project using the UCI Heart Disease dataset. Trained and evaluated multiple models (Logistic Regression, KNN, SVM, Decision Tree, Random Forest, XGBoost, LightGBM, CatBoost).',
      technologies: ['Python', 'Scikit-learn', 'ML Algorithms', 'Data Science', 'Model Evaluation'],
      github: 'https://github.com/sanjanaramgarhia/health_project_supervised',
      icon: <FiDatabase className="w-8 h-8" />,
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Talk with Your PDFs - RAG ChatBot',
      description: 'Developed an enterprise chatbot using RAG architecture on company internal documents with LLMs, Hugging Face embeddings, and FAISS (FlatL2) for semantic retrieval. Implemented ingestion and retrieval pipelines with FastAPI.',
      technologies: ['RAG', 'LLMs', 'FastAPI', 'Hugging Face', 'FAISS', 'NLP'],
      github: 'https://github.com/sanjanaramgarhia/RAG-Application',
      icon: <FiCode className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent to-primary-50/30 dark:to-dark-card/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />

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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg"
          >
            A showcase of my best work and personal projects
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                style={{ perspective: 1000 }}
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold shadow-lg"
                    >
                      <FiStar className="w-3 h-3" />
                      <span>Featured</span>
                    </motion.div>
                  )}
                  
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${project.gradient} p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform">
                        <span className="text-white">{project.icon}</span>
                      </div>
                      <div className="flex gap-2">
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                            aria-label="View Live Demo"
                          >
                            <FiExternalLink className="w-6 h-6 text-white" />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <FiGithub className="w-6 h-6 text-white" />
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Floating Code Symbol */}
                    <motion.div
                      className="absolute top-2 right-20 text-white/30 text-2xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      &lt;/&gt;
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 relative">
                    <motion.h3
                      className="text-lg font-bold mb-2 gradient-text group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all`}
                      >
                        <span>View Code</span>
                        <FiGithub className="w-4 h-4" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-2 px-4 py-2 glass text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:shadow-lg transition-all"
                        >
                          <span>Live Demo</span>
                          <FiExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
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

export default Projects
