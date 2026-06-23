// Template 9: Compact — info-dense two-column, maximum information in minimum space
export default function Compact({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#1f2937', minHeight: '297mm', padding: 0, fontSize: 9 }}>
      {/* Compact header */}
      <div style={{ padding: '16px 32px 12px', borderBottom: '2px solid #374151' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#111', letterSpacing: -0.5 }}>{personal.name || 'Your Name'}</div>
            {personal.title && <div style={{ fontSize: 10, color: '#6b7280', fontWeight: 500 }}>{personal.title}</div>}
          </div>
          <div style={{ textAlign: 'right', fontSize: 8.5, color: '#6b7280', lineHeight: 1.7 }}>
            {[personal.email, personal.phone].filter(Boolean).map((v, i) => <div key={i}>{v}</div>)}
            {[personal.location, personal.linkedin, personal.github].filter(Boolean).join(' · ')}
          </div>
        </div>
      </div>

      {summary && (
        <div style={{ padding: '8px 32px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          <p style={{ margin: 0, fontSize: 9, color: '#444', lineHeight: 1.65 }}>{summary}</p>
        </div>
      )}

      <div style={{ display: 'flex', padding: '12px 32px', gap: 20 }}>
        {/* Left column (wider) */}
        <div style={{ flex: 1 }}>
          {experience.length > 0 && (
            <CompSection title="EXPERIENCE">
              {experience.map((exp, idx) => (
                <div key={exp.id} style={{ marginBottom: idx < experience.length - 1 ? 10 : 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: 10, color: '#111' }}>{exp.role}</div>
                    <div style={{ fontSize: 8, color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: 6 }}>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</div>
                  </div>
                  <div style={{ fontSize: 9, color: '#374151', fontWeight: 600 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
                  {exp.bullets?.filter(b => b).map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: 5, marginTop: 1 }}>
                      <span style={{ color: '#374151', flexShrink: 0 }}>•</span>
                      <span style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.55 }}>{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </CompSection>
          )}

          {projects.length > 0 && (
            <CompSection title="PROJECTS">
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 700, fontSize: 10, color: '#111' }}>{proj.name}</span>
                    {proj.link && <span style={{ fontSize: 8, color: '#6b7280' }}>{proj.link}</span>}
                  </div>
                  {proj.tech?.length > 0 && <div style={{ fontSize: 8.5, color: '#374151', fontStyle: 'italic' }}>{proj.tech.join(', ')}</div>}
                  {proj.description && <div style={{ fontSize: 8.5, color: '#4b5563', lineHeight: 1.55 }}>{proj.description}</div>}
                </div>
              ))}
            </CompSection>
          )}
        </div>

        {/* Right column (narrower) */}
        <div style={{ width: '34%', flexShrink: 0 }}>
          {education.length > 0 && (
            <CompSection title="EDUCATION">
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 7 }}>
                  <div style={{ fontWeight: 700, fontSize: 10, color: '#111' }}>{edu.degree}</div>
                  <div style={{ fontSize: 9, color: '#374151' }}>{edu.institution}</div>
                  <div style={{ fontSize: 8.5, color: '#9ca3af' }}>{edu.location} · {edu.startDate}{edu.endDate ? `–${edu.endDate}` : ''}{edu.gpa ? ` · ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </CompSection>
          )}

          {Object.keys(skills).length > 0 && (
            <CompSection title="SKILLS">
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 5 }}>
                  <span style={{ fontWeight: 700, fontSize: 8.5, color: '#374151' }}>{cat}: </span>
                  <span style={{ fontSize: 8.5, color: '#4b5563' }}>{list.join(', ')}</span>
                </div>
              ))}
            </CompSection>
          )}

          {certifications.length > 0 && (
            <CompSection title="CERTIFICATIONS">
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 5 }}>
                  <div style={{ fontWeight: 600, fontSize: 9.5, color: '#111' }}>{c.name}</div>
                  <div style={{ fontSize: 8.5, color: '#6b7280' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </CompSection>
          )}
        </div>
      </div>
    </div>
  )
}

function CompSection({ title, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 7.5, fontWeight: 800, letterSpacing: 1.5, color: '#374151', borderBottom: '1.5px solid #374151', paddingBottom: 2, marginBottom: 7 }}>{title}</div>
      {children}
    </div>
  )
}
