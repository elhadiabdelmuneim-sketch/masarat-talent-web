import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { value: '10+',   label: 'Customer Interviews Completed' },
  { value: '25+',   label: 'Verified Candidates in Pipeline' },
  { value: '5',     label: 'GCC & EU Employer Contacts' },
  { value: '2026',  label: 'TEF Entrepreneur Cohort' },
]

const howItWorks = [
  {
    step: '01',
    title: 'Prepare',
    desc: 'We assess your skills, location, and work authorization to build your remote-ready profile.',
    icon: '◈',
  },
  {
    step: '02',
    title: 'Match',
    desc: 'Our AI pipeline matches you against vetted remote roles across GCC and Europe in seconds.',
    icon: '◉',
  },
  {
    step: '03',
    title: 'Place',
    desc: 'We handle employer outreach, introduction, and follow-up until you land the role.',
    icon: '◎',
  },
]

const audiences = [
  {
    title: 'For Displaced Professionals',
    tag: 'The Stranded Expert',
    desc: 'You have the skills. You have the experience. But displacement, banking restrictions, or geography have cut you off from the global economy. We are the bridge.',
    cta: 'Apply as Talent',
    link: '/demo',
    dark: true,
  },
  {
    title: 'For Forward-Thinking Employers',
    tag: 'GCC & Europe',
    desc: 'Access a verified pipeline of pre-screened African professionals ready to work remotely. ESG-aligned hiring, significantly lower cost, world-class talent.',
    cta: 'Hire Talent',
    link: '/contact',
    dark: false,
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ─────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-pattern" aria-hidden="true" />
        <div className="container hero__content">
          <p className="section-label fade-up">Remote Employment Marketplace · Rwanda · Est. 2026</p>
          <h1 className="hero__headline fade-up-2">
            Africa doesn't have<br />
            <em className="text-gold">a talent problem.</em><br />
            It has an access problem.
          </h1>
          <p className="hero__sub fade-up-3">
            Masarat Talent connects displaced African professionals with vetted
            remote employers in the GCC and Europe — through verified screening,
            AI-powered matching, and end-to-end placement support.
          </p>
          <div className="hero__ctas fade-up-4">
            <Link to="/demo" className="btn btn-primary btn-lg">
              Try Live Demo →
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Our Story
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero__stats">
          <div className="container hero__stats-grid">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────── */}
      <section className="section problem-section">
        <div className="container">
          <div className="problem-inner">
            <div className="problem-text">
              <p className="section-label">The Problem</p>
              <h2>Qualified. Available.<br />Locked out.</h2>
              <div className="gold-line" style={{ margin: '20px 0' }} />
              <p>
                Millions of African professionals — engineers, managers, analysts,
                operations leaders — are displaced from global opportunity not by lack
                of skill, but by legal, geographic, and structural barriers.
              </p>
              <p style={{ marginTop: '16px' }}>
                Meanwhile, employers in the GCC and Europe face a skills gap
                and rising talent costs. The match exists. The bridge doesn't — until now.
              </p>
            </div>
            <div className="problem-quote">
              <blockquote>
                "I have a Six Sigma Black Belt, an MSc, and 9 years of operations
                experience. But when I was displaced, I couldn't even receive
                a wire transfer."
              </blockquote>
              <cite>— Abdelmoneim Nooh, Founder & MD, Masarat Talent</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────── */}
      <section className="section how-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">The Process</p>
            <h2>Prepare → Match → Place</h2>
            <div className="gold-line" />
          </div>
          <div className="how-grid">
            {howItWorks.map(({ step, title, desc, icon }) => (
              <div key={step} className="card how-card">
                <div className="how-card__step">{step}</div>
                <div className="how-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two Audiences ────────────────────── */}
      <section className="section audience-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">Who We Serve</p>
            <h2>A platform for both sides</h2>
            <div className="gold-line" />
          </div>
          <div className="audience-grid">
            {audiences.map(({ title, tag, desc, cta, link, dark }) => (
              <div key={title} className={`audience-card ${dark ? 'audience-card--dark' : 'audience-card--light'}`}>
                <span className="section-label">{tag}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to={link} className={`btn ${dark ? 'btn-primary' : 'btn-outline-dark'}`} style={{ marginTop: '24px' }}>
                  {cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ────────────────────────── */}
      <section className="cta-strip">
        <div className="container cta-strip__inner">
          <div>
            <h2>Ready to see it in action?</h2>
            <p>Try our live AI-powered matching demo — powered by Amazon Bedrock.</p>
          </div>
          <Link to="/demo" className="btn btn-primary btn-lg">
            Launch Demo →
          </Link>
        </div>
      </section>

    </div>
  )
}
