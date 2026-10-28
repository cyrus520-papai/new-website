const projects = [
  {
    type: 'Brand identity',
    year: '2025',
    title: 'Monarch Labs',
    text: 'Reframing a biotech venture as a premium, human-centered category leader.',
    tone: 'one',
  },
  {
    type: 'Digital product',
    year: '2024',
    title: 'Northstar OS',
    text: 'Designing a product system that made complex operations feel elegant and intuitive.',
    tone: 'two',
  },
  {
    type: 'Campaign',
    year: '2025',
    title: 'Vanta House',
    text: 'Creating a launch identity and media system for a culture-first hospitality brand.',
    tone: 'three',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We map market signals, customer perception, and strategic opportunity.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'We lock the core narrative and design direction through collaborative workshops.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'We prototype the system, from brand to interface, to create a cohesive look and feel.',
  },
  {
    number: '04',
    title: 'Deploy',
    text: 'We ship polished creative across digital touchpoints with a clear rollout plan.',
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Achroma home">
            <span className="brand-mark">A</span>
            <span className="brand-name">ACHROMA</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-outline" href="#contact">Book a call</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Brand systems / digital experiences / culture</p>
              <h1>We craft bold brands for the next era.</h1>
              <p className="lead">
                Achroma builds elegant identities, digital experiences, and growth systems for brands ready to lead with clarity and confidence.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Start a project</a>
                <a className="btn btn-secondary" href="#work">See our work</a>
              </div>

              <ul className="hero-metrics" aria-label="Key company stats">
                <li><strong>120+</strong><span>brands launched</span></li>
                <li><strong>8 yrs</strong><span>of strategic design</span></li>
                <li><strong>4.9/5</strong><span>client rating</span></li>
              </ul>
            </div>

            <div className="hero-visual reveal" aria-label="Illustrated brand metrics panel">
              <div className="visual-panel panel-one">
                <div className="panel-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="panel-body">
                  <div className="metric-box">
                    <small>Brand lift</small>
                    <strong>+64%</strong>
                  </div>

                  <div className="signal-card">
                    <span className="signal-label">Positioning</span>
                    <div className="signal-graph">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card card-left">
                <p>Identity / direction</p>
                <h3>Northstar 01</h3>
              </div>

              <div className="floating-card card-right">
                <p>Launch</p>
                <h3>Q3 Campaign</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="logos-section">
          <div className="container logos-wrap reveal">
            <p>Trusted by teams shaping the future</p>
            <div className="logo-row" aria-label="Client list">
              <span>MONARCH</span>
              <span>VANTA</span>
              <span>NOVA</span>
              <span>FABLE</span>
              <span>RELAY</span>
              <span>ORBIT</span>
            </div>
          </div>
        </section>

        <section className="work section-block" id="work">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">Selected work</p>
              <h2>We turn ambiguity into momentum.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card reveal">
                  <div className={`project-thumb thumb-${project.tone}`}></div>
                  <div className="project-info">
                    <div className="meta-row">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="studio section-block" id="studio">
          <div className="container split-grid">
            <div className="studio-copy reveal">
              <p className="eyebrow">The studio</p>
              <h2>Strategy-led creative for brands with long-term ambition.</h2>
              <p>
                We blend positioning, storytelling, digital product design, and motion to help founders and teams grow without losing their edge.
              </p>
            </div>

            <div className="studio-points reveal">
              <div className="point-item">
                <span>01</span>
                <div>
                  <h3>Positioning</h3>
                  <p>Clear value, sharper language, and a point of view the market can feel.</p>
                </div>
              </div>

              <div className="point-item">
                <span>02</span>
                <div>
                  <h3>Design systems</h3>
                  <p>Built to scale across products, launches, marketing, and internal culture.</p>
                </div>
              </div>

              <div className="point-item">
                <span>03</span>
                <div>
                  <h3>Creative execution</h3>
                  <p>Campaigns, landing pages, and digital experiences that feel premium from the first glance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process section-block" id="process">
          <div className="container">
            <div className="section-header reveal">
              <p className="eyebrow">How we work</p>
              <h2>A focused process, designed for clarity.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <div key={step.number} className="process-card reveal">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial section-block">
          <div className="container testimonial-wrap reveal">
            <div className="quote-mark">“</div>
            <blockquote>
              Achroma gave our brand the clarity and confidence to compete in a crowded market. Every touchpoint feels intentional, premium, and unmistakably ours.
            </blockquote>
            <div className="author">
              <strong>Elena Morris</strong>
              <span>Founder, Northstar</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-inner reveal">
          <div>
            <p className="eyebrow">Let’s build what’s next</p>
            <h2>Ready to sharpen your brand presence?</h2>
          </div>
          <a className="btn btn-primary" href="mailto:hello@achroma.studio">hello@achroma.studio</a>
        </div>
      </footer>
    </div>
  );
}
