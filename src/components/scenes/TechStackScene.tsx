import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface TechStackSceneProps {
  progress: number
  isMobile: boolean
}

const TechStackScene = ({ progress, isMobile }: TechStackSceneProps) => {
  // Intro line scene
  const showIntro = progress >= 0.448 && progress <= 0.47
  const introOpacity = showIntro ? Math.min((progress - 0.448) / 0.01, (0.47 - progress) / 0.01, 1) : 0

  // Individual floor scenes
  const floors = portfolio.techStack.floors
  const floorRanges = [
    { start: 0.47, end: 0.52 },   // Foundation
    { start: 0.52, end: 0.57 },   // Structure
    { start: 0.57, end: 0.62 },   // Interior
    { start: 0.62, end: 0.67 },   // Utilities
    { start: 0.67, end: 0.72 },   // Roof
  ]

  return (
    <>
      {/* Intro line */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: introOpacity }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: isMobile ? '90%' : '700px',
              textAlign: 'center',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20 }}
              animate={{ filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: '#efe2c0',
                lineHeight: 1.6,
                textShadow: '0 0 10px rgba(239, 226, 192, 0.3)',
              }}
            >
              {portfolio.techStack.intro}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floors */}
      {floors.map((floor, floorIndex) => {
        const range = floorRanges[floorIndex]
        const isVisible = progress >= range.start && progress <= range.end
        if (!isVisible) return null

        const localProgress = (progress - range.start) / (range.end - range.start)
        const opacity = localProgress < 0.15 ? localProgress / 0.15 : localProgress > 0.85 ? (1 - localProgress) / 0.15 : 1

        // Desktop: position floors from bottom to top
        const desktopPositions = [
          { bottom: '8%', left: '10%' },    // Foundation
          { bottom: '22%', left: '15%' },   // Structure
          { bottom: '38%', left: '12%' },   // Interior
          { top: '28%', right: '12%' },     // Utilities
          { top: '12%', right: '10%' },     // Roof
        ]

        // Mobile: stack vertically
        const mobilePosition = {
          bottom: `${15 + floorIndex * 18}%`,
          left: '5%',
          right: '5%',
        }

        const position = isMobile ? mobilePosition : desktopPositions[floorIndex]

        return (
          <AnimatePresence key={floorIndex}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                ...position,
                maxWidth: isMobile ? '90%' : '450px',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  background: 'radial-gradient(ellipse, rgba(212, 168, 75, 0.08) 0%, transparent 70%)',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                }}
              >
                {/* Floor label */}
                <motion.div
                  initial={{ filter: 'blur(16px)', y: 10 }}
                  animate={{ filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    color: '#d4a84b',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}
                >
                  {floor.label}
                </motion.div>

                {/* Explanation */}
                <motion.div
                  initial={{ filter: 'blur(16px)', y: 10 }}
                  animate={{ filter: 'blur(0px)', y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    fontFamily: 'EB Garamond, serif',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    color: '#efe2c0',
                    marginBottom: '1rem',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  {floor.explanation}
                </motion.div>

                {/* Skills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: isMobile ? '0.75rem' : '1rem',
                  }}
                >
                  {floor.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ filter: 'blur(16px)', opacity: 0, scale: 0.9 }}
                      animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                      style={{
                        fontFamily: 'EB Garamond, serif',
                        fontSize: isMobile ? '0.9rem' : ['1rem', '1.1rem', '1.2rem', '1rem', '1.15rem'][i % 5],
                        color: '#f6e3a8',
                        textShadow: '0 0 20px rgba(246, 227, 168, 0.6), 0 0 40px rgba(246, 227, 168, 0.3)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )
      })}
    </>
  )
}

export default TechStackScene
