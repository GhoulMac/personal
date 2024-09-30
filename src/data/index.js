import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hello",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "MLOps Enginner",
    company_name: "DHL IT Services",
    date: "2024 - Present",
    details: [
      "Developed and optimized Kubernetes/Kubeflow workflows." ,
      "Demonstrated proficiency in AKS and GCP cloud platforms through tool creation and project deployment.Enhanced team efficiency by streamlining processes with custom-built internal tools and forms for Kubernetes and Kubeflow.",
      "Created Multiple RAG piplines and Data Pipelines using Langchain and OpenAI.",
    ],
  },
  {
    title: "Software Engineer (Part-time)",
    company_name: "L&T Technology Services",
    date: "2023 - 2024",
    details: [
      "Engineered and fine-tuned predictive machine learning algorithms, enhancing model accuracy to 90% and reducing forecast errors by 35%, which resulted in a 15% improvement in decision-making processes.",
      "Implemented and fine-tuned machine learning models for accurate predictions.",
      "Successfully deployed the application, positively impacting energy savings and operational efficiency."
    ],
  },
  {
    title: "Research Intern",
    company_name: "VIT Center of Cyber Physical Systems",
    date: "2023 - 2024",
    details: [
      'Contributed to ongoing research with potential applications in security, surveillance, and search and rescue.',
      'Innovated and tested algorithms for object classification based on micro-doppler signatures from UAV propellers boosted identification precision by 30% and optimized real-time processing efficiency by 25%.',
      'Gained hands-on experience and strengthened skills in cutting-edge technology.',
    ],
  },
];

const portfolio = [
  {
    name: "MLOps for High-Frequency Trading",
    description:
      "Built a sophisticated AI model, achieving 70% accuracy in predicting price movements. Integrated the model into a Flask-based API, processing 500 alerts per minute with a 82% success rate in executing trades.Optimized system for 100 millisecond latency and 99.99% uptime using Kubernetes. Implemented GitOps, reducing deployment time by 50% and increasing deployment frequency by 75%.Built a robust API handling 1000 requests per second with 99.99% uptime. Integrated with TradingView for real-time signal processing, it reduces trade execution latency by 5%. Deployed the system on a scalable Kubernetes architecture with 10 pods and 3 replicas, achieving 75% resource utilization.",
    image: oscs,
  },
  {
    name: "Credit Scoring using Reinforcement Learning",
    description:
      "Developed a cutting-edge reinforcement learning model utilizing TensorFlow and Keras to optimize the acceptance threshold in credit scoring, leading to a 15% increase in loan approval rates and a 10% reduction in default risks.Utilized Python and Gym to create a realistic custom environment for simulating the credit scoring process, facilitating interaction with the Deep Q-Network (DQN) agent.Conducted thorough experimentation and analysis of results to validate the performance of the reinforcement learning model, showcasing a 20% improvement over traditional threshold optimization methods",
    image: devnotes,
  },
  {
    name: "PolyShare",
    description:
      "Introducing a revolutionary social media platform that leverages blockchain technology to redefine user engagement and rewards. By integrating blockchain, this platform empowers users and creators alike with transparent, secure, and rewarding interactions. Through smart contracts, we ensure fair and efficient transactions, while our user-friendly JavaScript frontend delivers a seamless experience.",
    image: algorithms,
  },
];

export { experiences, portfolio };

