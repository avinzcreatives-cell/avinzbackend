import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { sendContactMessage } from '../../services/api';

export const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    services: [],
    courses: [],
    requirement: '',
    contactMethod: 'Phone Call', // 'Phone Call' | 'WhatsApp' | 'Email'
    budget: '',
    startDate: '',
    agreed: false
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const servicesListCol1 = ['Logo Design', 'Brand Identity', 'Graphic Design', 'Social Media Design', 'UI/UX Design'];
  const servicesListCol2 = ['Website Design', 'Website Development', 'Landing Page Design', 'Portfolio Website', 'Business Website'];

  const handleCheckboxChange = (type, item) => {
    setFormData((prev) => {
      const currentList = prev[type];
      const isSelected = currentList.includes(item);
      return {
        ...prev,
        [type]: isSelected ? currentList.filter((i) => i !== item) : [...currentList, item]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }
    if (!formData.agreed) {
      setErrorMsg('Please agree to be contacted regarding your enquiry.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        subject: `[Get Started Enquiry] ${formData.services.join(', ') || 'General'}`,
        message: `City: ${formData.city}\nServices: ${formData.services.join(', ') || 'None'}\nPreferred Contact: ${formData.contactMethod}\nBudget: ${formData.budget || 'N/A'}\nPreferred Date: ${formData.startDate || 'N/A'}\n\nRequirement:\n${formData.requirement}`
      };

      const res = await sendContactMessage(payload);
      if (res.success) {
        setSubmitted(true);
        try {
          confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
        } catch (err) {}
      } else {
        setErrorMsg(res.message || 'Failed to submit inquiry.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Network error, please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  return (
    <div 
      className="modal show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(7, 13, 30, 0.65)', backdropFilter: 'blur(6px)', zIndex: 1060 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl" style={{ maxWidth: '1050px' }}>
        <div className="modal-content border-0 rounded-4 overflow-hidden shadow-2xl position-relative">
          {/* Top-Right Close Button */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 z-3"
            onClick={handleClose}
            aria-label="Close"
          ></button>

          <div className="row g-0">
            {/* Left Sidebar (Exact Match to Image 1) */}
            <div 
              className="col-lg-4 d-flex flex-column justify-content-between p-4 p-md-5 text-dark position-relative"
              style={{ background: 'linear-gradient(180deg, #f0f6ff 0%, #e5f0fe 100%)' }}
            >
              <div>
                {/* Rocket Graphic */}
                <div className="mb-4 text-start">
                  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="46" fill="#ffffff" filter="drop-shadow(0 4px 10px rgba(37,99,235,0.12))"/>
                    {/* Rocket body */}
                    <path d="M50 18 C62 30, 68 50, 62 68 L50 62 L38 68 C32 50, 38 30, 50 18 Z" fill="#2563eb"/>
                    <path d="M50 18 C56 30, 58 50, 50 62 C42 50, 44 30, 50 18 Z" fill="#ffffff"/>
                    <circle cx="50" cy="38" r="5" fill="#2563eb"/>
                    {/* Wings */}
                    <path d="M38 52 L26 62 L34 68 Z" fill="#1d4ed8"/>
                    <path d="M62 52 L74 62 L66 68 Z" fill="#1d4ed8"/>
                    {/* Fire flame */}
                    <path d="M46 66 L50 78 L54 66 Z" fill="#f59e0b"/>
                    <path d="M48 66 L50 74 L52 66 Z" fill="#ef4444"/>
                    {/* Clouds */}
                    <circle cx="34" cy="80" r="8" fill="#e0f2fe"/>
                    <circle cx="66" cy="80" r="8" fill="#e0f2fe"/>
                    <circle cx="50" cy="82" r="10" fill="#dbeafe"/>
                  </svg>
                </div>

                <h2 className="fw-bold mb-2" style={{ color: '#09132e', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                  Let’s Build<br />
                  Something<br />
                  <span style={{ color: '#2563eb' }}>Amazing<br />Together!</span>
                </h2>

                <div style={{ width: '40px', height: '3px', background: '#2563eb', borderRadius: '2px', margin: '14px 0 20px' }}></div>

                <p className="text-secondary small" style={{ lineHeight: 1.7, fontSize: '0.86rem' }}>
                  Whether you’re looking for professional design services or need custom web solutions, we’re here to help you take the next step.
                </p>
              </div>

              {/* Bottom Privacy Security Badge */}
              <div className="pt-4 border-top border-primary-subtle d-flex align-items-start gap-2 text-muted small" style={{ fontSize: '0.78rem' }}>
                <i className="bi bi-shield-check text-primary fs-5 mt-n1"></i>
                <span>Your information is safe with us.<br />We respect your privacy.</span>
              </div>
            </div>

            {/* Right Form Area (Exact Match to Image 1) */}
            <div className="col-lg-8 p-4 p-md-5 bg-white">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle mb-3" style={{ width: '70px', height: '70px', fontSize: '2rem' }}>
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <h3 className="fw-bold text-dark mb-2">Enquiry Received Successfully!</h3>
                  <p className="text-muted mb-4" style={{ maxWidth: '460px', margin: '0 auto' }}>
                    Thank you for reaching out to Avinz Creatives. Our team has received your details and will get back to you shortly.
                  </p>
                  <button onClick={handleClose} className="btn btn-avinz-primary px-4">
                    Done <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <h3 className="fw-bold text-dark mb-1" style={{ fontSize: '1.55rem' }}>Get Started</h3>
                    <p className="text-muted small mb-0">Fill in your details and we’ll get back to you shortly.</p>
                  </div>

                  {errorMsg && (
                    <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">
                      <i className="bi bi-exclamation-triangle-fill me-2"></i> {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Row 1: Full Name & Email Address */}
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Full Name *</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted"><i className="bi bi-person"></i></span>
                          <input
                            type="text"
                            required
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            style={{ fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Email Address *</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted"><i className="bi bi-envelope"></i></span>
                          <input
                            type="email"
                            required
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={{ fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number & City */}
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Phone Number *</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted"><i className="bi bi-telephone"></i></span>
                          <input
                            type="tel"
                            required
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={{ fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>City *</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted"><i className="bi bi-geo-alt"></i></span>
                          <input
                            type="text"
                            required
                            className="form-control border-start-0 ps-0"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            style={{ fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: I'm Interested In * (Two Distinct Checkbox Cards) */}
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-secondary mb-2" style={{ fontSize: '0.8rem' }}>I'm Interested In *</label>
                      <div className="row g-3">
                        {/* Services Card */}
                        <div className="col-md-6">
                          <div className="p-3 rounded-3 border bg-white h-100 shadow-2xs" style={{ borderColor: '#e2e8f0' }}>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <span className="badge bg-primary rounded-circle p-1" style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="bi bi-briefcase-fill text-white" style={{ fontSize: '11px' }}></i>
                              </span>
                              <span className="fw-bold text-dark small" style={{ fontSize: '0.85rem' }}>Services</span>
                            </div>
                            <div className="row g-1">
                              <div className="col-6">
                                {servicesListCol1.map((srv) => (
                                  <div key={srv} className="form-check small mb-1">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id={`mod-srv-${srv}`}
                                      checked={formData.services.includes(srv)}
                                      onChange={() => handleCheckboxChange('services', srv)}
                                    />
                                    <label className="form-check-label text-secondary" htmlFor={`mod-srv-${srv}`} style={{ fontSize: '0.74rem' }}>
                                      {srv}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className="col-6">
                                {servicesListCol2.map((srv) => (
                                  <div key={srv} className="form-check small mb-1">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id={`mod-srv-${srv}`}
                                      checked={formData.services.includes(srv)}
                                      onChange={() => handleCheckboxChange('services', srv)}
                                    />
                                    <label className="form-check-label text-secondary" htmlFor={`mod-srv-${srv}`} style={{ fontSize: '0.74rem' }}>
                                      {srv}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Row 4: Your Requirement & Preferred Contact Method */}
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Your Requirement *</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted align-items-start pt-2"><i className="bi bi-pencil"></i></span>
                          <textarea
                            rows="2"
                            className="form-control border-start-0 ps-0"
                            placeholder="Tell us about your project or learning goals..."
                            value={formData.requirement}
                            onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                            style={{ fontSize: '0.84rem' }}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Preferred Contact Method *</label>
                        <div className="d-flex gap-2">
                          {['Phone Call', 'WhatsApp', 'Email'].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setFormData({ ...formData, contactMethod: method })}
                              className={`btn btn-sm flex-grow-1 py-2 rounded-3 fw-semibold ${formData.contactMethod === method ? 'btn-primary shadow-sm' : 'btn-light border text-secondary'}`}
                              style={{ fontSize: '0.78rem' }}
                            >
                              {method === 'Phone Call' && <i className="bi bi-telephone me-1"></i>}
                              {method === 'WhatsApp' && <i className="bi bi-whatsapp me-1 text-success"></i>}
                              {method === 'Email' && <i className="bi bi-envelope me-1"></i>}
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Budget (For Services) & Preferred Start Date */}
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Budget (For Services)</label>
                        <select
                          className="form-select small"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          style={{ fontSize: '0.84rem' }}
                        >
                          <option value="">Select your budget</option>
                          <option value="Under ₹25,000">Under ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                          <option value="₹1,00,000+">₹1,00,000+</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label small fw-bold text-secondary mb-1" style={{ fontSize: '0.8rem' }}>Preferred Start Date</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0 text-muted"><i className="bi bi-calendar"></i></span>
                          <input
                            type="date"
                            className="form-control border-start-0 ps-0 small"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            style={{ fontSize: '0.84rem' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 6: Agreement Checkbox */}
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="modalAgreeContact"
                        checked={formData.agreed}
                        onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      />
                      <label className="form-check-label text-secondary small" htmlFor="modalAgreeContact" style={{ fontSize: '0.8rem' }}>
                        I agree to be contacted regarding my enquiry.
                      </label>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="d-flex justify-content-end gap-2">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="btn btn-light px-4 py-2 fw-semibold"
                        style={{ borderRadius: '50px', fontSize: '0.9rem' }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-avinz-primary px-4 py-2"
                        style={{ borderRadius: '50px', fontSize: '0.9rem' }}
                      >
                        {loading ? 'Submitting...' : 'Submit Enquiry'} <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedModal;
