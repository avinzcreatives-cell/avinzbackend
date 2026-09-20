import React from 'react';
import logoImg from '../assets/logo.jpeg';

/**
 * Avinz Creatives Official Logo Component
 */
export const AvinzLogo = ({ 
  size = 'md', 
  theme = 'light',
  showSubtitle = true,
  layout = 'horizontal',
  className = ''
}) => {
  const dimensions = {
    sm: { height: 50 },
    md: { height: 65 },
    lg: { height: 90 },
    xl: { height: 130 },
  }[size] || { height: 65 };

  return (
    <div 
      className={`avinz-brand-logo d-inline-flex align-items-center ${layout === 'stacked' ? 'flex-column text-center' : ''} ${className}`}
      style={{ userSelect: 'none', textDecoration: 'none' }}
    >
      <img 
        src={logoImg} 
        alt="Avinz Creatives" 
        style={{ height: dimensions.height, width: 'auto', objectFit: 'contain' }} 
        className="brand-icon-img"
      />
    </div>
  );
};

export default AvinzLogo;
