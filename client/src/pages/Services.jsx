import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StatsBanner from '../components/StatsBanner';
import CTABanner from '../components/CTABanner';
import { ALL_SERVICES, WORK_PROCESS } from '../data/websiteData';

export const Services = ({ onOpenGetStarted }) => {
  const serviceStats = [
    { id: "projects", value: "100+", label: "Projects Completed", icon: "bi-briefcase-fill" },
    { id: "clients", value: "50+", label: "Happy Clients", icon: "bi-people-fill" },
    { id: "websites", value: "25+", label: "Websites Developed", icon: "bi-globe" },
    { id: "experience", value: "5+", label: "Years Experience", icon: "bi-stars" },
    { id: "satisfaction", value: "100%", label: "Client Satisfaction", icon: "bi-emoji-smile-fill" }
  ];

  const whyChooseServices = [
    { title: "Experienced Team", icon: "bi-people-fill", desc: "Skilled professionals with industry experience." },
    { title: "Quality Assured", icon: "bi-shield-check", desc: "High standards and quality in every project." },
    { title: "On-Time Delivery", icon: "bi-clock-history", desc: "We value your time and deliver on schedule." },
    { title: "Client Satisfaction", icon: "bi-heart-fill", desc: "Our priority is 100% client satisfaction." },
    { title: "Affordable Pricing", icon: "bi-tag-fill", desc: "Best solutions at competitive prices." }
  ];

  return (
    <>
      <SEO
        title="Services | Web Development, UI/UX, Graphic Design & MERN Stack"
        description="Explore comprehensive creative design and modern web development services offered by Avinz Creatives. From custom MERN apps to brand identity and UI/UX."
      />

      {/* ====================================================================
          SERVICES HERO (Exact match to Image 4)
          ==================================================================== */}
      <section className="hero-wrapper bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <span className="section-badge">OUR SERVICES</span>
              <h1 className="hero-title mt-2">
                Creative Solutions.<br />
                <span className="text-gradient-blue">Powerful Results.</span>
              </h1>

              <p className="hero-subtitle mb-4">
                We provide end-to-end digital solutions and technology training designed to help businesses grow and individuals build successful careers in the digital world.
              </p>

              {/* 3 Checkmark Bullet Points */}
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">Modern & Innovative Designs</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">High-Quality Development</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">Result-Oriented Training</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button onClick={() => onOpenGetStarted('quote')} className="btn btn-avinz-primary">
                  Get a Free Quote <i className="bi bi-arrow-right"></i>
                </button>
                <Link to="/projects" className="btn btn-avinz-outline">
                  View Our Portfolio
                </Link>
              </div>
            </div>

            {/* Right Hero Image (Dual Monitor Workstation) */}
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg border">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Avinz Digital Solutions That Drive Growth"
                  className="img-fluid w-100"
                  style={{ minHeight: '380px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT WE OFFER: 6 Cards in 3x2 Grid (Matching Image 4)
          ==================================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHAT WE OFFER</span>
            <h2 className="display-6 fw-bold mb-2">
              Our <span className="text-gradient-blue">Services</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '620px', margin: '0 auto' }}>
              Creative design, modern development and practical training — all under one roof.
            </p>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-4">
            {ALL_SERVICES.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="avinz-card">
                  <div className="card-icon-wrapper bg-primary-subtle text-primary">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <span className="badge bg-light text-primary align-self-start mb-2 px-3 py-1 border small">
                    {service.category}
                  </span>

                  <h4 className="fw-bold mb-2 text-dark">{service.title}</h4>
                  <p className="text-muted small mb-3">{service.desc}</p>

                  <ul className="feature-check-list">
                    {service.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="pt-3 border-top mt-auto d-flex justify-content-between align-items-center">
                    <button
                      onClick={() => onOpenGetStarted('quote', service.title)}
                      className="btn btn-link text-primary fw-bold p-0 text-decoration-none d-flex align-items-center gap-1"
                    >
                      Request Service <i className="bi bi-arrow-right"></i>
                    </button>
                    <span className="text-muted small">Avinz Pro</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY CHOOSE OUR SERVICES (Blue Highlight Section)
          ==================================================================== */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #07102c 0%, #0f2468 100%)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge badge-white">WHY CHOOSE US</span>
            <h2 className="display-6 fw-bold text-white mb-2">
              Why Choose Our <span className="text-info">Services?</span>
            </h2>
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            {whyChooseServices.map((item, idx) => (
              <div key={idx} className="col-md-4 col-lg">
                <div className="p-4 rounded-4 text-center h-100 text-white" style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div className="d-inline-flex p-3 rounded-circle bg-white text-primary mb-3 shadow">
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <h6 className="fw-bold mb-2 text-white">{item.title}</h6>
                  <p className="small text-white-50 mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          OUR WORK PROCESS (5 Steps Horizontal Timeline matching Image 4)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">OUR PROCESS</span>
            <h2 className="display-6 fw-bold mb-2">
              Our Work <span className="text-gradient-blue">Process</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              A simple and effective process to deliver the best results.
            </p>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-4 position-relative">
            {WORK_PROCESS.map((step, idx) => (
              <div key={step.step} className="col-lg col-md-4 col-sm-6">
                <div className="process-step-item">
                  <div className="process-step-circle">
                    {step.step}
                  </div>
                  <h5 className="process-step-title">{step.title}</h5>
                  <p className="process-step-desc">{step.desc}</p>
                  {idx < WORK_PROCESS.length - 1 && <div className="process-arrow"></div>}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Strip */}
          <div className="mt-5 pt-3">
            <StatsBanner customStats={serviceStats} />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        badge="GET STARTED TODAY"
        title="Ready to Start Your Project?"
        subtitle="Let's bring your ideas to life with creativity, technology and the right strategy."
        primaryBtnText="Get a Free Quote"
        onPrimaryClick={() => onOpenGetStarted('quote')}
        secondaryBtnText="Talk to Us"
        secondaryBtnLink="/contact"
      />
    </>
  );
};

export default Services;
