const colorMap = {
  default: 'bg-white/10 text-gray-300',
  accent: 'bg-accent-500/20 text-accent-400',
  purple: 'bg-purple-500/20 text-purple-400',
};

export default function Badge({ 
  children, 
  color = 'default',
  className = '' 
}) {
  return (
    <span 
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
        ${colorMap[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
