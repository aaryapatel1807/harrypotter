import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface AchievementsSceneProps {
  progress: number
}

const AchievementsScene = ({ progress }: AchievementsSceneProps) => {
  const isVisible = progress >= 0.803 && progress <= 0.858
  const localProgress = (progress - 0.803) / (0.858 - 0.803)
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
            left: '5%',
            top: '20%',
            maxWidth: '500px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              background: 'radial-gradient(ellipse at top left, rgba(212, 168, 75, 0.08) 0%, transparent 70%)',
              padding: '2.5rem 2rem',
              borderRadius: '1rem',
            }}
          >
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'Cinzel Decorative, serif',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: '#d4a84b',
                  textShadow: '0 0 20px rgba(212, 168, 75, 0.4)',
                }}
              >
                Year Four
              </div>
              <div
                style={{
                  fontFamily: 'Cinzel Decorative, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  color: '#f6e3a8',
                  textShadow: '0 0 20px rgba(246, 227, 168, 0.4)',
                }}
              >
                Achievements
              </div>
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', scale: 0.9 }}
              animate={{ filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(4rem, 10vw, 6rem)',
                fontWeight: 900,
                color: '#d4a84b',
                textShadow: '0 0 60px rgba(212, 168, 75, 0.8), 0 0 100px rgba(212, 168, 75, 0.4)',
                marginBottom: '1.5rem',
              }}
            >
              {portfolio.achievements.count}
            </motion.div>
            {portfolio.achievements.items.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ filter: 'blur(16px)', x: -20, opacity: 0 }}
                animate={{ filter: 'blur(0px)', x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  color: '#efe2c0',
                  marginBottom: '0.75rem',
                  lineHeight: 1.5,
                  textShadow: '0 0 8px rgba(239, 226, 192, 0.3)',
                }}
              >
                • {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AchievementsScene
