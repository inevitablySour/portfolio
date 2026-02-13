import { motion } from 'framer-motion';

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  as = 'div',
  ...props 
}) {
  const Component = motion[as] || motion.div;
  
  return (
    <Component
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        glass rounded-2xl overflow-hidden
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${glow ? 'glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
