import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface AchievementsSceneProps {
  progress: number
}

const AchievementsScene = ({ progress }: AchievementsSceneProps) => {
  const isVisible = progress >= 0.883 && progress <= 0.918
  const localProgress = (progress - 0.883) / (0.918 - 0.883)
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
            top: '18%',
            maxWidth: '520px',
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
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'Cinzel Decorative, serif',
                  fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                  color: '#d4a84b',
                  textShadow: '0 0 20px rgba(212, 168, 75, 0.4)',
                }}
              >
                Chapter V · The Trophy Room
              </div>
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', scale: 0.9 }}
              animate={{ filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: 'Cinzel Decorative, serif',
                fontSize: 'clamp(3.5rem, 9vw, 5.5rem)',
                fontWeight: 900,
                color: '#d4a84b',
                textShadow: '0 0 60px rgba(212, 168, 75, 0.8), 0 0 100px rgba(212, 168, 75, 0.4)',
                marginBottom: '1.25rem',
              }}
            >
              {portfolio.achievements.count}
            </motion.div>
            {portfolio.achievements.items.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ filter: 'blur(16px)', x: -20, opacity: 0 }}
                animate={{ filter: 'blur(0px)', x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                style={{
                  fontFamily: 'EB Garamond, serif',
                  fontSize: 'clamp(0.8rem, 1.4vw, 0.925rem)',
                  color: '#efe2c0',
                  marginBottom: '0.6rem',
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
