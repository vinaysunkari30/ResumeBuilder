export default function CorporateBlue({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data
  const BLUE = '#2563eb'
  const BLUE_BG = '#eff6ff'

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '297mm', padding: 0 }}>
      {/* Blue top bar */}
      <div style={{ background: BLUE, padding: '24px 44px' }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: -0.5, marginBottom: 3 }}>{personal.name || 'Your Name'}</div>
        {personal.title && <div style={{ fontSize: 12, color: '#bfdbfe', marginBottom: 10 }}>{personal.title}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 18px', fontSize: 9.5, color: '#93c5fd' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>

      {/* Blue sub-bar */}
      <div style={{ background: BLUE_BG, padding: '10px 44px', borderBottom: '1px solid #dbeafe' }}>
        {summary && <p style={{ margin: 0, fontSize: 10, color: '#1e40af', lineHeight: 1.6, fontStyle: 'italic' }}>{summary}</p>}
      </div>

      <div style={{ padding: '24px 44px', display: 'flex', gap: 28 }}>
        {/* Main left */}
        <div style={{ flex: 1 }}>
          {experience.length > 0 && (
            <CBSection title="Work Experience" blue={BLUE} blueBg={BLUE_BG}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#111' }}>{exp.role}</div>
                      <div style={{ fontSize: 10.5, color: BLUE, fontWeight: 600 }}>{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
                    </div>
                    <div style={{ fontSize: 9.5, color: '#6b7280', background: BLUE_BG, padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', marginLeft: 8 }}>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </div>
                  </div>
                  <ul style={{ margin: '6px 0 0 0', paddingLeft: 16 }}>
                    {exp.bullets?.filter(b => b).map((b, i) => (
                      <li key={i} style={{ fontSize: 9.5, color: '#374151', lineHeight: 1.65, marginBottom: 2 }}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CBSection>
          )}

          {projects.length > 0 && (
            <CBSection title="Projects" blue={BLUE} blueBg={BLUE_BG}>
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>{proj.name}</span>
                    {proj.link && <span style={{ fontSize: 9, color: BLUE }}>{proj.link}</span>}
                  </div>
                  {proj.tech?.length > 0 && <div style={{ fontSize: 9, color: BLUE, marginBottom: 2 }}>{proj.tech.join(' · ')}</div>}
                  {proj.description && <p style={{ fontSize: 9.5, color: '#555', margin: 0, lineHeight: 1.6 }}>{proj.description}</p>}
                </div>
              ))}
            </CBSection>
          )}
        </div>

        {/* Right sidebar */}
        <div style={{ width: '32%', flexShrink: 0 }}>
          {education.length > 0 && (
            <CBSection title="Education" blue={BLUE} blueBg={BLUE_BG}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: '#111' }}>{edu.degree}</div>
                  <div style={{ fontSize: 10, color: BLUE }}>{edu.institution}</div>
                  <div style={{ fontSize: 9, color: '#6b7280' }}>{edu.location}{edu.startDate ? ` · ${edu.startDate}` : ''}{edu.endDate ? ` – ${edu.endDate}` : ''}{edu.gpa ? ` · GPA: ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </CBSection>
          )}

          {Object.keys(skills).length > 0 && (
            <CBSection title="Skills" blue={BLUE} blueBg={BLUE_BG}>
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 3 }}>{cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {list.map((s, i) => (
                      <span key={i} style={{ background: BLUE_BG, color: BLUE, border: '1px solid #bfdbfe', padding: '1px 7px', borderRadius: 4, fontSize: 8.5, fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </CBSection>
          )}

          {certifications.length > 0 && (
            <CBSection title="Certifications" blue={BLUE} blueBg={BLUE_BG}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 9.5, fontWeight: 600, color: '#111' }}>{c.name}</div>
                  <div style={{ fontSize: 9, color: '#6b7280' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </CBSection>
          )}
        </div>
      </div>
    </div>
  )
}

function CBSection({ title, children, blue, blueBg }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#fff', background: blue, padding: '4px 10px', borderRadius: 4, marginBottom: 10, display: 'inline-block' }}>{title}</div>
      {children}
    </div>
  )
}
