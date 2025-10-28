
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Moje Projekty
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;