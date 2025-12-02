// src/components/ProjectCard.jsx
export default function ProjectCard({ project, onClick }) {
  const thumb1x = project.thumbnail;
  const thumb2x = project.thumbnail2x;
  const summary = project.shortSummary || project.summary || "";

  const categoryLabel = Array.isArray(project.categories)
    ? project.categories.join(", ")
    : project.categories || project.category;

  const thumbAlignmentClass =
    project.thumbnailAlignment === "bottom"
      ? "project-card-image--bottom"
      : "project-card-image--top";

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onClick(project)} >
      {thumb1x && (
        <div className={`project-card-image ${thumbAlignmentClass}`}>
          <img
            src={thumb1x}
            srcSet={thumb2x ? `${thumb1x} 1x, ${thumb2x} 2x` : undefined}
            alt={project.thumbnailAlt || project.title}
            loading="lazy" />
        </div>
      )}
      <div className="project-card-body">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          {/* <span className="project-badge">{categoryLabel}</span> */}
        </div>
        <p className="project-summary">{summary}</p>
      </div>
    </button>
  );
}
