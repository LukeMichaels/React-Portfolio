// src/components/ProjectModal.jsx
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


export default function ProjectModal({
  project,
  projects = [],
  onClose,
  onSelectProject,
}) {
  // Hooks must always be called in the same order, every render
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const hasProject = !!project;

  // Safe index logic even when project is null
  const currentIndex = hasProject
    ? projects.findIndex((p) => p.id === project.id)
    : -1;

  const hasProjectList =
    hasProject && projects.length > 0 && currentIndex !== -1;

  useEffect(() => {
    if (!hasProject) return;

    // Save the element that had focus before the modal opened
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // Move focus into the dialog
    const dialogEl = dialogRef.current;
    if (dialogEl) {
      dialogEl.focus();
    }

    // Restore focus when modal closes / project changes to null
    return () => {
      if (
        previouslyFocusedRef.current &&
        typeof previouslyFocusedRef.current.focus === "function"
      ) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [hasProject, project]);

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

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  // Only now do we conditionally render nothing
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        className="modal-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
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
              <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
              <span className="modal-nav-text">Prev</span>
            </button>
          
            <button
              type="button"
              className="modal-nav-button"
              onClick={handleNext}
              aria-label="View next project"
              disabled={!hasProjectList}
            >
              <span className="modal-nav-text">Next</span>
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </button>
          
            <button
              className="modal-close"
              type="button"
              onClick={onClose}
              aria-label="Close project details"
            >
              <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
            </button>
          </div>{/* modal-nav */}
        </header>

        <div className="project-modal-body">
          {project.images && project.images.length > 0 && (
            <div className="project-modal-images">
              {project.images.map((image, index) => (
                <div className="project-modal-image" key={index}>
                  <img src={image.src} alt={image.alt || project.title} />
                </div>
              ))}
            </div>
          )}
          <div className="project-modal-information">
            <h2 className="project-modal-title">{project.title}</h2>
            {project.link && (
              <p className="project-modal-link">
                <strong>Link: </strong>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </p>
            )}
            {/*
            <p className="project-modal-meta">
              <span>{project.category}</span>
              {project.year && (
                <>
                  {" "}
                  · <span>{project.year}</span>
                </>
              )}
            </p>
            */}
            <p className="project-modal-role">
              <strong>Role: </strong>
              {project.role}
            </p>
            <p className="project-modal-tools">
              <strong>Tools: </strong>
              {project.tools.join(", ")}
            </p>
            <p className="project-modal-summary">{project.summary}</p>
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
          </div>{/* project-modal-information */}
        </div>{/* project-modal-body */}
      </div>{/* modal-dialog */}
    </div>
  );
}
