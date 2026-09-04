import React from 'react';
import { STATS_DATA } from '../data/websiteData';

export const StatsBanner = ({ customStats = null, className = '' }) => {
  const stats = customStats || STATS_DATA;

  return (
    <div className={`avinz-stats-banner ${className}`}>
      <div className="row text-center align-items-center g-3">
        {stats.map((item, index) => (
          <div 
            key={item.id || index} 
            className={`col-6 col-md-3 ${index < stats.length - 1 ? 'stats-divider' : ''}`}
          >
            <div className="d-flex flex-column align-items-center justify-content-center py-2">
              <div className="d-inline-flex align-items-center justify-content-center mb-2" style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#60a5fa',
                fontSize: '1.25rem'
              }}>
                <i className={`bi ${item.icon || 'bi-trophy'}`}></i>
              </div>
              <div className="stat-number text-white">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
