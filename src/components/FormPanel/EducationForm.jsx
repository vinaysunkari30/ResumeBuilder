import { useState } from 'react'
import { Plus, Trash2, ChevronDown } from 'lucide-react'

const emptyEdu = () => ({
  id: Date.now().toString(),
  institution: '',
  degree: '',
  location: '',
  startDate: '',
  endDate: '',
  gpa: '',
  highlights: [],
})

export default function EducationForm({ data, onChange, darkMode }) {
  const [open, setOpen] = useState({})
  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  const add = () => {
    const item = emptyEdu()
    onChange([...data, item])
    setOpen((s) => ({ ...s, [item.id]: true }))
  }
  const update = (i, val) => onChange(data.map((d, idx) => idx === i ? val : d))
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i))
  const set = (i, field, val) => update(i, { ...data[i], [field]: val })

  return (
    <div className="space-y-3">
      {data.map((edu, i) => (
        <div key={edu.id} className="border border-slate-700 rounded-xl overflow-hidden">
          <div
            className={`flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-slate-800 transition-colors ${darkMode ? 'bg-slate-800/80' : 'bg-slate-800'}`}
            onClick={() => toggle(edu.id)}
          >
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate text-slate-200`}>
                {edu.degree || 'New Education'} {edu.institution ? `— ${edu.institution}` : ''}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={(e) => { e.stopPropagation(); remove(i) }} className={`p-1 hover:text-red-400 transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-200'}`}>
                <Trash2 size={14} />
              </button>
              <div className={`transition-transform duration-200 ${open[edu.id] ? 'rotate-180' : ''}`}>
                <ChevronDown size={16} className={`${darkMode ? 'text-slate-400' : 'text-slate-200'}`} />
              </div>
            </div>
          </div>

          {(open[edu.id] !== false && (open[edu.id] === true || i === 0)) && (
            <div className={`p-4 space-y-3 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-300'}`}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: 'institution', label: 'Institution', placeholder: 'UC Berkeley', col: 2 },
                  { key: 'degree', label: 'Degree / Field of Study', placeholder: 'B.S. Computer Science', col: 2 },
                  { key: 'location', label: 'Location', placeholder: 'Berkeley, CA', col: 1 },
                  { key: 'gpa', label: 'GPA (optional)', placeholder: '3.8', col: 1 },
                  { key: 'startDate', label: 'Start Year', placeholder: '2013', col: 1 },
                  { key: 'endDate', label: 'End Year', placeholder: '2017', col: 1 },
                ].map(({ key, label, placeholder, col }) => (
                  <div key={key} className={col === 2 ? 'col-span-2' : ''}>
                    <label className={`block text-xs font-medium text-slate-400 mb-1 ${darkMode ? 'text-slate-400' : 'text-sm text-slate-800'}`}>{label}</label>
                    <input
                      type="text"
                      value={edu[key] || ''}
                      onChange={(e) => set(i, key, e.target.value)}
                      placeholder={placeholder}
                      className={`w-full bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm 
                        text-slate-100 focus:outline-none ${darkMode ? 'bg-slate-800/40 placeholder-slate-600' : 'bg-slate-800/80 placeholder-slate-400'}
                        focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150`}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className={`block text-xs font-medium text-slate-400 mb-1 ${darkMode ? 'text-slate-400' : 'text-sm text-slate-800'}`}>Highlights / Achievements (optional)</label>
                {(edu.highlights || []).map((h, hi) => (
                  <div key={hi} className="flex gap-2 mb-1.5">
                    <input
                      type="text"
                      value={h}
                      onChange={(e) => {
                        const next = [...(edu.highlights || [])]
                        next[hi] = e.target.value
                        set(i, 'highlights', next)
                      }}
                      placeholder="e.g. Dean's List, Summa Cum Laude..."
                      className={`flex-1 bg-slate-800/60 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100
                        ${darkMode ? 'bg-slate-800/40 placeholder-slate-600' : 'bg-slate-800/80 placeholder-slate-400'} focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all`}
                    />
                    <button
                      onClick={() => set(i, 'highlights', edu.highlights.filter((_, idx) => idx !== hi))}
                      className={`hover:text-red-500 cursor-pointer transition-colors px-2 ${darkMode ? 'text-slate-400' : 'text-slate-800'}`}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => set(i, 'highlights', [...(edu.highlights || []), ''])}
                  className={`flex items-center cursor-pointer gap-1.5 text-xs ${darkMode ? 'text-indigo-400 hover:text-indigo-300': 'text-indigo-500 font-semibold text-sm hover:text-indigo-700'}  transition-colors py-1`}
                >
                  <Plus size={13} /> Add highlight
                </button>
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
        <Plus size={16} /> Add Education
      </button>
    </div>
  )
}
