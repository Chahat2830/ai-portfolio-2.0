import React from 'react';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const projectsList = [
  {
    title: 'Real-Time Mood-Based Song Recommendation System',
    category: 'Computer Vision',
    description:
      'A real-time AI system that detects facial emotions and recommends music based on the predicted mood.',
    highlights: [
      'Real-time facial emotion recognition using ConvNeXtV2',
      'Integrated emotion prediction with mood-based music recommendation',
      'Optimized inference using ONNX Runtime',
      'OpenCV-based face detection and image preprocessing',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'ConvNeXtV2',
      'OpenCV',
      'ONNX Runtime',
      'Spotify API',
    ],
    image: './images/projects/facial-recognition.png.png',
    github: '',
    demo: '',
  },

  {
    title: 'AI Fitness Coach',
    category: 'Computer Vision + Generative AI',
    description:
      'An AI-powered fitness application that combines computer vision and Generative AI for body analysis, workout planning, and personalized recommendations.',
    highlights: [
      'Body landmark detection using front, side, and back images',
      'Developed a body-analysis workflow for posture and body proportions',
      'Integrated Gemini AI for personalized workout plans and diet recommendations',
      'Interactive Streamlit interface with analytics and progress tracking',
    ],
    technologies: [
      'Python',
      'MediaPipe',
      'Streamlit',
      'Gemini AI',
      'Computer Vision',
    ],
    image: './images/projects/ai-fitness-coach.png.png',
    github: '',
    demo: '',
  },

  {
    title: 'AI Interview Coach',
    category: 'Generative AI',
    description:
      'An AI-powered interview preparation application designed to provide an interactive workflow for interview practice and AI-assisted feedback.',
    highlights: [
      'Interactive AI-assisted interview practice',
      'Automated feedback workflow',
      'Career-focused Generative AI application',
      'Web-based application interface',
    ],
    technologies: [
      'JavaScript',
      'Generative AI',
      'Web Application',
    ],
    image: '/images/projects/ai-interview-coach.png',
    github: '',
    demo: '',
  },

  {
    title: 'YouTube URL-to-Script Generator',
    category: 'Generative AI',
    description:
      'An AI application that processes YouTube video URLs and generates structured scripts using automated AI-based content processing.',
    highlights: [
      'Processes YouTube video URLs',
      'Automated content processing',
      'AI-generated structured scripts',
      'Designed for content automation workflows',
    ],
    technologies: [
      'Python',
      'Generative AI',
      'AI Application Development',
    ],
    image: './images/projects/Youtube_script_Gen.png',
    github: '',
    demo: '',
  },

  {
    title: 'Laptop Price Prediction System',
    category: 'Machine Learning',
    description:
      'A machine learning regression system for predicting laptop prices from product-related features.',
    highlights: [
      'Performed data preprocessing',
      'Applied feature engineering',
      'Trained and evaluated regression models',
      'Built an interface for real-time price estimation',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Regression',
      'Feature Engineering',
    ],
    image: '/images/projects/laptop-price-prediction.png',
    github: '',
    demo: '',
  },

  {
    title: 'Book Recommendation System',
    category: 'Recommendation Systems',
    description:
      'A recommendation system using content-based and popularity-based approaches to generate personalized book recommendations.',
    highlights: [
      'Implemented content-based recommendation',
      'Implemented popularity-based recommendations',
      'Used similarity-based filtering',
      'Performed dataset processing and feature engineering',
    ],
    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Recommendation Systems',
    ],
    image: './images/projects/book.png',
    github: '',
    demo: '',
  },

  {
    title: 'SMS Spam Detection System',
    category: 'Natural Language Processing',
    description:
      'An end-to-end NLP classification system for detecting whether an SMS message is spam or legitimate.',
    highlights: [
      'Text cleaning and preprocessing',
      'Tokenization and feature extraction',
      'Supervised binary classification',
      'End-to-end NLP pipeline',
    ],
    technologies: [
      'Python',
      'NLP',
      'Scikit-learn',
      'Text Classification',
    ],
    image: './images/projects/SMS Detection.png',
    github: '',
    demo: '',
  },

  {
    title: 'Olympics Analytics Dashboard',
    category: 'Data Analytics',
    description:
      'A data analytics dashboard for exploring historical Olympic performance and identifying country-wise trends and patterns.',
    highlights: [
      'Processed historical Olympic datasets',
      'Generated country-wise performance insights',
      'Created data visualizations',
      'Analyzed historical trends and performance patterns',
    ],
    technologies: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Data Visualization',
    ],
    image: '/images/projects/olympics-dashboard.png',
    github: '',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div
          className="section-tag"
          style={{ margin: 0 }}
        >
          SELECTED PROJECTS
        </div>

        <a
          href="#all-projects"
          className="view-all-link"
        >
          View All Projects
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;