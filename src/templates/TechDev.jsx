export default function TechDev({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data
  const GREEN = '#4ade80'
  const DIM = '#86efac'

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: "'JetBrains Mono', 'Consolas', monospace", background: '#0d1117', color: '#c9d1d9', minHeight: '297mm', padding: 0 }}>
      {/* Terminal Header */}
      <div style={{ background: '#161b22', borderBottom: '1px solid #30363d', padding: '20px 36px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
          <span style={{ width: 10, height: 10, background: '#ff5f57', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, background: '#febc2e', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ width: 10, height: 10, background: '#28c840', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: 9, color: '#484f58', marginLeft: 8 }}>resume.sh — zsh</span>
        </div>
        <div style={{ color: GREEN, fontSize: 11, marginBottom: 4 }}>
          <span style={{ color: '#79c0ff' }}>→</span> <span style={{ color: DIM }}>whoami</span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#e6edf3', letterSpacing: -0.5, marginBottom: 3 }}>{personal.name || 'Your Name'}</div>
        <div style={{ fontSize: 10, color: GREEN, marginBottom: 10 }}># {personal.title || 'Developer'}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 20px', fontSize: 9, color: '#8b949e' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => (
            <span key={i}><span style={{ color: '#79c0ff' }}>$</span> {v}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 36px', display: 'flex', gap: 24 }}>
        {/* Left column */}
        <div style={{ width: '38%', flexShrink: 0 }}>
          {Object.keys(skills).length > 0 && (
            <TBlock title="skills" color={GREEN}>
              {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
                <div key={cat} style={{ marginBottom: 8 }}>
                  <div style={{ color: '#79c0ff', fontSize: 8.5, marginBottom: 3 }}>{`/* ${cat} */`}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {list.map((s, i) => (
                      <span key={i} style={{ background: '#16201d', border: '1px solid #4ade8030', borderRadius: 3, padding: '1px 6px', fontSize: 8, color: GREEN }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </TBlock>
          )}

          {education.length > 0 && (
            <TBlock title="education" color={GREEN}>
              {education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#e6edf3' }}>{edu.degree}</div>
                  <div style={{ fontSize: 9, color: GREEN }}>{edu.institution}</div>
                  <div style={{ fontSize: 8.5, color: '#484f58' }}>{edu.location}{edu.startDate ? ` · ${edu.startDate}` : ''}{edu.endDate ? ` - ${edu.endDate}` : ''}{edu.gpa ? ` · ${edu.gpa}` : ''}</div>
                </div>
              ))}
            </TBlock>
          )}

          {certifications.length > 0 && (
            <TBlock title="certifications" color={GREEN}>
              {certifications.map((c) => (
                <div key={c.id} style={{ marginBottom: 7 }}>
                  <div style={{ fontSize: 9.5, color: '#e6edf3', fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 8.5, color: '#484f58' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
                </div>
              ))}
            </TBlock>
          )}
        </div>

        {/* Right column */}
        <div style={{ flex: 1 }}>
          {summary && (
            <TBlock title="summary" color={GREEN}>
              <p style={{ fontSize: 9.5, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>{summary}</p>
            </TBlock>
          )}

          {experience.length > 0 && (
            <TBlock title="experience" color={GREEN}>
              {experience.map((exp) => (
                <div key={exp.id} style={{ marginBottom: 14, paddingBottom: 12, borderBottom: '1px solid #21262d' }}>
                  <div style={{ color: '#79c0ff', fontSize: 8.5, marginBottom: 2 }}>{`// ${exp.startDate} - ${exp.current ? 'present' : exp.endDate}`}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#e6edf3', marginBottom: 1 }}>{exp.role}</div>
                  <div style={{ fontSize: 9.5, color: GREEN, marginBottom: 5 }}>@{exp.company}{exp.location ? ` (${exp.location})` : ''}</div>
                  {exp.bullets?.filter(b => b).map((b, i) => (
                    <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 2 }}>
                      <span style={{ color: '#79c0ff', fontSize: 9 }}>›</span>
                      <span style={{ fontSize: 9, color: '#8b949e', lineHeight: 1.6 }}>{b}</span>
                    </div>
                  ))}
                </div>
              ))}
            </TBlock>
          )}

          {projects.length > 0 && (
            <TBlock title="projects" color={GREEN}>
              {projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: '#e6edf3' }}>⟨ {proj.name} ⟩</span>
                    {proj.link && <span style={{ fontSize: 8.5, color: '#79c0ff' }}>{proj.link}</span>}
                  </div>
                  {proj.description && <p style={{ fontSize: 9, color: '#8b949e', margin: '2px 0', lineHeight: 1.6 }}>{proj.description}</p>}
                  {proj.tech?.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 4 }}>
                      {proj.tech.map((t, i) => <span key={i} style={{ background: '#16201d', border: '1px solid #4ade8025', borderRadius: 3, padding: '1px 6px', fontSize: 7.5, color: DIM }}>{t}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </TBlock>
          )}
        </div>
      </div>
    </div>
  )
}

function TBlock({ title, children, color }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ color: color, fontSize: 9, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ color: '#79c0ff' }}>fn</span> {title}() {'{'}
      </div>
      <div style={{ paddingLeft: 12, borderLeft: `2px solid ${color}30` }}>
        {children}
      </div>
      <div style={{ color: color, fontSize: 9, marginTop: 4 }}>{'}'}</div>
    </div>
  )
}
