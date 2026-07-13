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
      'A cross-platform desktop application that automates the Children\'s Myositis Assessment Scale (CMAS) scoring for children with Juvenile Dermatomyositis (JDM), enabling remote motor function assessment without a doctor present. The system runs patients through 14 standardised physical exercises via webcam using real-time pose estimation powered by MediaPipe and OpenCV through a Python Flask server, while a Java Swing GUI displays live video feedback, animated instructions, and countdown timers. Each exercise (head lifts, leg raises, sit-ups, arm raises, floor manoeuvres, and more) is scored automatically by analysing joint positions, movement duration, and range of motion from the pose landmark data. Includes a doctor dashboard with patient search, lab result tracking, medication group management, and interactive JFreeChart trend visualisation of CMAS scores over time. Built as a group project of four, where I was responsible for the computer vision and pose estimation pipeline and hardcoding all 14 exercise detection algorithms and guided lessons into the patient GUI.',
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
  {
    id: 'festi-flow',
    title: 'Festi-Flow: Festival Safety & Capacity Planning',
    description:
      'A multi-objective simulation model for festival crowd management, built for an Operations Research course around a Lowlands 2026 scenario. A Monte Carlo simulation engine models zone capacities, arrival/departure profiles, weather effects, and gate/turnstile throughput, then evaluates alternative configurations across safety, cost, and evacuation-time objectives over 50-replication runs. Cost parameters are grounded in real Dutch CAO Veiligheidsdomein 2025-2027 rates and NL festival industry data, with exit-width estimation following SGSA guidance. Includes an interactive Panel dashboard (Overview, Crowd Flow, Monte Carlo, Planning, Optimise, and Settings tabs) for configuring ticket tiers, venue zones, camping, gate lanes, performance schedules, and weather timelines, with a "Find Best Configuration" sweep across evacuation times, stage counts, and zone layouts within a given budget.',
    shortDescription: 'Monte Carlo simulation and dashboard for festival crowd safety planning',
    category: 'AI/ML',
    tags: ['Python', 'Monte Carlo Simulation', 'Panel', 'Pandas', 'NumPy', 'Plotly', 'Operations Research'],
    image: 'projects/or-project/festi-flow-overview.png',
    gallery: [
      'projects/or-project/festi-flow-overview.png',
      'projects/or-project/festi-flow-crowd-flow.png',
      'projects/or-project/festi-flow-monte-carlo.png',
      'projects/or-project/festi-flow-planning.png',
      'projects/or-project/festi-flow-settings.png',
    ],
    featured: true,
    links: {
      github: 'https://github.com/inevitablySour/OR-Project',
    },
    year: 2025,
  },
  {
    id: 'infinite-tic-tac-toe-ai',
    title: 'Infinite Tic-Tac-Toe AI',
    description:
      'A competitive game-playing agent for infinite tic-tac-toe (6-in-a-row on an unbounded grid), built for an Intelligent Search course tournament. The primary agent uses iterative-deepening Negamax with alpha-beta pruning, enhanced with incremental sliding-window evaluation, Principal Variation Search, double-threat (fork) detection, a Zobrist-hashed transposition table, and move ordering via killer moves and threat scoring, all under strict per-move time management. A secondary Monte Carlo Tree Search agent was built to compare search strategies against the alpha-beta approach and the tournament server AI. Evaluation weights were tuned with a parallel hill-climbing optimizer that plays mutant configurations against the current best across all CPU cores, with full game logging to SQLite and a plotting pipeline for win-rate, search-depth, and performance analysis.',
    shortDescription: 'Alpha-beta and MCTS agents competing in an infinite tic-tac-toe tournament',
    category: 'AI/ML',
    tags: ['Python', 'Alpha-Beta Pruning', 'MCTS', 'Search Algorithms', 'SQLite', 'Matplotlib', 'Multiprocessing'],
    image: 'projects/is-assignment/01_outcomes_pie.png',
    gallery: [
      'projects/is-assignment/01_outcomes_pie.png',
      'projects/is-assignment/09_cumulative_win_rate.png',
      'projects/is-assignment/04_avg_nodes_per_game.png',
      'projects/is-assignment/05_depth_distribution.png',
    ],
    featured: false,
    links: {
      github: 'https://github.com/inevitablySour/IS-Assignment',
    },
    year: 2026,
  },
  {
    id: 'clip-cifar10-probing',
    title: 'CLIP Zero-Shot & Probing on CIFAR-10',
    description:
      'A deep learning coursework project comparing four classification strategies on top of a frozen CLIP ViT-H-14 vision-language backbone (pretrained on LAION-2B): standard zero-shot classification, ensemble-templated zero-shot classification (15 text prompt templates), a linear probe, and an MLP probe. Image and text embeddings are extracted and L2-normalized for cosine-similarity classification, while the linear and MLP probes are trained on frozen embeddings with grid search over learning rate, weight decay, hidden dimension, and dropout, validated on a held-out split. Results are compared across recall, F1, precision, and accuracy, with a UMAP projection visualizing how CLIP organizes CIFAR-10 classes in embedding space.',
    shortDescription: 'Comparing zero-shot, ensemble, linear probe, and MLP probe classification on frozen CLIP embeddings',
    category: 'AI/ML',
    tags: ['Python', 'PyTorch', 'CLIP', 'open_clip', 'Scikit-learn', 'UMAP', 'Jupyter'],
    image: 'projects/dl-resit/umap_embeddings.png',
    gallery: [
      'projects/dl-resit/umap_embeddings.png',
      'projects/dl-resit/summary_table.png',
      'projects/dl-resit/cm_linear_probe.png',
      'projects/dl-resit/cm_mlp_probe.png',
      'projects/dl-resit/cm_ensemble_zero_shot.png',
      'projects/dl-resit/cm_standard_zero_shot.png',
    ],
    featured: false,
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
