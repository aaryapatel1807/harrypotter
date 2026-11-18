export const portfolio = {
  fullName: 'Aarya Patel',
  firstName: 'Aarya',
  email: 'aaryapatel1807@gmail.com',
  github: 'https://github.com/aaryapatel1807',
  linkedin: 'https://linkedin.com/in/aaryapatel',
  resume: '/Aarya_Patel_Resume_v3.pdf',
  
  intro: 'Computer Science Engineer building production-grade AI applications and ML pipelines. From model training to deployed interfaces, I build intelligent systems that solve real problems.',
  
  stats: [
    { label: 'Projects', value: '5 Deployed' },
    { label: 'Research', value: '1 Publication' },
    { label: 'Focus', value: 'AI/ML & Full Stack' }
  ],
  
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    college: 'ITM SLS Baroda University, Vadodara',
    year: 'Currently in 3rd year',
    scores: [] as { label: string; value: string }[],
    honours: 'Tech community member (SSIP) · Coursework: AI/ML, Deep Learning, DSA, DBMS, Networks'
  },
  
  techStack: {
    intro: 'A tech stack is the set of tools an app is built from, layered like a building.',
    floors: [
      {
        name: 'Foundation',
        label: 'Languages',
        explanation: 'The core programming languages that form the base',
        skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C']
      },
      {
        name: 'Structure',
        label: 'Backend & Databases',
        explanation: 'Server-side frameworks and data storage systems',
        skills: ['Node.js', 'Express', 'FastAPI', 'Laravel', 'PostgreSQL', 'MySQL', 'Prisma ORM']
      },
      {
        name: 'Interior',
        label: 'Frontend',
        explanation: 'User interface frameworks and styling tools',
        skills: ['Next.js 14', 'React', 'HTML5', 'CSS3', 'Tailwind CSS']
      },
      {
        name: 'Utilities',
        label: 'ML/AI & Data Tools',
        explanation: 'Machine learning frameworks and data science libraries',
        skills: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'LSTM', 'LangChain', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Lab', 'Claude API', 'Gemini API', 'OpenAI API']
      },
      {
        name: 'Roof',
        label: 'Deployment & Architecture',
        explanation: 'Hosting platforms and architectural patterns',
        skills: ['Vercel', 'Electron', 'MVC', 'Microservices', 'Real-Time Systems']
      }
    ]
  },
  
  projects: [
    {
      number: '01',
      kicker: 'AI-Powered Health Platform',
      title: 'NutriAI',
      summary: 'Users need personalized nutrition advice but lack access to experts. I built a full-stack platform with Claude API for AI coaching, FastAPI ML microservices, and a glassmorphic Next.js 14 interface.',
      tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Prisma', 'Claude API'],
      github: 'https://github.com/aaryapatel1807'
    },
    {
      number: '02',
      kicker: 'AI Stock Trading Dashboard',
      title: 'Nexus Trade',
      summary: 'NSE traders need real-time insights without complex jargon. I built a dashboard with live market feeds, Claude API for buy/sell signals, and natural-language explanations of market movements.',
      tech: ['Next.js', 'Node.js', 'Claude API', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/aaryapatel1807'
    },
    {
      number: '03',
      kicker: 'JARVIS-Style AI Desktop OS',
      title: 'Elysia',
      summary: 'Desktop AI assistants are expensive and cloud-dependent. I built a local-first AI OS with voice (Whisper), reasoning (Ollama), and memory—entirely open-source with ~1s voice response time.',
      tech: ['Electron', 'React', 'TypeScript', 'FastAPI', 'Faster Whisper', 'Piper TTS', 'Ollama', 'OpenRouter'],
      github: 'https://github.com/aaryapatel1807'
    }
  ],
  
  achievements: {
    count: '6',
    items: [
      'Weather-Driven Disease Prediction research paper (submitted, publication pending 2025)',
      'Smart India Hackathon: JANMIND civic intelligence platform (FastAPI, spaCy, FAISS, 3,700 lines)',
      'LibraryMS: Two production-ready library systems (Laravel, MySQL, role-based access)',
      'Deloitte Australia Data Analytics Job Simulation (Forage, 2024)',
      '5 deployed full-stack AI applications',
      'ML benchmarking: Random Forest, XGBoost, SVM, LSTM across accuracy, precision, recall, F1'
    ]
  },
  
  experience: {
    items: [
      'Deloitte Australia — Data Analytics Job Simulation (Forage, 2024)',
      'Smart India Hackatham team contributor (JANMIND project, 2024)',
      'ITM SLS Baroda University tech community (SSIP member)'
    ]
  },
  
  contact: {
    message: 'Ready to build something magical?',
    email: 'aaryapatel1807@gmail.com'
  }
}
