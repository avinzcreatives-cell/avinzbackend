import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StatsBanner from '../components/StatsBanner';
import CTABanner from '../components/CTABanner';
import {
  CORE_SERVICES_SUMMARY,
  PURPOSE_CARDS,
  CORE_VALUES,
  TEAM_MEMBERS
} from '../data/websiteData';

export const About = ({ onOpenGetStarted }) => {
  const whyChooseUsAbout = [
    { title: "Industry Experts", icon: "bi-person-gear" },
    { title: "Custom Solutions", icon: "bi-laptop" },
    { title: "Modern Design", icon: "bi-palette2" },
    { title: "Timely Delivery", icon: "bi-clock-history" },
    { title: "Dedicated Support", icon: "bi-headset" },
    { title: "Affordable Pricing", icon: "bi-tag-fill" }
  ];

  return (
    <>
      <SEO
        title="About Us | Creative Design Agency"
        description="Learn about Avinz Creatives - our mission, vision, core values, expert team, and commitment to empowering businesses through creative design and tech solutions."
      />

      {/* ====================================================================
          ABOUT HERO (Exact match to Image 2 & 5)
          ==================================================================== */}
      <section className="hero-wrapper bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <span className="section-badge">ABOUT US</span>
              <h1 className="hero-title mt-2">
                We Create. We Develop.<br />
                We Innovate. <span className="text-gradient-blue">We Empower.</span>
              </h1>
              <div className="heading-underline"></div>

              <p className="hero-subtitle mb-4">
                We are a creative design agency dedicated to delivering innovative digital solutions that help businesses grow and succeed.
              </p>

              {/* 3 Checkmark Bullet Points */}
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">Creative Solutions for Businesses</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">Innovative & Custom Solutions</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge rounded-circle bg-primary-subtle text-primary p-2">
                    <i className="bi bi-check2-circle fs-6"></i>
                  </span>
                  <span className="fw-semibold text-dark">Real-World Impact & Growth.</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Conference Room with Team & Screen) */}
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden shadow-lg border">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Avinz Creatives Training & Collaboration"
                    className="img-fluid w-100"
                    style={{ minHeight: '380px', objectFit: 'cover' }}
                  />
                </div>

                {/* Floating Glass Badge (Quality Services | Industry-Focused Training) */}
                <div 
                  className="position-absolute bottom-0 start-0 m-4 p-3 bg-white bg-opacity-90 backdrop-blur rounded-4 shadow-lg border d-flex align-items-center gap-3"
                  style={{ maxWidth: '340px' }}
                >
                  <div className="p-2 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-award fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>Quality Services</h6>
                    <span className="text-primary fw-semibold" style={{ fontSize: '0.8rem' }}>Innovative Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT WE DO: 3 Pillars
          ==================================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHAT WE DO</span>
            <h2 className="display-6 fw-bold mb-2">
              Creative <span className="text-gradient-blue">Solutions</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '620px', margin: '0 auto' }}>
              We combine creativity and technology to deliver the best results.
            </p>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-4 justify-content-center">
            {CORE_SERVICES_SUMMARY.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6">
                <div className="avinz-card">
                  <div 
                    className="card-icon-wrapper"
                    style={{ backgroundColor: card.badgeColor, color: card.iconColor }}
                  >
                    <i className={`bi ${card.icon}`}></i>
                  </div>

                  <h4 className="fw-bold mb-2 text-dark">{card.title}</h4>

                  <ul className="feature-check-list">
                    {card.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>

                  <div className="pt-3 border-top mt-auto">
                    <Link to={card.linkUrl} className="fw-bold text-primary d-inline-flex align-items-center gap-2">
                      {card.linkText} <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-5">
            <StatsBanner />
          </div>
        </div>
      </section>

      {/* ====================================================================
          OUR PURPOSE: Mission, Vision, Promise (3 Cards matching Image 2 & 5)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">OUR PURPOSE</span>
            <h2 className="display-6 fw-bold mb-2">
              Guided by <span className="text-gradient-blue">Vision & Impact</span>
            </h2>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-4">
            {PURPOSE_CARDS.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6">
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100 d-flex flex-column">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-subtle text-primary p-3 mb-3" style={{ width: '50px', height: '50px' }}>
                    <i className={`bi ${card.icon} fs-4`}></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-2">{card.title}</h4>
                  <p className="text-muted mb-0" style={{ lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          OUR CORE VALUES: 4 Values from Image 5
          ==================================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">CORE VALUES</span>
            <h2 className="display-6 fw-bold mb-2">
              The Principles That <span className="text-gradient-blue">Drive Us</span>
            </h2>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-4">
            {CORE_VALUES.map((val) => (
              <div key={val.id} className="col-lg-3 col-md-6">
                <div className="p-4 rounded-4 bg-white border h-100 shadow-sm">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white p-3 mb-3" style={{ width: '46px', height: '46px' }}>
                    <i className={`bi ${val.icon}`}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-2">{val.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY CLIENTS CHOOSE US (6 Pill Grid)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">WHY CHOOSE US</span>
            <h2 className="display-6 fw-bold mb-2">
              Why Clients <span className="text-gradient-blue">Choose Us</span>
            </h2>
            <div className="heading-underline center"></div>
          </div>

          <div className="row g-3 g-md-4">
            {whyChooseUsAbout.map((item, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-2">
                <div className="p-3 text-center rounded-4 border bg-light h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3 rounded-circle bg-white text-primary shadow-sm mb-2" style={{ fontSize: '1.25rem' }}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="fw-bold text-dark mb-0 small">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          OUR TEAM: Passionate People. Better Solutions. (Matching Image 2)
          ==================================================================== */}
      <section className="py-5 bg-light">
        <div className="container py-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div>
              <span className="section-badge">OUR TEAM</span>
              <h2 className="display-6 fw-bold mb-2">
                Passionate People. <span className="text-gradient-blue">Better Solutions.</span>
              </h2>
              <p className="text-muted mb-0" style={{ maxWidth: '580px' }}>
                Our team of designers and developers work together to deliver creative solutions.
              </p>
            </div>
            <button onClick={() => onOpenGetStarted('quote')} className="btn btn-avinz-outline mt-3 mt-md-0">
              Join With Us <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div className="row g-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="col-6 col-md-4 col-lg-2">
                <div className="card border-0 rounded-4 overflow-hidden shadow-sm text-center h-100 bg-white">
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-3">
                    <h6 className="fw-bold text-dark mb-1 small">{member.name}</h6>
                    <p className="text-primary fw-semibold mb-1" style={{ fontSize: '0.75rem' }}>{member.role}</p>
                    <span className="badge bg-light text-muted border" style={{ fontSize: '0.7rem' }}>{member.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTABanner
        title="Ready to Build Your Future?"
        subtitle="Get your dream project designed and developed by our experts."
        primaryBtnText="Get a Quote"
        primaryBtnLink="/contact"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="/contact"
      />
    </>
  );
};

export default About;
