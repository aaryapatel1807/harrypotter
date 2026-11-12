import { motion, AnimatePresence } from 'framer-motion'

interface WorkTitleSceneProps {
  progress: number
}

const WorkTitleScene = ({ progress }: WorkTitleSceneProps) => {
  const isVisible = progress >= 0.6 && progress <= 0.652
  const localProgress = (progress - 0.6) / (0.652 - 0.6)
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
            top: '45%',
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
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'Cinzel Decorative, serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: '#d4a84b',
              marginBottom: '1rem',
              textShadow: '0 0 40px rgba(212, 168, 75, 0.6)',
            }}
          >
            Year Three
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(16px)', y: 30, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Cinzel Decorative, serif',
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: 900,
              color: '#f6e3a8',
              textShadow: '0 0 50px rgba(246, 227, 168, 0.7)',
            }}
          >
            My Work
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WorkTitleScene
