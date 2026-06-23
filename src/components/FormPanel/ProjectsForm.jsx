import { useState } from 'react'
import { Plus, Trash2, ChevronDown, X } from 'lucide-react'

const emptyProject = () => ({
  id: Date.now().toString(),
  name: '',
  description: '',
  link: '',
  tech: [],
})

export default function ProjectsForm({ data, onChange, darkMode }) {
  const [open, setOpen] = useState({})
  const [techInput, setTechInput] = useState({})

  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))
  const add = () => {
    const item = emptyProject()
    onChange([...data, item])
    setOpen((s) => ({ ...s, [item.id]: true }))
  }
  const update = (i, val) => onChange(data.map((d, idx) => idx === i ? val : d))
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i))
  const set = (i, field, val) => update(i, { ...data[i], [field]: val })

  const addTech = (i, id) => {
    const t = (techInput[id] || '').trim()
    if (!t) return
    set(i, 'tech', [...(data[i].tech || []), t])
    setTechInput((s) => ({ ...s, [id]: '' }))
  }

  const removeTech = (i, ti) => set(i, 'tech', data[i].tech.filter((_, idx) => idx !== ti))

  return (
    <div className="space-y-3">
      {data.map((proj, i) => (
        <div key={proj.id} className="border border-slate-700 rounded-xl overflow-hidden">
          <div
            className={`flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors
            ${darkMode ? 'bg-slate-800/80 hover:bg-slate-800' : 'bg-slate-800'}`}
            onClick={() => toggle(proj.id)}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">{proj.name || 'New Project'}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={(e) => { e.stopPropagation(); remove(i) }} className={`p-1 hover:text-red-400 transition-colors ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>
                <Trash2 size={14} />
              </button>
              <div className={`transition-transform duration-200 ${open[proj.id] ? 'rotate-180' : ''}`}>
                <ChevronDown size={16} className={`${darkMode ? "text-slate-500" : 'text-slate-300'}`} />
              </div>
            </div>
          </div>

          {open[proj.id] && (
            <div className={`${darkMode ? 'bg-slate-900/40' : 'bg-slate-300'} p-4 space-y-3`}>
              {[
                { key: 'name', label: 'Project Name', placeholder: 'OpenResume' },
                { key: 'link', label: 'Link (GitHub / Live)', placeholder: 'github.com/you/project' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className={`block text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-800'} mb-1`}>{label}</label>
                  <input
                    type="text"
                    value={proj[key] || ''}
                    onChange={(e) => set(i, key, e.target.value)}
                    placeholder={placeholder}
                    className={`w-full border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100
                    placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all
                    ${darkMode ? 'bg-slate-800/40' : 'bg-slate-800/80'}`}
                  />
                </div>
              ))}

              <div>
                <label className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-800'}`}>Description</label>
                <textarea
                  value={proj.description || ''}
                  onChange={(e) => set(i, 'description', e.target.value)}
                  placeholder="What the project does and your role in it..."
                  rows={3}
                  className={`${darkMode ? 'bg-slate-800/40' : 'bg-slate-800/80'} w-full border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all resize-none`}
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-800'}`}>Tech Stack</label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {(proj.tech || []).map((t, ti) => (
                    <span key={ti} className={`inline-flex items-center gap-1.5 ${darkMode ? 'bg-violet-500/15 border border-violet-500/30 text-violet-300' : 'bg-violet-500/15 border border-violet-600 text-violet-600'} px-2.5 py-1 rounded-full text-xs font-medium`}>
                      {t}
                      <button onClick={() => removeTech(i, ti)} className={`hover:text-red-400 transition-colors cursor-pointer`}>
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={techInput[proj.id] || ''}
                    onChange={(e) => setTechInput((s) => ({ ...s, [proj.id]: e.target.value }))}
                    onKeyDown={(e) => e.key === 'Enter' && addTech(i, proj.id)}
                    placeholder="React, Node.js, PostgreSQL..."
                    className={`flex-1 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100
                    placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all
                    ${darkMode ? 'bg-slate-800/60' : 'bg-slate-200 text-slate-900'}`}
                  />
                  <button
                    onClick={() => addTech(i, proj.id)}
                    className="px-3 py-1.5 bg-violet-600 cursor-pointer hover:bg-violet-500 text-white rounded-lg text-xs font-medium transition-colors"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <button
        onClick={add}
        className={`flex items-center justify-center gap-2 w-full py-2.5 border border-dashed cursor-pointer border-slate-700
        ${darkMode ? '' : 'bg-indigo-500/20 border-indigo-400/80 hover:bg-indigo-500/30'} rounded-xl text-sm text-indigo-700 transition-all duration-200`}
      >
        <Plus size={16} /> Add Project
      </button>
    </div >
  )
}
