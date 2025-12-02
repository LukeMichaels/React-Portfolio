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
  const dialogRef = useRef(null);
  const modalBodyRef = useRef(null);
  const backdropRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchLastRef = useRef(null);

  const hasProject = !!project;

  const currentIndex = hasProject
    ? projects.findIndex((p) => p.id === project.id)
    : -1;

  const hasProjectList =
    hasProject && projects.length > 0 && currentIndex !== -1;

  useEffect(() => {
    if (!hasProject) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const dialogEl = dialogRef.current;
    if (dialogEl) {
      dialogEl.focus();
    }

    const scrollY = window.scrollY;

    const originalBodyStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      overflowY: document.body.style.overflowY,
      width: document.body.style.width,
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflowY = "scroll";
    document.body.style.width = "100%";

    return () => {
      if (
        previouslyFocusedRef.current &&
        typeof previouslyFocusedRef.current.focus === "function"
      ) {
        previouslyFocusedRef.current.focus();
      }

      document.body.style.position = originalBodyStyle.position;
      document.body.style.top = originalBodyStyle.top;
      document.body.style.overflowY = originalBodyStyle.overflowY;
      document.body.style.width = originalBodyStyle.width;
  
      window.scrollTo(0, scrollY);
    };
  }, [hasProject]);

  function scrollModalToTop() {
    const backdropEl = backdropRef.current;
    if (!backdropEl) return;

    backdropEl.scrollTop = 0;
    if (typeof backdropEl.scrollTo === "function") {
      backdropEl.scrollTo({ top: 0, left: 0 });
    }
  }

  useEffect(() => {
    if (hasProject) {
      scrollModalToTop();
    }
  }, [project?.id, hasProject]);

  function goToOffset(offset) {
    if (!hasProjectList) return;
    const nextIndex =
      (currentIndex + offset + projects.length) % projects.length;
    const nextProject = projects[nextIndex];
    if (nextProject && onSelectProject) {
      scrollModalToTop();
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
    } else if (e.key === "Tab") {
      const dialogEl = dialogRef.current;

      if (!dialogEl) return;

      const focusableElements = Array.from(
        dialogEl.querySelectorAll(
          [
            "a[href]",
            "area[href]",
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'button:not([disabled])',
            "iframe",
            'audio[controls]',
            'video[controls]',
            '[contenteditable]:not([contenteditable="false"])',
            '[tabindex]:not([tabindex="-1"])',
          ].join(",")
        )
      ).filter((el) => el.offsetParent !== null);

      if (focusableElements.length === 0) {
        e.preventDefault();
        dialogEl.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const isShift = e.shiftKey;
      const activeElement = document.activeElement;

      if (!dialogEl.contains(activeElement)) {
        e.preventDefault();
        (isShift ? lastElement : firstElement).focus();
        return;
      }

      if (isShift && activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!isShift && activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const SWIPE_THRESHOLD = 50;

  function handleTouchStart(e) {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    const point = { x: touch.clientX, y: touch.clientY };
    touchStartRef.current = point;
    touchLastRef.current = point;
  }

  function handleTouchMove(e) {
    if (!touchStartRef.current) return;
    const touch = e.touches[0];
    touchLastRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd() {
    if (!touchStartRef.current || !touchLastRef.current) {
      touchStartRef.current = null;
      touchLastRef.current = null;
      return;
    }

    const dx = touchLastRef.current.x - touchStartRef.current.x;
    const dy = touchLastRef.current.y - touchStartRef.current.y;
  
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > SWIPE_THRESHOLD && absDx > absDy) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartRef.current = null;
    touchLastRef.current = null;
  }

  if (!project) return null;

  return (
    <div
      className="modal-backdrop" 
      ref={backdropRef}
      onClick={handleBackdropClick} >
      <div
        className="modal-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown} >
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
              disabled={!hasProjectList} >
              <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
              <span className="modal-nav-text">Prev</span>
            </button>

            <button
              type="button"
              className="modal-nav-button"
              onClick={handleNext}
              aria-label="View next project"
              disabled={!hasProjectList} >
              <span className="modal-nav-text">Next</span>
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </button>

            <button
              className="modal-close"
              type="button"
              onClick={onClose}
              aria-label="Close project details" >
              <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="project-modal-body"
          ref={modalBodyRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd} >
          {project.images && project.images.length > 0 && (
            <div className="project-modal-images">
              {project.images.map((image, index) => {
                const src1x = image.src;
                const src2x = image.src2x;
                return (
                  <div className="project-modal-image" key={index}>
                    <img
                      src={src1x}
                      srcSet={
                        src2x ? `${src1x} 1x, ${src2x} 2x` : undefined
                      }
                      alt={image.alt || project.title}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="project-modal-information">
            <h2 className="project-modal-title" id="project-modal-title">
              {project.title}
            </h2>
            {project.link && (
              <p className="project-modal-link">
                <strong>Link: </strong>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </p>
            )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
