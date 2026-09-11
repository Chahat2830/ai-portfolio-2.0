import React from 'react';
import {
  UserRound,
  MapPin,
  GraduationCap,
  ArrowUpRight,
} from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        marginBottom: '70px',
      }}
    >
      {/* Section Heading */}
      <div className="section-tag">ABOUT ME</div>

      {/* Full Horizontal About Card */}
      <div
        className="card-dark"
        style={{
          padding: '30px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* LEFT — About Content */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px',
              }}
            >
              <span className="skill-icon">
                <UserRound size={20} />
              </span>

              <h3
                style={{
                  margin: 0,
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                Building Intelligent
                <br />
                <span style={{ color: '#60a5fa' }}>
                  Solutions with AI
                </span>
              </h3>
            </div>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.86rem',
                lineHeight: 1.75,
                margin: '0 0 14px',
              }}
            >
              I am an AI/ML Engineer focused on building practical
              intelligent applications using Machine Learning,
              Deep Learning, Computer Vision, and Generative AI.
            </p>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.86rem',
                lineHeight: 1.75,
                margin: '0 0 14px',
              }}
            >
              My work covers the complete AI development lifecycle —
              from data preprocessing and model training to evaluation,
              explainability, real-time inference, and deployment.
            </p>

            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.86rem',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              I have hands-on experience with Python, PyTorch, OpenCV,
              ConvNeXtV2, MediaPipe, ONNX Runtime, Scikit-learn,
              Streamlit, and Generative AI APIs.
            </p>
          </div>

          {/* RIGHT — Profile Information */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Location */}
            <div
              style={{
                padding: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.025)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#60a5fa',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '7px',
                }}
              >
                <MapPin size={15} />
                Location
              </div>

              <div
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.85rem',
                }}
              >
                Delhi, India
              </div>
            </div>

            {/* Qualification */}
            <div
              style={{
                padding: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.025)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#60a5fa',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '7px',
                }}
              >
                <GraduationCap size={15} />
                Qualification
              </div>

              <div
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}
              >
                NIELIT A Level – Advanced Information Technology
              </div>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {/* GitHub */}
              <a
                href="https://github.com/Chahat2830"
                target="_blank"
                rel="noreferrer"
                className="project-action-link"
              >
                <svg
                  width="15"
                  height="15"
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

                <ArrowUpRight size={13} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chahat-kumar-34475231a/"
                target="_blank"
                rel="noreferrer"
                className="project-action-link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>

                LinkedIn

                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;