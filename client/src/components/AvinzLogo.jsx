import React from 'react';

/**
 * Avinz Creatives Official Logo Component
 * Exact recreation of Image 1 (3D faceted A glyph, dynamic slash, AVINZ typography & CREATIVES line framing)
 */
export const AvinzLogo = ({ 
  size = 'md', 
  theme = 'light', // 'light' (for light backgrounds) | 'dark' (for dark header/footer)
  showSubtitle = true,
  layout = 'horizontal', // 'horizontal' | 'stacked' | 'icon-only'
  className = ''
}) => {
  // Dimension scales
  const dimensions = {
    sm: { iconSize: 34, titleSize: '1.1rem', subSize: '0.65rem' },
    md: { iconSize: 44, titleSize: '1.4rem', subSize: '0.72rem' },
    lg: { iconSize: 64, titleSize: '1.9rem', subSize: '0.85rem' },
    xl: { iconSize: 90, titleSize: '2.4rem', subSize: '1.05rem' },
  }[size] || { iconSize: 44, titleSize: '1.4rem', subSize: '0.72rem' };

  const isDarkBg = theme === 'dark';
  const primaryTextColor = isDarkBg ? '#ffffff' : '#0b1b4f';
  const subTextColor = isDarkBg ? '#93c5fd' : '#1e3a8a';
  const primaryGlyphColor = isDarkBg ? '#3b82f6' : '#122368';
  const accentSwooshColor = isDarkBg ? '#60a5fa' : '#2563eb';
  const highlightColor = isDarkBg ? '#93c5fd' : '#1d4ed8';

  return (
    <div 
      className={`avinz-brand-logo d-inline-flex align-items-center ${layout === 'stacked' ? 'flex-column text-center' : ''} ${className}`}
      style={{ userSelect: 'none', textDecoration: 'none' }}
    >
      {/* Dynamic SVG Icon */}
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize * 1.12}
        viewBox="0 0 160 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, transition: 'transform 0.25s ease' }}
        className="brand-icon-svg"
      >
        <defs>
          <linearGradient id="aLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryGlyphColor} />
            <stop offset="100%" stopColor="#081031" />
          </linearGradient>
          <linearGradient id="aRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={highlightColor} />
            <stop offset="100%" stopColor={primaryGlyphColor} />
          </linearGradient>
          <linearGradient id="slashGrad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={accentSwooshColor} />
            <stop offset="100%" stopColor={isDarkBg ? '#93c5fd' : '#3b82f6'} />
          </linearGradient>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#1e40af" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* 3D-Faceted Letter 'A' Structure */}
        <g filter="url(#logoGlow)">
          {/* Main Body of A */}
          <path
            d="M80 8 L146 148 L114 148 L80 72 L46 148 L14 148 Z"
            fill="url(#aLeftGrad)"
          />
          {/* Right Bevel Plane */}
          <path
            d="M80 8 L146 148 L124 148 L80 58 L80 8 Z"
            fill="url(#aRightGrad)"
            opacity="0.85"
          />
          {/* Dynamic Aerodynamic Slash / Swoosh cutting across */}
          <path
            d="M26 112 C 48 102, 102 78, 154 62 C 128 84, 82 108, 48 126 Z"
            fill="url(#slashGrad)"
          />
          {/* Inner Accent Line on Slash */}
          <path
            d="M34 110 C 60 98, 108 76, 154 62 C 140 70, 94 92, 54 116 Z"
            fill="#ffffff"
            opacity="0.6"
          />
        </g>
      </svg>

      {/* Typography Section */}
      {layout !== 'icon-only' && (
        <div 
          className={`brand-text-block ${layout === 'stacked' ? 'mt-2' : 'ms-2 ps-1'}`}
          style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
        >
          <div 
            className="brand-name fw-bolder" 
            style={{ 
              fontSize: dimensions.titleSize, 
              color: primaryTextColor, 
              letterSpacing: '2.5px',
              fontFamily: "'Outfit', sans-serif",
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            AVINZ
          </div>
          {showSubtitle && (
            <div 
              className="brand-tagline d-flex align-items-center justify-content-between"
              style={{ 
                fontSize: dimensions.subSize, 
                color: subTextColor, 
                letterSpacing: '3px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '700',
                textTransform: 'uppercase',
                marginTop: '3px',
                width: '100%'
              }}
            >
              <span style={{ height: '1px', background: subTextColor, opacity: 0.5, flex: '1 1 auto', marginRight: '5px' }}></span>
              <span>CREATIVES</span>
              <span style={{ height: '1px', background: subTextColor, opacity: 0.5, flex: '1 1 auto', marginLeft: '5px' }}></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvinzLogo;
