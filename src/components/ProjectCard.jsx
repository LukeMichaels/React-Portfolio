// src/components/ProjectCard.jsx
export default function ProjectCard({ project, onClick }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onClick(project)}
    >
      {project.thumbnail && (
        <div className="project-card-image">
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt || project.title}
            loading="lazy"
          />
        </div>
      )}
      <div className="project-card-body">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className="project-badge">{project.category}</span>
        </div>
        <p className="project-summary">{project.summary}</p>
        {/* <p className="project-meta">
          <span>{project.role}</span>
        </p> */}
      </div>{/* project-card-body */}
    </button>
  );
}
