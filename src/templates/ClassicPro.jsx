// Template 2: Classic Professional — single column, pure black & white
export default function ClassicPro({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Georgia, serif', background: 'white', color: '#111', padding: '40px 48px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', borderBottom: '2px solid #111', paddingBottom: 16, marginBottom: 18 }}>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5, color: '#111', marginBottom: 4 }}>{personal.name || 'Your Name'}</div>
        {personal.title && <div style={{ fontSize: 13, color: '#444', fontStyle: 'italic', marginBottom: 8 }}>{personal.title}</div>}
        <div style={{ fontSize: 10, color: '#555', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0 16px' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>

      {summary && (
        <Section title="Professional Summary">
          <p style={{ fontSize: 10.5, lineHeight: 1.7, color: '#333' }}>{summary}</p>
        </Section>
      )}

      {experience.length > 0 && (
        <Section title="Professional Experience">
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#111' }}>{exp.role}</div>
                <div style={{ fontSize: 10, color: '#555', fontStyle: 'italic' }}>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</div>
              </div>
              <div style={{ fontSize: 10.5, color: '#555', marginBottom: 5, fontStyle: 'italic' }}>{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {exp.bullets?.filter(b => b).map((b, i) => (
                  <li key={i} style={{ fontSize: 10, color: '#333', lineHeight: 1.65, marginBottom: 2 }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {education.length > 0 && (
        <Section title="Education">
          {education.map((edu) => (
            <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>{edu.degree}</div>
                <div style={{ fontSize: 10.5, color: '#555', fontStyle: 'italic' }}>{edu.institution}{edu.location ? `, ${edu.location}` : ''}</div>
                {edu.highlights?.length > 0 && (
                  <div style={{ fontSize: 9.5, color: '#444', marginTop: 2 }}>{edu.highlights.join(' · ')}</div>
                )}
              </div>
              <div style={{ fontSize: 10, color: '#555', textAlign: 'right', whiteSpace: 'nowrap', marginLeft: 8 }}>
                {edu.startDate}{edu.endDate ? ` – ${edu.endDate}` : ''}
                {edu.gpa && <div>GPA: {edu.gpa}</div>}
              </div>
            </div>
          ))}
        </Section>
      )}

      {Object.keys(skills).length > 0 && (
        <Section title="Skills">
          {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
            <div key={cat} style={{ display: 'flex', gap: 8, marginBottom: 4, fontSize: 10.5 }}>
              <span style={{ fontWeight: 700, color: '#111', whiteSpace: 'nowrap' }}>{cat}:</span>
              <span style={{ color: '#333' }}>{list.join(', ')}</span>
            </div>
          ))}
        </Section>
      )}

      {projects.length > 0 && (
        <Section title="Projects">
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>{proj.name}</span>
                {proj.link && <span style={{ fontSize: 9.5, color: '#555' }}>{proj.link}</span>}
              </div>
              {proj.tech?.length > 0 && <div style={{ fontSize: 9.5, color: '#555', fontStyle: 'italic', marginBottom: 2 }}>{proj.tech.join(', ')}</div>}
              {proj.description && <p style={{ fontSize: 10, color: '#333', margin: 0, lineHeight: 1.6 }}>{proj.description}</p>}
            </div>
          ))}
        </Section>
      )}

      {certifications.length > 0 && (
        <Section title="Certifications">
          {certifications.map((c) => (
            <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 10.5, fontWeight: 600, color: '#111' }}>{c.name}</span>
              <span style={{ fontSize: 10, color: '#555' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</span>
            </div>
          ))}
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, borderBottom: '1px solid #111', paddingBottom: 3, marginBottom: 8, color: '#111' }}>{title}</div>
      {children}
    </div>
  )
}
