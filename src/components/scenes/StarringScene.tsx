import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface StarringSceneProps {
  progress: number
}

const StarringScene = ({ progress }: StarringSceneProps) => {
  const isVisible = progress >= 0.209 && progress <= 0.266
  const localProgress = (progress - 0.209) / (0.266 - 0.209)
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
            top: '15%',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(212, 168, 75, 0.1) 0%, transparent 60%)',
              padding: '2rem',
              borderRadius: '1rem',
            }}
          >
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: '#d4a84b',
                marginBottom: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Starring
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#f6e3a8',
                textShadow: '0 0 30px rgba(246, 227, 168, 0.5)',
              }}
            >
              {portfolio.fullName}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StarringScene
