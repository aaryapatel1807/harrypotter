import { motion, AnimatePresence } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

interface ContactSceneProps {
  progress: number
}

const ContactScene = ({ progress }: ContactSceneProps) => {
  const isVisible = progress >= 0.93
  const localProgress = (progress - 0.93) / (1 - 0.93)
  const opacity = Math.min(localProgress / 0.2, 1)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          style={{
            position: 'fixed',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'auto',
            maxWidth: '90%',
          }}
        >
          <motion.div
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'Cinzel Decorative, serif',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: '#d4a84b',
              marginBottom: '0.5rem',
              textShadow: '0 0 40px rgba(212, 168, 75, 0.6)',
            }}
          >
            Epilogue · Send an Owl
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: '#f6e3a8',
              marginBottom: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            Contact Me
          </motion.div>
            <motion.div
              initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
              animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'rgba(239, 226, 192, 0.8)',
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}
            >
              {portfolio.contact.message}
            </motion.div>
          <motion.a
            href={`mailto:${portfolio.contact.email}`}
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{
              display: 'inline-block',
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              color: '#f6e3a8',
              textDecoration: 'none',
              textShadow: '0 0 30px rgba(246, 227, 168, 0.7)',
              marginBottom: '2rem',
            }}
          >
            {portfolio.contact.email}
          </motion.a>
          <motion.div
            initial={{ filter: 'blur(16px)', y: 20, scale: 0.97 }}
            animate={{ filter: 'blur(0px)', y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {[
              { label: 'GitHub', url: portfolio.github },
              { label: 'LinkedIn', url: portfolio.linkedin },
              { label: 'Résumé', url: portfolio.resume },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, background: 'rgba(212, 168, 75, 0.15)' }}
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.875rem',
                  color: '#d4a84b',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(212, 168, 75, 0.1)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '2rem',
                  border: '1px solid rgba(212, 168, 75, 0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(16px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.75rem',
              color: '#efe2c0',
            }}
          >
            Visuals created with AI
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactScene
