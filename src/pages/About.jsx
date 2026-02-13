import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout';
import { Button, GlassCard } from '../components/ui';
import SkillIcon from '../components/ui/SkillIcon';

// Skills with multiple icon source options
// slug = Simple Icons, devicon = Devicons (optional fallback)
const skills = [
  { name: 'React', slug: 'react', devicon: 'react', color: '#61DAFB' },
  { name: 'JavaScript', slug: 'javascript', devicon: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', devicon: 'typescript', color: '#3178C6' },
  { name: 'Three.js', slug: 'threedotjs', devicon: 'threejs', color: '#ffffff' },
  { name: 'Tailwind', slug: 'tailwindcss', devicon: 'tailwindcss', color: '#06B6D4' },
  { name: 'Node.js', slug: 'nodedotjs', devicon: 'nodejs', color: '#339933' },
  { name: 'Python', slug: 'python', devicon: 'python', color: '#3776AB' },
  { name: 'Git', slug: 'git', devicon: 'git', color: '#F05032' },
  { name: 'HTML5', slug: 'html5', devicon: 'html5', color: '#E34F26' },
  { name: 'CSS3', slug: 'css3', devicon: 'css3', color: '#1572B6' },
  { name: 'Figma', slug: 'figma', devicon: 'figma', color: '#F24E1E' },
  { name: 'VS Code', slug: 'visualstudiocode', devicon: 'vscode', color: '#007ACC' },
];

const timeline = [
  {
    year: '2024',
    title: 'Full Stack Developer',
    description: 'Building modern web applications with React and Node.js',
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    description: 'Focused on creating beautiful, responsive user interfaces',
  },
  {
    year: '2022',
    title: 'Started Learning Web Development',
    description: 'Began my journey into the world of programming',
  },
];

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about who I am, what I do, and the technologies I work with.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 mb-20"
          >
            {/* Photo Placeholder */}
            <div className="glass rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center text-5xl font-bold text-dark-900 mb-4">
                    J
                  </div>
                  <span className="text-gray-400">Your Photo Here</span>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Hello! I'm <span className="gradient-text">Joel</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate developer with a love for creating beautiful, 
                  interactive digital experiences. My journey in web development 
                  started with curiosity and has grown into a deep appreciation 
                  for the craft of building software.
                </p>
                <p>
                  I specialize in front-end development with React, but I'm always 
                  exploring new technologies and pushing the boundaries of what's 
                  possible on the web. From 3D graphics with Three.js to complex 
                  state management, I enjoy tackling challenging problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  working on personal projects, or learning about the latest trends 
                  in web development.
                </p>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button href="mailto:hello@example.com">
                  Get in Touch
                </Button>
                <Button href="/resume.pdf" variant="secondary">
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass glass-hover rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <SkillIcon {...skill} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Journey</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-purple-500 to-transparent" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-accent-500 border-4 border-dark-900 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <GlassCard hover={false} className="p-6">
                      <span className="text-accent-400 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </GlassCard>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
