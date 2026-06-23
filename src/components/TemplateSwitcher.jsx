const TEMPLATES = [
  { id: 'modern-dark', label: 'Modern Dark', accent: '#6366f1' },
  { id: 'classic-pro', label: 'Classic Pro', accent: '#1f2937' },
  { id: 'minimalist', label: 'Minimalist', accent: '#64748b' },
  { id: 'creative', label: 'Creative', accent: '#0d9488' },
  { id: 'executive', label: 'Executive', accent: '#1e3a5f' },
  { id: 'tech-dev', label: 'Tech / Dev', accent: '#16a34a' },
  { id: 'bold-designer', label: 'Bold Designer', accent: '#db2777' },
  { id: 'corporate-blue', label: 'Corporate Blue', accent: '#2563eb' },
  { id: 'compact', label: 'Compact', accent: '#374151' },
  { id: 'elegant', label: 'Elegant', accent: '#9f7044' },
]

export { TEMPLATES }

export default function TemplateSwitcher({ selected, onSelect, darkMode }) {
  return (
    <div className={`w-full no-print flex items-center px-2 py-3 gap-1.5 md:gap-2 md:px-3 md:pt-4 md:pb-4 border-slate-800 flex-shrink-0 backdrop-blur-lg fixed top-14 ${darkMode ? 'bg-slate-950/50 border-b' : 'bg-white shadow shadow-black-100'}`}>
      <span className={`text-sm md:text-md font-medium whitespace-nowrap flex-shrink-0 ${darkMode ? 'text-white/80' : 'text-slate-800'}`}>Template:</span>
      <div className="w-full border-l pl-2 flex gap-3 overflow-x-scroll scroll ">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            id={`template-${template.id}`}
            onClick={() => onSelect(template.id)}
            className={`
              flex-1
            flex justify-center items-center text-xs gap-1 px-2 py-1.5 md:gap-2 md:px-3 md:py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap
            border transition-all duration-150 flex-shrink-0 cursor-pointer text-black
            ${selected === template.id
                ? `border-indigo-400/50 bg-indigo-500/20 text-indigo-300 shadow-sm shadow-indigo-600/20 ${darkMode ? '' : 'text-indigo-700 bg-indigo-500/20 border-indigo-500/80'}`
                : `hover:text-slate-600 hover:border-slate-700 bg-transparent
                  ${darkMode ? "text-slate-500" : 'text-slate-800 border-slate-700/80'}`
              }
          `}
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 ring-1 ring-white/10"
              style={{ backgroundColor: template.accent }}
            />
            {template.label}
          </button>
        ))}
      </div>

    </div>
  )
}
