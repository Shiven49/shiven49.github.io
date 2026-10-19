import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.61 1.22 3.25.94.1-.73.39-1.22.71-1.5-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.97.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinMark({ size = 17 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.2V9h2.84v1.29h.04a3.1 3.1 0 0 1 2.8-1.54c3 0 3.57 1.97 3.57 4.53v5.17Z" />
    </svg>
  );
}

const skills = [
  {
    label: "Languages",
    items: ["C#", "Java", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    items: [".NET", "ASP.NET Core", "Spring Boot", "NestJS", "Next.js", "FastAPI"],
  },
  {
    label: "Data & infrastructure",
    items: ["PostgreSQL", "Redis", "pgvector", "REST APIs", "SQLite"],
  },
];

const projects = [
  {
    number: "01",
    name: "The Scout",
    subtitle: "Intelligent Transfer Engine",
    description:
      "A modular ML recommendation platform that surfaces football transfer targets within real-world financial constraints.",
    architecture: [
      "Spring Boot API with a FastAPI inference layer",
      "PostgreSQL and pgvector-powered retrieval",
      "Redis LRU caching for fast repeat requests",
    ],
    impact: [
      "Two-Tower model trained across 1,050 players and 49 clubs",
      "Repeat-request latency reduced from 450ms to 25ms",
      "Average Recall@10 of approximately 0.4 on historical data",
    ],
    technologies: ["Spring Boot", "FastAPI", "PostgreSQL", "Redis", "Machine learning"],
    visual: "scout-visual",
  },
  {
    number: "02",
    name: "3ngage",
    subtitle: "Engagement Platform",
    description:
      "A multi-tenant SaaS platform for event-driven marketing campaigns and real-time client interactions.",
    architecture: [
      "TypeScript and NestJS backend with a Next.js dashboard",
      "Lightweight browser SDK for client-side injection",
      "Tenant isolation, role-based access, and OAuth",
    ],
    impact: [
      "Client-side avatar deployed across 9-page web environments",
      "Extensible rule engine built for targeted triggers",
      "Processed and visualized 12 events per minute in real time",
    ],
    technologies: ["TypeScript", "NestJS", "Next.js", "OAuth", "Event-driven"],
    visual: "engage-visual",
  },
];

export default function Portfolio() {
  return (
    <main className="portfolio-shell">
      <nav className="site-nav page-width" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Shiven Mahajan, home">
          <span className="wordmark-mark">S</span>
          <span>SHIVEN MAHAJAN</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section className="hero page-width" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> HYDERABAD, INDIA
          </p>
          <h1>
            I build the
            <br />
            <span className="hero-highlight">systems</span> behind
            <br />
            better ideas.
          </h1>
          <p className="hero-description">
            Backend &amp; full-stack engineer focused on scalable platforms,
            thoughtful architecture, and software that makes complex work feel
            simple.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#work">
              Explore my work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="text-link hero-resume" href="/ShivenMahajan.pdf" target="_blank" rel="noreferrer">
              View résumé <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={15} aria-hidden="true" />
            <span>Building from Hyderabad, India</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-topline">
            <span>THOUGHTFUL BY DESIGN</span>
            <Sparkles size={15} aria-hidden="true" />
          </div>
          <div className="art-orbit orbit-outer" />
          <div className="art-orbit orbit-inner" />
          <div className="art-crosshair crosshair-one" />
          <div className="art-crosshair crosshair-two" />
          <div className="art-core">
            <span className="art-core-label">ENGINEER</span>
            <span className="art-core-mark">SM</span>
            <span className="art-core-caption">IDEAS INTO SYSTEMS</span>
          </div>
          <span className="orbit-node node-one" />
          <span className="orbit-node node-two" />
          <span className="orbit-node node-three" />
          <div className="art-bottomline">
            <span>API</span>
            <span>DATA</span>
            <span>PRODUCT</span>
          </div>
        </div>

        <a className="hero-scroll" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      <section className="proof-strip" aria-label="Selected engineering impact">
        <div className="proof-inner page-width">
          <div className="proof-intro">
            <span className="proof-kicker">ENGINEERING THAT</span>
            <span>moves the needle.</span>
          </div>
          <div className="proof-stat">
            <strong>50<span>+</span></strong>
            <span>database tables streamlined</span>
          </div>
          <div className="proof-stat">
            <strong>100<span>k+</span></strong>
            <span>tracking codes migrated</span>
          </div>
          <div className="proof-stat">
            <strong>18<span>×</span></strong>
            <span>faster repeat requests</span>
          </div>
        </div>
      </section>

      <section className="about-section page-width" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span className="section-index">01</span> A LITTLE ABOUT ME</p>
          <h2>Curious by nature.<br />Engineer by craft.</h2>
        </div>
        <div className="about-content">
          <p className="about-lede">
            I turn complicated challenges into clear, dependable software.
          </p>
          <p className="about-body">
            I enjoy working at the intersection of backend engineering and
            product thinking: designing resilient APIs, tuning data-heavy
            workflows, and connecting the pieces that help teams move faster.
            From event-driven platforms to intelligent recommendations, I care
            about making the details work beautifully.
          </p>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="page-width">
          <div className="work-heading">
            <div className="section-heading">
              <p className="eyebrow"><span className="section-index">02</span> SELECTED WORK</p>
              <h2>Good ideas,<br />built to work.</h2>
            </div>
            <p className="work-intro">
              A few projects where thoughtful engineering met a real-world
              problem.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`} aria-hidden="true">
                  {project.visual === "scout-visual" ? (
                    <>
                      <div className="scout-grid" />
                      <div className="scout-pitch">
                        <span className="pitch-circle" />
                        <span className="pitch-line" />
                        <span className="pitch-point point-a" />
                        <span className="pitch-point point-b" />
                        <span className="pitch-point point-c" />
                        <span className="pitch-point point-d" />
                        <span className="pitch-point point-e" />
                        <span className="pitch-point point-f" />
                      </div>
                      <div className="visual-label visual-label-top">SCOUT / RECOMMENDATION ENGINE</div>
                      <div className="scout-result">
                        <span className="result-avatar">AM</span>
                        <span><b>Player match</b><small>92% compatibility</small></span>
                        <span className="result-score">A+</span>
                      </div>
                      <span className="visual-coordinate">51°30&apos;N / 00°07&apos;W</span>
                    </>
                  ) : (
                    <>
                      <div className="engage-glow" />
                      <div className="engage-window">
                        <div className="window-bar">
                          <span /><span /><span />
                          <small>3ngage / live events</small>
                        </div>
                        <div className="window-content">
                          <span className="window-kicker">CAMPAIGN OVERVIEW</span>
                          <strong>Every moment,<br />more meaningful.</strong>
                          <div className="event-chart">
                            <span /><span /><span /><span /><span /><span /><span /><span /><span />
                          </div>
                          <div className="event-foot">
                            <span><i /> EVENTS / MIN</span>
                            <b>12.0</b>
                          </div>
                        </div>
                      </div>
                      <div className="engage-badge">
                        <span className="badge-pulse" /> REAL-TIME
                      </div>
                      <span className="visual-coordinate">ONE PLATFORM / MANY POSSIBILITIES</span>
                    </>
                  )}
                </div>

                <div className="project-details">
                  <div className="project-title-row">
                    <div>
                      <p className="project-number">PROJECT / {project.number}</p>
                      <h3>{project.name}<span>{project.subtitle}</span></h3>
                    </div>
                    <a
                      className="project-link"
                      href="https://github.com/shiven49"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} source on GitHub`}
                    >
                      <GithubMark size={18} />
                      <span>View source</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-info-grid">
                    <div>
                      <h4><Code2 size={15} aria-hidden="true" /> ARCHITECTURE</h4>
                      <ul>
                        {project.architecture.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4><Sparkles size={15} aria-hidden="true" /> OUTCOMES</h4>
                      <ul>
                        {project.impact.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <ul className="project-tags" aria-label="Technologies">
                    {project.technologies.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section page-width" id="contact">
        <div className="contact-card">
          <div className="contact-topline">
            <p className="eyebrow"><span className="section-index">03</span> HAVE A GOOD PROBLEM?</p>
            <span className="contact-star" aria-hidden="true">✳</span>
          </div>
          <div className="contact-main">
            <h2>Let&apos;s make<br />something <span>matter.</span></h2>
            <div className="contact-aside">
              <p>
                Have a project in mind, an interesting challenge, or just want
                to talk engineering? My inbox is open.
              </p>
              <a className="button button-dark" href="mailto:shivxnmahajan@gmail.com">
                <Mail size={17} aria-hidden="true" /> Say hello
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-bottomline">
            <a href="mailto:shivxnmahajan@gmail.com">SHIVXNMAHAJAN@GMAIL.COM</a>
            <span>HYDERABAD, INDIA <span className="contact-dot">✳</span> AVAILABLE FOR GREAT IDEAS</span>
          </div>
        </div>
      </section>

      <footer className="site-footer page-width">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-mark">S</span>
          <span>SHIVEN MAHAJAN</span>
        </a>
        <p>© Shiven Mahajan. Built with care.</p>
        <div className="footer-socials">
          <a href="https://github.com/shiven49" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubMark size={17} />
          </a>
          <a href="https://linkedin.com/in/shivenmahajan" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinMark size={17} />
          </a>
          <a href="mailto:shivxnmahajan@gmail.com" aria-label="Email">
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
