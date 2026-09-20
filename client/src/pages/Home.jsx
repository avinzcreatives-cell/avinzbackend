import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StatsBanner from '../components/StatsBanner';
import ProjectModal from '../components/Modals/ProjectModal';
import {
  CORE_SERVICES_SUMMARY,
  WHY_CHOOSE_US_HOME,
  RECENT_PROJECTS,
  TESTIMONIALS
} from '../data/websiteData';

export const Home = ({ onOpenGetStarted }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Using WHY_CHOOSE_US_HOME from websiteData.js for the cards
  const whyChooseUsCards = WHY_CHOOSE_US_HOME.map(item => ({
    ...item,
    color: "#2563eb",
    bg: "#eff6ff"
  }));

  // Exact 4 Projects matching the mockups
  const homeProjects = [
    {
      id: "royal-fashion",
      title: "Brand Identity Design",
      client: "ROYAL FASHION",
      category: "Brand Identity Design",
      desc: "Luxury apparel brand identity featuring handcrafted gold foil typography, packaging box design, and social media branding toolkit.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
      tags: ["Logo Design", "Packaging", "Brand Manual", "Gold Foil"]
    },
    {
      id: "interior-website",
      title: "Website Design",
      client: "Interior That Reflects Your Style",
      category: "Website Design",
      desc: "High-end interior design and architecture studio portfolio featuring minimalist layout, dark mode aesthetic, and 3D floorplan tours.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
      tags: ["Responsive Design", "React", "Bootstrap 5", "UI/UX"]
    },
    {
      id: "crypto-app",
      title: "Mobile App UI/UX",
      client: "NovaPay Mobile App",
      category: "Mobile App UI/UX",
      desc: "Modern digital banking and crypto investment mobile wallet with interactive balance charts, biometric verification, and frictionless payments.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80",
      tags: ["Figma", "iOS / Android", "Fintech", "Dark UI"]
    },
    {
      id: "saas-website",
      title: "Business Website",
      client: "Digital Solutions That Drive Growth",
      category: "Business Website",
      desc: "Enterprise cloud DevOps platform featuring interactive interactive documentation, custom pricing calculator, and client dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      tags: ["MERN Stack", "Node.js", "Tailwind/Bootstrap", "SEO"]
    }
  ];

  return (
    <>
      <SEO
        title="Home | Creative Design Agency"
        description="Avinz Creatives - Creative Design Agency in Coimbatore. We help businesses build a strong digital presence through creative design and website development."
      />

      {/* ====================================================================
          1. HERO SECTION (Exact Match to Image)
          ==================================================================== */}
      <section className="hero-wrapper position-relative" style={{ backgroundColor: '#ffffff', paddingTop: '130px', paddingBottom: '70px' }}>
        <div className="hero-glow-blob" style={{ top: '-120px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(219, 234, 254, 0.7) 0%, rgba(255, 255, 255, 0) 70%)' }}></div>
        
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            {/* Left Column: Headline & Value Proposition */}
            <div className="col-lg-6">
              <span className="section-badge mb-3" style={{ background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', padding: '6px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: '700' }}>
                Creative Design Agency 🚀
              </span>

              <h1 className="hero-title mt-2 fw-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.15, color: '#09132e', letterSpacing: '-0.02em' }}>
                Design. Develop.<br />
                <span style={{ color: '#2563eb' }}>Launch.</span>
              </h1>

              <p className="hero-subtitle text-secondary mb-4" style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '520px' }}>
                We help businesses build a strong digital presence through creative design and website development.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4 hero-actions">
                <button 
                  onClick={() => onOpenGetStarted('quote')} 
                  className="btn btn-avinz-primary px-4 py-3"
                  style={{ background: '#2563eb', borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem' }}
                >
                  Get a Quote <i className="bi bi-arrow-right ms-1"></i>
                </button>
                <button 
                  onClick={() => onOpenGetStarted('quote')} 
                  className="btn btn-avinz-outline px-4 py-3"
                  style={{ borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem', borderColor: '#cbd5e1', color: '#0f172a' }}
                >
                  Our Services <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </div>

              {/* 3 Pill Badges below buttons */}
              <div className="d-flex flex-wrap gap-2 pt-2 hero-badges-strip">
                <div className="hero-pill-item d-inline-flex align-items-center gap-2 px-3 py-2 bg-white border rounded-pill shadow-sm" style={{ fontSize: '0.84rem', fontWeight: '600', color: '#0f172a' }}>
                  <i className="bi bi-person-workspace text-primary"></i>
                  <span>Creative Experts</span>
                </div>
                <div className="hero-pill-item d-inline-flex align-items-center gap-2 px-3 py-2 bg-white border rounded-pill shadow-sm" style={{ fontSize: '0.84rem', fontWeight: '600', color: '#0f172a' }}>
                  <i className="bi bi-laptop text-primary"></i>
                  <span>Custom Solutions</span>
                </div>
                <div className="hero-pill-item d-inline-flex align-items-center gap-2 px-3 py-2 bg-white border rounded-pill shadow-sm" style={{ fontSize: '0.84rem', fontWeight: '600', color: '#0f172a' }}>
                  <i className="bi bi-patch-check-fill text-primary"></i>
                  <span>Client Success</span>
                </div>
              </div>
            </div>

            {/* Right Column: Exact 3D Monitor Visual matching UI Mockup */}
            <div className="col-lg-6">
              <div className="hero-mockup-container position-relative text-center">
                <img
                  src="/hero-monitor.jpg"
                  alt="Think. Design. Create. - Avinz Creatives Studio"
                  className="img-fluid rounded-4 shadow-lg border"
                  style={{ maxHeight: '460px', width: 'auto', objectFit: 'contain', background: '#ffffff' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. WHAT WE DO: Creative Solutions & SMART Training (3 Cards)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHAT WE DO</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              Creative <span style={{ color: '#2563eb' }}>Solutions</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              We combine creativity and technology to deliver the best results.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {CORE_SERVICES_SUMMARY.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6">
                <div className="avinz-card p-4">
                  <div 
                    className="card-icon-wrapper"
                    style={{ backgroundColor: card.badgeColor, color: card.iconColor }}
                  >
                    <i className={`bi ${card.icon}`}></i>
                  </div>

                  <h5 className="fw-bold mb-3 text-dark" style={{ fontSize: '1.2rem' }}>{card.title}</h5>

                  <ul className="feature-check-list mb-4">
                    {card.features.map((feat, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: '#475569' }}>{feat}</li>
                    ))}
                  </ul>

                  <div className="pt-3 border-top mt-auto">
                    <Link 
                      to={card.linkUrl} 
                      className="fw-bold text-primary d-inline-flex align-items-center gap-2 text-decoration-none"
                      style={{ fontSize: '0.92rem' }}
                    >
                      {card.linkText} <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHY CHOOSE US: We Focus on Your Success (5 Cards matching Image)
          ==================================================================== */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHY CHOOSE US</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              We Focus on Your <span style={{ color: '#2563eb' }}>Success</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              Creative solutions. Real results.
            </p>
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            {whyChooseUsCards.map((item) => (
              <div key={item.id} className="col-6 col-md-4 col-lg-auto" style={{ flex: '1 1 200px', maxWidth: '240px' }}>
                <div className="p-4 rounded-4 border bg-white text-center h-100 d-flex flex-column align-items-center justify-content-start shadow-sm hover-elevate" style={{ borderColor: '#e2e8f0', transition: 'all 0.3s ease' }}>
                  <div 
                    className="p-3 rounded-circle mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: item.bg, color: item.color, fontSize: '1.25rem' }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.98rem' }}>{item.title}</h6>
                  <p className="text-muted small mb-0" style={{ fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Royal Blue Stats Banner */}
          <div className="mt-5 pt-3">
            <StatsBanner />
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OUR WORK: Recent Projects (4 Cards matching Image)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="section-badge mb-2">OUR WORK</span>
              <h2 className="display-6 fw-bold mb-1" style={{ color: '#09132e' }}>
                Recent <span style={{ color: '#2563eb' }}>Projects</span>
              </h2>
              <p className="text-muted mb-0 small">A glimpse of our creative work and development.</p>
            </div>
            <Link to="/projects" className="btn btn-avinz-outline mt-3 mt-md-0 py-2 px-3" style={{ fontSize: '0.88rem', borderRadius: '50px' }}>
              View All Projects <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {homeProjects.map((project) => (
              <div key={project.id} className="col-lg-3 col-md-6">
                <div 
                  className="rounded-4 overflow-hidden border shadow-sm cursor-pointer position-relative h-100 bg-dark"
                  onClick={() => setSelectedProject(project)}
                  style={{ transition: 'transform 0.3s ease' }}
                >
                  <div style={{ aspectRatio: '16/11', overflow: 'hidden' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: 'transform 0.5s ease' }}
                    />
                  </div>
                  <div className="p-3 bg-white border-top">
                    <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.92rem' }}>{project.title}</h6>
                    <span className="text-muted small" style={{ fontSize: '0.78rem' }}>{project.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. WHAT OUR STUDENTS SAY: Success Stories (Testimonials)
          ==================================================================== */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHAT OUR STUDENTS SAY</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              Client Success <span style={{ color: '#2563eb' }}>Stories</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              Happy clients, successful businesses.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100 d-flex flex-column justify-content-between" style={{ borderColor: '#e2e8f0' }}>
                  <div>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="rounded-circle border" 
                        style={{ width: '48px', height: '48px', objectFit: 'cover' }} 
                      />
                      <div>
                        <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.95rem' }}>{item.name}</h6>
                        <small className="text-muted" style={{ fontSize: '0.8rem' }}>{item.role}</small>
                      </div>
                    </div>

                    <p className="text-secondary mb-3" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                      "{item.quote}"
                    </p>
                  </div>

                  {item.rating > 0 && (
                    <div className="text-warning" style={{ fontSize: '1rem', letterSpacing: '2px' }}>
                      {"★".repeat(item.rating)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. READY TO BUILD YOUR FUTURE? (CTA Banner with Character on Left)
          ==================================================================== */}
      <section className="py-4">
        <div className="container">
          <div 
            className="rounded-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #091747 0%, #102a83 50%, #1e40af 100%)'
            }}
          >
            <div className="row align-items-center g-4">
              {/* Left Column: Image/Graphic */}
              <div className="col-lg-4 text-center mb-4 mb-lg-0">
                <div className="position-relative d-inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80"
                    alt="Avinz Creatives Design Agency"
                    className="img-fluid rounded-4 shadow"
                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 m-2 px-3 py-1 rounded-pill bg-white text-dark shadow-sm d-flex align-items-center gap-1"
                    style={{ fontSize: '0.75rem', fontWeight: '700' }}
                  >
                    <i className="bi bi-patch-check-fill text-primary"></i> Top Rated Agency
                  </div>
                </div>
              </div>

              {/* Right Column: Copy & Actions */}
              <div className="col-lg-8 text-center text-lg-start">
                <h2 className="text-white fw-bold mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.02em' }}>
                  Ready to Start Your Project?
                </h2>
                <p className="text-white-50 mb-4" style={{ fontSize: '0.98rem', maxWidth: '560px', lineHeight: 1.6 }}>
                  Get your dream project designed and developed by our experts.
                </p>

                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                  <button 
                    onClick={() => onOpenGetStarted('quote')} 
                    className="btn btn-light text-primary px-4 py-2 fw-bold"
                    style={{ borderRadius: '50px', fontSize: '0.92rem' }}
                  >
                    Get Started Today <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                  <Link 
                    to="/contact" 
                    className="btn btn-outline-light px-4 py-2 fw-semibold"
                    style={{ borderRadius: '50px', fontSize: '0.92rem' }}
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onHireClick={(title) => onOpenGetStarted('quote', title)}
        />
      )}
    </>
  );
};

export default Home;
