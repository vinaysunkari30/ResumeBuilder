import { useState } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp, GripVertical } from 'lucide-react'

const emptyExp = () => ({
  id: Date.now().toString(),
  company: '',
  role: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  bullets: [''],
})

function BulletList({ bullets, onChange, darkMode }) {
  const update = (i, val) => {
    const next = [...bullets]
    next[i] = val
    onChange(next)
  }
  const add = () => onChange([...bullets, ''])
  const remove = (i) => onChange(bullets.filter((_, idx) => idx !== i))

  const handleKey = (e, i) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const next = [...bullets]
      next.splice(i + 1, 0, '')
      onChange(next)
      // Focus new input after re-render
      setTimeout(() => {
        const inputs = document.querySelectorAll(`[data-bullet]`)
        if (inputs[i + 1]) inputs[i + 1].focus()
      }, 50)
    }
    if (e.key === 'Backspace' && bullets[i] === '' && bullets.length > 1) {
      e.preventDefault()
      remove(i)
    }
  }

  return (
    <div className="space-y-1.5 mt-2">
      <label className={`block text-xs font-medium ${darkMode? 'text-slate-400': 'text-slate-800' }`}>Bullet Points <span className="text-slate-600">(press Enter to add new)</span></label>
      {bullets.map((b, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className={`${darkMode? 'text-slate-600': 'text-slate-900'}  mt-4.5 text-sm flex-shrink-0`}>•</span>
          <textarea
            data-bullet
            value={b}
            onChange={(e) => update(i, e.target.value)}
            onKeyDown={(e) => handleKey(e, i)}
            placeholder="Describe an achievement with measurable impact..."
            rows={2}
            className={`flex-1 ${darkMode ? 'bg-slate-800/60': 'bg-slate-800/90'} border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150 resize-none`}
          />
          {bullets.length > 1 && (
            <button
              onClick={() => remove(i)}
              className={`mt-4.5 hover:text-red-400 transition-colors p-1 ${darkMode ? 'text-slate-600': 'text-slate-800'}`}
            >
              <Trash2 size={13} />
            </button>
          )}
        </div>
      ))}
      <button
        onClick={add}
        className={`flex items-center gap-1.5 text-sm hover:text-indigo-500 font-medium transition-colors mt-1 py-1 ${darkMode ? 'text-indigo-400': 'text-indigo-900'}`}
      >
        <Plus size={13} /> Add bullet
      </button>
    </div>
  )
}

function ExpCard({ exp, index, onUpdate, onRemove, onMove, total, darkMode }) {
  const [open, setOpen] = useState(index === 0)

  const set = (field, val) => onUpdate({ ...exp, [field]: val })

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden transition-all duration-200">
      {/* Header */}
      <div
        className="flex items-center gap-2 px-4 py-3 bg-slate-800 cursor-pointer transition-colors"
        onClick={() => setOpen(!open)}
      >
        <GripVertical size={14} className={`drag-handle flex-shrink-0 ${darkMode ? 'text-slate-600' : 'text-slate-200'}`} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-200 truncate">
            {exp.role || 'New Experience'} {exp.company ? `@ ${exp.company}` : ''}
          </p>
          {exp.startDate && (
            <p className={`text-xs ${darkMode? 'text-slate-500': 'text-slate-400'}`}>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</p>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={(e) => { e.stopPropagation(); onMove(index, -1) }} disabled={index === 0} className={`p-1  ${darkMode? 'text-slate-400': 'text-slate-300'} hover:text-slate-200 disabled:opacity-30 transition-colors`}>
            <ChevronUp size={14} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onMove(index, 1) }} disabled={index === total - 1} className={`p-1 ${darkMode? 'text-slate-400': 'text-slate-300'} hover:text-slate-200 disabled:opacity-30 transition-colors`}>
            <ChevronDown size={14} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onRemove() }} className={`p-1 ${darkMode? 'text-slate-400': 'text-slate-300'} hover:text-red-200 cursor-pointer transition-colors ml-1`}>
            <Trash2 size={14} />
          </button>
          <div className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <ChevronDown size={16} className={`${darkMode? 'text-slate-400': 'text-slate-300'}`} />
          </div>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="p-4 bg-slate-800/10 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: 'role', label: 'Job Title', placeholder: 'Senior Engineer', col: 2 },
              { key: 'company', label: 'Company', placeholder: 'Stripe', col: 1 },
              { key: 'location', label: 'Location', placeholder: 'SF, CA or Remote', col: 1 },
              { key: 'startDate', label: 'Start Date', placeholder: 'Jan 2022', col: 1 },
            ].map(({ key, label, placeholder, col }) => (
              <div key={key} className={col === 2 ? 'col-span-2' : ''}>
                <label className={`block text-xs font-medium ${darkMode? 'text-slate-400': 'text-sm text-slate-800' } mb-1`}>{label}</label>
                <input
                  type="text"
                  value={exp[key] || ''}
                  onChange={(e) => set(key, e.target.value)}
                  placeholder={placeholder}
                  className={`w-full ${darkMode ? 'bg-slate-800/40' : 'bg-slate-800/80'} border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600
                   focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150`}
                />
              </div>
            ))}
            <div>
              <label className={`block text-xs ${darkMode? 'text-slate-400': 'text-slate-800' } font-medium mb-1`}>End Date</label>
              <input
                type="text"
                value={exp.endDate || ''}
                onChange={(e) => set('endDate', e.target.value)}
                placeholder="Dec 2024"
                disabled={exp.current}
                className={`w-full ${darkMode? 'bg-slate-800/40': 'bg-slate-800/80'} border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150 disabled:opacity-40`}
              />
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={exp.current || false}
              onChange={(e) => set('current', e.target.checked)}
              className="w-4 h-4 accent-indigo-500 rounded "
            />
            <span className={`text-sm ${darkMode? 'text-slate-400': 'text-slate-800' }`}>Currently working here</span>
          </label>

          <BulletList
            bullets={exp.bullets || ['']}
            onChange={(bullets) => set('bullets', bullets)}
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  )
}

export default function ExperienceForm({ data, onChange, darkMode }) {
  const add = () => onChange([...data, emptyExp()])
  const update = (i, val) => onChange(data.map((d, idx) => idx === i ? val : d))
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i))
  const move = (i, dir) => {
    const next = [...data]
    const j = i + dir
    if (j < 0 || j >= next.length) return
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  return (
    <div className="space-y-3">
      {data.map((exp, i) => (
        <ExpCard
          key={exp.id}
          exp={exp}
          index={i}
          total={data.length}
          onUpdate={(val) => update(i, val)}
          onRemove={() => remove(i)}
          onMove={move}
          darkMode={darkMode}
        />
      ))}
      <button
        onClick={add}
        className={`flex items-center justify-center gap-2 w-full py-2.5 border border-dashed cursor-pointer border-slate-700
        ${darkMode ? '' : 'bg-indigo-500/20 border-indigo-400/80 hover:bg-indigo-500/30'} rounded-xl text-sm text-indigo-700 transition-all duration-200`}>
        <Plus size={16} /> Add Experience
      </button>
    </div>
  )
}
