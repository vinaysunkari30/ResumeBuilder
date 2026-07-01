import { useState } from 'react'
import { Plus, Trash2, ChevronDown } from 'lucide-react'

const emptyCert = () => ({
  id: Date.now().toString(),
  name: '',
  issuer: '',
  date: '',
  credentialId: '',
})

export default function CertificationsForm({ data, onChange, darkMode }) {
  const [open, setOpen] = useState({})
  const toggle = (id) => setOpen((s) => ({ ...s, [id]: !s[id] }))

  const add = () => {
    const item = emptyCert()
    onChange([...data, item])
    setOpen((s) => ({ ...s, [item.id]: true }))
  }
  const update = (i, val) => onChange(data.map((d, idx) => idx === i ? val : d))
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i))
  const set = (i, field, val) => update(i, { ...data[i], [field]: val })

  return (
    <div className="space-y-3">
      {data.map((cert, i) => (
        <div key={cert.id} className="border border-slate-700 rounded-xl overflow-hidden">
          <div
            className={`flex items-center gap-2 px-4 py-3 bg-slate-800 cursor-pointer transition-colors`}
            onClick={() => toggle(cert.id)}
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">
                {cert.name || 'New Certification'}
              </p>
              {cert.issuer && <p className={`text-xs ${darkMode? 'text-slate-500':'text-slate-400'} `}>{cert.issuer}</p>}
            </div>
            <div className="flex items-center gap-1">
              <button onClick={(e) => { e.stopPropagation(); remove(i) }} className="p-1 cursor-pointer text-slate-200 hover:text-red-400 transition-colors">
                <Trash2 size={14} />
              </button>
              <div className={`transition-transform duration-200 ${open[cert.id] ? 'rotate-180' : ''}`}>
                <ChevronDown size={16} className="text-slate-200" />
              </div>
            </div>
          </div>

          {open[cert.id] && (
            <div className={`p-4  grid grid-cols-2 gap-3
            ${darkMode? 'bg-slate-900/40': 'bg-slate-300'}`}>
              {[
                { key: 'name', label: 'Certification Name', placeholder: 'AWS Solutions Architect', col: 2 },
                { key: 'issuer', label: 'Issuing Organization', placeholder: 'Amazon Web Services', col: 1 },
                { key: 'date', label: 'Date', placeholder: 'Mar 2024', col: 1 },
                { key: 'credentialId', label: 'Credential ID (optional)', placeholder: 'AWS-SAP-2024-12345', col: 2 },
              ].map(({ key, label, placeholder, col }) => (
                <div key={key} className={col === 2 ? 'col-span-2' : ''}>
                  <label className={`block text-xs font-medium mb-1 ${darkMode? 'text-slate-400': 'text-slate-800 font-semibold text-sm'}`}>{label}</label>
                  <input
                    type="text"
                    value={cert[key] || ''}
                    onChange={(e) => set(i, key, e.target.value)}
                    placeholder={placeholder}
                    className={`w-full ${darkMode ? 'bg-slate-800/40 placeholder-slate-600' : 'bg-slate-800/80 placeholder-slate-400'} border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100
                   focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={add}
        className={`flex items-center justify-center gap-2 w-full py-2.5 border border-dashed cursor-pointer border-slate-700
        ${darkMode ? '' : 'bg-indigo-500/20 border-indigo-400/80 hover:bg-indigo-500/30'} rounded-xl text-sm text-indigo-700 transition-all duration-200`}
      >
        <Plus size={16} /> Add Certification
      </button>
    </div>
  )
}
