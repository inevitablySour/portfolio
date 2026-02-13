import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from './Badge';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="glass glass-hover rounded-2xl overflow-hidden group"
        >
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden">
            {/* Placeholder gradient - replace with actual image later */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-purple-500/20" />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  View Project →
                </span>
              </motion.div>
            </div>
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <Badge color="accent">{project.category}</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge>+{project.tags.length - 3}</Badge>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
