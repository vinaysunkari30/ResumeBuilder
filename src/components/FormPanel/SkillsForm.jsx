import { useState } from 'react'
import { Plus, X } from 'lucide-react'

export default function SkillsForm({ data, onChange, darkMode }) {
  const [newCategory, setNewCategory] = useState('')
  const [newSkills, setNewSkills] = useState({})

  const addCategory = () => {
    const cat = newCategory.trim()
    if (!cat || data[cat]) return
    onChange({ ...data, [cat]: [] })
    setNewCategory('')
  }

  const removeCategory = (cat) => {
    const next = { ...data }
    delete next[cat]
    onChange(next)
  }

  const addSkill = (cat) => {
    const skill = (newSkills[cat] || '').trim()
    if (!skill) return
    onChange({ ...data, [cat]: [...(data[cat] || []), skill] })
    setNewSkills((s) => ({ ...s, [cat]: '' }))
  }

  const removeSkill = (cat, idx) => {
    onChange({ ...data, [cat]: data[cat].filter((_, i) => i !== idx) })
  }

  const handleSkillKey = (e, cat) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill(cat)
    }
  }

  return (
    <div className="space-y-4">
      {Object.entries(data).map(([cat, skills]) => (
        <div key={cat} className={`border border-slate-700 rounded-xl p-4 ${darkMode ? 'bg-slate-800/40' : 'bg-slate-400/40'}`}>
          <div className="flex items-center justify-between mb-3">
            <span className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-950 underline decoration-1'}`}>{cat}</span>
            <button
              onClick={() => removeCategory(cat)}
              className={`hover:text-red-400 cursor-pointer transition-colors p-1 ${darkMode ? 'text-slate-600' : 'text-slate-200'}`}
            >
              <X size={15} />
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 bg-indigo-500/15
                border border-indigo-500/30  px-2.5 py-1 rounded-full text-xs font-medium
                ${darkMode? 'text-indigo-300':'text-indigo-600/90 border-indigo-500/50 bg-indigo-500/20'}`}
              >
                {skill}
                <button
                  onClick={() => removeSkill(cat, i)}
                  className="hover:text-red-400 cursor-pointer transition-colors"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={newSkills[cat] || ''}
              onChange={(e) => setNewSkills((s) => ({ ...s, [cat]: e.target.value }))}
              onKeyDown={(e) => handleSkillKey(e, cat)}
              placeholder="Type skill and press Enter..."
              className={`flex-1 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-100
               ${darkMode? 'bg-slate-800/60 placeholder-slate-600': 'bg-slate-100/80 placeholder-slate-500'}
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all`}
            />
            <button
              onClick={() => addSkill(cat)}
              className="px-3 py-1.5 bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      ))}

      <div className="flex gap-2 md:w-full">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addCategory()}
          placeholder="New category (e.g. Languages, Tools...)"
          className={`flex-1 w-full rounded-xl px-3 py-2 text-sm border border-dashed text-slate-400 placeholder-slate-600 
          focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all
          ${darkMode ? 'bg-slate-800/60 border-slate-700':'bg-slate-500/30 placeholder-slate-50 border-slate-800'}`}
        />
        <button
          onClick={addCategory}
          className={`flex items-center gap-1.5 px-4 py-2 bg-slate-800 border border-slate-700
          rounded-xl text-sm font-medium transition-all cursor-pointer ${darkMode?'text-slate-400':'text-slate-100'}`}
        >
          <Plus size={15} /> Category
        </button>
      </div>
    </div>
  )
}
