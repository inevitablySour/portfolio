import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-purple-500 flex items-center justify-center font-bold text-lg text-dark-900 group-hover:scale-110 transition-transform">
              J
            </div>
            <span className="font-semibold text-lg hidden sm:block">Joel</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors hover:text-white"
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="mailto:hello@example.com"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-500/20 text-accent-400 text-sm font-medium hover:bg-accent-500/30 transition-colors"
          >
            <span>Contact</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
