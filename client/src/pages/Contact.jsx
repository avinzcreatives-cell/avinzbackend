import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import SEO from '../components/SEO';
import { sendContactMessage } from '../services/api';
import { COMPANY_INFO } from '../data/websiteData';

export const Contact = ({ onOpenGetStarted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [mapMode, setMapMode] = useState('google'); // 'google' | 'landmarks'

  // 5 Features for "Why Reach Out to Us? —"
  const whyReachOut = [
    {
      title: "Quick Support",
      desc: "Get fast and friendly assistance.",
      icon: "bi-headset"
    },
    {
      title: "Expert Guidance",
      desc: "We help you choose the right solution.",
      icon: "bi-file-earmark-text"
    },
    {
      title: "Custom Solutions",
      desc: "Tailored services for your unique needs.",
      icon: "bi-lightbulb"
    },
    {
      title: "Reliable Service",
      desc: "Count on us for quality and commitment.",
      icon: "bi-hand-thumbs-up"
    },
    {
      title: "Long-Term Support",
      desc: "We're with you at every step of your journey.",
      icon: "bi-people"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `[Contact Form] ${formData.interest || 'General Inquiry'}`,
        message: `Interest: ${formData.interest || 'General'}\n\nMessage:\n${formData.message}`
      });

      if (res.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
        });
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
        try {
          confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
        } catch (err) {}
      } else {
        setStatus({ type: 'danger', message: res.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'danger', message: 'Unable to connect to server. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | CreatiVate - Let's Connect. We're Here to Help!"
        description="Have a project in mind, need help choosing a course, or just want to say hello? Reach out to CreatiVate in Coimbatore, Tamil Nadu, India."
      />

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '105px' }}>
        {/* ====================================================================
            1. HERO & CONTACT FORM SECTION (Exact match to image)
            ==================================================================== */}
        <section className="py-5" style={{ paddingBottom: '60px' }}>
          <div className="container">
            <div className="row g-5 align-items-center">
              
              {/* Left Column: Heading & Contact Info */}
              <div className="col-lg-5">
                {/* Badge */}
                <div className="mb-3">
                  <span 
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      fontWeight: '700',
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      padding: '6px 14px',
                      borderRadius: '50px',
                      textTransform: 'uppercase'
                    }}
                  >
                    CONTACT US
                  </span>
                </div>

                {/* Main Heading */}
                <h1 
                  style={{
                    fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
                    fontWeight: '800',
                    lineHeight: 1.15,
                    color: '#09132e',
                    fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: '-0.02em',
                    marginBottom: '6px'
                  }}
                >
                  Let's Connect.<br />
                  <span style={{ color: '#2563eb' }}>We're Here to Help!</span>
                </h1>

                {/* Horizontal Blue Line */}
                <div 
                  style={{
                    width: '42px',
                    height: '3.5px',
                    backgroundColor: '#2563eb',
                    borderRadius: '2px',
                    marginTop: '14px',
                    marginBottom: '20px'
                  }}
                ></div>

                {/* Subtitle text */}
                <p 
                  style={{
                    color: '#64748b',
                    fontSize: '0.96rem',
                    lineHeight: '1.7',
                    marginBottom: '32px',
                    maxWidth: '460px'
                  }}
                >
                  Have a project in mind, need help choosing a course, or just want to say hello? We'd love to hear from you. Reach out to us anytime!
                </p>

                {/* 4 Contact Information Rows */}
                <div className="d-flex flex-column gap-3">
                  
                  {/* Call Us */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.05rem',
                        flexShrink: 0
                      }}
                    >
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.2 }}>
                        Call Us
                      </div>
                      <a 
                        href="tel:+919876543210" 
                        style={{ color: '#64748b', fontSize: '0.86rem', textDecoration: 'none' }}
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.05rem',
                        flexShrink: 0
                      }}
                    >
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.2 }}>
                        Email Us
                      </div>
                      <a 
                        href="mailto:hello@creativate.in" 
                        style={{ color: '#64748b', fontSize: '0.86rem', textDecoration: 'none' }}
                      >
                        hello@creativate.in
                      </a>
                    </div>
                  </div>

                  {/* Visit Us */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.05rem',
                        flexShrink: 0
                      }}
                    >
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.2 }}>
                        Visit Us
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.86rem' }}>
                        Coimbatore, Tamil Nadu, India
                      </div>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.05rem',
                        flexShrink: 0
                      }}
                    >
                      <i className="bi bi-clock"></i>
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '0.88rem', color: '#0f172a', lineHeight: 1.2 }}>
                        Working Hours
                      </div>
                      <div style={{ color: '#64748b', fontSize: '0.86rem' }}>
                        Mon - Sat : 9:30 AM - 6:30 PM
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Send Us a Message Card */}
              <div className="col-lg-7">
                <div 
                  className="position-relative bg-white"
                  style={{
                    borderRadius: '24px',
                    border: '1px solid #eef2f6',
                    boxShadow: '0 10px 40px -10px rgba(11, 23, 57, 0.07)',
                    padding: 'clamp(24px, 4vw, 42px)'
                  }}
                >
                  {/* Flight Trail & Paper Plane Doodle Graphic */}
                  <div 
                    className="position-absolute"
                    style={{ top: '24px', right: '32px', pointerEvents: 'none' }}
                  >
                    <svg width="76" height="50" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M5 45 C 25 55, 50 15, 75 12" 
                        stroke="#93c5fd" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4" 
                        strokeLinecap="round"
                        fill="none" 
                      />
                      <path 
                        d="M75 12 L 88 5 L 82 20 L 78 14 Z" 
                        fill="#2563eb" 
                      />
                      <path 
                        d="M75 12 L 88 5 L 80 12 Z" 
                        fill="#1d4ed8" 
                      />
                    </svg>
                  </div>

                  <h3 
                    style={{
                      fontSize: '1.38rem',
                      fontWeight: '700',
                      color: '#0f172a',
                      fontFamily: "'Outfit', sans-serif",
                      marginBottom: '26px'
                    }}
                  >
                    Send Us a Message
                  </h3>

                  {status.message && (
                    <div className={`alert alert-${status.type} py-2 px-3 small rounded-3 mb-4`}>
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Row 1: Your Name & Your Email */}
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <div 
                          className="d-flex align-items-center px-3 py-2"
                          style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                            transition: 'border-color 0.2s, box-shadow 0.2s'
                          }}
                        >
                          <i className="bi bi-person text-muted me-2" style={{ fontSize: '1rem' }}></i>
                          <input
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={{
                              border: 'none',
                              outline: 'none',
                              width: '100%',
                              fontSize: '0.9rem',
                              color: '#0f172a',
                              backgroundColor: 'transparent'
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div 
                          className="d-flex align-items-center px-3 py-2"
                          style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                            transition: 'border-color 0.2s, box-shadow 0.2s'
                          }}
                        >
                          <i className="bi bi-envelope text-muted me-2" style={{ fontSize: '0.95rem' }}></i>
                          <input
                            type="email"
                            required
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{
                              border: 'none',
                              outline: 'none',
                              width: '100%',
                              fontSize: '0.9rem',
                              color: '#0f172a',
                              backgroundColor: 'transparent'
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number */}
                    <div className="mb-3">
                      <div 
                        className="d-flex align-items-center px-3 py-2"
                        style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        <i className="bi bi-telephone text-muted me-2" style={{ fontSize: '0.95rem' }}></i>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            fontSize: '0.9rem',
                            color: '#0f172a',
                            backgroundColor: 'transparent'
                          }}
                        />
                      </div>
                    </div>

                    {/* Row 3: I'm Interested In */}
                    <div className="mb-3">
                      <div 
                        className="d-flex align-items-center px-3 py-2 position-relative"
                        style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        <i className="bi bi-card-checklist text-muted me-2" style={{ fontSize: '0.95rem' }}></i>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            fontSize: '0.9rem',
                            color: formData.interest ? '#0f172a' : '#64748b',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            appearance: 'none',
                            WebkitAppearance: 'none'
                          }}
                        >
                          <option value="">I'm Interested In</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="MERN Stack Development">MERN Stack Development</option>
                          <option value="Full Stack Development">Full Stack Development</option>
                          <option value="Data Analytics">Data Analytics</option>
                          <option value="Website Design & Development">Website Design & Development</option>
                          <option value="Brand Identity Design">Brand Identity Design</option>
                          <option value="Custom Project / Other">Custom Project / Other</option>
                        </select>
                        <i 
                          className="bi bi-chevron-down position-absolute text-muted" 
                          style={{ right: '14px', pointerEvents: 'none', fontSize: '0.8rem' }}
                        ></i>
                      </div>
                    </div>

                    {/* Row 4: Your Message */}
                    <div className="mb-4">
                      <div 
                        className="d-flex align-items-start px-3 py-2"
                        style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          backgroundColor: '#ffffff',
                          minHeight: '120px'
                        }}
                      >
                        <i className="bi bi-pencil text-muted me-2 mt-1" style={{ fontSize: '0.95rem' }}></i>
                        <textarea
                          rows="4"
                          required
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          style={{
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            fontSize: '0.9rem',
                            color: '#0f172a',
                            backgroundColor: 'transparent',
                            resize: 'none',
                            lineHeight: 1.5
                          }}
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        width: '100%',
                        padding: '13px',
                        borderRadius: '50px',
                        border: 'none',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                        transition: 'all 0.25s ease',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        marginBottom: '16px'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1d4ed8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#2563eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      {loading ? 'Sending...' : 'Send Message'} <i className="bi bi-arrow-right"></i>
                    </button>

                    {/* Privacy notice */}
                    <div className="text-center text-muted small d-flex align-items-center justify-content-center gap-1" style={{ fontSize: '0.78rem' }}>
                      <i className="bi bi-shield-check text-primary"></i>
                      <span>We respect your privacy. Your information is safe with us.</span>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            2. WHY REACH OUT TO US? (5 Columns Strip - Exact match to image)
            ==================================================================== */}
        <section className="py-5" style={{ backgroundColor: '#f4f7fc' }}>
          <div className="container py-2">
            
            {/* Title */}
            <div className="text-center mb-5">
              <h3 
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  fontFamily: "'Outfit', sans-serif"
                }}
              >
                Why Reach Out to Us? —
              </h3>
            </div>

            {/* 5 Feature Columns */}
            <div className="row g-3 g-lg-4 justify-content-center text-center">
              {whyReachOut.map((item, idx) => (
                <div key={idx} className="col-6 col-md-4 col-lg d-flex">
                  <div 
                    className="w-100 d-flex flex-column align-items-center px-2 py-3"
                    style={{
                      borderRight: idx < 4 ? '1px solid rgba(226, 232, 240, 0.8)' : 'none'
                    }}
                  >
                    {/* Circle Icon */}
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.35rem',
                        marginBottom: '16px',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    {/* Heading */}
                    <h5 
                      style={{
                        fontWeight: '700',
                        fontSize: '0.95rem',
                        color: '#0f172a',
                        marginBottom: '6px'
                      }}
                    >
                      {item.title}
                    </h5>

                    {/* Description */}
                    <p 
                      style={{
                        fontSize: '0.8rem',
                        color: '#64748b',
                        lineHeight: 1.45,
                        maxWidth: '170px',
                        margin: '0 auto'
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ====================================================================
            3. OUR LOCATION & GOOGLE MAPS (Connected to Coimbatore)
            ==================================================================== */}
        <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
          <div className="container py-2">
            
            <div 
              className="rounded-4 overflow-hidden border shadow-sm"
              style={{ borderColor: '#edf2f7', backgroundColor: '#ffffff' }}
            >
              <div className="row g-0 align-items-stretch">
                
                {/* Left Area: Live Interactive Google Maps (Coimbatore) */}
                <div className="col-lg-8" style={{ minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
                  
                  {/* View Mode Switcher Pill Tabs (Google Map vs Landmarks Canvas) */}
                  <div 
                    className="position-absolute d-flex align-items-center gap-1 p-1 bg-white rounded-pill shadow-sm"
                    style={{ top: '16px', left: '16px', zIndex: 10, border: '1px solid #e2e8f0' }}
                  >
                    <button
                      type="button"
                      onClick={() => setMapMode('google')}
                      style={{
                        backgroundColor: mapMode === 'google' ? '#2563eb' : 'transparent',
                        color: mapMode === 'google' ? '#ffffff' : '#64748b',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className="bi bi-google"></i> Google Map
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapMode('landmarks')}
                      style={{
                        backgroundColor: mapMode === 'landmarks' ? '#2563eb' : 'transparent',
                        color: mapMode === 'landmarks' ? '#ffffff' : '#64748b',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <i className="bi bi-geo-alt"></i> Landmarks View
                    </button>
                  </div>

                  {/* Open in Google Maps External Floating Button */}
                  <div 
                    className="position-absolute"
                    style={{ top: '16px', right: '16px', zIndex: 10 }}
                  >
                    <a
                      href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu"
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center gap-1 px-3 py-2 bg-white text-dark shadow-sm rounded-pill text-decoration-none"
                      style={{ fontSize: '0.76rem', fontWeight: '600', border: '1px solid #e2e8f0' }}
                    >
                      <i className="bi bi-box-arrow-up-right text-primary"></i>
                      <span>Open in Maps</span>
                    </a>
                  </div>

                  {/* 1. LIVE GOOGLE MAPS IFRAME (Coimbatore) */}
                  {mapMode === 'google' ? (
                    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
                      <iframe
                        title="Google Maps Location - Coimbatore"
                        src="https://maps.google.com/maps?q=Coimbatore%2C%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{
                          border: 0,
                          minHeight: '400px',
                          display: 'block',
                          width: '100%'
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  ) : (
                    /* 2. STYLIZED LANDMARKS VECTOR MAP */
                    <div 
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '400px',
                        backgroundColor: '#f8f6f0',
                        position: 'relative',
                        userSelect: 'none'
                      }}
                    >
                      <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 800 450" 
                        preserveAspectRatio="xMidYMid slice"
                        style={{ position: 'absolute', inset: 0 }}
                      >
                        {/* Soft Green Park Zones */}
                        <path d="M120 180 Q 150 170, 170 210 Q 150 250, 110 230 Z" fill="#dcfce7" opacity="0.8" />
                        <path d="M500 80 Q 560 60, 590 120 Q 540 140, 480 110 Z" fill="#dcfce7" opacity="0.6" />
                        <path d="M680 280 Q 750 260, 770 340 Q 700 370, 660 320 Z" fill="#dcfce7" opacity="0.7" />

                        {/* White Arterial Road Network */}
                        <path d="M0 120 L 800 120" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                        <path d="M0 320 L 800 320" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                        <path d="M220 0 L 220 450" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                        <path d="M580 0 L 580 450" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
                        <path d="M50 0 L 400 450" stroke="#ffffff" strokeWidth="8" />
                        <path d="M750 0 L 350 450" stroke="#ffffff" strokeWidth="8" />

                        {/* Main Highway / Sathy Rd & Avinashi Rd */}
                        <path d="M50 420 L 300 240 L 780 80" stroke="#fed7aa" strokeWidth="12" strokeLinecap="round" />
                        <path d="M50 420 L 300 240 L 780 80" stroke="#fcd34d" strokeWidth="6" strokeLinecap="round" />
                        <path d="M100 80 L 420 220 L 700 400" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" />
                        <path d="M100 80 L 420 220 L 700 400" stroke="#fcd34d" strokeWidth="5" strokeLinecap="round" />

                        {/* Road Labels */}
                        <text x="640" y="110" fill="#94a3b8" fontSize="11" fontWeight="600" transform="rotate(-18 640 110)">Sathy Rd</text>
                        <text x="260" y="380" fill="#94a3b8" fontSize="11" fontWeight="600" transform="rotate(-30 260 380)">Sathy Rd</text>
                        <text x="580" y="395" fill="#94a3b8" fontSize="11" fontWeight="600">Trichy Rd</text>
                        <text x="475" y="85" fill="#64748b" fontSize="11" fontWeight="500">RK Puram</text>

                        {/* Highway Numbers */}
                        <rect x="480" y="375" width="16" height="12" rx="3" fill="#f59e0b" />
                        <text x="488" y="384" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">181</text>
                        <rect x="590" y="275" width="14" height="12" rx="3" fill="#f59e0b" />
                        <text x="597" y="284" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">544</text>
                      </svg>

                      {/* Landmarks Markers */}
                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ top: '15%', left: '18%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#334155' }}
                      >
                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                        <span>Gandhipuram Bus Stand</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ top: '38%', left: '18%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#334155' }}
                      >
                        <i className="bi bi-tree-fill text-success"></i>
                        <span>VOC Park</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ bottom: '26%', left: '8%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#dc2626' }}
                      >
                        <i className="bi bi-plus-circle-fill text-danger"></i>
                        <span>PSG Hospitals</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ bottom: '34%', left: '26%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#334155' }}
                      >
                        <i className="bi bi-train-front-fill text-secondary"></i>
                        <span>Coimbatore Junction</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ top: '22%', left: '46%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#0284c7' }}
                      >
                        <i className="bi bi-bag-fill text-info"></i>
                        <span>Brookefields Mall</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ bottom: '24%', left: '40%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#334155' }}
                      >
                        <i className="bi bi-geo-alt-fill text-secondary"></i>
                        <span>Coimbatore Junction</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ bottom: '15%', left: '25%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#2563eb' }}
                      >
                        <i className="bi bi-bag-check-fill text-primary"></i>
                        <span>Fun Republic Mall</span>
                      </div>

                      <div 
                        className="position-absolute d-flex align-items-center gap-1 px-2 py-1 bg-white shadow-sm rounded-pill"
                        style={{ top: '34%', right: '18%', border: '1px solid #e2e8f0', fontSize: '0.74rem', fontWeight: '600', color: '#334155' }}
                      >
                        <i className="bi bi-building-fill text-primary"></i>
                        <span>Tidel Park Coimbatore</span>
                      </div>

                      {/* Main Location Teardrop Pin */}
                      <div 
                        className="position-absolute"
                        style={{
                          top: '24%',
                          left: '37%',
                          transform: 'translate(-50%, -100%)',
                          zIndex: 10
                        }}
                      >
                        <div 
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            filter: 'drop-shadow(0 6px 12px rgba(37, 99, 235, 0.45))'
                          }}
                        >
                          <div 
                            style={{
                              width: '38px',
                              height: '48px',
                              backgroundColor: '#1d4ed8',
                              borderRadius: '50% 50% 50% 0',
                              transform: 'rotate(-45deg)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: '2px solid #ffffff'
                            }}
                          >
                            <div 
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
                </div>

                {/* Right Area: Our Location Details */}
                <div className="col-lg-4 p-4 p-md-5 d-flex flex-column justify-content-between bg-white border-start" style={{ borderColor: '#edf2f7' }}>
                  
                  <div>
                    <h4 
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        fontFamily: "'Outfit', sans-serif",
                        marginBottom: '26px'
                      }}
                    >
                      Our Location
                    </h4>

                    <div className="d-flex align-items-start gap-3 mb-4">
                      <div 
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          color: '#2563eb',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div>
                        <h6 
                          style={{
                            fontWeight: '700',
                            fontSize: '1rem',
                            color: '#0f172a',
                            marginBottom: '6px'
                          }}
                        >
                          Avinz Creatives
                        </h6>
                        <p 
                          style={{
                            color: '#64748b',
                            fontSize: '0.86rem',
                            lineHeight: 1.6,
                            marginBottom: 0
                          }}
                        >
                          No. 42, 3rd Floor, Tech Avenue,<br />
                          Peelamedu, Coimbatore - 641004,<br />
                          Tamil Nadu, India.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Get Directions Button -> Direct Link to Google Maps for Coimbatore */}
                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Coimbatore,+Tamil+Nadu,+India"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        width: '100%',
                        padding: '11px 24px',
                        borderRadius: '50px',
                        border: '1.5px solid #2563eb',
                        backgroundColor: '#ffffff',
                        color: '#2563eb',
                        fontWeight: '600',
                        fontSize: '0.92rem',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; }}
                    >
                      Get Directions <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ====================================================================
            4. CALL TO ACTION BANNER (Ready to Start Something Great?)
            ==================================================================== */}
        <section className="py-4 pb-5">
          <div className="container">
            <div 
              className="position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #091747 0%, #102a83 50%, #1e40af 100%)',
                borderRadius: '20px',
                padding: 'clamp(32px, 4vw, 44px)',
                boxShadow: '0 20px 45px -10px rgba(16, 42, 131, 0.4)'
              }}
            >
              {/* Dot Grid Pattern on right */}
              <div 
                className="position-absolute d-none d-md-block"
                style={{
                  top: '15px',
                  right: '25px',
                  opacity: 0.25,
                  pointerEvents: 'none'
                }}
              >
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                  <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#ffffff" />
                  </pattern>
                  <rect width="120" height="100" fill="url(#dotPattern)" />
                </svg>
              </div>

              <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
                
                {/* Left: 3D Mail Envelope + Plant Illustration */}
                <div className="col-auto d-none d-lg-block">
                  <div style={{ width: '90px', height: '80px', position: 'relative' }}>
                    {/* SVG 3D Envelope Illustration */}
                    <svg width="84" height="74" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Potted Plant */}
                      <ellipse cx="22" cy="74" rx="10" ry="4" fill="#0f172a" opacity="0.3" />
                      <path d="M14 62 L 17 78 L 27 78 L 30 62 Z" fill="#ffffff" />
                      {/* Plant Leaves */}
                      <path d="M22 62 Q 10 50, 16 42 Q 24 50, 22 62 Z" fill="#22c55e" />
                      <path d="M22 62 Q 22 45, 26 38 Q 30 48, 22 62 Z" fill="#16a34a" />
                      <path d="M22 62 Q 32 52, 34 46 Q 28 54, 22 62 Z" fill="#4ade80" />

                      {/* 3D Envelope Body */}
                      <ellipse cx="60" cy="76" rx="28" ry="6" fill="#09132e" opacity="0.4" />
                      
                      {/* Envelope Back */}
                      <rect x="38" y="34" width="48" height="34" rx="4" fill="#2563eb" />
                      
                      {/* Paper Letter Coming Out */}
                      <rect x="43" y="22" width="38" height="28" rx="3" fill="#ffffff" />
                      <line x1="48" y1="28" x2="68" y2="28" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="48" y1="34" x2="76" y2="34" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
                      <line x1="48" y1="40" x2="62" y2="40" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />

                      {/* Envelope Front Wings */}
                      <path d="M38 68 L 62 48 L 86 68 Z" fill="#1d4ed8" />
                      <path d="M38 34 L 62 52 L 38 68 Z" fill="#3b82f6" opacity="0.9" />
                      <path d="M86 34 L 62 52 L 86 68 Z" fill="#2563eb" />

                      {/* Speech Bubble */}
                      <g transform="translate(68, 6)">
                        <rect width="22" height="16" rx="6" fill="#4338ca" />
                        <path d="M4 14 L 2 20 L 9 15 Z" fill="#4338ca" />
                        <circle cx="6" cy="8" r="1.5" fill="#ffffff" />
                        <circle cx="11" cy="8" r="1.5" fill="#ffffff" />
                        <circle cx="16" cy="8" r="1.5" fill="#ffffff" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Middle: Title & Subtitle */}
                <div className="col-lg col-md-8">
                  <h3 
                    style={{
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                      fontFamily: "'Outfit', sans-serif",
                      letterSpacing: '-0.02em',
                      marginBottom: '6px'
                    }}
                  >
                    Ready to Start Something Great?
                  </h3>
                  <p 
                    style={{
                      color: 'rgba(255, 255, 255, 0.82)',
                      fontSize: '0.94rem',
                      lineHeight: 1.5,
                      marginBottom: 0,
                      maxWidth: '560px'
                    }}
                  >
                    Whether it's a project, a partnership, or just a question, we're excited to connect with you.
                  </p>
                </div>

                {/* Right: Start Your Project Button */}
                <div className="col-lg-auto col-md-4 text-md-end">
                  <button
                    onClick={() => {
                      if (onOpenGetStarted) {
                        onOpenGetStarted('project');
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#091747',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      padding: '12px 28px',
                      borderRadius: '50px',
                      border: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.15)'; }}
                  >
                    Start Your Project <i className="bi bi-arrow-right"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;
