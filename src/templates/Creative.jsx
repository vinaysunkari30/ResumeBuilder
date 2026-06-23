export default function Creative({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#fff', color: '#222', display: 'flex', minHeight: '297mm' }}>
      {/* Colored Sidebar */}
      <div style={{ width: '32%', background: 'linear-gradient(180deg, #0d9488 0%, #0f766e 100%)', padding: '36px 20px', color: 'white', flexShrink: 0 }}>
        {/* Initials circle */}
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 14 }}>
          {(personal.name || 'R').split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, color: 'white', letterSpacing: -0.5, marginBottom: 2 }}>{personal.name || 'Your Name'}</div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.75)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>{personal.title || ''}</div>

        {/* Contact */}
        <SideBlock title="Contact" light>
          {[
            { label: '✉', val: personal.email },
            { label: '📞', val: personal.phone },
            { label: '📍', val: personal.location },
            { label: 'in', val: personal.linkedin },
            { label: '⌥', val: personal.github },
            { label: '🌐', val: personal.website },
          ].filter(x => x.val).map(({ label, val }) => (
            <div key={val} style={{ marginBottom: 6, fontSize: 9 }}>
              <span style={{ opacity: 0.7, marginRight: 5 }}>{label}</span>
              <span style={{ wordBreak: 'break-all' }}>{val}</span>
            </div>
          ))}
        </SideBlock>

        {/* Skills */}
        {Object.keys(skills).length > 0 && (
          <SideBlock title="Skills" light>
            {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
              <div key={cat} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.7, marginBottom: 4 }}>{cat}</div>
                {list.map((s, i) => (
                  <div key={i} style={{ marginBottom: 3 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: 9 }}>{s}</span>
                    </div>
                    <div style={{ height: 2, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                      <div style={{ width: '80%', height: '100%', background: 'rgba(255,255,255,0.8)', borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </SideBlock>
        )}

        {certifications.length > 0 && (
          <SideBlock title="Certifications" light>
            {certifications.map((c) => (
              <div key={c.id} style={{ marginBottom: 7, fontSize: 9 }}>
                <div style={{ fontWeight: 600 }}>{c.name}</div>
                <div style={{ opacity: 0.7 }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</div>
              </div>
            ))}
          </SideBlock>
        )}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {summary && (
          <div>
            <MainSection title="About Me" accent="#0d9488" />
            <p style={{ fontSize: 10.5, color: '#555', lineHeight: 1.7 }}>{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <MainSection title="Experience" accent="#0d9488" />
            {experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: 14, paddingLeft: 12, borderLeft: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: '#111' }}>{exp.role}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: '#0d9488', fontWeight: 600 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</span>
                  <span style={{ fontSize: 9, color: '#888' }}>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                {exp.bullets?.filter(b => b).map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 2 }}>
                    <span style={{ color: '#0d9488', fontSize: 9, marginTop: 2 }}>›</span>
                    <span style={{ fontSize: 9.5, color: '#444', lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div>
            <MainSection title="Education" accent="#0d9488" />
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid #e2e8f0' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>{edu.degree}</div>
                <div style={{ fontSize: 10, color: '#0d9488', fontWeight: 500 }}>{edu.institution}</div>
                <div style={{ fontSize: 9.5, color: '#888' }}>{edu.location}{edu.startDate ? ` · ${edu.startDate}` : ''}{edu.endDate ? ` – ${edu.endDate}` : ''}{edu.gpa ? ` · GPA: ${edu.gpa}` : ''}</div>
              </div>
            ))}
          </div>
        )}

        {projects.length > 0 && (
          <div>
            <MainSection title="Projects" accent="#0d9488" />
            {projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '2px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#111' }}>{proj.name}</span>
                  {proj.link && <span style={{ fontSize: 9, color: '#0d9488' }}>{proj.link}</span>}
                </div>
                {proj.description && <p style={{ fontSize: 9.5, color: '#555', margin: '2px 0', lineHeight: 1.6 }}>{proj.description}</p>}
                {proj.tech?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 4 }}>
                    {proj.tech.map((t, i) => <span key={i} style={{ background: '#f0fdfb', border: '1px solid #99f6e4', borderRadius: 4, padding: '1px 6px', fontSize: 8, color: '#0f766e' }}>{t}</span>)}
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

function SideBlock({ title, children, light }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: 'rgba(255,255,255,0.6)', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 4 }}>{title}</div>
      {children}
    </div>
  )
}

function MainSection({ title, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <span style={{ display: 'inline-block', width: 16, height: 3, background: accent, borderRadius: 2 }} />
      <span style={{ fontSize: 11, fontWeight: 800, color: '#111', textTransform: 'uppercase', letterSpacing: 1.2 }}>{title}</span>
    </div>
  )
}
