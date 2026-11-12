export const filmTimings = {
  totalFrames: 563,
  fps: 15,
  desktopScrollHeight: 5200, // vh
  mobileScrollHeight: 4200, // vh
  
  scenes: [
    { start: 0, end: 0.035, label: 'title', placement: 'center' },
    { start: 0.04, end: 0.11, label: 'welcome', placement: 'lower-center' },
    { start: 0.115, end: 0.205, label: 'about', placement: 'left' },
    { start: 0.209, end: 0.266, label: 'starring', placement: 'top-left' },
    { start: 0.27, end: 0.395, label: 'education', placement: 'right' },
    { start: 0.397, end: 0.452, label: 'skills-title', placement: 'center' },
    { start: 0.448, end: 0.605, label: 'skills', placement: 'floating' },
    { start: 0.6, end: 0.652, label: 'work-title', placement: 'center' },
    { start: 0.648, end: 0.8, label: 'projects', placement: 'varied' },
    { start: 0.803, end: 0.858, label: 'achievements', placement: 'top-left' },
    { start: 0.862, end: 0.922, label: 'experience', placement: 'right' },
    { start: 0.93, end: 1.0, label: 'contact', placement: 'center' }
  ],
  
  // Dwell remap: slow down when content is visible
  dwellMultiplier: 3.2
}
