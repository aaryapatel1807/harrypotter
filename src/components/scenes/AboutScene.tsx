import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface AboutSceneProps {
  progress: number
}

const AboutScene = ({ progress }: AboutSceneProps) => {
  const isVisible = progress >= 0.115 && progress <= 0.205
  const localProgress = (progress - 0.115) / (0.205 - 0.115)
  const opacity = localProgress < 0.3 ? localProgress / 0.3 : localProgress > 0.7 ? (1 - localProgress) / 0.3 : 1

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            left: '5%',
            top: '35%',
            maxWidth: '500px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212, 168, 75, 0.08) 0%, transparent 70%)',
              padding: '3rem 2rem',
              borderRadius: '1rem',
            }}
          >
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#d4a84b',
                marginBottom: '0.5rem',
                textShadow: '0 0 20px rgba(212, 168, 75, 0.4)',
              }}
            >
              Chapter I · The Student
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                color: '#f6e3a8',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}
            >
              About Me
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#efe2c0',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
                textShadow: '0 0 10px rgba(239, 226, 192, 0.3)',
              }}
            >
              {portfolio.intro}
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              {portfolio.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ filter: 'blur(8px)', scale: 0.95 }}
                  animate={{ filter: 'blur(0px)', scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.75rem',
                      color: '#d4a84b',
                      marginBottom: '0.25rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Cinzel, serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      color: '#f6e3a8',
                      textShadow: '0 0 15px rgba(246, 227, 168, 0.4)',
                    }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AboutScene
