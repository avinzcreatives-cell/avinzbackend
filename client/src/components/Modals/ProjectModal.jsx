import React from 'react';

export const ProjectModal = ({ project, onClose, onHireClick }) => {
  if (!project) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(7, 13, 30, 0.75)', backdropFilter: 'blur(6px)', zIndex: 1060 }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modal-content-avinz border-0 shadow-lg overflow-hidden">
          <div className="position-relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-100"
              style={{ maxHeight: '380px', objectFit: 'cover' }}
            />
            <button
              type="button"
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3 p-2 bg-dark bg-opacity-50 rounded-circle"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(11, 23, 57, 0.95) 100%)' }}>
              <span className="badge bg-primary px-3 py-1 mb-2">{project.category}</span>
              <h3 className="text-white fw-bold mb-1">{project.title}</h3>
              <p className="text-white-50 mb-0 small">Client: {project.client}</p>
            </div>
          </div>

          <div className="modal-body p-4 p-md-5">
            <h5 className="fw-bold text-dark mb-2">Project Overview</h5>
            <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
              {project.desc}
            </p>

            <h6 className="fw-bold text-dark mb-3">Key Technologies & Scope:</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tag, idx) => (
                <span key={idx} className="badge bg-light text-dark border px-3 py-2 fw-semibold">
                  <i className="bi bi-tag-fill text-primary me-1"></i> {tag}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top">
              <span className="text-muted small">
                <i className="bi bi-shield-check text-success me-1"></i> Verified Commercial Deliverable
              </span>
              <div className="d-flex gap-2">
                <button onClick={onClose} className="btn btn-light px-4">
                  Close
                </button>
                <button onClick={() => { onClose(); onHireClick(project.title); }} className="btn btn-avinz-primary px-4">
                  Request Similar Project <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
