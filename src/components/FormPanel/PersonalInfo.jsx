import { User, Mail, Phone, MapPin, Globe } from 'lucide-react'

const Github = ({ size = 14, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = ({ size = 14, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function PersonalInfo({ data, onChange, darkMode }) {
  const handle = (field) => (e) => onChange({ ...data, [field]: e.target.value })

  const fields = [
    { key: 'name', label: 'Full Name', placeholder: 'Alexandra Chen', icon: User, col: 2 },
    { key: 'title', label: 'Professional Title', placeholder: 'Senior Software Engineer', icon: null, col: 2 },
    { key: 'email', label: 'Email', placeholder: 'alex@email.com', icon: Mail, col: 1 },
    { key: 'phone', label: 'Phone', placeholder: '+1 (555) 234-5678', icon: Phone, col: 1 },
    { key: 'location', label: 'Location', placeholder: 'San Francisco, CA', icon: MapPin, col: 2 },
    { key: 'linkedin', label: 'LinkedIn', placeholder: 'linkedin.com/in/yourname', icon: Linkedin, col: 1 },
    { key: 'github', label: 'GitHub', placeholder: 'github.com/yourname', icon: Github, col: 1 },
    { key: 'website', label: 'Website / Portfolio', placeholder: 'yoursite.dev', icon: Globe, col: 2 },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {fields.map(({ key, label, placeholder, icon: Icon, col }) => (
        <div key={key} className={`${col === 2 ? 'col-span-2' : 'col-span-1'}`}>
          <label className={`block text-sm font-semibold ${darkMode? "text-slate-400": "text-slate-800"} mb-1`}>{label}</label>
          <div className="relative">
            {Icon && (
              <Icon size={14} className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode? 'text-slate-400': 'text-slate-400'} pointer-events-none`} />
            )}
            <input
              type="text"
              value={data[key] || ''}
              onChange={handle(key)}
              placeholder={placeholder}
              className={`w-full ${darkMode? 'bg-slate-800/60 placeholder-slate-600': 'bg-slate-700/90 placeholder-slate-400'} border border-slate-700 rounded-lg py-2 pr-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-150 ${Icon ? 'pl-9' : 'pl-3'}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
