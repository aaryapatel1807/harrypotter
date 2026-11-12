import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface SkillsSceneProps {
  progress: number
  isMobile: boolean
}

const SkillsScene = ({ progress, isMobile }: SkillsSceneProps) => {
  const isVisible = progress >= 0.448 && progress <= 0.605
  const localProgress = (progress - 0.448) / (0.605 - 0.448)
  const opacity = localProgress < 0.15 ? localProgress / 0.15 : localProgress > 0.85 ? (1 - localProgress) / 0.15 : 1

  const allSkills = portfolio.skills.flatMap(group => 
    group.items.map(item => ({ item, category: group.category }))
  )

  const getFontSize = (index: number) => {
    const sizes = ['1rem', '1.25rem', '1.5rem', '1.125rem', '1.375rem', '1rem']
    return sizes[index % sizes.length]
  }

  const getPosition = (index: number, total: number) => {
    if (isMobile) {
      // Evenly spaced zig-zag for mobile
      const row = Math.floor(index / 2)
      const isLeft = index % 2 === 0
      return {
        left: isLeft ? '15%' : '55%',
        top: `${30 + row * 12}%`,
      }
    } else {
      // Three overlapping waves for desktop
      const wave = Math.floor((index / total) * 3)
      if (wave === 0) {
        // Left side
        return {
          left: `${10 + Math.random() * 25}%`,
          top: `${25 + Math.random() * 40}%`,
        }
      } else if (wave === 1) {
        // Right side
        return {
          left: `${65 + Math.random() * 25}%`,
          top: `${20 + Math.random() * 50}%`,
        }
      } else {
        // Lower band
        return {
          left: `${20 + Math.random() * 60}%`,
          top: `${60 + Math.random() * 25}%`,
        }
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          {allSkills.map((skill, index) => {
            const position = getPosition(index, allSkills.length)
            const delay = index * 0.05
            const speed = 20 + Math.random() * 15

            return (
              <motion.div
                key={index}
                initial={{ filter: 'blur(16px)', opacity: 0, y: 50, scale: 0.9 }}
                animate={{
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: [0, -speed, -speed * 2],
                  scale: 1,
                }}
                exit={{ filter: 'blur(16px)', opacity: 0, y: -100 }}
                transition={{
                  duration: 0.6,
                  delay,
                  y: {
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
                style={{
                  position: 'absolute',
                  ...position,
                  fontFamily: 'EB Garamond, serif',
                  fontSize: getFontSize(index),
                  color: '#f6e3a8',
                  textShadow: '0 0 20px rgba(246, 227, 168, 0.6), 0 0 40px rgba(246, 227, 168, 0.3)',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.item}
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SkillsScene
