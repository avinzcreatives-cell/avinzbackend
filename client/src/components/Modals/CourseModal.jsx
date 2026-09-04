import React from 'react';

export const CourseModal = ({ course, onClose, onEnrollClick }) => {
  if (!course) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(7, 13, 30, 0.75)', backdropFilter: 'blur(6px)', zIndex: 1060 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modal-content-avinz border-0 shadow-lg overflow-hidden">
          <div className="modal-header bg-primary text-white p-4">
            <div>
              <span className="badge bg-white text-primary fw-bold mb-2">{course.badge || 'Professional Course'}</span>
              <h3 className="modal-title fw-bold text-white mb-1">{course.title}</h3>
              <div className="d-flex flex-wrap gap-3 small text-white-50 mt-2">
                <span><i className="bi bi-clock me-1"></i> {course.duration}</span>
                <span><i className="bi bi-bar-chart me-1"></i> {course.level}</span>
                <span><i className="bi bi-geo-alt me-1"></i> {course.mode}</span>
                <span><i className="bi bi-star-fill text-warning me-1"></i> {course.rating} / 5.0</span>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4 p-md-5">
            <h5 className="fw-bold text-dark mb-2">Course Overview</h5>
            <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
              {course.desc}
            </p>

            <h5 className="fw-bold text-dark mb-3">Comprehensive Curriculum Modules:</h5>
            <div className="row g-3 mb-4">
              {course.topics?.map((topic, idx) => (
                <div key={idx} className="col-md-6">
                  <div className="p-3 bg-light rounded-3 border d-flex align-items-start gap-2 h-100">
                    <span className="badge rounded-circle bg-primary text-white p-1 mt-1">
                      <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="fw-semibold text-dark small">{topic}</span>
                  </div>
                </div>
              ))}
            </div>

            <h6 className="fw-bold text-dark mb-2">Tools & Technologies Covered:</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {course.tools?.map((tool, idx) => (
                <span key={idx} className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 fw-semibold">
                  <i className="bi bi-code-slash me-1"></i> {tool}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top">
              <span className="text-success fw-semibold small">
                <i className="bi bi-award-fill me-1"></i> Verified Certificate & 100% Placement Support
              </span>
              <div className="d-flex gap-2">
                <button onClick={onClose} className="btn btn-light px-4">
                  Close
                </button>
                <button onClick={() => { onClose(); onEnrollClick(course.title); }} className="btn btn-avinz-primary px-4">
                  Apply for Next Batch <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
