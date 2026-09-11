import React from 'react';
import {
  Code2,
  Brain,
  Layers3,
  ScanFace,
  Sparkles,
  MessageSquareText,
  Rocket,
  BarChart3,
  Wrench
} from 'lucide-react';

const skillsData = [
  {
    title: 'Programming',
    icon: <Code2 size={10} />,
    skills: ['Python', 'SQL', 'JavaScript']
  },
  {
    title: 'Machine Learning',
    icon: <Brain size={20} />,
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Classification',
      'Regression',
      'Feature Engineering',
      'Model Evaluation',
      'Hyperparameter Tuning'
    ]
  },
  {
    title: 'Deep Learning',
    icon: <Layers3 size={20} />,
    skills: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Artificial Neural Networks',
      'Convolutional Neural Networks',
      'Transfer Learning',
      'ConvNeXtV2'
    ]
  },
  {
    title: 'Computer Vision',
    icon: <ScanFace size={20} />,
    skills: [
      'OpenCV',
      'MediaPipe',
      'YOLO',
      'Face Detection',
      'Facial Emotion Recognition',
      'Image Classification',
      'Pose Detection',
      'Image Preprocessing'
    ]
  },
  {
    title: 'Generative AI',
    icon: <Sparkles size={20} />,
    skills: [
      'Gemini API',
      'Groq API',
      'Prompt Engineering',
      'Generative AI Application Development'
    ]
  },
  {
    title: 'Natural Language Processing',
    icon: <MessageSquareText size={20} />,
    skills: [
      'Text Preprocessing',
      'Tokenization',
      'Feature Extraction',
      'Text Classification'
    ]
  },
  {
    title: 'Model Deployment',
    icon: <Rocket size={20} />,
    skills: [
      'ONNX Runtime',
      'Streamlit',
      'Real-Time Inference'
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <BarChart3 size={20} />,
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Data Visualization',
      'Dashboard Development'
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    skills: [
      'Git',
      'GitHub',
      'Jupyter Notebook',
      'VS Code',
      'Kaggle'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ marginBottom: '80px' }}>

      <div className="section-tag">
        TECHNICAL SKILLS
      </div>

      <div className="skills-grid">

        {skillsData.map((category, index) => (
          <div
            key={index}
            className="card-dark skill-item"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >

            {/* Category Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span className="skill-icon">
                {category.icon}
              </span>

              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0
                }}
              >
                {category.title}
              </h3>
            </div>

            {/* Skill Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    lineHeight: '1.2'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;