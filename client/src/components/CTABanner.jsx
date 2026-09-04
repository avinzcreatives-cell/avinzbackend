import React from 'react';
import { Link } from 'react-router-dom';

export const CTABanner = ({
  badge = "LET'S WORK TOGETHER",
  title = "Ready to Build Your Future?",
  subtitle = "Learn in-demand skills, work on real projects and kick-start your career with the right guidance from industry experts.",
  primaryBtnText = "Explore Courses",
  primaryBtnLink = "/courses",
  secondaryBtnText = "Contact Us",
  secondaryBtnLink = "/contact",
  onPrimaryClick = null,
  onSecondaryClick = null,
  showIllustration = true,
  className = ""
}) => {
  return (
    <section className={`py-4 ${className}`}>
      <div className="container">
        <div className="avinz-cta-banner position-relative">
          <div className="row align-items-center g-4">
            {/* Left/Main Content */}
            <div className={showIllustration ? "col-lg-8" : "col-12 text-center"}>
              {badge && (
                <span className="section-badge badge-white mb-2">
                  <i className="bi bi-stars"></i> {badge}
                </span>
              )}
              <h2 className="text-white fw-bold display-6 mb-3" style={{ letterSpacing: '-0.02em' }}>
                {title}
              </h2>
              <p className="text-white-50 mb-4 pe-lg-5" style={{ fontSize: '1.05rem', maxWidth: '650px', lineHeight: 1.7 }}>
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className={`d-flex flex-wrap gap-3 ${showIllustration ? 'cta-actions' : 'justify-content-center'}`}>
                {onPrimaryClick ? (
                  <button onClick={onPrimaryClick} className="btn btn-avinz-white">
                    {primaryBtnText} <i className="bi bi-arrow-right"></i>
                  </button>
                ) : (
                  <Link to={primaryBtnLink} className="btn btn-avinz-white">
                    {primaryBtnText} <i className="bi bi-arrow-right"></i>
                  </Link>
                )}

                {onSecondaryClick ? (
                  <button onClick={onSecondaryClick} className="btn btn-avinz-outline-white">
                    {secondaryBtnText} <i className="bi bi-chat-dots"></i>
                  </button>
                ) : (
                  <Link to={secondaryBtnLink} className="btn btn-avinz-outline-white">
                    {secondaryBtnText} <i className="bi bi-chat-dots"></i>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Illustration / Visual Graphic */}
            {showIllustration && (
              <div className="col-lg-4 d-none d-lg-block text-center position-relative">
                <div 
                  className="p-3 mx-auto rounded-4 d-inline-block shadow-lg position-relative"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=450&q=80"
                    alt="Avinz Creatives Team & Mentorship"
                    className="img-fluid rounded-3"
                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                  />
                  {/* Floating badge */}
                  <div 
                    className="position-absolute bottom-0 start-0 translate-middle-y bg-white text-dark py-2 px-3 rounded-pill shadow d-flex align-items-center gap-2"
                    style={{ fontSize: '0.8rem', fontWeight: '700', marginLeft: '-15px' }}
                  >
                    <span className="badge rounded-circle bg-success p-1">
                      <i className="bi bi-check-lg text-white"></i>
                    </span>
                    <span>100% Placement Support</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
