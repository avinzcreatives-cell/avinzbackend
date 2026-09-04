import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export const Testimonials = ({ onOpenGetStarted }) => {
  const [activeStudentIndex, setActiveStudentIndex] = useState(0);

  const studentReviews = [
    {
      id: 1,
      name: "Priyadharshini",
      role: "UI/UX Designer",
      company: "Placed at TechNova",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      quote: "The UI/UX Design course was fantastic! The projects helped me build a strong portfolio and land my dream job.",
      rating: 5
    },
    {
      id: 2,
      name: "Karthik Raj",
      role: "Full Stack Developer",
      company: "Placed at WebCraft",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote: "MERN Stack course is very well structured. The mentorship and real-world projects gave me hands-on experience.",
      rating: 5
    },
    {
      id: 3,
      name: "Swetha R",
      role: "Data Analyst",
      company: "Placed at InnoData",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      quote: "I learned Data Analytics from scratch and now I'm working as a Data Analyst. Thank you Avinz Creatives!",
      rating: 5
    },
    {
      id: 4,
      name: "Vignesh K",
      role: "DevOps Engineer",
      company: "Placed at CloudNet",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "Great place to learn and grow. The trainers are supportive and the content is industry-relevant.",
      rating: 5
    }
  ];

  const clientReviews = [
    {
      id: 1,
      name: "Arun Kumar",
      role: "Founder, HomeSpot",
      logoName: "HomeSpot",
      icon: "bi-house-door-fill",
      quote: "Avinz Creatives designed our website beautifully. They understood our requirements perfectly and delivered beyond our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Nandhini Priya",
      role: "Marketing Head, Natura Organics",
      logoName: "NATURA",
      icon: "bi-flower1",
      quote: "The team is very professional and responsive. Our brand identity and website turned out amazing!",
      rating: 5
    },
    {
      id: 3,
      name: "Suresh Babu",
      role: "CEO, ShopEase",
      logoName: "SHOP EASE",
      icon: "bi-bag-check-fill",
      quote: "Excellent work on our e-commerce website. Great communication and on-time delivery.",
      rating: 5
    }
  ];

  const hiringPartners = [
    { name: "TechNova", icon: "bi-cpu" },
    { name: "WebCraft", icon: "bi-code-slash" },
    { name: "InnoData", icon: "bi-database-check" },
    { name: "CloudNet", icon: "bi-cloud" },
    { name: "GrowthHack", icon: "bi-graph-up-arrow" },
    { name: "PixelWorks", icon: "bi-palette" }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Priyadharshini",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Karthik Raj",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Swetha R",
      role: "Data Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <>
      <SEO
        title="Testimonials | Real People. Real Stories. Real Success."
        description="Read real reviews and success stories from students and clients who built high-impact careers and products with Avinz Creatives."
      />

      {/* ====================================================================
          1. TESTIMONIALS HERO (Exact Match to Image 3)
          ==================================================================== */}
      <section className="hero-wrapper bg-white" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <span className="section-badge mb-3">TESTIMONIALS</span>

              <h1 className="hero-title fw-bold mb-2" style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.3rem)', lineHeight: 1.18, color: '#09132e' }}>
                Real People. Real Stories.<br />
                <span style={{ color: '#2563eb' }}>Real Success.</span>
              </h1>

              <div style={{ width: '45px', height: '3.5px', background: '#2563eb', borderRadius: '2px', margin: '14px 0 20px' }}></div>

              <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '520px' }}>
                We take pride in the trust and appreciation we receive from our students and clients. Their success is our motivation.
              </p>

              {/* 3 Feature Pills */}
              <div className="d-flex flex-wrap gap-2 pt-2">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-light border rounded-pill small fw-semibold text-dark">
                  <i className="bi bi-shield-check text-primary"></i>
                  <span>Trusted by Students & Professionals</span>
                </div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-light border rounded-pill small fw-semibold text-dark">
                  <i className="bi bi-star-fill text-warning"></i>
                  <span>Quality Training & Support</span>
                </div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 bg-light border rounded-pill small fw-semibold text-dark">
                  <i className="bi bi-heart-fill text-danger"></i>
                  <span>Results That Speak for Themselves</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Monitor with Testimonial Quote) */}
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-lg border">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                  alt="Avinz Creatives Reviews & Success"
                  className="w-100 h-100 object-fit-cover"
                  style={{ minHeight: '360px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. WHITE METRIC STRIP (100+ Students | 50+ Projects | 4.9/5 Rating | 200+ Testimonials)
          ==================================================================== */}
      <section className="py-4 bg-white border-top border-bottom">
        <div className="container">
          <div className="row text-center align-items-center g-3">
            <div className="col-6 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="p-3 rounded-circle bg-primary-subtle text-primary fs-4">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="text-start">
                  <h4 className="fw-bold mb-0 text-dark">100+</h4>
                  <small className="text-muted">Happy Students</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="p-3 rounded-circle bg-primary-subtle text-primary fs-4">
                  <i className="bi bi-briefcase-fill"></i>
                </div>
                <div className="text-start">
                  <h4 className="fw-bold mb-0 text-dark">50+</h4>
                  <small className="text-muted">Projects Completed</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3 border-end-md">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="p-3 rounded-circle bg-warning-subtle text-warning fs-4">
                  <i className="bi bi-star-fill"></i>
                </div>
                <div className="text-start">
                  <h4 className="fw-bold mb-0 text-dark">4.9/5</h4>
                  <small className="text-muted">Average Rating</small>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div className="p-3 rounded-circle bg-primary-subtle text-primary fs-4">
                  <i className="bi bi-chat-square-quote-fill"></i>
                </div>
                <div className="text-start">
                  <h4 className="fw-bold mb-0 text-dark">200+</h4>
                  <small className="text-muted">Testimonials</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHAT OUR STUDENTS SAY (4 Student Cards matching Image 3)
          ==================================================================== */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="section-badge mb-2">STUDENT REVIEWS</span>
              <h2 className="display-6 fw-bold mb-1" style={{ color: '#09132e' }}>
                What Our <span style={{ color: '#2563eb' }}>Students</span> Say
              </h2>
              <p className="text-muted mb-0 small">Success stories from our amazing learners who achieved their career goals.</p>
            </div>

            {/* Navigation Arrows */}
            <div className="d-flex gap-2 mt-3 mt-md-0">
              <button 
                className="btn btn-light rounded-circle border shadow-sm"
                onClick={() => setActiveStudentIndex(Math.max(0, activeStudentIndex - 1))}
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <button 
                className="btn btn-primary rounded-circle shadow-sm"
                onClick={() => setActiveStudentIndex((activeStudentIndex + 1) % studentReviews.length)}
                style={{ width: '40px', height: '40px' }}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="row g-4">
            {studentReviews.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-6 d-flex">
                <div className="p-4 rounded-4 border bg-white shadow-sm w-100 d-flex flex-column justify-content-between" style={{ borderColor: '#e2e8f0', minHeight: '290px' }}>
                  <div>
                    {/* Blue quote mark */}
                    <div className="d-inline-flex p-2 rounded-2 bg-primary-subtle text-primary mb-3">
                      <i className="bi bi-quote fs-5"></i>
                    </div>

                    <p className="text-secondary small mb-3" style={{ fontSize: '0.86rem', lineHeight: 1.6 }}>
                      {item.quote}
                    </p>

                    <div className="text-warning mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                      {"★".repeat(item.rating)}
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 pt-3 border-top">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="rounded-circle"
                      style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                      <small className="text-muted d-block" style={{ fontSize: '0.74rem' }}>{item.role}</small>
                      <span className="badge bg-light text-primary border" style={{ fontSize: '0.68rem' }}>{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. WHAT OUR CLIENTS SAY (3 Client Review Cards matching Image 3)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="section-badge">CLIENT REVIEWS</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              What Our <span style={{ color: '#2563eb' }}>Clients</span> Say
            </h2>
            <p className="text-muted small mb-0">We build long-term relationships with our clients through quality and trust.</p>
          </div>

          <div className="row g-4">
            {clientReviews.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex">
                <div className="p-4 rounded-4 border bg-white shadow-sm w-100 d-flex flex-column justify-content-between" style={{ borderColor: '#e2e8f0', minHeight: '260px' }}>
                  <div>
                    <div className="d-inline-flex p-2 rounded-2 bg-primary-subtle text-primary mb-3">
                      <i className="bi bi-quote fs-5"></i>
                    </div>

                    <p className="text-secondary small mb-3" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.quote}
                    </p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                    <div className="d-flex align-items-center gap-2">
                      <div className="p-2 rounded-3 bg-light border text-primary" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.9rem' }}>{item.name}</h6>
                        <small className="text-muted" style={{ fontSize: '0.76rem' }}>{item.role}</small>
                      </div>
                    </div>
                    <div className="text-warning small">
                      {"★".repeat(item.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring / Placement Partners Logo Strip */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 mt-5 pt-3">
            {hiringPartners.map((partner) => (
              <div 
                key={partner.name}
                className="px-4 py-2 rounded-pill bg-light border d-flex align-items-center gap-2 text-secondary fw-semibold small shadow-sm"
              >
                <i className={`bi ${partner.icon} text-primary`}></i>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. SUCCESS IN THEIR WORDS (Video Testimonials)
          ==================================================================== */}
      <section className="py-5" style={{ background: '#09132e' }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-4 text-white">
              <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.6rem' }}>
                Success in Their Words
              </h3>
              <p className="text-white-50 small mb-4" style={{ lineHeight: 1.6 }}>
                Watch our students and clients share their experiences.
              </p>
              <button 
                onClick={() => onOpenGetStarted('enroll')}
                className="btn btn-outline-light rounded-pill px-4 py-2 small fw-semibold"
              >
                Watch More Videos <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                {videoTestimonials.map((vid) => (
                  <div key={vid.id} className="col-4">
                    <div className="rounded-4 overflow-hidden position-relative shadow-lg border border-secondary border-opacity-25 bg-dark">
                      <img 
                        src={vid.image} 
                        alt={vid.name} 
                        className="w-100"
                        style={{ height: '160px', objectFit: 'cover', opacity: 0.8 }}
                      />
                      {/* Play Button Overlay */}
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="p-3 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow" style={{ width: '44px', height: '44px' }}>
                          <i className="bi bi-play-fill fs-5"></i>
                        </div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 w-100 p-2 text-center text-white" style={{ background: 'rgba(0,0,0,0.6)', fontSize: '0.75rem' }}>
                        <span className="fw-bold d-block text-truncate">{vid.name}</span>
                        <span className="text-white-50">{vid.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. YOUR SUCCESS STORY COULD BE NEXT! (CTA Banner with Trophy)
          ==================================================================== */}
      <section className="py-4 bg-white">
        <div className="container">
          <div 
            className="rounded-4 p-4 p-md-5 text-white position-relative overflow-hidden shadow-lg"
            style={{ background: 'linear-gradient(135deg, #091747 0%, #102a83 50%, #1e40af 100%)' }}
          >
            <div className="row align-items-center g-4">
              {/* Left Trophy Illustration */}
              <div className="col-lg-2 d-none d-lg-block text-center fs-1">
                🏆
              </div>

              {/* Middle Content */}
              <div className="col-lg-7">
                <h2 className="text-white fw-bold mb-2" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.02em' }}>
                  Your Success Story Could Be Next!
                </h2>
                <p className="text-white-50 mb-0" style={{ fontSize: '0.98rem' }}>
                  Join thousands of students and happy clients who achieved their goals with Avinz Creatives.
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="col-lg-3 d-flex flex-wrap gap-2 justify-content-lg-end">
                <button
                  onClick={() => onOpenGetStarted('enroll')}
                  className="btn btn-avinz-white"
                >
                  Explore Courses <i className="bi bi-arrow-right ms-1"></i>
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
    </>
  );
};

export default Testimonials;
