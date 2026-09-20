import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in your services.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="btn btn-success rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center"
      style={{
        bottom: '24px',
        left: '24px',
        width: '60px',
        height: '60px',
        zIndex: 1050,
        backgroundColor: '#25D366',
        borderColor: '#25D366',
        transition: 'transform 0.3s ease'
      }}
      aria-label="Contact on WhatsApp"
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <i className="bi bi-whatsapp text-white fs-3"></i>
    </a>
  );
};

export default WhatsAppButton;
