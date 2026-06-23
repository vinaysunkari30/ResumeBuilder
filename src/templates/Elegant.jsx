// Template 10: Elegant — serif fonts, champagne/wine colors, centered header, sophisticated
export default function Elegant({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data
  const WINE = '#7c2d52'
  const CHAMPAGNE = '#c9a96e'
  const CREAM = '#faf7f2'

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: "'Lora', Georgia, serif", background: CREAM, color: '#2c1810', minHeight: '297mm', padding: '44px 52px' }}>
      {/* Elegant centered header */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ fontSize: 30, fontWeight: 700, color: WINE, letterSpacing: 1, marginBottom: 5, fontVariant: 'small-caps' }}>{personal.name || 'Your Name'}</div>
        {personal.title && (
          <div style={{ fontSize: 11, color: CHAMPAGNE, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 400, marginBottom: 12 }}>{personal.title}</div>
        )}
        <div style={{ width: 60, height: 1, background: CHAMPAGNE, margin: '0 auto 12px' }} />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4px 18px', fontSize: 9.5, color: '#7a6055' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}
        </div>
      </div>

      {summary && (
        <div style={{ textAlign: 'center', marginBottom: 24, padding: '0 24px' }}>
          <p style={{ fontSize: 10.5, color: '#5c4033', lineHeight: 1.85, margin: 0, fontStyle: 'italic' }}>{summary}</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 24 }}>
        {experience.length > 0 && (
          <ElBlock title="Experience" wine={WINE} champagne={CHAMPAGNE} full>
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: WINE }}>{exp.role}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 10, color: CHAMPAGNE, fontStyle: 'italic' }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</span>
                  <span style={{ fontSize: 9, color: '#a08070' }}>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                {exp.bullets?.filter(b => b).map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 2 }}>
                    <span style={{ color: CHAMPAGNE, fontSize: 9 }}>❧</span>
                    <span style={{ fontSize: 9.5, color: '#4a3728', lineHeight: 1.65 }}>{b}</span>
                  </div>
                ))}
              </div>
            ))}
          </ElBlock>
        )}

        <div>
          {education.length > 0 && (
            <ElBlock title="Education" wine={WINE} champagne={CHAMPAGNE}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: WINE }}>{edu.degree}</div>
                  <div style={{ fontSize: 10, color: CHAMPAGNE, fontStyle: 'italic' }}>{edu.institution}</div>
                  <div style={{ fontSize: 9, color: '#a08070' }}>{edu.location}{edu.startDate ? ` · ${edu.startDate}` : ''}{edu.endDate ? ` – ${edu.endDate}` : ''}{edu.gpa ? ` · GPA: ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </ElBlock>
          )}

          {Object.keys(skills).length > 0 && (
            <ElBlock title="Skills" wine={WINE} champagne={CHAMPAGNE}>
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 6 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, color: WINE, fontVariant: 'small-caps', letterSpacing: 0.5, marginBottom: 2 }}>{cat}</div>
                  <div style={{ fontSize: 9.5, color: '#5c4033' }}>{list.join(' · ')}</div>
                </div>
              ))}
            </ElBlock>
          )}

          {certifications.length > 0 && (
            <ElBlock title="Certifications" wine={WINE} champagne={CHAMPAGNE}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 10.5, fontWeight: 600, color: WINE }}>{c.name}</div>
                  <div style={{ fontSize: 9.5, color: '#a08070', fontStyle: 'italic' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </ElBlock>
          )}
        </div>
      </div>

      {projects.length > 0 && (
        <ElBlock title="Notable Works" wine={WINE} champagne={CHAMPAGNE}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {projects.map((proj) => (
              <div key={proj.id} style={{ background: 'rgba(201,169,110,0.08)', border: `1px solid ${CHAMPAGNE}40`, borderRadius: 6, padding: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: WINE }}>{proj.name}</div>
                {proj.link && <div style={{ fontSize: 8.5, color: CHAMPAGNE, fontStyle: 'italic', marginBottom: 2 }}>{proj.link}</div>}
                {proj.description && <p style={{ fontSize: 9, color: '#5c4033', margin: 0, lineHeight: 1.6 }}>{proj.description}</p>}
                {proj.tech?.length > 0 && <div style={{ fontSize: 8.5, color: '#a08070', marginTop: 4, fontStyle: 'italic' }}>{proj.tech.join(' · ')}</div>}
              </div>
            ))}
          </div>
        </ElBlock>
      )}
    </div>
  )
}

function ElBlock({ title, children, wine, champagne, full }) {
  return (
    <div style={{ marginBottom: 20, gridColumn: full ? '1 / -1' : 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ height: 1, flex: 1, background: `${champagne}60` }} />
        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2.5, color: wine, whiteSpace: 'nowrap' }}>{title}</div>
        <div style={{ height: 1, flex: 1, background: `${champagne}60` }} />
      </div>
      {children}
    </div>
  )
}
