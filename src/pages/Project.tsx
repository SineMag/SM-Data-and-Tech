import React from "react";
import { companyProfile } from "../data/company";

const projectArchive = [
  {
    name: "OWAMI",
    status: "BUILDING",
    type: "AI-powered cooking ecosystem",
    summary:
      "A personal product direction focused on personalised cooking, ingredient-aware recommendations, food image understanding, voice interaction, and an AI-assisted kitchen experience.",
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "AI", "Voice"],
    accent: "orange",
  },
  {
    name: "SYNCLET",
    status: "PROTOTYPE",
    type: "Connected safety & response",
    summary:
      "A concept exploring connected devices, rapid response logic, anomaly detection, emergency escalation, and location-aware safety workflows.",
    stack: ["IoT", "AI", "Cloud", "UX", "Prototype"],
    accent: "gold",
  },
  {
    name: "NALIMA",
    status: "CONCEPT",
    type: "AI for agriculture",
    summary:
      "An agri-tech exploration around crop and soil image assessment, readiness guidance, and data-informed decision support for farming contexts.",
    stack: ["AI", "Computer Vision", "Agriculture", "Data"],
    accent: "earth",
  },
  {
    name: "NALA9",
    status: "EXPERIMENT",
    type: "Voice-first desktop assistant",
    summary:
      "An exploration into voice-driven developer workflows, desktop automation, and reducing friction for repetitive tasks through natural commands.",
    stack: ["Voice AI", "Developer Tools", "Automation", "Product"],
    accent: "charcoal",
  },
  {
    name: "Q-Health Care & Triage",
    status: "PROTOTYPE",
    type: "AI-assisted care triage concept",
    summary:
      "A software prototype exploring AI-assisted patient triage workflows, record summarisation and structured care-response support in a healthcare context.",
    stack: ["React", "Node.js", "Python", "AI", "Healthcare"],
    accent: "slate",
  },
];

const Project: React.FC = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-section">
        <div className="section-header">
          <h2>Case studies</h2>
          <p>Selected product work across AI, software, data and rapid prototyping.</p>
        </div>

        <div className="project-grid">
          {projectArchive.map((project) => (
            <article key={project.name} className={`project-card accent-${project.accent}`}>
              <div className="project-card-header">
                <div>
                  <span className="project-code">{project.name}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="status-label">{project.status}</span>
              </div>

              <p className="feature-subtitle">{project.type}</p>
              <p>{project.summary}</p>

              <div className="project-meta-row">
                {project.stack.map((item) => (
                  <span key={`${project.name}-${item}`} className="meta-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-visual" />
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <a
            href={companyProfile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="primary-btn"
          >
            VIEW GITHUB
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;
