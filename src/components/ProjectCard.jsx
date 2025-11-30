// src/components/ProjectCard.jsx
export default function ProjectCard({ project, onClick }) {
  const thumb1x = project.thumbnail;
  const thumb2x = project.thumbnail2x;
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onClick(project)}
    >
      {thumb1x && (
        <div className="project-card-image">
          <img
            src={thumb1x}
            srcSet={
              thumb2x ? `${thumb1x} 1x, ${thumb2x} 2x` : undefined
            }
            alt={project.thumbnailAlt || project.title}
            loading={
              "lazy"
            }
          />
        </div>
      )}
      <div className="project-card-body">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className="project-badge">{project.category}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
      </div>
    </button>
  );
}
