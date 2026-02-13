import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-accent-500 to-accent-600 text-dark-900 font-semibold hover:from-accent-400 hover:to-accent-500',
  secondary: 'glass glass-hover text-white',
  ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 rounded-xl
    transition-all duration-300 font-medium
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className={baseStyles}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseStyles}
      {...props}
    >
      {children}
    </motion.button>
  );
}
