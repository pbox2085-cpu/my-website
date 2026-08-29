import React from 'react';

interface MagicalLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'badge-only' | 'horizontal' | 'compact';
  showTagline?: boolean;
}

export const MagicalLogo: React.FC<MagicalLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showTagline = true,
}) => {
  const badgeSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const badgeSvg = (
    <svg
      viewBox="0 0 120 120"
      className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer scalloped/decorative ring */}
      <circle cx="60" cy="60" r="58" fill="#B7D92B" />
      <circle cx="60" cy="60" r="52" fill="#FFFFFF" />
      
      {/* Sky Blue Main Badge Body */}
      <circle cx="60" cy="60" r="48" fill="#72CBE8" />

      {/* Magical Star Sparkles on badge background */}
      <path
        d="M24 35 L26 40 L31 42 L26 44 L24 49 L22 44 L17 42 L22 40 Z"
        fill="#F6D86B"
      />
      <path
        d="M96 32 L97.5 36 L101.5 37.5 L97.5 39 L96 43 L94.5 39 L90.5 37.5 L94.5 36 Z"
        fill="#FFFFFF"
      />
      <circle cx="30" cy="85" r="3" fill="#FFFDF5" opacity="0.8" />
      <circle cx="92" cy="82" r="3.5" fill="#B7D92B" />

      {/* Cupcake Wrapper / Base */}
      <path
        d="M38 72 L82 72 L76 96 L44 96 Z"
        fill="#FFF8EA"
        stroke="#38261F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Wrapper Ribs */}
      <line x1="48" y1="73" x2="51" y2="95" stroke="#E8D5B5" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="73" x2="60" y2="95" stroke="#E8D5B5" strokeWidth="2" strokeLinecap="round" />
      <line x1="72" y1="73" x2="69" y2="95" stroke="#E8D5B5" strokeWidth="2" strokeLinecap="round" />

      {/* Fluffy Frosted Cupcake Swirls */}
      <path
        d="M32 72 C30 63 42 61 46 62 C46 54 58 52 64 54 C66 45 78 46 84 55 C90 57 91 67 86 72 Z"
        fill="#F28B9D"
        stroke="#38261F"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Top Whipped Cream Peak */}
      <path
        d="M45 56 C46 44 57 38 60 36 C64 42 74 46 72 56 Z"
        fill="#FFFDF5"
        stroke="#38261F"
        strokeWidth="2"
      />

      {/* Confetti Sprinkles on Frosting */}
      <circle cx="43" cy="67" r="2.2" fill="#B7D92B" />
      <circle cx="56" cy="64" r="2" fill="#72CBE8" />
      <circle cx="68" cy="65" r="2.2" fill="#F6D86B" />
      <circle cx="78" cy="63" r="2" fill="#FFFFFF" />

      {/* Cherry / Magic Star Topper */}
      <circle cx="60" cy="34" r="8" fill="#E85E76" stroke="#38261F" strokeWidth="2" />
      <path
        d="M62 26 C64 21 68 18 73 17"
        stroke="#38261F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Star sparkle above cherry */}
      <polygon
        points="75,12 77,17 82,17 78,20 80,25 75,22 70,25 72,20 68,17 73,17"
        fill="#F6D86B"
      />
    </svg>
  );

  if (variant === 'badge-only') {
    return (
      <div className={`inline-flex items-center justify-center ${badgeSizes[size]} ${className}`}>
        {badgeSvg}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 group cursor-pointer ${className}`}>
        <div className={badgeSizes[size]}>{badgeSvg}</div>
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-[#38261F] tracking-tight leading-none ${titleSizes[size]}`}>
            Magical<span className="text-[#E85E76] font-normal italic ml-1">Bites</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className={`${badgeSizes[size]} shrink-0`}>
        {badgeSvg}
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-serif font-extrabold text-[#38261F] tracking-tight leading-none ${titleSizes[size]}`}>
            Magical<span className="text-[#E85E76] italic font-medium ml-1">Bites</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7D92B] shrink-0" />
        </div>
        {showTagline && (
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#8EAE19] mt-0.5 font-sans">
            Little Bites Full of Delight
          </span>
        )}
      </div>
    </div>
  );
};
