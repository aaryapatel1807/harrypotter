import { useEffect, useRef, useState } from 'react'
import { filmTimings } from '../data/film'

interface FilmCanvasProps {
  progress: number
}

const FilmCanvas = ({ progress }: FilmCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const [loadingState, setLoadingState] = useState<'loading' | 'ready'>('loading')

  const { totalFrames } = filmTimings

  const getFramePath = (index: number) => {
    const paddedIndex = String(index).padStart(4, '0')
    return `/film/f${paddedIndex}.webp`
  }

  const loadFrame = (index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (framesRef.current.has(index)) {
        resolve(framesRef.current.get(index)!)
        return
      }

      const img = new Image()
      img.onload = () => {
        framesRef.current.set(index, img)
        resolve(img)
      }
      img.onerror = reject
      img.src = getFramePath(index)
    })
  }

  // Progressive loading: coarse to fine
  useEffect(() => {
    const loadFramesProgressively = async () => {
      const strides = [64, 32, 16, 8, 4, 2, 1]
      
      for (const stride of strides) {
        const framesToLoad: number[] = []
        for (let i = 1; i <= totalFrames; i += stride) {
          if (!framesRef.current.has(i)) {
            framesToLoad.push(i)
          }
        }

        // Load 6 at a time
        for (let i = 0; i < framesToLoad.length; i += 6) {
          const batch = framesToLoad.slice(i, i + 6)
          await Promise.allSettled(batch.map(loadFrame))
        }
      }

      setLoadingState('ready')
    }

    loadFramesProgressively()
  }, [totalFrames])

  // Draw frame based on progress
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const frameIndex = Math.floor(progress * (totalFrames - 1)) + 1
    const frameImage = framesRef.current.get(frameIndex)

    if (!frameImage) {
      // Find nearest loaded frame
      let nearestFrame: HTMLImageElement | null = null
      let nearestDistance = Infinity

      framesRef.current.forEach((img, idx) => {
        const distance = Math.abs(idx - frameIndex)
        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestFrame = img
        }
      })

      if (!nearestFrame) return

      drawFrame(ctx, canvas, nearestFrame)
    } else {
      drawFrame(ctx, canvas, frameImage)
    }
  }, [progress, totalFrames, loadingState])

  const drawFrame = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const imgAspect = img.width / img.height
    const canvasAspect = canvasWidth / canvasHeight

    let drawWidth, drawHeight, offsetX, offsetY

    // Cover-fit
    if (canvasAspect > imgAspect) {
      drawWidth = canvasWidth
      drawHeight = canvasWidth / imgAspect
      offsetX = 0
      offsetY = (canvasHeight - drawHeight) / 2
    } else {
      drawHeight = canvasHeight
      drawWidth = canvasHeight * imgAspect
      offsetX = (canvasWidth - drawWidth) / 2
      offsetY = 0
    }

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

    // Dim slightly when content is on screen
    if (progress > 0.04 && progress < 0.95) {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.25)'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)
    }
  }

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  )
}

export default FilmCanvas
