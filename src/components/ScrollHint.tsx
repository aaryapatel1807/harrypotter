import { motion } from 'framer-motion'

const ScrollHint = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        fontFamily: 'Manrope, sans-serif',
        fontSize: '0.875rem',
        color: '#d4a84b',
        textAlign: 'center',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        ↓
      </motion.div>
      <div style={{ marginTop: '0.5rem' }}>Scroll to begin</div>
    </motion.div>
  )
}

export default ScrollHint
