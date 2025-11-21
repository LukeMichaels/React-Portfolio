// src/components/ProjectModal/ProjectModal.jsx
import { useEffect } from "react";

export default function ProjectModal({
  project,
  projects = [],
  onClose,
  onSelectProject,
}) {
  if (!project) return null;

  // Find current index within the provided projects list
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const hasProjectList = projects.length > 0 && currentIndex !== -1;

  function goToOffset(offset) {
    if (!hasProjectList) return;
    const nextIndex =
      (currentIndex + offset + projects.length) % projects.length;
    const nextProject = projects[nextIndex];
    if (nextProject && onSelectProject) {
      onSelectProject(nextProject);
    }
  }

  function handlePrev() {
    goToOffset(-1);
  }

  function handleNext() {
    goToOffset(1);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, projects.length, onClose]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <header className="modal-header">
          <span className="escape-message" aria-hidden="true">
            Press ESC to close · ← / → to navigate
          </span>

          <div className="modal-nav">
            <button
              type="button"
              className="modal-nav-button"
              onClick={handlePrev}
              aria-label="View previous project"
              disabled={!hasProjectList}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="modal-nav-button"
              onClick={handleNext}
              aria-label="View next project"
              disabled={!hasProjectList}
            >
              Next →
            </button>
            <button
              className="modal-close"
              type="button"
              onClick={onClose}
              aria-label="Close project details"
            >
              ×
            </button>
          </div>
        </header>

        {project.images && project.images.length > 0 && (
          <div className="project-modal-images">
            {project.images.map((image, index) => (
              <div className="project-modal-image" key={index}>
                <img src={image.src} alt={image.alt || project.title} />
              </div>
            ))}
          </div>
        )}

        <h2 id="project-modal-title">{project.title}</h2>

        <p className="project-modal-meta">
          <span>{project.category}</span>
          {project.year && (
            <>
              {" "}
              · <span>{project.year}</span>
            </>
          )}
        </p>

        <p className="project-modal-role">
          <strong>Role: </strong>
          {project.role}
        </p>

        <p className="project-modal-tools">
          <strong>Tools: </strong>
          {project.tools.join(", ")}
        </p>

        <p className="project-modal-summary">{project.summary}</p>

        {project.link && (
          <p className="project-modal-link">
            <strong>Link: </strong>
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.link}
            </a>
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="project-modal-highlights">
            <h3>Highlights</h3>
            <ul>
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
