import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectModal from '../components/Modals/ProjectModal';
import { PROJECTS_PAGE_DATA } from '../data/websiteData';

export const Projects = ({ onOpenGetStarted }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = [
    'All Projects',
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'Branding',
    'Mobile App',
    'Others'
  ];

  const filteredProjects = PROJECTS_PAGE_DATA.filter((p) => {
    if (activeCategory === 'All Projects') return true;
    if (activeCategory === 'Others') return !['Web Design', 'Web Development', 'UI/UX Design', 'Branding', 'Mobile App'].includes(p.category);
    return p.category === activeCategory || p.tags.includes(activeCategory);
  });

  const projectStats = [
    { id: "completed", value: "50+", label: "Projects Completed", icon: "bi-briefcase-fill" },
    { id: "clients", value: "25+", label: "Happy Clients", icon: "bi-people-fill" },
    { id: "websites", value: "30+", label: "Websites Developed", icon: "bi-globe" },
    { id: "satisfaction", value: "100%", label: "Client Satisfaction", icon: "bi-star-fill" }
  ];

  return (
    <>
      <SEO
        title="Projects | Ideas. Designed. Built. Delivered."
        description="Explore a collection of our best design and development projects at Avinz Creatives. Web apps, branding, UI/UX, and mobile solutions."
      />

      {/* ====================================================================
          1. PROJECTS HERO SECTION (Exact Match to Image)
          ==================================================================== */}
      <section className="hero-wrapper bg-white pt-5 pb-5">
        <div className="container pt-4">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <span className="section-badge mb-3">OUR PROJECTS</span>

              <h1 className="hero-title fw-bold" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', lineHeight: 1.18, color: '#09132e' }}>
                Ideas. Designed.<br />
                Built. <span style={{ color: '#2563eb' }}>Delivered.</span>
              </h1>

              <p className="text-secondary mb-4" style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '520px' }}>
                Explore a collection of our best design and development projects. Each project reflects our creativity, technical expertise and commitment to quality.
              </p>

              {/* 3 Icon Feature Pills */}
              <div className="d-flex flex-wrap gap-3 gap-md-4 pt-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-lightbulb-fill"></i>
                  </div>
                  <span className="fw-semibold text-dark small">Creative Design</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <span className="fw-semibold text-dark small">Clean Development</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary" style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-rocket-takeoff-fill"></i>
                  </div>
                  <span className="fw-semibold text-dark small">Timely Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (MacBook + Phone Workstation) */}
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg border">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                  alt="Avinz Creatives Projects Portfolio"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '360px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. FILTER PILLS & 8 PROJECT CARDS (4x2 Grid)
          ==================================================================== */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <div className="container py-2">
          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCategory === cat ? 'btn-primary shadow-sm' : 'btn-light border text-secondary'}`}
                style={{ fontSize: '0.88rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 8 Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-3 col-md-6">
                <div 
                  className="rounded-4 overflow-hidden border shadow-sm bg-white h-100 d-flex flex-column justify-content-between"
                  style={{ borderColor: '#e2e8f0', transition: 'all 0.3s ease' }}
                >
                  {/* Thumbnail */}
                  <div 
                    style={{ aspectRatio: '16/11', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: 'transform 0.4s ease' }}
                    />
                  </div>

                  {/* Body Info */}
                  <div className="p-3 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.94rem' }}>
                        {project.title}
                      </h6>

                      {/* Badges */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="badge bg-primary-subtle text-primary border border-primary-subtle"
                            style={{ fontSize: '0.72rem', fontWeight: '600' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Case Study Button */}
                    <div className="pt-2 border-top mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="btn btn-link text-primary fw-bold p-0 text-decoration-none d-flex align-items-center gap-1 small"
                      >
                        View Case Study <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Royal Blue Stats Banner */}
          <div className="mt-5 pt-3">
            <div className="avinz-stats-banner">
              <div className="row text-center align-items-center g-3">
                {projectStats.map((item, index) => (
                  <div key={item.id} className={`col-6 col-md-3 ${index < projectStats.length - 1 ? 'stats-divider' : ''}`}>
                    <div className="d-flex flex-column align-items-center justify-content-center py-2">
                      <div className="d-inline-flex align-items-center justify-content-center mb-2" style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.12)',
                        color: '#60a5fa',
                        fontSize: '1.25rem'
                      }}>
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div className="stat-number text-white">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. WHAT OUR CLIENTS SAY (Review Box matching Image)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="row align-items-center g-4">
            <div className="col-lg-3">
              <h3 className="fw-bold text-dark mb-1" style={{ fontSize: '1.5rem' }}>
                What Our Clients Say
              </h3>
              <div style={{ width: '40px', height: '3px', background: '#2563eb', borderRadius: '2px', marginTop: '8px' }}></div>
            </div>

            <div className="col-lg-9">
              <div className="p-4 rounded-4 border bg-white shadow-sm" style={{ borderColor: '#e2e8f0' }}>
                <div className="row align-items-center g-3">
                  <div className="col-md-8 d-flex align-items-start gap-3">
                    <span className="text-primary fs-1 fw-bold" style={{ lineHeight: 0.8 }}>“</span>
                    <div>
                      <p className="text-secondary mb-2" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
                        Avinz Creatives delivered exactly what we needed — a modern, fast and user-friendly website. Their attention to detail and support throughout the project was excellent.
                      </p>
                      {/* Pagination Dots */}
                      <div className="d-flex gap-1">
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 d-flex align-items-center gap-3 border-start-md ps-md-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Arun Kumar"
                      className="rounded-circle"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.95rem' }}>Arun Kumar</h6>
                      <small className="text-muted d-block" style={{ fontSize: '0.78rem' }}>Founder, HomeSpot</small>
                      <div className="text-warning" style={{ fontSize: '0.85rem' }}>★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. HAVE A PROJECT IN MIND? (CTA Banner)
          ==================================================================== */}
      <section className="py-4">
        <div className="container">
          <div 
            className="rounded-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-lg"
            style={{ background: 'linear-gradient(135deg, #091747 0%, #102a83 50%, #1e40af 100%)' }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h2 className="text-white fw-bold mb-2 display-6" style={{ letterSpacing: '-0.02em' }}>
                  Have a Project in Mind?
                </h2>
                <p className="text-white-50 mb-0" style={{ fontSize: '1rem' }}>
                  Let's bring your ideas to life with creativity and technology.
                </p>
              </div>

              <div className="col-lg-4 d-flex flex-wrap gap-3 justify-content-lg-end">
                <button
                  onClick={() => onOpenGetStarted('quote')}
                  className="btn btn-avinz-white"
                >
                  Start a Project <i className="bi bi-arrow-right ms-1"></i>
                </button>
                <Link
                  to="/contact"
                  className="btn btn-avinz-outline-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
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

export default Projects;
