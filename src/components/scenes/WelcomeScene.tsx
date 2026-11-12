import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface WelcomeSceneProps {
  progress: number
}

const WelcomeScene = ({ progress }: WelcomeSceneProps) => {
  const isVisible = progress >= 0.04 && progress <= 0.11
  const localProgress = (progress - 0.04) / (0.11 - 0.04)
  const opacity = localProgress < 0.5 ? localProgress * 2 : (1 - localProgress) * 2

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.max(0, Math.min(1, opacity)) }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#efe2c0',
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
            }}
          >
            Welcome to the Castle of
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(16px)', y: 30, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            style={{
              fontFamily: 'Cinzel Decorative, serif',
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 900,
              color: '#d4a84b',
              textShadow: '0 0 40px rgba(212, 168, 75, 0.5), 0 0 80px rgba(212, 168, 75, 0.3)',
              letterSpacing: '0.02em',
            }}
          >
            {portfolio.firstName}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeScene
