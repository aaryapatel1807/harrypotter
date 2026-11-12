export const filmTimings = {
  totalFrames: 563,
  fps: 15,
  desktopScrollHeight: 5200, // vh
  mobileScrollHeight: 4200, // vh
  
  scenes: [
    { start: 0, end: 0.035, label: 'title', placement: 'center', chapter: null },
    { start: 0.04, end: 0.11, label: 'welcome', placement: 'lower-center', chapter: null },
    { start: 0.115, end: 0.205, label: 'about', placement: 'left', chapter: 'Chapter I · The Student' },
    { start: 0.209, end: 0.266, label: 'starring', placement: 'top-left', chapter: null },
    { start: 0.27, end: 0.395, label: 'education', placement: 'right', chapter: 'Chapter II · The Classroom' },
    { start: 0.397, end: 0.452, label: 'skills-title', placement: 'center', chapter: 'Chapter III · The Tower' },
    { start: 0.448, end: 0.47, label: 'tech-intro', placement: 'center', chapter: null },
    { start: 0.47, end: 0.52, label: 'foundation', placement: 'bottom', chapter: null },
    { start: 0.52, end: 0.57, label: 'structure', placement: 'bottom', chapter: null },
    { start: 0.57, end: 0.62, label: 'interior', placement: 'middle', chapter: null },
    { start: 0.62, end: 0.67, label: 'utilities', placement: 'middle', chapter: null },
    { start: 0.67, end: 0.72, label: 'roof', placement: 'top', chapter: null },
    { start: 0.73, end: 0.78, label: 'work-title', placement: 'center', chapter: 'Chapter IV · The Workshop' },
    { start: 0.78, end: 0.88, label: 'projects', placement: 'varied', chapter: null },
    { start: 0.883, end: 0.918, label: 'achievements', placement: 'top-left', chapter: 'Chapter V · The Trophy Room' },
    { start: 0.922, end: 0.962, label: 'experience', placement: 'right', chapter: 'Chapter VI · The Journey' },
    { start: 0.97, end: 1.0, label: 'contact', placement: 'center', chapter: 'Epilogue · Send an Owl' }
  ],
  
  // Dwell remap: slow down when content is visible
  dwellMultiplier: 3.2
}
