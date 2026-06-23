// Template 7: Bold Designer — big typography, hot pink accents, visual hierarchy
export default function BoldDesigner({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data
  const PINK = '#db2777'
  const LIGHT_PINK = '#fce7f3'

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '297mm', padding: 0 }}>
      {/* Bold header */}
      <div style={{ padding: '40px 44px 24px', borderBottom: `4px solid ${PINK}` }}>
        <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1.5, color: '#111', lineHeight: 1, marginBottom: 6, textTransform: 'uppercase' }}>
          {personal.name || 'Your Name'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 14, color: PINK, fontWeight: 700, letterSpacing: 0.5 }}>{personal.title || ''}</div>
          {personal.title && <div style={{ width: 4, height: 4, background: '#ccc', borderRadius: '50%' }} />}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', fontSize: 10, color: '#666' }}>
            {[personal.email, personal.phone, personal.location, personal.github, personal.linkedin].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: 'calc(297mm - 120px)' }}>
        {/* Left main (wider) */}
        <div style={{ flex: 1, padding: '28px 44px 28px 44px' }}>
          {summary && (
            <BSection title="About" pink={PINK} lightPink={LIGHT_PINK}>
              <p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.75, margin: 0 }}>{summary}</p>
            </BSection>
          )}

          {experience.length > 0 && (
            <BSection title="Experience" pink={PINK} lightPink={LIGHT_PINK}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 3 }}>
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 800, color: '#111' }}>{exp.role}</span>
                      <span style={{ fontSize: 10.5, color: PINK, fontWeight: 600, marginLeft: 8 }}>{exp.company}</span>
                    </div>
                    <span style={{ fontSize: 9, background: LIGHT_PINK, color: PINK, padding: '2px 8px', borderRadius: 20, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 8 }}>
                      {exp.startDate} – {exp.current ? 'Now' : exp.endDate}
                    </span>
                  </div>
                  {exp.location && <div style={{ fontSize: 9.5, color: '#999', marginBottom: 5 }}>{exp.location}</div>}
                  {exp.bullets?.filter(b => b).map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
                      <span style={{ color: PINK, fontSize: 10, marginTop: 1, flexShrink: 0 }}>◆</span>
                      <span style={{ fontSize: 9.5, color: '#444', lineHeight: 1.6 }}>{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </BSection>
          )}

          {projects.length > 0 && (
            <BSection title="Projects" pink={PINK} lightPink={LIGHT_PINK}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {projects.map((proj) => (
                  <div key={proj.id} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#111', marginBottom: 2 }}>{proj.name}</div>
                    {proj.link && <div style={{ fontSize: 8.5, color: PINK, marginBottom: 4 }}>{proj.link}</div>}
                    {proj.description && <p style={{ fontSize: 9, color: '#555', margin: 0, lineHeight: 1.5 }}>{proj.description}</p>}
                    {proj.tech?.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 6 }}>
                        {proj.tech.map((t, i) => <span key={i} style={{ background: LIGHT_PINK, color: PINK, padding: '1px 6px', borderRadius: 20, fontSize: 7.5, fontWeight: 600 }}>{t}</span>)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </BSection>
          )}
        </div>

        {/* Right sidebar */}
        <div style={{ width: '50%', background: '#f9fafb', padding: '28px 20px', borderLeft: '1px solid #f0f0f0', flexShrink: 0 }}>
          {education.length > 0 && (
            <SBar title="Education" pink={PINK}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: '#111' }}>{edu.degree}</div>
                  <div style={{ fontSize: 9.5, color: PINK, fontWeight: 500 }}>{edu.institution}</div>
                  <div style={{ fontSize: 9, color: '#888' }}>{edu.location}{edu.startDate ? ` · ${edu.startDate}` : ''}{edu.endDate ? ` – ${edu.endDate}` : ''}{edu.gpa ? ` · ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </SBar>
          )}

          {Object.keys(skills).length > 0 && (
            <SBar title="Skills" pink={PINK}>
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 8.5, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>{cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {list.map((s, i) => (
                      <span key={i} style={{ background: LIGHT_PINK, color: PINK, padding: '2px 8px', borderRadius: 20, fontSize: 8.5, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </SBar>
          )}

          {certifications.length > 0 && (
            <SBar title="Certifications" pink={PINK}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, color: '#111' }}>{c.name}</div>
                  <div style={{ fontSize: 8.5, color: '#888' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </SBar>
          )}
        </div>
      </div>
    </div>
  )
}

function BSection({ title, children, pink }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: '#111', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        {title}
        <div style={{ flex: 1, height: 2, background: pink }} />
      </div>
      {children}
    </div>
  )
}

function SBar({ title, children, pink }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 10, fontWeight: 800, color: '#111', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10, borderBottom: `2px solid ${pink}`, paddingBottom: 4 }}>{title}</div>
      {children}
    </div>
  )
}
