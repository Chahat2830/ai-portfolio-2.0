import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">

      {/* Project Image */}
      <div className="project-img-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">

        {/* Header */}
        <div className="project-card-header">

          <div>
            <span className="project-tag">
              {project.category}
            </span>

            <h4 className="project-title">
              {project.title}
            </h4>
          </div>

        </div>

        {/* Short Description */}
        <p className="project-desc">
          {project.description}
        </p>

        {/* Project Highlights */}
        {project.highlights?.length > 0 && (
          <div
            style={{
              marginBottom: '18px'
            }}
          >
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Key Highlights
            </div>

            <ul
              style={{
                margin: 0,
                paddingLeft: '18px',
                color: '#94a3b8',
                fontSize: '0.8rem',
                lineHeight: '1.6'
              }}
            >
              {project.highlights.map((highlight, index) => (
                <li key={index}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        {project.technologies?.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '7px',
              marginBottom: '20px'
            }}
          >
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#cbd5e1',
                  fontSize: '0.7rem',
                  padding: '5px 9px',
                  borderRadius: '7px'
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        {(project.github || project.demo) && (
          <div className="project-links">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-action-link"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>

                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="project-action-link"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}

          </div>
        )}

      </div>
    </article>
  );
};

export default ProjectCard;