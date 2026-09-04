import React from 'react';
import { Link } from 'react-router-dom';
import AvinzLogo from './AvinzLogo';
import { COMPANY_INFO } from '../data/websiteData';

export const Footer = () => {
  return (
    <footer className="avinz-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Column 1: Brand & Bio */}
          <div className="col-lg-4 col-md-12">
            <Link to="/" className="d-inline-block mb-3 text-decoration-none">
              <AvinzLogo size="md" theme="dark" />
            </Link>
            <p className="pe-lg-4 text-secondary mb-4" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
              {COMPANY_INFO.shortDesc}
            </p>
            {/* Social Links */}
            <div className="d-flex align-items-center mb-4">
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links-list">
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Website Design</Link></li>
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Graphic Design</Link></li>
              <li><Link to="/services">Brand Identity</Link></li>
              <li><Link to="/services">Social Media Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Courses */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Our Courses</h5>
            <ul className="footer-links-list">
              <li><Link to="/courses">UI/UX Design</Link></li>
              <li><Link to="/courses">MERN Stack Development</Link></li>
              <li><Link to="/courses">Full Stack Development</Link></li>
              <li><Link to="/courses">Data Analytics</Link></li>
              <li><Link to="/courses">Machine Learning</Link></li>
              <li><Link to="/courses">DevOps</Link></li>
              <li><Link to="/courses">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="footer-heading">Contact Info</h5>
            <ul className="footer-links-list" style={{ fontSize: '0.88rem' }}>
              <li className="d-flex align-items-start gap-2 mb-3 text-secondary">
                <i className="bi bi-geo-alt-fill text-primary mt-1"></i>
                <span>{COMPANY_INFO.city}</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-telephone-fill text-primary"></i>
                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-envelope-fill text-primary"></i>
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-globe text-primary"></i>
                <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer">{COMPANY_INFO.website}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()} Avinz Creatives. All Rights Reserved.
          </p>
          <div className="d-flex align-items-center gap-3">
            <Link to="/about" className="text-secondary hover-white">Privacy Policy</Link>
            <span className="text-muted">|</span>
            <Link to="/about" className="text-secondary hover-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
