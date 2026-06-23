export default function Executive({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data
  const NAVY = '#1e3a5f'
  const GOLD = '#b8963e'

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: "'Lora', Georgia, serif", background: '#fdfcf8', color: '#1a1a1a', padding: 0, minHeight: '297mm' }}>
      {/* Header bar */}
      <div style={{ background: NAVY, padding: '32px 48px 24px', marginBottom: 0 }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: 'white', letterSpacing: -0.5, marginBottom: 4 }}>{personal.name || 'Your Name'}</div>
        {personal.title && <div style={{ fontSize: 13, color: GOLD, fontWeight: 400, letterSpacing: 0.5, marginBottom: 14, fontStyle: 'italic' }}>{personal.title}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9.5, color: 'rgba(255,255,255,0.7)' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '28px 48px' }}>
        {summary && (
          <Block title="Executive Summary" navy={NAVY} gold={GOLD}>
            <p style={{ fontSize: 10.5, color: '#333', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{summary}</p>
          </Block>
        )}

        {experience.length > 0 && (
          <Block title="Professional Experience" navy={NAVY} gold={GOLD}>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dotted ${GOLD}50`, paddingBottom: 4, marginBottom: 5 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: NAVY }}>{exp.role}</div>
                    <div style={{ fontSize: 10.5, color: GOLD, fontStyle: 'italic' }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
                  </div>
                  <div style={{ fontSize: 10, color: '#666', textAlign: 'right', whiteSpace: 'nowrap', marginLeft: 8 }}>
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16 }}>
                  {exp.bullets?.filter(b => b).map((b, i) => (
                    <li key={i} style={{ fontSize: 10, color: '#333', lineHeight: 1.7, marginBottom: 2 }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Block>
        )}

        {education.length > 0 && (
          <Block title="Education" navy={NAVY} gold={GOLD}>
            {education.map((edu) => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: NAVY }}>{edu.degree}</div>
                  <div style={{ fontSize: 10.5, color: GOLD, fontStyle: 'italic' }}>{edu.institution}{edu.location ? ` · ${edu.location}` : ''}</div>
                  {edu.highlights?.length > 0 && <div style={{ fontSize: 9.5, color: '#555', marginTop: 2 }}>{edu.highlights.join(' · ')}</div>}
                </div>
                <div style={{ fontSize: 10, color: '#666', textAlign: 'right', whiteSpace: 'nowrap', marginLeft: 8 }}>
                  {edu.startDate}{edu.endDate ? ` – ${edu.endDate}` : ''}
                  {edu.gpa && <div>GPA: {edu.gpa}</div>}
                </div>
              </div>
            ))}
          </Block>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {Object.keys(skills).length > 0 && (
            <Block title="Core Competencies" navy={NAVY} gold={GOLD}>
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, color: NAVY, marginBottom: 3 }}>{cat}</div>
                  <div style={{ fontSize: 9.5, color: '#444' }}>{list.join(' · ')}</div>
                </div>
              ))}
            </Block>
          )}

          {certifications.length > 0 && (
            <Block title="Certifications" navy={NAVY} gold={GOLD}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 600, color: NAVY }}>{c.name}</div>
                  <div style={{ fontSize: 9.5, color: '#666', fontStyle: 'italic' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </Block>
          )}
        </div>

        {projects.length > 0 && (
          <Block title="Notable Projects" navy={NAVY} gold={GOLD}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>{proj.name}</span>
                  {proj.link && <span style={{ fontSize: 9, color: GOLD }}>{proj.link}</span>}
                </div>
                {proj.description && <p style={{ fontSize: 10, color: '#444', margin: '2px 0', lineHeight: 1.65, fontStyle: 'italic' }}>{proj.description}</p>}
              </div>
            ))}
          </Block>
        )}
      </div>
    </div>
  )
}

function Block({ title, children, navy, gold }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ width: 4, height: 16, background: gold, borderRadius: 2 }} />
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: navy }}>{title}</div>
        <div style={{ flex: 1, height: 1, background: `${navy}20` }} />
      </div>
      {children}
    </div>
  )
}
