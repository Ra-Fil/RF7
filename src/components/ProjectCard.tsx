import React from 'react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gradient-to-r from-border-color to-border-color p-px rounded-lg hover:from-accent-start hover:to-accent-end transition-all duration-300 h-full">
      <div className="bg-secondary rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent mb-2">{project.title}</h3>
          <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-border-color text-text-primary text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center space-x-4">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label={`GitHub repozitář projektu ${project.title}`}>
                <GithubIcon className="w-6 h-6" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label={`Živá ukázka projektu ${project.title}`}>
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;