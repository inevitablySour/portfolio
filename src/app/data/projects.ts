export interface ProjectLinks {
  live?: string;
  github?: string;
  npm?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  tags: string[];
  image: string;
  gallery?: string[];
  featured: boolean;
  links: ProjectLinks;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'asl-translator',
    title: 'ASL Translator',
    description:
      'A real-time American Sign Language recognition system that translates static ASL hand gestures (letters A–H) into text using computer vision and machine learning. Built as a microservices architecture with a FastAPI backend, RabbitMQ message broker, PostgreSQL database, and a Streamlit web interface. Features a continuous learning pipeline that automatically retrains the Random Forest model when enough user feedback is collected. Deployed on a Linux VM via GitHub Actions CI/CD with a self-hosted runner, served through Cloudflare Tunnel to a custom domain.',
    shortDescription: 'Real-time ASL gesture recognition with continuous learning',
    category: 'AI/ML',
    tags: ['Python', 'FastAPI', 'Docker', 'MediaPipe', 'Scikit-learn', 'PostgreSQL', 'RabbitMQ', 'Streamlit', 'GitHub Actions'],
    image: 'projects/asl-translator.jpg',
    featured: true,
    links: {
      github: 'https://github.com/inevitablySour/ASL-Translator',
    },
    year: 2025,
  },
  {
    id: 'pes-id-app',
    title: 'PES Membership System',
    description:
      'A full membership management system built for the Political Economic Society (PES) at Maastricht University. Features a multi-step signup form, automated welcome and acceptance emails via Mailjet, digital ID cards with generated QR codes (ReportLab PDFs), an admin dashboard for managing members and pending registrations, Google Drive integration for CV uploads, two-way Google Sheets sync for registration tracking, Cloudinary for profile photo hosting, audit logging, and email blocklist management. Built with Flask and PostgreSQL, deployed on Render and used daily by the PES board to onboard new members.',
    shortDescription: 'Membership management with QR ID cards and automated emails',
    category: 'Web App',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Mailjet', 'Cloudinary', 'Google APIs', 'QR Code', 'ReportLab', 'Bootstrap'],
    image: 'projects/pes/pes-signup-form.png',
    gallery: [
      'projects/pes/pes-signup-form.png',
      'projects/pes/pes-admin-dashboard.png',
      'projects/pes/pes-pending-registrations.png',
      'projects/pes/pes-admin-settings.png',
      'projects/pes/pes-admin-login.png',
    ],
    featured: true,
    links: {
      live: 'https://pes-id-app.onrender.com',
    },
    year: 2025,
  },
  {
    id: 'cmas-jdm',
    title: 'CMAS Motion Tracking System',
    description:
      'A cross-platform desktop application that automates the Children\'s Myositis Assessment Scale (CMAS) scoring for children with Juvenile Dermatomyositis (JDM), enabling remote motor function assessment without a doctor present. The system runs patients through 14 standardised physical exercises via webcam using real-time pose estimation powered by MediaPipe and OpenCV through a Python Flask server, while a Java Swing GUI displays live video feedback, animated instructions, and countdown timers. Each exercise—head lifts, leg raises, sit-ups, arm raises, floor manoeuvres, and more—is scored automatically by analysing joint positions, movement duration, and range of motion from the pose landmark data. Includes a doctor dashboard with patient search, lab result tracking, medication group management, and interactive JFreeChart trend visualisation of CMAS scores over time. Built as a group project of four, where I was responsible for the computer vision and pose estimation pipeline and hardcoding all 14 exercise detection algorithms and guided lessons into the patient GUI.',
    shortDescription: 'AI-powered physiotherapy exercise assessment for children with JDM',
    category: 'AI/ML',
    tags: ['Java', 'Python', 'Flask', 'MediaPipe', 'OpenCV', 'MySQL', 'Swing', 'JFreeChart', 'Maven'],
    image: 'projects/cmas/cmas-test-dashboard.png',
    gallery: [
      'projects/cmas/cmas-test-dashboard.png',
      'projects/cmas/cmas-results-doctor.png',
      'projects/cmas/cmas-score-progress.png',
      'projects/cmas/cmas-assign-patient.png',
      'projects/cmas/cmas-register-measurement.png',
      'projects/cmas/cmas-login.png',
    ],
    featured: true,
    links: {
      github: 'https://github.com/inevitablySour/cmas-jdm',
    },
    year: 2025,
  },
  {
    id: 'cycling-ml',
    title: 'Cycling Performance Predictor',
    description:
      'A machine learning system built for CAICLE, a fictional investment firm seeking to recruit professional cyclists for a competitive super team. The project predicts whether a rider will finish in the top 10 of a race using binary classification on 225,000+ historical race results and 1,042 rider profiles from ProCyclingStats. Following the CRISP-DM methodology, the pipeline covers data extraction from SQLite, extensive cleaning and feature engineering (rider skill scores, rolling performance metrics, age-at-race, race tier weighting), temporal train/test splitting to prevent data leakage, SMOTE for class imbalance, and feature selection via mutual information. Models trained include Logistic Regression, Random Forest, Gradient Boosting, XGBoost, LightGBM, and a voting ensemble, all with GridSearchCV hyperparameter tuning and threshold optimisation targeting >75% precision. Includes a versioned model run system, a leakage validation suite, an interactive CLI pipeline controller, and a Streamlit dashboard with Plotly visualisations for comparing model performance, confusion matrices, and feature importance. Built as a group of four with a structured task management system.',
    shortDescription: 'ML pipeline predicting top-10 cycling race finishers for team recruitment',
    category: 'AI/ML',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Pandas', 'Streamlit', 'Plotly', 'SMOTE', 'SQLite'],
    image: 'projects/cycling-ml.jpg',
    featured: true,
    links: {},
    year: 2025,
  },
];

export const categories = ['All', 'AI/ML', 'Web App'];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((p) => p.category === category);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
