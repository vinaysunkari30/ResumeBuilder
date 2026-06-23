export default function Minimalist({ data }) {
  const { personal = {}, summary, experience = [], education = [], skills = {}, projects = [], certifications = [] } = data

  return (
    <div className="resume-page template-fade-in" style={{ fontFamily: 'Inter, sans-serif', background: '#ffffff', color: '#1a1a1a', padding: '48px 52px' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 300, letterSpacing: -1, color: '#111', margin: 0, marginBottom: 4 }}>{personal.name || 'Your Name'}</h1>
        {personal.title && <div style={{ fontSize: 13, color: '#666', fontWeight: 400, marginBottom: 12 }}>{personal.title}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', fontSize: 9.5, color: '#888' }}>
          {[personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website].filter(Boolean).map((v, i) => (
            <span key={i}>{v}</span>
          ))}
        </div>
      </div>

      {summary && <Block title="About"><p style={{ fontSize: 10.5, color: '#444', lineHeight: 1.75, margin: 0 }}>{summary}</p></Block>}

      {experience.length > 0 && (
        <Block title="Experience">
          {experience.map((exp, idx) => (
            <div key={exp.id} style={{ marginBottom: idx < experience.length - 1 ? 18 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 1 }}>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#111' }}>{exp.role}</span>
                <span style={{ fontSize: 9.5, color: '#888' }}>{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div style={{ fontSize: 10, color: '#888', marginBottom: 6 }}>{exp.company}{exp.location ? ` · ${exp.location}` : ''}</div>
              {exp.bullets?.filter(b => b).map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 3 }}>
                  <span style={{ color: '#ccc', fontSize: 9 }}>—</span>
                  <span style={{ fontSize: 10, color: '#444', lineHeight: 1.65 }}>{b}</span>
                </div>
              ))}
            </div>
          ))}
        </Block>
      )}

      {education.length > 0 && (
        <Block title="Education">
          {education.map((edu) => (
            <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{edu.degree}</div>
                <div style={{ fontSize: 10, color: '#888' }}>{edu.institution}{edu.location ? ` · ${edu.location}` : ''}</div>
              </div>
              <div style={{ fontSize: 9.5, color: '#aaa', textAlign: 'right' }}>
                {edu.startDate}{edu.endDate ? ` – ${edu.endDate}` : ''}
                {edu.gpa && <div>GPA {edu.gpa}</div>}
              </div>
            </div>
          ))}
        </Block>
      )}

      {Object.keys(skills).length > 0 && (
        <Block title="Skills">
          {Object.entries(skills).map(([cat, list]) => list.length > 0 && (
            <div key={cat} style={{ display: 'flex', gap: 10, marginBottom: 5, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 9.5, fontWeight: 600, color: '#888', minWidth: 80, paddingTop: 1 }}>{cat}</span>
              <span style={{ fontSize: 10, color: '#444' }}>{list.join(' · ')}</span>
            </div>
          ))}
        </Block>
      )}

      {projects.length > 0 && (
        <Block title="Projects">
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{proj.name}</span>
                {proj.link && <span style={{ fontSize: 9, color: '#aaa' }}>{proj.link}</span>}
              </div>
              {proj.description && <p style={{ fontSize: 10, color: '#555', margin: '2px 0', lineHeight: 1.6 }}>{proj.description}</p>}
              {proj.tech?.length > 0 && <div style={{ fontSize: 9, color: '#aaa', marginTop: 2 }}>{proj.tech.join(' · ')}</div>}
            </div>
          ))}
        </Block>
      )}

      {certifications.length > 0 && (
        <Block title="Certifications">
          {certifications.map((c) => (
            <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: 10.5, color: '#222' }}>{c.name}</span>
              <span style={{ fontSize: 9.5, color: '#888' }}>{c.issuer}{c.date ? ` · ${c.date}` : ''}</span>
            </div>
          ))}
        </Block>
      )}
    </div>
  )
}

function Block({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#bbb', marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  )
}
