export default function SummaryForm({ value, onChange, darkMode }) {
  const maxLen = 600
  const len = (value || '').length

  return (
    <div>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write a 2–4 sentence overview of your professional background, key strengths, and career goals..."
        rows={5}
        maxLength={maxLen}
        className={`w-full border ${darkMode? 'bg-slate-800/60 placeholder-slate-600': 'bg-slate-700/90 placeholder-slate-400'} rounded-lg px-3 py-2.5 text-sm 
        text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150 resize-none`}
      />
      <div className="flex justify-end mt-1">
        <span className={`text-xs ${len > maxLen * 0.9 ? 'text-amber-400' : 'text-slate-600'}`}>
          {len} / {maxLen}
        </span>
      </div>
    </div>
  )
}
