import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import AvinzLogo from './AvinzLogo';

export const Navbar = ({ onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsNavCollapsed(true);
  }, [location]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top avinz-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand py-0 me-4">
          <AvinzLogo size="md" theme="light" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggler border-0 shadow-none px-2"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="avinzNavContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'} fs-2 text-dark`}></i>
        </button>

        {/* Navigation Links & Action Button */}
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show mt-3 mt-lg-0' : ''}`} id="avinzNavContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/testimonials" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => `nav-link avinz-nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Call to Action Button */}
          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <button
              onClick={onOpenGetStarted}
              className="btn btn-avinz-primary w-100 w-lg-auto text-nowrap"
            >
              Get Started <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
