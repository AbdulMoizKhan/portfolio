import { navigation, profile } from './data/profile.js';

const Section = ({ id, eyebrow, title, children, className = '' }) => (
  <section id={id} className={`section ${className}`}>
    <div className="section__heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </div>
    {children}
  </section>
);

const StatCard = ({ value, label, detail }) => (
  <article className="stat-card">
    <strong>{value}</strong>
    <span>{label}</span>
    <p>{detail}</p>
  </article>
);

const SkillCard = ({ title, description }) => (
  <article className="skill-card">
    <div className="skill-card__icon">{title.charAt(0)}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

const TimelineItem = ({ role, organization, period, description }) => (
  <article className="timeline-item">
    <div className="timeline-item__marker" aria-hidden="true" />
    <div className="timeline-item__content">
      <span>{period}</span>
      <h3>{role}</h3>
      <h4>{organization}</h4>
      <p>{description}</p>
    </div>
  </article>
);

const CertificationCard = ({ title, issuer, date }) => (
  <article className="certification-card">
    <span>{date}</span>
    <h3>{title}</h3>
    <p>{issuer}</p>
  </article>
);

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Areeba Ashraf Ali home">
          <span>AAA</span>
          <div>
            <strong>{profile.name}</strong>
            <small>SAP B1 • Finance</small>
          </div>
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__content">
            <span className="eyebrow">{profile.location}</span>
            <h1>{profile.name}</h1>
            <p className="hero__headline">{profile.headline}</p>
            <p className="hero__copy">{profile.valueProposition}</p>
            <div className="hero__actions" aria-label="Portfolio actions">
              <a className="button button--primary" href="#experience">
                View Experience
              </a>
              <a className="button button--secondary" href="/Areeba-Ashraf-Ali-Resume.pdf">
                Download Resume
              </a>
              <a className="button button--ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Professional highlights">
            <div className="panel-header">
              <span>Consulting Dashboard</span>
              <strong>ERP Readiness</strong>
            </div>
            <div className="stat-grid">
              {profile.heroStats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </aside>
        </section>

        <Section id="about" eyebrow="Profile" title="Finance-led SAP Business One consulting">
          <div className="about-grid">
            <article className="about-card">
              <p>{profile.summary}</p>
            </article>
            <article className="focus-card">
              <span className="eyebrow">Consulting Focus</span>
              <h3>Turning business requirements into reliable ERP workflows.</h3>
              <ul>
                {profile.consultingFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Section>

        <Section id="expertise" eyebrow="Capabilities" title="SAP, finance, and implementation expertise">
          <div className="skill-grid">
            {profile.expertise.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Career Timeline" title="Experience across finance, ERP, training, and research">
          <div className="timeline">
            {profile.experience.map((item) => (
              <TimelineItem key={`${item.role}-${item.organization}-${item.period}`} {...item} />
            ))}
          </div>
        </Section>

        <Section id="credentials" eyebrow="Credentials" title="Education, certifications, volunteering, and languages">
          <div className="credentials-grid">
            <div className="credential-block">
              <h3>Education</h3>
              {profile.education.map((item) => (
                <article key={item.institution} className="mini-card">
                  <strong>{item.institution}</strong>
                  <span>{item.credential}</span>
                </article>
              ))}
            </div>

            <div className="credential-block credential-block--wide">
              <h3>Certifications</h3>
              <div className="certification-grid">
                {profile.certifications.map((cert) => (
                  <CertificationCard key={cert.title} {...cert} />
                ))}
              </div>
            </div>

            <div className="credential-block">
              <h3>Volunteering</h3>
              {profile.volunteering.map((item) => (
                <article key={`${item.role}-${item.organization}`} className="mini-card">
                  <strong>{item.role}</strong>
                  <span>{item.organization}</span>
                </article>
              ))}
            </div>

            <div className="credential-block">
              <h3>Languages</h3>
              {profile.languages.map((item) => (
                <article key={item.language} className="mini-card mini-card--row">
                  <strong>{item.language}</strong>
                  <span>{item.proficiency}</span>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s connect on SAP Business One and finance transformation">
          <div className="contact-card">
            <div>
              <h3>Available for finance, ERP, and SAP Business One conversations.</h3>
              <p>
                For project discussions, consulting opportunities, or professional networking, connect through LinkedIn.
              </p>
            </div>
            <a className="button button--primary" href={profile.linkedin} target="_blank" rel="noreferrer">
              Open LinkedIn Profile
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
