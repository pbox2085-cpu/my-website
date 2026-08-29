import React from 'react';

export const SparkleStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  delay?: string;
}> = ({ className = '', size = 20, color = '#F6D86B', delay = '0s' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none pointer-events-none ${className}`}
    style={{ animationDelay: delay }}
  >
    <path
      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
      fill={color}
    />
  </svg>
);

export const WhimsicalHeart: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 18, color = '#F28B9D' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none pointer-events-none ${className}`}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const ScallopWave: React.FC<{
  className?: string;
  fillColor?: string;
  direction?: 'down' | 'up';
}> = ({ className = '', fillColor = '#FFFDF5', direction = 'down' }) => (
  <div
    className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${
      direction === 'up' ? 'rotate-180' : ''
    }`}
  >
    <svg
      viewBox="0 0 1200 40"
      className="w-full h-6 sm:h-8"
      preserveAspectRatio="none"
      fill={fillColor}
    >
      <path d="M0,0 C50,28 100,28 150,0 C200,28 250,28 300,0 C350,28 400,28 450,0 C500,28 550,28 600,0 C650,28 700,28 750,0 C800,28 850,28 900,0 C950,28 1000,28 1050,0 C1100,28 1150,28 1200,0 L1200,40 L0,40 Z" />
    </svg>
  </div>
);

export const MagicBadge: React.FC<{
  children: React.ReactNode;
  color?: 'blue' | 'lime' | 'pink' | 'cream' | 'gold';
  icon?: React.ReactNode;
  className?: string;
}> = ({ children, color = 'pink', icon, className = '' }) => {
  const colorMap = {
    blue: 'bg-[#E8F7FC] text-[#207A9E] border-[#72CBE8]/40',
    lime: 'bg-[#F4FADC] text-[#6E8B0E] border-[#B7D92B]/50',
    pink: 'bg-[#FDF0F3] text-[#B83E54] border-[#F28B9D]/40',
    cream: 'bg-[#FFF8EA] text-[#8C5D35] border-[#F6D86B]/50',
    gold: 'bg-[#FFF9DB] text-[#916E05] border-[#F6D86B]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-xs transition-transform duration-200 hover:scale-105 select-none ${colorMap[color]} ${className}`}
    >
      {icon || <SparkleStar size={12} color="currentColor" />}
      <span>{children}</span>
    </span>
  );
};
