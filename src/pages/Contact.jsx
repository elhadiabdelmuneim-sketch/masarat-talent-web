import './Contact.css'

const contacts = [
  {
    icon: '✉',
    label: 'General Enquiries',
    value: 'hello@masaratalent.com',
    href: 'mailto:hello@masaratalent.com',
    hint: 'Talent, employers, partnerships',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdelmoneim-nooh',
    href: 'https://linkedin.com/in/abdelmoneim-nooh',
    hint: 'Connect with the founder',
  },
  {
    icon: '🌍',
    label: 'Headquarters',
    value: 'Kigali, Rwanda',
    href: null,
    hint: 'Masarat Talent Limited · REG-2026-757135',
  },
  {
    icon: '🏦',
    label: 'Banking Partner',
    value: 'I&M Bank Rwanda',
    href: null,
    hint: 'SWIFT: IMRWRWRWXXX',
  },
]

const faqs = [
  {
    q: 'Is this platform free for job seekers?',
    a: 'We offer a free tier for profile submission and basic matching. Our premium subscription ($15/month) includes priority screening, coaching sessions, and direct employer introductions.',
  },
  {
    q: 'What types of roles do you focus on?',
    a: 'We focus exclusively on remote-compatible roles: operations, project management, engineering, data analysis, digital transformation, and administrative roles with GCC and European employers.',
  },
  {
    q: 'How are employers verified?',
    a: 'All employers go through a manual vetting process before accessing the candidate pipeline. We prioritize ESG-committed SMEs and NGOs with documented remote work policies.',
  },
  {
    q: 'Do you support candidates with displacement documentation issues?',
    a: 'Yes. That is a core part of our mission. We work with candidates to identify remote-eligible work arrangements that do not require physical relocation or complex visa processes.',
  },
  {
    q: 'How long does placement typically take?',
    a: 'Our target is 60–90 days from profile submission to first employer introduction for qualified candidates. Placement timelines vary by role and employer response times.',
  },
]

export default function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <div className="container">
          <p className="section-label fade-up">Get In Touch</p>
          <h1 className="fade-up-2">Let's build the bridge<br />together.</h1>
          <p className="contact-header__sub fade-up-3">
            Whether you are a displaced professional, a remote-friendly employer,
            or a partner organization — we want to hear from you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">

          {/* Contact cards */}
          <div>
            <p className="section-label">Contact</p>
            <h2 style={{ marginBottom: '32px' }}>Reach us directly</h2>
            <div className="contact-cards">
              {contacts.map(({ icon, label, value, href, hint }) => (
                <div key={label} className="contact-card card">
                  <div className="contact-card__icon">{icon}</div>
                  <div className="contact-card__content">
                    <span className="contact-card__label">{label}</span>
                    {href ? (
                      <a href={href} className="contact-card__value" target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      <span className="contact-card__value">{value}</span>
                    )}
                    <span className="contact-card__hint">{hint}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="partner-box">
              <p className="section-label">Partnerships</p>
              <h3>Interested in partnering?</h3>
              <p>
                We are actively building relationships with remote staffing platforms,
                diaspora NGOs, refugee-serving organizations, and ESG-focused employers
                in the GCC and Europe.
              </p>
              <p style={{ marginTop: '12px' }}>
                If you represent <strong>Remote.com</strong>, <strong>UNHCR</strong>,
                <strong> IFC</strong>, <strong>GIZ</strong>, or a similar organization,
                please reach out directly to discuss strategic partnership.
              </p>
              <a href="mailto:hello@masaratalent.com" className="btn btn-primary" style={{ marginTop: '20px' }}>
                Email for Partnerships →
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <p className="section-label">Common Questions</p>
            <h2 style={{ marginBottom: '32px' }}>FAQ</h2>
            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
