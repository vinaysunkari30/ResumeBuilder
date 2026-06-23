export default function ModernDark({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#0f172a', color: '#e2e8f0', display: 'flex', minHeight: '297mm' }}>
      {/* Left Sidebar */}
      <div style={{ width: '34%', background: '#1e293b', padding: '36px 24px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0 }}>
        {/* Avatar / Initials */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 700, color: 'white', letterSpacing: -1 }}>
            {(personal.name || 'R').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', letterSpacing: -0.5 }}>{personal.name || 'Your Name'}</div>
            <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 600, marginTop: 3, textTransform: 'uppercase', letterSpacing: 1 }}>{personal.title || ''}</div>
          </div>
        </div>

        {/* Contact */}
        <div style={{ borderTop: '1px solid #334155', paddingTop: 16 }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Contact</div>
          {[
            { label: 'Email', val: personal.email },
            { label: 'Phone', val: personal.phone },
            { label: 'Location', val: personal.location },
            { label: 'LinkedIn', val: personal.linkedin },
            { label: 'GitHub', val: personal.github },
            { label: 'Website', val: personal.website },
          ].filter(x => x.val).map(({ label, val }) => (
            <div key={label} style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 8, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 1 }}>{label}</div>
              <div style={{ fontSize: 9.5, color: '#cbd5e1', wordBreak: 'break-all' }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        {Object.keys(skills).length > 0 && (
          <div style={{ borderTop: '1px solid #334155', paddingTop: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Skills</div>
            {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
              <div key={cat} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 8.5, fontWeight: 600, color: '#94a3b8', marginBottom: 5 }}>{cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {list.map((s, i) => (
                    <span key={i} style={{ background: '#6366f120', border: '1px solid #6366f140', borderRadius: 999, padding: '2px 8px', fontSize: 8, color: '#a5b4fc' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div style={{ borderTop: '1px solid #334155', paddingTop: 16 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>Certifications</div>
            {certifications.map((c) => (
              <div key={c.id} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 9.5, fontWeight: 600, color: '#e2e8f0' }}>{c.name}</div>
                <div style={{ fontSize: 8.5, color: '#64748b' }}>{c.issuer} {c.date ? `· ${c.date}` : ''}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Main */}
      <div style={{ flex: 1, padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {/* Summary */}
        {summary && (
          <div>
            <SectionTitle label="Profile" color="#818cf8" />
            <p style={{ fontSize: 10, color: '#94a3b8', lineHeight: 1.7 }}>{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <SectionTitle label="Experience" color="#818cf8" />
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#f1f5f9' }}>{exp.role}</div>
                    <div style={{ fontSize: 10, color: '#818cf8', fontWeight: 500 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
                  </div>
                  <div style={{ fontSize: 8.5, color: '#64748b', whiteSpace: 'nowrap', marginLeft: 8 }}>
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.bullets?.filter(b => b).map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginTop: 3 }}>
                    <span style={{ color: '#6366f1', fontSize: 9, marginTop: 2, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: 9.5, color: '#94a3b8', lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <SectionTitle label="Education" color="#818cf8" />
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#f1f5f9' }}>{edu.degree}</div>
                    <div style={{ fontSize: 10, color: '#818cf8' }}>{edu.institution}{edu.location ? ` · ${edu.location}` : ''}</div>
                  </div>
                  <div style={{ fontSize: 8.5, color: '#64748b' }}>{edu.startDate}{edu.endDate ? ` — ${edu.endDate}` : ''}{edu.gpa ? ` · GPA: ${edu.gpa}` : ''}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div>
            <SectionTitle label="Projects" color="#818cf8" />
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#f1f5f9' }}>{proj.name}</div>
                  {proj.link && <div style={{ fontSize: 8.5, color: '#818cf8' }}>{proj.link}</div>}
                </div>
                {proj.description && <p style={{ fontSize: 9.5, color: '#94a3b8', marginTop: 2, lineHeight: 1.6 }}>{proj.description}</p>}
                {proj.tech?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} style={{ background: '#7c3aed20', border: '1px solid #7c3aed40', borderRadius: 999, padding: '1px 7px', fontSize: 8, color: '#c4b5fd' }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SectionTitle({ label, color }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: 1.5 }}>{label}</div>
      <div style={{ flex: 1, height: 1, background: color + '40' }} />
    </div>
  )
}
