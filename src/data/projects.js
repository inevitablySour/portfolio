export const projects = [
  {
    id: 'asl-translator',
    title: 'ASL Translator',
    description: 'A sleek analytics dashboard with real-time data visualization, interactive charts, and customizable widgets for monitoring business metrics.',
    shortDescription: 'Real-time analytics dashboard',
    category: 'Web App',
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    image: '/projects/nebula.jpg',
    featured: true,
    links: {
      live: 'https://nebula-demo.example.com',
      github: 'https://github.com/username/nebula-dashboard'
    },
    year: 2024
  },
  {
    id: 'cipher-chat',
    title: 'Cipher Chat',
    description: 'End-to-end encrypted messaging application with disappearing messages, group chats, and file sharing. Built with privacy as the core principle.',
    shortDescription: 'E2E encrypted messenger',
    category: 'Web App',
    tags: ['React', 'Firebase', 'WebRTC', 'Encryption'],
    image: '/projects/cipher.jpg',
    featured: true,
    links: {
      live: 'https://cipher-chat.example.com',
      github: 'https://github.com/username/cipher-chat'
    },
    year: 2024
  },
  {
    id: 'pixel-quest',
    title: 'Pixel Quest',
    description: 'A retro-style platformer game featuring procedurally generated levels, pixel art graphics, and a chiptune soundtrack. Collect gems, defeat enemies, and save the kingdom.',
    shortDescription: 'Retro platformer game',
    category: 'Game',
    tags: ['JavaScript', 'Canvas', 'Howler.js', 'Tiled'],
    image: '/projects/pixel.jpg',
    featured: true,
    links: {
      live: 'https://pixel-quest.example.com',
      github: 'https://github.com/username/pixel-quest'
    },
    year: 2023
  },
  {
    id: 'devflow-cli',
    title: 'DevFlow CLI',
    description: 'A command-line tool that automates common development workflows including git operations, project scaffolding, and deployment scripts.',
    shortDescription: 'Developer productivity CLI',
    category: 'Tool',
    tags: ['Node.js', 'Commander.js', 'Shell', 'npm'],
    image: '/projects/devflow.jpg',
    featured: false,
    links: {
      github: 'https://github.com/username/devflow-cli',
      npm: 'https://npmjs.com/package/devflow-cli'
    },
    year: 2023
  },
  {
    id: 'synthwave-player',
    title: 'SynthWave Player',
    description: 'An audio visualizer and music player with reactive animations, custom shaders, and a synthwave aesthetic. Features playlist management and audio analysis.',
    shortDescription: 'Music visualizer app',
    category: 'Creative',
    tags: ['Three.js', 'Web Audio API', 'GLSL', 'React'],
    image: '/projects/synthwave.jpg',
    featured: false,
    links: {
      live: 'https://synthwave-player.example.com',
      github: 'https://github.com/username/synthwave-player'
    },
    year: 2024
  }
];

export const categories = ['All', 'Web App', 'Game', 'Tool', 'Creative'];

export const getFeaturedProjects = () => projects.filter(p => p.featured);

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects;
  return projects.filter(p => p.category === category);
};

export const getProjectById = (id) => projects.find(p => p.id === id);
