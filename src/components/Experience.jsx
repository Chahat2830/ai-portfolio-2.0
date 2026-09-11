import React from 'react';
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Code2,
  Brain,
  Wrench
} from 'lucide-react';

const experiences = [
  {
    role: 'Project Assistant / Teaching Support',
    company: 'NIELIT',
    period: 'Part-Time',
    location: 'Delhi, India',

    description:
      'Supported Artificial Intelligence, Python, Machine Learning, and IT-related academic projects while guiding learners through practical implementation, debugging, and technical problem-solving.',

    responsibilities: [
      {
        icon: <Brain size={16} />,
        text:
          'Assisted learners with Artificial Intelligence, Python, and Machine Learning concepts.'
      },
      {
        icon: <Code2 size={16} />,
        text:
          'Supported practical project implementation, programming tasks, and laboratory sessions.'
      },
      {
        icon: <Wrench size={16} />,
        text:
          'Helped learners with debugging, technical problem-solving, and project development.'
      },
      {
        icon: <GraduationCap size={16} />,
        text:
          'Provided technical support during training activities and assisted with the practical application of programming and AI concepts.'
      }
    ],

    technologies: [
      'Python',
      'Artificial Intelligence',
      'Machine Learning',
      'IT',
      'Programming',
      'Project Support'
    ]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{ marginBottom: '80px' }}
    >

      {/* Section Heading */}
      <div className="section-tag">
        EXPERIENCE
      </div>

      {/* Experience Cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card-dark"
            style={{
              padding: '28px 30px'
            }}
          >

            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '20px'
              }}
            >

              <div>

                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '6px'
                  }}
                >
                  {exp.role}
                </h4>

                <div
                  style={{
                    color: '#60a5fa',
                    fontWeight: 600,
                    fontSize: '0.95rem'
                  }}
                >
                  {exp.company}
                </div>

              </div>

              {/* Experience Metadata */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '14px',
                  color: '#94a3b8',
                  fontSize: '0.8rem'
                }}
              >

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Briefcase size={14} />
                  {exp.period}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <MapPin size={14} />
                  {exp.location}
                </span>

              </div>

            </div>

            {/* Description */}
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                marginBottom: '22px'
              }}
            >
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div
              style={{
                marginBottom: '22px'
              }}
            >

              <div
                style={{
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px'
                }}
              >
                Responsibilities
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '11px'
                }}
              >

                {exp.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <div
                      key={responsibilityIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        lineHeight: '1.6'
                      }}
                    >

                      <span
                        style={{
                          color: '#60a5fa',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      >
                        {responsibility.icon}
                      </span>

                      <span>
                        {responsibility.text}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

            {/* Technologies */}
            <div>

              <div
                style={{
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '10px'
                }}
              >
                Areas & Technologies
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >

                {exp.technologies.map(
                  (technology, technologyIndex) => (
                    <span
                      key={technologyIndex}
                      style={{
                        background:
                          'rgba(255, 255, 255, 0.05)',
                        border:
                          '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        fontSize: '0.75rem',
                        padding: '5px 10px',
                        borderRadius: '8px'
                      }}
                    >
                      {technology}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;