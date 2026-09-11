import React from 'react';
import {
  Award,
  BookOpen,
  ExternalLink,
  Brain,
  BarChart3
} from 'lucide-react';

const certifications = [
  {
    title: 'NIELIT A Level',
    issuer: 'National Institute of Electronics & Information Technology',
    category: 'Advanced Information Technology'
  },
  {
    title: 'Machine Learning Certification',
    issuer: 'Professional Training',
    category: 'Machine Learning'
  },
  {
    title: 'Python Programming',
    issuer: 'Professional Training',
    category: 'Programming'
  },
  {
    title: 'Artificial Intelligence',
    issuer: 'Professional Training',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Artificial Intelligence Bootcamp',
    issuer: 'Professional Training',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Cloud Computing',
    issuer: 'Professional Training',
    category: 'Cloud Computing'
  },
  {
    title: 'Internet of Things (IoT)',
    issuer: 'Professional Training',
    category: 'IoT'
  },
  {
    title: 'Web Development',
    issuer: 'Professional Training',
    category: 'Web Development'
  },
  {
    title: 'Computer Vision',
    issuer: 'Kaggle',
    category: 'Computer Vision'
  },
  {
    title: 'Introduction to Deep Learning',
    issuer: 'Kaggle',
    category: 'Deep Learning'
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Kaggle',
    category: 'SQL'
  },
  {
    title: 'Time Series',
    issuer: 'Kaggle',
    category: 'Data Science'
  }
];

const researchData = [
  {
    title: 'Explainable Imbalance-Aware Facial Emotion Recognition',
    role: 'First Author',
    organization: 'NIELIT, Delhi',
    status: 'Manuscript in preparation',

    description:
      'Developed an imbalance-aware facial emotion recognition framework using ConvNeXtV2-Tiny, transfer learning, self-supervised FCMAE pretraining, Class-Weighted Focal Loss, and Grad-CAM interpretability.',

    highlights: [
      'ConvNeXtV2-Tiny based facial emotion recognition',
      'Transfer learning and self-supervised FCMAE pretraining',
      'Class-Weighted Focal Loss for severe class imbalance',
      'Macro-F1 score of 0.94 across emotion classes',
      '0.91 F1-score for the Fear class',
      'Grad-CAM based model interpretability',
      'Compared against DenseNet121 and EfficientNetV2'
    ],

    technologies: [
      'PyTorch',
      'ConvNeXtV2',
      'Transfer Learning',
      'FCMAE',
      'Focal Loss',
      'Grad-CAM',
      'Computer Vision'
    ]
  }
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      style={{ marginBottom: '80px' }}
    >

      {/* Section Heading */}
      <div className="section-tag">
        RESEARCH & CERTIFICATIONS
      </div>

      {/* Research Section */}
      <div
        className="card-dark"
        style={{
          padding: '28px 30px',
          marginBottom: '32px'
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}
        >
          <BookOpen
            size={20}
            className="meta-icon"
          />

          <h3
            style={{
              color: '#ffffff',
              fontSize: '1.15rem',
              fontWeight: 700,
              margin: 0
            }}
          >
            Research Work
          </h3>
        </div>

        {researchData.map((research, index) => (
          <div key={index}>

            {/* Research Title */}
            <h4
              style={{
                color: '#ffffff',
                fontSize: '1.15rem',
                fontWeight: 700,
                lineHeight: '1.4',
                marginBottom: '8px'
              }}
            >
              {research.title}
            </h4>

            {/* Research Metadata */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '16px'
              }}
            >

              <span
                style={{
                  color: '#60a5fa',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}
              >
                {research.role}
              </span>

              <span
                style={{
                  color: '#64748b'
                }}
              >
                •
              </span>

              <span
                style={{
                  color: '#94a3b8',
                  fontSize: '0.8rem'
                }}
              >
                {research.organization}
              </span>

              <span
                style={{
                  color: '#64748b'
                }}
              >
                •
              </span>

              <span
                style={{
                  color: '#94a3b8',
                  fontSize: '0.8rem'
                }}
              >
                {research.status}
              </span>

            </div>

            {/* Research Description */}
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.9rem',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}
            >
              {research.description}
            </p>

            {/* Research Highlights */}
            <div style={{ marginBottom: '22px' }}>

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
                Research Highlights
              </div>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  lineHeight: '1.7'
                }}
              >
                {research.highlights.map(
                  (highlight, highlightIndex) => (
                    <li key={highlightIndex}>
                      {highlight}
                    </li>
                  )
                )}
              </ul>

            </div>

            {/* Research Technologies */}
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
                Research Stack
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                {research.technologies.map(
                  (technology, technologyIndex) => (
                    <span
                      key={technologyIndex}
                      style={{
                        background:
                          'rgba(255, 255, 255, 0.05)',
                        border:
                          '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        fontSize: '0.72rem',
                        padding: '5px 10px',
                        borderRadius: '7px'
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

      {/* Certifications */}
      <div
        className="card-dark"
        style={{
          padding: '28px 30px'
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}
        >
          <Award
            size={20}
            className="meta-icon"
          />

          <h3
            style={{
              color: '#ffffff',
              fontSize: '1.15rem',
              fontWeight: 700,
              margin: 0
            }}
          >
            Certifications & Training
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '14px'
          }}
        >

          {certifications.map((certificate, index) => (
            <div
              key={index}
              style={{
                padding: '18px',
                border:
                  '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                background:
                  'rgba(255,255,255,0.025)'
              }}
            >

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >

                <Award
                  size={17}
                  style={{
                    color: '#818cf8',
                    marginTop: '2px',
                    flexShrink: 0
                  }}
                />

                <div>

                  <h5
                    style={{
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      lineHeight: '1.4',
                      margin: '0 0 6px 0'
                    }}
                  >
                    {certificate.title}
                  </h5>

                  <p
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.75rem',
                      lineHeight: '1.5',
                      margin: '0 0 5px 0'
                    }}
                  >
                    {certificate.issuer}
                  </p>

                  <span
                    style={{
                      color: '#60a5fa',
                      fontSize: '0.7rem',
                      fontWeight: 500
                    }}
                  >
                    {certificate.category}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;