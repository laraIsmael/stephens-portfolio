import { useState } from "react";
import { ProjectModal, ProjectThumbnailCard } from "../components/ProjectCard";
import {
  workProjects,
  personalProjects,
  type Project,
} from "../assets/ProjectContent";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Professional (Work) Projects */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          Professional Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          {workProjects.map((proj, idx) => (
            <div key={idx} onClick={() => setSelectedProject(proj)}>
              <ProjectThumbnailCard
                imgSrc={proj.photos[0]}
                title={proj.title}
                company={proj.subtitle || ""}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Independent / Personal Projects */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
          Independent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8">
          {personalProjects.map((proj, idx) => (
            <div key={idx} onClick={() => setSelectedProject(proj)}>
              <ProjectThumbnailCard
                imgSrc={proj.photos[0]}
                title={proj.title}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
