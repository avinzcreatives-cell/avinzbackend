import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CourseModal from '../components/Modals/CourseModal';
import { COURSES_PAGE_DATA, COURSES_ADVANTAGES } from '../data/websiteData';

export const Courses = ({ onOpenGetStarted }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courseStats = [
    { id: "students", value: "100+", label: "Students Trained", icon: "bi-mortarboard-fill" },
    { id: "courses", value: "20+", label: "Courses Available", icon: "bi-journal-bookmark-fill" },
    { id: "projects", value: "50+", label: "Projects Completed", icon: "bi-briefcase-fill" },
    { id: "placement", value: "95%", label: "Placement Rate", icon: "bi-emoji-smile-fill" }
  ];

  return (
    <>
      <SEO
        title="Courses | Learn. Build. Grow. Your Future Starts Here."
        description="Industry-focused training programs in UI/UX Design, MERN Stack, Full Stack Development, Data Analytics, Machine Learning, DevOps, and Digital Marketing at Avinz Creatives."
      />

      {/* ====================================================================
          1. COURSES HERO SECTION (Exact Match to Image)
          ==================================================================== */}
      <section className="hero-wrapper bg-white" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <span className="section-badge mb-3">OUR COURSES</span>

              <h1 className="hero-title fw-bold mb-3" style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.3rem)', lineHeight: 1.18, color: '#09132e' }}>
                Learn. Build. Grow.<br />
                <span style={{ color: '#2563eb' }}>Your Future Starts Here.</span>
              </h1>

              <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px' }}>
                Industry-focused training programs designed to build practical skills and help you get job-ready. Learn from experts, work on real-world projects, and grow your career with confidence.
              </p>

              {/* 3 Icon Feature Blocks in clean horizontal row */}
              <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4 pt-2">
                <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary flex-shrink-0" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.86rem' }}>Expert Trainers</h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.74rem', lineHeight: 1.3 }}>Learn from industry professionals.</small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary flex-shrink-0" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-puzzle-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.86rem' }}>Hands-on Learning</h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.74rem', lineHeight: 1.3 }}>Practical projects for real-world experience.</small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2" style={{ minWidth: '150px' }}>
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary flex-shrink-0" style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="bi bi-person-check-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '0.86rem' }}>Placement Support</h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.74rem', lineHeight: 1.3 }}>Resume, interview & placement assistance.</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Laptop + Floating Badge) */}
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden shadow-lg border">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                    alt="Avinz Training - Upgrade Your Skills, Shape Your Future"
                    className="w-100 h-100 object-fit-cover"
                    style={{ minHeight: '360px', maxHeight: '400px' }}
                  />
                </div>

                {/* Floating Glass Pill Badge (100+ Students Trained) */}
                <div 
                  className="position-absolute bottom-0 start-0 m-3 p-3 rounded-4 shadow-lg d-flex align-items-center gap-3 bg-white"
                  style={{ 
                    border: '1px solid #e2e8f0',
                    maxWidth: '260px'
                  }}
                >
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-people-fill fs-5"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.2rem', lineHeight: 1 }}>100+</h5>
                    <span className="text-muted fw-semibold" style={{ fontSize: '0.78rem' }}>Students Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. EXPLORE OUR TRAINING PROGRAMS (8 Course Cards in 4x2 Grid)
          ==================================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="text-center mb-5">
            <span className="section-badge">OUR COURSES</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              Explore Our <span style={{ color: '#2563eb' }}>Training Programs</span>
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              Choose a course and start learning in-demand skills today.
            </p>
          </div>

          <div className="row g-4">
            {COURSES_PAGE_DATA.map((course) => (
              <div key={course.id} className="col-lg-3 col-md-6 d-flex">
                <div 
                  className="avinz-card p-4 w-100 d-flex flex-column justify-content-between rounded-4 shadow-sm border bg-white"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  {/* Top section: Icon, Title, Description, Checklist */}
                  <div className="d-flex flex-column flex-grow-1">
                    {/* Icon */}
                    <div 
                      className="card-icon-wrapper mb-3"
                      style={{ backgroundColor: course.iconBg, color: course.iconColor, width: '46px', height: '46px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}
                    >
                      <i className={`bi ${course.icon}`}></i>
                    </div>

                    <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.12rem', minHeight: '28px' }}>
                      {course.title}
                    </h5>

                    <p className="text-secondary small mb-3" style={{ fontSize: '0.84rem', lineHeight: 1.5, minHeight: '38px' }}>
                      {course.desc}
                    </p>

                    {/* Checklist with uniform heights */}
                    <ul className="list-unstyled p-0 mb-4 flex-grow-1">
                      {course.items.map((item, idx) => (
                        <li key={idx} className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: '0.84rem', color: '#475569' }}>
                          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0" style={{ width: '16px', height: '16px', fontSize: '10px' }}>
                            <i className="bi bi-check-lg"></i>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom section: Duration/Level Meta bar & Button */}
                  <div className="pt-3 border-top mt-auto">
                    <div className="d-flex align-items-center justify-content-between text-muted small mb-3 pb-1" style={{ fontSize: '0.78rem' }}>
                      <span><i className="bi bi-clock me-1 text-primary"></i> {course.duration}</span>
                      <span><i className="bi bi-mortarboard me-1 text-primary"></i> {course.level}</span>
                    </div>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="btn btn-link text-primary fw-bold p-0 text-decoration-none d-flex align-items-center gap-1"
                      style={{ fontSize: '0.88rem' }}
                    >
                      View Details <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. WHY LEARN WITH US (The Advantage - 5 Cards in Equal Row)
          ==================================================================== */}
      <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="section-badge">WHY LEARN WITH US?</span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: '#09132e' }}>
              The <span style={{ color: '#2563eb' }}>Avinz Advantage</span>
            </h2>
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            {COURSES_ADVANTAGES.map((item, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg d-flex">
                <div 
                  className="p-4 rounded-4 border bg-white text-center w-100 d-flex flex-column align-items-center justify-content-start shadow-sm"
                  style={{ borderColor: '#e2e8f0', minHeight: '180px' }}
                >
                  <div 
                    className="rounded-circle bg-primary-subtle text-primary mb-3 d-flex align-items-center justify-content-center"
                    style={{ width: '44px', height: '44px', fontSize: '1.2rem', flexShrink: 0 }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.92rem' }}>{item.title}</h6>
                  <p className="text-muted small mb-0" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Royal Blue Stats Banner */}
          <div className="mt-5 pt-3">
            <div className="avinz-stats-banner">
              <div className="row text-center align-items-center g-3">
                {courseStats.map((item, index) => (
                  <div key={item.id} className={`col-6 col-md-3 ${index < courseStats.length - 1 ? 'stats-divider' : ''}`}>
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
          5. READY TO UPGRADE YOUR SKILLS? (CTA Banner)
          ==================================================================== */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="rounded-4 p-4 p-md-5 border shadow-sm" style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}>
            <div className="row align-items-center g-4">
              {/* Left Student Image */}
              <div className="col-lg-4 text-center text-lg-start">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                  alt="Avinz Academy Student"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
              </div>

              {/* Right Content */}
              <div className="col-lg-8">
                <h2 className="fw-bold mb-2" style={{ color: '#09132e', fontSize: 'clamp(1.6rem, 3vw, 2.3rem)' }}>
                  Ready to <span style={{ color: '#2563eb' }}>Upgrade</span> Your Skills?
                </h2>
                <p className="text-secondary mb-4" style={{ fontSize: '0.98rem', maxWidth: '580px', lineHeight: 1.6 }}>
                  Join our industry-focused training programs and take the next step towards a successful career.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenGetStarted('enroll')}
                    className="btn btn-avinz-primary px-4 py-2 fw-semibold"
                    style={{ borderRadius: '50px' }}
                  >
                    Explore Courses <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                  <Link
                    to="/contact"
                    className="btn btn-avinz-outline px-4 py-2 fw-semibold"
                    style={{ borderRadius: '50px' }}
                  >
                    Talk to Advisor <i className="bi bi-chat-dots ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnrollClick={(title) => onOpenGetStarted('enroll', title)}
        />
      )}
    </>
  );
};

export default Courses;
