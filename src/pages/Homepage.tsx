import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { companyProfile, processSteps, serviceCards } from "../data/company";

const Homepage: React.FC = () => {
  const projectList = [
    { name: "OWAMI", label: "AI-powered cooking ecosystem", status: "BUILDING", accent: "accent-orange" },
    { name: "SYNCLET", label: "Connected safety & response", status: "PROTOTYPE", accent: "accent-gold" },
    { name: "NALIMA", label: "AI for agriculture", status: "CONCEPT", accent: "accent-earth" },
    { name: "NALA9", label: "Voice-first desktop assistant", status: "EXPERIMENT", accent: "accent-charcoal" },
    { name: "Q-Health Care & Triage", label: "AI-assisted care triage prototype", status: "PROTOTYPE", accent: "accent-slate" },
  ];

  const moreBuilds = [
    { name: "Mvelo", detail: "Product concept" },
    { name: "Weather App", detail: "Data + UI" },
    { name: "Job Tracker", detail: "Workflow tool" },
    { name: "Links Vault", detail: "Collector app" },
    { name: "Other experiments", detail: "Fast builds" },
  ];

  const hackendCards = [
    { year: "2026", title: "RevenueCat Shipaton", detail: "Owami", notes: ["Product iteration", "Monetisation thinking", "Prototype growth"] },
    { year: "2026", title: "Amazon Build, Ship, Shape", detail: "OwamiTV", notes: ["Big-screen UX", "Voice interaction", "Hands-free cooking"] },
    { year: "2025", title: "OpenCV AI Competition", detail: "Owami Food Vision", notes: ["Computer vision", "Kitchen recognition", "AI-assisted workflows"] },
    { year: "2025", title: "Nebius × NVIDIA", detail: "Owami AI Engine", notes: ["Model experimentation", "AI infrastructure", "Rapid prototyping"] },
  ];

  return (
    <div className="portfolio-page">
      <div className="construction-banner" role="status" aria-live="polite">
        <span className="construction-pill">Under construction</span>
        <p>Still cooking — more features and updates will be available soon.</p>
      </div>

      <section className="portfolio-hero">
        <div className="hero-copy">
          <p className="portfolio-kicker">{companyProfile.name}</p>
          <h1>SINENHLANHLA<br />MAGUBANE</h1>
          <div className="hero-role">{companyProfile.role}</div>
          <div className="hero-statement">BUILDING SOFTWARE.<br />EXPLORING AI.<br />SHIPPING IDEAS.</div>
          <p className="hero-description">
            I build full-stack applications, AI-powered experiences and data-driven products, turning ideas into working prototypes and continuously exploring new technologies.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">VIEW PROJECTS <HiArrowRight /></a>
            <a href={companyProfile.github} target="_blank" rel="noreferrer noopener" className="secondary-btn">GITHUB</a>
            <Link to="/contact" className="secondary-btn">CONTACT ME</Link>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-card">
              <span className="meta-label">Currently building</span>
              <strong>OWAMI</strong>
            </div>
            <div className="hero-meta-card">
              <span className="meta-label">Exploring</span>
              <strong>AI AGENTS • VOICE • CV • DATA</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-panel">
            <div className="hero-screen">
              <div className="hero-screen-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>HACKEND MODE</strong>
              </div>
              <div className="hero-screen-body">
                <div className="mock-lines">
                  <div className="mock-line" />
                  <div className="mock-line" />
                  <div className="mock-line" />
                  <div className="mock-line" />
                </div>
                <div className="mock-card-grid">
                  <div className="mock-card">
                    <h3>OWAMI</h3>
                    <div className="mock-chip-row">
                      <span className="mock-chip">AI</span>
                      <span className="mock-chip">VOICE</span>
                      <span className="mock-chip">DATA</span>
                    </div>
                  </div>
                  <div className="mock-card">
                    <h3>2026</h3>
                    <div className="mock-chip-row">
                      <span className="mock-chip">BUILD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-orbit" />
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="section-header">
          <h2>Featured builds</h2>
          <p>My product work lives between software, AI and real-world experimentation.</p>
        </div>

        <div className="project-feature">
          <article className="feature-card accent-orange">
            <div className="feature-card_header">
              <span className="project-code">Project_01</span>
              <span className="status-label">BUILDING</span>
            </div>
            <h3>OWAMI</h3>
            <div className="feature-subtitle">AI-powered cooking ecosystem</div>
            <p className="feature-description">
              Owami is the flagship product direction I’m building around personalised cooking, ingredient-aware recipe generation, voice-led interaction, food image understanding and an AI-assisted cooking experience.
            </p>
            <div className="feature-tags">
              <span className="project-tag">React Native</span>
              <span className="project-tag">TypeScript</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">PostgreSQL</span>
              <span className="project-tag">AI</span>
              <span className="project-tag">Voice</span>
            </div>
          </article>

          <div className="project-ecosystem">
            <div className="ecosystem-graphic" aria-label="Owami ecosystem visual">
              <span className="line l1" />
              <span className="line l2" />
              <span className="line l3" />
              <span className="node mobile">Mobile</span>
              <span className="node tv">TV</span>
              <span className="node cook">Cookist Mode</span>
              <span className="node vision">Food Vision</span>
              <span className="node ai">AI</span>
              <span className="node center">OWAMI</span>
            </div>
          </div>
        </div>

        <div className="project-grid">
          {projectList.map((project) => (
            <article key={project.name} className={`project-card ${project.accent}`}>
              <div className="project-card-header">
                <div>
                  <span className="project-code">{project.name}</span>
                  <h3>{project.name}</h3>
                </div>
                <span className="status-label">{project.status}</span>
              </div>
              <p>{project.label}</p>
              <div className="project-meta-row">
                <span className="meta-badge">AI</span>
                <span className="meta-badge">Data</span>
                <span className="meta-badge">Product</span>
              </div>
              <div className="project-visual" />
            </article>
          ))}
        </div>

        <div className="more-builds">
          {moreBuilds.map((item) => (
            <article key={item.name} className="small-build">
              <span className="mini-label">Build</span>
              <h4>{item.name}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="hackend-lab">
        <div className="section-header">
          <h2>Hackend Lab</h2>
          <p>EVERY WEEKEND IS A HACKEND.</p>
        </div>
        <div className="hackend-grid">
          {hackendCards.map((card) => (
            <article key={`${card.title}-${card.year}`} className="hackend-card">
              <span className="mini-label">{card.year}</span>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
              <ul>
                {card.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="what-i-build">
        <div className="section-header">
          <h2>What I build</h2>
          <p>Software that moves from idea to prototype quickly and stays grounded in real user problems.</p>
        </div>

        <div className="stack-panel">
          <div className="stack-block">
            <h3>Software</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="stack-block">
            <h3>Data</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>NumPy</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
              <li>Scikit-learn</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div className="stack-block">
            <h3>AI</h3>
            <ul>
              <li>LLM apps</li>
              <li>AI agents</li>
              <li>Voice</li>
              <li>Computer vision</li>
              <li>GenAI</li>
            </ul>
          </div>
          <div className="stack-block">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Supabase</li>
              <li>Figma</li>
              <li>RevenueCat</li>
            </ul>
          </div>
        </div>

        <div className="project-grid" style={{ marginTop: "1.2rem" }}>
          {serviceCards.map((service) => (
            <article key={service.title} className="project-card accent-orange">
              <div className="project-card-header">
                <div>
                  <span className="project-code">Service</span>
                  <h3>{service.title}</h3>
                </div>
                <span className="status-label">BUILD</span>
              </div>
              <p>{service.description}</p>
              <div className="project-meta-row">
                <span className="meta-badge">Product</span>
                <span className="meta-badge">AI</span>
                <span className="meta-badge">UX</span>
              </div>
              <div className="project-visual" />
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="about">
        <div className="section-header">
          <h2>About</h2>
          <p>I bring both engineering capability and real-world customer experience into product work.</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <p>
              My work sits at the intersection of software development, AI experimentation and product thinking. I’ve built projects across web, mobile, data and emerging technologies, and I enjoy taking an idea from concept to working prototype.
            </p>
          </div>
          <div className="about-card">
            <p>
              Before software, I worked in customer-facing and operational environments that sharpened how I think about user needs, workflow friction and practical product value. I continue learning, experimenting and building through hackathons and side projects.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="experience">
        <div className="section-header">
          <h2>Experience</h2>
          <p>Building toward a career in software product development, AI and data-driven applications.</p>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <ul className="experience-list">
              <li className="experience-item">
                <span className="experience-date">2025–2026</span>
                <div>
                  <span className="role">Full Stack Developer</span>
                  <h4>CodeTribe / mLab</h4>
                </div>
              </li>
              <li className="experience-item">
                <span className="experience-date">Earlier roles</span>
                <div>
                  <span className="role">Customer-facing / operational experience</span>
                  <h4>Retail and administrative work</h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <p>My direction is shaped by building real products, exploring emerging tools and learning through execution rather than only theory.</p>
            <div className="explore-pills">
              {processSteps.map((item) => (
                <span key={item} className="explore-pill">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="education">
        <div className="section-header">
          <h2>Education & learning</h2>
          <p>Technical learning that supports the work, without letting certificates take centre stage.</p>
        </div>

        <div className="certificates-panel">
          <div className="certificate-item"><strong>Full Stack Developer</strong><span>PERN</span></div>
          <div className="certificate-item"><strong>UCT</strong><span>Data Science with Python</span></div>
          <div className="certificate-item"><strong>React</strong><span>Developer Certificate</span></div>
          <div className="certificate-item"><strong>Management</strong><span>NQF4</span></div>
          <div className="certificate-item"><strong>AI</strong><span>IBM Generative AI learning</span></div>
          <div className="certificate-item"><strong>Learning</strong><span>Continuous product experimentation</span></div>
        </div>
      </section>

      <section className="portfolio-section" id="currently-exploring">
        <div className="section-header">
          <h2>Currently exploring</h2>
          <p>Current interests that shape the next wave of projects.</p>
        </div>

        <div className="explore-pills">
          <span className="explore-pill">AI AGENTS</span>
          <span className="explore-pill">VOICE INTERFACES</span>
          <span className="explore-pill">COMPUTER VISION</span>
          <span className="explore-pill">DEVELOPER TOOLS</span>
          <span className="explore-pill">DATA SCIENCE</span>
          <span className="explore-pill">GENERATIVE AI</span>
          <span className="explore-pill">WEB / MOBILE EXPERIENCES</span>
        </div>
      </section>

      <section className="portfolio-section" id="sm-data-tech">
        <div className="sm-initiative">
          <div>
            <span className="mini-label">SM DATA & TECH</span>
            <h3>Independent technology initiative</h3>
          </div>
          <p>An experimental space for software engineering, AI and data-driven product ideas.</p>
        </div>
      </section>

      <section className="portfolio-section" id="contact">
        <div className="section-header">
          <h2>Build something?</h2>
          <p>I’m open to software development opportunities, AI and product collaborations, remote work and international opportunities.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <strong>Open to</strong>
            <p>Software development opportunities • AI/product development • remote opportunities • international opportunities • collaborations • hackathons</p>
            <div className="cta-row">
              <a href={companyProfile.github} target="_blank" rel="noreferrer noopener" className="primary-btn">GITHUB</a>
              {companyProfile.linkedin && (
                <a href={companyProfile.linkedin} target="_blank" rel="noreferrer noopener" className="secondary-btn">LINKEDIN</a>
              )}
              {companyProfile.email && (
                <a href={`mailto:${companyProfile.email}`} className="secondary-btn">EMAIL</a>
              )}
            </div>
          </div>
          <div className="contact-card">
            <strong>Currently</strong>
            <p>Building practical software, exploring AI and data products and turning ideas into working experiments with real momentum.</p>
            <div className="cta-row">
              <Link to="/case-studies" className="link-btn">VIEW PROJECTS</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="portfolio-section" style={{ paddingTop: 0 }}>
        <div className="hero-meta" style={{ maxWidth: "100%" }}>
          <div className="hero-meta-card">
            <span className="meta-label">Current status</span>
            <strong>BUILDING • PROTOTYPING • EXPERIMENTING</strong>
          </div>
          <div className="hero-meta-card">
            <span className="meta-label">Focus</span>
            <strong>FULL-STACK • AI • DATA • PRODUCT</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
