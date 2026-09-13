import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  // Sizing styles
  const sizeMap = {
    sm: { height: '36px', width: 'auto' },
    md: { height: '48px', width: 'auto' },
    lg: { height: '64px', width: 'auto' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`inline-flex items-center select-none group cursor-pointer transition-transform duration-200 hover:opacity-95 ${className}`}
      style={{ height: currentSize.height }}
      title="3XTECH Solution Services"
    >
      <svg
        viewBox="0 0 460 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-w-full drop-shadow-xs"
      >
        {/* 3X in vibrant signature magenta */}
        <text
          x="6"
          y="84"
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontWeight="900"
          fontSize="86"
          fill="#C026D3"
          letterSpacing="-1"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}
        >
          3X
        </text>

        {/* TECH in deep forest emerald green, or crisp light emerald for dark backgrounds */}
        <text
          x="138"
          y="84"
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontWeight="900"
          fontSize="86"
          fill={isLight ? '#10B981' : '#0B6B38'}
          letterSpacing="1.5"
          style={{ textShadow: isLight ? '0 1px 3px rgba(0,0,0,0.5)' : '0 1px 2px rgba(0,0,0,0.1)' }}
        >
          TECH
        </text>

        {/* Solution Services Subtitle */}
        {showSubtitle && (
          <text
            x="146"
            y="122"
            fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="26"
            fill={isLight ? '#34D399' : '#075A2F'}
            letterSpacing="0.8"
          >
            Solution Services
          </text>
        )}
      </svg>
    </div>
  );
};
