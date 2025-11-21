// src/pages/Work/Work.jsx
import { useState } from "react";
import { projects, PROJECT_CATEGORIES } from "../../data/Projects.js";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import ProjectModal from "../../components/ProjectModal/ProjectModal.jsx";

const FILTER_OPTIONS = ["All", ...PROJECT_CATEGORIES];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="page page-work">
      <header className="page-header">
        <h1>Selected Work</h1>
        <p className="lead">
          A mix of web builds, client campaigns, and graphic design.
        </p>
      </header>

      <div className="work-filters" aria-label="Filter projects by category">
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeFilter ? "chip chip-active" : "chip"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
}
