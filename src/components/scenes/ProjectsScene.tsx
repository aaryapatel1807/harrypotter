import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface ProjectsSceneProps {
  progress: number
  isMobile: boolean
}

const ProjectsScene = ({ progress, isMobile }: ProjectsSceneProps) => {
  const projectRanges = [
    { start: 0.648, end: 0.698 },
    { start: 0.7, end: 0.75 },
    { start: 0.752, end: 0.8 },
  ]

  const getProjectOpacity = (projectIndex: number) => {
    const range = projectRanges[projectIndex]
    if (progress < range.start || progress > range.end) return 0
    const localProgress = (progress - range.start) / (range.end - range.start)
    return localProgress < 0.2 ? localProgress / 0.2 : localProgress > 0.8 ? (1 - localProgress) / 0.2 : 1
  }

  const positions = isMobile
    ? [
        { bottom: '20%', right: 'auto', left: '5%', top: 'auto' },
        { bottom: '20%', right: 'auto', left: '5%', top: 'auto' },
        { bottom: '20%', right: 'auto', left: '5%', top: 'auto' },
      ]
    : [
        { right: '8%', top: '35%', bottom: 'auto', left: 'auto' },
        { right: '6%', top: '15%', bottom: 'auto', left: 'auto' },
        { right: '6%', top: 'auto', bottom: '15%', left: 'auto' },
      ]

  return (
    <>
      {portfolio.projects.map((project, index) => {
        const opacity = getProjectOpacity(index)
        const isActive = opacity > 0

        return (
          <AnimatePresence key={index}>
            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'fixed',
                  ...positions[index],
                  maxWidth: isMobile ? '90%' : index === 0 ? '400px' : '550px',
                  zIndex: 10,
                  pointerEvents: 'auto',
                }}
              >
                <motion.div
                  initial={{ filter: 'blur(16px)', y: 30, scale: 0.95, rotateY: -5 }}
                  animate={{ filter: 'blur(0px)', y: 0, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(239, 226, 192, 0.03), rgba(138, 109, 174, 0.02))',
                    backdropFilter: 'blur(16px) saturate(1.5)',
                    border: '1px solid',
                    borderImage: 'linear-gradient(135deg, rgba(212, 168, 75, 0.3), rgba(246, 227, 168, 0.1)) 1',
                    borderRadius: '1rem',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Specular sheen */}
                  <motion.div
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                      pointerEvents: 'none',
                    }}
                  />

                  <div
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: 'clamp(3rem, 6vw, 4rem)',
                      color: 'transparent',
                      WebkitTextStroke: '1px rgba(212, 168, 75, 0.3)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'EB Garamond, serif',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      color: '#d4a84b',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.kicker}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: '#f6e3a8',
                      marginBottom: '1rem',
                      textShadow: '0 0 15px rgba(246, 227, 168, 0.4)',
                    }}
                  >
                    {project.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'EB Garamond, serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      color: '#efe2c0',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.summary}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '0.75rem',
                          color: '#d4a84b',
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(212, 168, 75, 0.1)',
                          borderRadius: '0.25rem',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.875rem',
                      color: '#f6e3a8',
                      textDecoration: 'none',
                      display: 'inline-block',
                      borderBottom: '1px solid rgba(246, 227, 168, 0.3)',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderBottomColor = '#f6e3a8'
                      e.currentTarget.style.textShadow = '0 0 10px rgba(246, 227, 168, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderBottomColor = 'rgba(246, 227, 168, 0.3)'
                      e.currentTarget.style.textShadow = 'none'
                    }}
                  >
                    View on GitHub →
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        )
      })}
    </>
  )
}

export default ProjectsScene
