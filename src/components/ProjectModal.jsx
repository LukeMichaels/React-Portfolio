// src/components/ProjectModal.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
  const touchStartRef = useRef(null);
  const touchLastRef = useRef(null);

  const [announcement, setAnnouncement] = useState("");

  const hasProject = !!project;

  const currentIndex = hasProject
    ? projects.findIndex((p) => p.id === project.id)
    : -1;

  const summaryId = hasProject ? "project-modal-summary" : undefined;
  const titleId = hasProject ? "project-modal-title" : undefined;

  const hasProjectList =
    hasProject && projects.length > 1 && currentIndex !== -1;

  useLayoutEffect(() => {
    if (!hasProject) return;

    const dialogEl = dialogRef.current;
    if (dialogEl && !dialogEl.open) {
      dialogEl.showModal();
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
      if (dialogEl && dialogEl.open) {
        dialogEl.close();
      }

      document.body.style.position = originalBodyStyle.position;
      document.body.style.top = originalBodyStyle.top;
      document.body.style.overflowY = originalBodyStyle.overflowY;
      document.body.style.width = originalBodyStyle.width;

      window.scrollTo(0, scrollY);

      setAnnouncement("");
    };
  }, [hasProject]);

  function scrollModalToTop() {
    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    dialogEl.scrollTop = 0;
    if (typeof dialogEl.scrollTo === "function") {
      dialogEl.scrollTo({ top: 0, left: 0 });
    }
  }

  useEffect(() => {
    if (hasProject) {
      scrollModalToTop();
    }
  }, [project?.id, hasProject]);

  useEffect(() => {
    const el = modalBodyRef.current;
    if (!el) return;

    function onTouchMove(e) {
      if (!touchStartRef.current) return;

      const touch = e.touches[0];
      const point = { x: touch.clientX, y: touch.clientY };
      touchLastRef.current = point;

      const dx = point.x - touchStartRef.current.x;
      const dy = point.y - touchStartRef.current.y;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        e.preventDefault();
      }
    }

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  function goToOffset(offset) {
    if (!hasProjectList) return;
    const nextIndex =
      (currentIndex + offset + projects.length) % projects.length;
    const nextProject = projects[nextIndex];
    if (nextProject && onSelectProject) {
      scrollModalToTop();
      onSelectProject(nextProject);
      setAnnouncement(
        `${nextProject.title}, project ${nextIndex + 1} of ${projects.length}`
      );
    }
  }

  function handlePrev() {
    goToOffset(-1);
  }

  function handleNext() {
    goToOffset(1);
  }

  function handleCancel(e) {
    e.preventDefault();
    onClose();
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") {
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

  const SWIPE_THRESHOLD = 50;

  function handleTouchStart(e) {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    const point = { x: touch.clientX, y: touch.clientY };
    touchStartRef.current = point;
    touchLastRef.current = point;
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

  return (
    <dialog
      className="modal-backdrop"
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={summaryId}
      onClick={handleBackdropClick}
      onCancel={handleCancel}
      onKeyDown={handleKeyDown} >

      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>

      {hasProject && (
        <div className="modal-dialog">
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
            onTouchEnd={handleTouchEnd} >
            {project.video && (
              <div className="project-modal-images">
                <div className="project-modal-video">
                  <iframe
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

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
              {project.year && (
                <p className="project-modal-year">
                  <strong>Year: </strong>
                  {project.year}
                </p>
              )}
              <p className="project-modal-summary" id={summaryId}>
                {project.summary}
              </p>
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
      )}
    </dialog>
  );
}
