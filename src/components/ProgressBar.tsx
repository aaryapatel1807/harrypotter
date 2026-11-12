interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #9b1c2e 0%, #d4a84b 50%, #f6e3a8 100%)',
        transform: `scaleX(${progress})`,
        transformOrigin: 'left',
        zIndex: 100,
        transition: 'transform 0.1s ease-out',
      }}
    />
  )
}

export default ProgressBar
