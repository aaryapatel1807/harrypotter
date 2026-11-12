import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface EducationSceneProps {
  progress: number
}

const EducationScene = ({ progress }: EducationSceneProps) => {
  const isVisible = progress >= 0.27 && progress <= 0.395
  const localProgress = (progress - 0.27) / (0.395 - 0.27)
  const opacity = localProgress < 0.2 ? localProgress / 0.2 : localProgress > 0.8 ? (1 - localProgress) / 0.2 : 1

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            right: '5%',
            top: '25%',
            maxWidth: '450px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'radial-gradient(ellipse at right, rgba(212, 168, 75, 0.08) 0%, transparent 70%)',
              padding: '2.5rem 2rem',
              borderRadius: '1rem',
            }}
          >
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: '#d4a84b',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(212, 168, 75, 0.4)',
              }}
            >
              Chapter II · The Classroom
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                color: '#f6e3a8',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em',
              }}
            >
              Education
            </motion.div>
            {[
              portfolio.education.degree,
              portfolio.education.college,
              portfolio.education.year,
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
                animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#efe2c0',
                  marginBottom: '0.75rem',
                  lineHeight: 1.5,
                  textShadow: '0 0 10px rgba(239, 226, 192, 0.3)',
                }}
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                marginTop: '1rem',
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              {portfolio.education.scores.map((score, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    color: '#d4a84b',
                    padding: '0.5rem 1rem',
                    background: 'rgba(212, 168, 75, 0.1)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '2rem',
                    border: '1px solid rgba(212, 168, 75, 0.2)',
                  }}
                >
                  {score.label}: {score.value}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                color: '#f6e3a8',
                marginTop: '1rem',
                textShadow: '0 0 10px rgba(246, 227, 168, 0.3)',
              }}
            >
              {portfolio.education.honours}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EducationScene
