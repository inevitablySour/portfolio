import { useState } from 'react';

// Multiple CDN sources for tech icons
const getIconSources = (slug, devicon, color) => {
  const cleanColor = color.replace('#', '');
  return [
    // Simple Icons CDN
    `https://cdn.simpleicons.org/${slug}/${cleanColor}`,
    // Devicons (if devicon slug provided)
    devicon && `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicon}/${devicon}-original.svg`,
    // Iconify as fallback
    `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${cleanColor}`,
    `https://api.iconify.design/devicon/${devicon || slug}.svg`,
    `https://api.iconify.design/logos/${slug}.svg`,
  ].filter(Boolean);
};

export default function SkillIcon({ name, slug, devicon, color }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  
  const sources = getIconSources(slug, devicon, color);
  
  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setFailed(true);
    }
  };

  // Fallback to initials if all sources fail
  if (failed) {
    return (
      <div 
        className="w-full h-full rounded-lg flex items-center justify-center text-sm font-bold"
        style={{ backgroundColor: `${color}30`, color: color }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img 
      src={sources[sourceIndex]}
      alt={name}
      className="w-full h-full"
      onError={handleError}
      loading="lazy"
    />
  );
}
