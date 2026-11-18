import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import FilmCanvas from './components/FilmCanvas'
import ProgressBar from './components/ProgressBar'
import ScrollHint from './components/ScrollHint'
import TitleScene from './components/scenes/TitleScene'
import WelcomeScene from './components/scenes/WelcomeScene'
import AboutScene from './components/scenes/AboutScene'
import StarringScene from './components/scenes/StarringScene'
import EducationScene from './components/scenes/EducationScene'
import SkillsTitleScene from './components/scenes/SkillsTitleScene'
import TechStackScene from './components/scenes/TechStackScene'
import WorkTitleScene from './components/scenes/WorkTitleScene'
import ProjectsScene from './components/scenes/ProjectsScene'
import AchievementsScene from './components/scenes/AchievementsScene'
import ExperienceScene from './components/scenes/ExperienceScene'
import ContactScene from './components/scenes/ContactScene'
import './App.css'

function App() {
  const [filmProgress, setFilmProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const scrollHeight = isMobile ? 4200 : 5200

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      
      if (maxScroll <= 0) {
        setFilmProgress(0)
        return
      }
      
      const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1)
      setFilmProgress(rawProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <FilmCanvas progress={filmProgress} />
      <ProgressBar progress={filmProgress} />
      <ScrollHint />
      
      <TitleScene progress={filmProgress} />
      <WelcomeScene progress={filmProgress} />
      <AboutScene progress={filmProgress} />
      <StarringScene progress={filmProgress} />
      <EducationScene progress={filmProgress} />
      <SkillsTitleScene progress={filmProgress} />
      <TechStackScene progress={filmProgress} isMobile={isMobile} />
      <WorkTitleScene progress={filmProgress} />
      <ProjectsScene progress={filmProgress} isMobile={isMobile} />
      <AchievementsScene progress={filmProgress} />
      <ExperienceScene progress={filmProgress} />
      <ContactScene progress={filmProgress} />
      
      {/* Spacer to create scroll height */}
      <div style={{ 
        height: `${scrollHeight}vh`,
        width: '1px',
        position: 'relative',
        pointerEvents: 'none'
      }} />
    </>
  )
}

export default App
