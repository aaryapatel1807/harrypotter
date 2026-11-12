import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface TitleSceneProps {
  progress: number
}

const TitleScene = ({ progress }: TitleSceneProps) => {
  const isVisible = progress >= 0 && progress <= 0.035
  const opacity = progress < 0.018 ? progress / 0.018 : (0.035 - progress) / 0.017

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.max(0, opacity) }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
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
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              color: '#efe2c0',
              marginBottom: '1rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            A {portfolio.fullName} Film
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              color: '#d4a84b',
              letterSpacing: '0.1em',
            }}
          >
            Scroll to begin
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TitleScene
