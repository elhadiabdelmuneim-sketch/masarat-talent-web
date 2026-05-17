import { Link } from 'react-router-dom'
import founderPhoto from '../assets/founder.jpg'
import './About.css'

const values = [
  { icon: '◈', title: 'Access Over Gatekeeping', desc: 'We believe merit should determine opportunity, not geography, displacement status, or which bank will accept your account.' },
  { icon: '◉', title: 'Dignity in Every Placement', desc: 'We do not process candidates. We partner with professionals. Every interaction reflects the respect they are owed.' },
  { icon: '◎', title: 'Africa as a Source, Not a Story', desc: 'Our talent is not a charity narrative. They are engineers, analysts, managers, and operators with world-class credentials.' },
  { icon: '◆', title: 'Transparency by Design', desc: 'Candidates know what employers see. Employers know what candidates expect. No hidden filters, no opaque rejection.' },
]

const milestones = [
  { date: 'Feb 2026', event: 'Concept validated through personal displacement experience as a Sudanese professional in Dubai' },
  { date: 'Mar 2026', event: 'Masarat Talent Limited registered with Rwanda Development Board (REG-2026-757135)' },
  { date: 'Apr 2026', event: 'Selected as Tony Elumelu Foundation 2026 Entrepreneur — 1 of ~5,000 from 54 African nations' },
  { date: 'Apr 2026', event: 'AWS AI Practitioner certification completed. Masarat Talent Career Compass built on PartyRock.' },
  { date: 'May 2026', event: 'Full Bedrock Agent pipeline live: screening → matching → outreach → SES email notifications' },
  { date: 'May 2026', event: '10 customer validation interviews completed. 25+ verified candidates in active pipeline.' },
  { date: 'Jun 2026', event: 'TEF Business Plan & Pitch Video Submission — seed capital round' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* Header */}
      <div className="about-header">
        <div className="container">
          <p className="section-label fade-up">Our Story</p>
          <h1 className="fade-up-2">Built from displacement.<br />Designed for access.</h1>
          <p className="about-header__sub fade-up-3">
            Masarat Talent was not designed in a boardroom. It was lived.
          </p>
        </div>
      </div>

      {/* Founder Story */}
      <section className="section founder-section">
        <div className="container founder-inner">
          <div className="founder-photo-wrapper">
            <div className="founder-photo-placeholder">
              <img src={founderPhoto} alt="Abdelmoneim Nooh" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px'}} />
            </div>
            <div className="founder-credentials">
              <div className="cred-badge">Six Sigma Black Belt</div>
              <div className="cred-badge">MSc International Management</div>
              <div className="cred-badge">AWS AI Practitioner</div>
              <div className="cred-badge">TEF Entrepreneur 2026</div>
            </div>
          </div>
          <div className="founder-text">
            <p className="section-label">The Founder</p>
            <h2>Abdelmoneim Nooh</h2>
            <p className="founder-role">Founder & Managing Director, Masarat Talent Limited</p>
            <div className="gold-line" style={{ margin: '20px 0' }} />
            <p>
              I am a Sudanese engineer and operations leader with nine years of experience across
              plastics manufacturing, telecom operations, and digital transformation. I hold an MSc
              in International Management from Tomsk State University, a Six Sigma Black Belt, and
              an AWS AI Practitioner certification. My career has spanned process engineering,
              continuous improvement, and stakeholder co-creation across two continents.
            </p>
            <p style={{ marginTop: '16px' }}>
              In 2024, displacement put me on the same side of the problem I had read about in
              reports. Suddenly, my credentials, my network, and my skills were real — but
              the systems to monetize them remotely were not accessible to someone in my
              situation. I could not receive payments. I could not easily verify my identity
              to platforms. I was, in the industry's language, "unbanked and unreachable."
            </p>
            <p style={{ marginTop: '16px' }}>
              Masarat Talent is the company I needed to exist. It is a two-sided marketplace
              that meets displaced professionals where they are and connects them to the global
              employers actively looking for exactly what they offer.
            </p>
            <div className="founder-quote">
              "Masarat" means "pathways" in Arabic. That is precisely what we build.
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section mission-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">Our Mission</p>
            <h2>What we stand for</h2>
            <div className="gold-line" />
          </div>
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="card value-card">
                <div className="value-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">Traction</p>
            <h2>Built fast. Built real.</h2>
            <div className="gold-line" />
          </div>
          <div className="timeline">
            {milestones.map(({ date, event }, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__date">{date}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rwanda HQ */}
      <section className="section-sm rwanda-section">
        <div className="container rwanda-inner">
          <div>
            <p className="section-label">Operational Hub</p>
            <h3>Headquartered in Rwanda</h3>
            <p>
              Masarat Talent Limited is registered with the Rwanda Development Board and operates
              an active corporate account with I&M Bank Rwanda (SWIFT: IMRWRWRWXXX). Rwanda's
              stable regulatory environment, strong fintech infrastructure, and African Union
              integration make it the ideal operational hub for a pan-African remote employment platform.
            </p>
            <p style={{ marginTop: '12px' }}>
              We are proud members of the <strong>UNDP Rwanda</strong> cohort of TEF entrepreneurs
              launching August 2026.
            </p>
          </div>
          <div className="rwanda-stats">
            <div className="rwanda-stat">
              <span>REG-2026-757135</span>
              <small>RDB Registration</small>
            </div>
            <div className="rwanda-stat">
              <span>156063202</span>
              <small>Tax ID (TIN)</small>
            </div>
            <div className="rwanda-stat">
              <span>I&M Bank</span>
              <small>Banking Partner</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to be part of the bridge?</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/demo" className="btn btn-primary btn-lg">Try the Demo →</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
