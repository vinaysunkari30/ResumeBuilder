import { useState } from 'react'
import { User, Briefcase, GraduationCap, Wrench, FolderGit2, RotateCcw, Sparkles, Award, ChevronDown, ChevronUp } from 'lucide-react'
import { demoData, emptyData } from '../../data/demoData'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import PersonalInfo from './PersonalInfo'
import SummaryForm from './SummaryForm'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'
import ProjectsForm from './ProjectsForm'
import CertificationsForm from './CertificationsForm'

const SECTIONS = [
  { id: 'personal', label: 'Personal Info', icon: User, color: 'text-blue-400' },
  { id: 'summary', label: 'Summary', icon: ChevronUp, color: 'text-purple-400' },
  { id: 'experience', label: 'Experience', icon: Briefcase, color: 'text-indigo-400' },
  { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-green-400' },
  { id: 'skills', label: 'Skills', icon: Wrench, color: 'text-yellow-400' },
  { id: 'projects', label: 'Projects', icon: FolderGit2, color: 'text-pink-400' },
  { id: 'certifications', label: 'Certifications', icon: Award, color: 'text-orange-400' },
]

function completionScore(data) {
  let filled = 0
  const total = 7

  if (data.personal?.name && data.personal?.email) filled++
  if (data.summary?.length > 20) filled++
  if (data.experience?.length > 0) filled++
  if (data.education?.length > 0) filled++
  if (Object.values(data.skills || {}).some((arr) => arr.length > 0)) filled++
  if (data.projects?.length > 0) filled++
  if (data.certifications?.length > 0) filled++

  return Math.round((filled / total) * 100)
}

export default function FormPanel({data, onChange, darkMode }) {
  const [openSections, setOpenSections] = useState({ personal: true })

  const toggle = (id) => setOpenSections((s) => ({ ...s, [id]: !s[id] }))

  const score = completionScore(data)

  const renderSection = (id) => {
    switch (id) {
      case 'personal': return <PersonalInfo data={data.personal} onChange={(v) => onChange({ ...data, personal: v })} darkMode={darkMode} />
      case 'summary': return <SummaryForm value={data.summary} onChange={(v) => onChange({ ...data, summary: v })} darkMode={darkMode} />
      case 'experience': return <ExperienceForm data={data.experience} onChange={(v) => onChange({ ...data, experience: v })} darkMode={darkMode} />
      case 'education': return <EducationForm data={data.education} onChange={(v) => onChange({ ...data, education: v })} darkMode={darkMode} />
      case 'skills': return <SkillsForm data={data.skills} onChange={(v) => onChange({ ...data, skills: v })} darkMode={darkMode} />
      case 'projects': return <ProjectsForm data={data.projects} onChange={(v) => onChange({ ...data, projects: v })} darkMode={darkMode} />
      case 'certifications': return <CertificationsForm data={data.certifications} onChange={(v) => onChange({ ...data, certifications: v })} darkMode={darkMode} />
      default: return null
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <div className={`px-5 py-4 pt-3 md:pt-6 ${darkMode ? "border-b border-slate-800" : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-1.5">
          <span className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>Completion</span>
          <span className={`text-xs font-bold ${darkMode ? "text-indigo-400" : "text-indigo-500"}`}>{score}%</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full progress-gradient rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      <div className={`flex-1 overflow-y-auto px-4 pb-20 md:pb-11 space-y-3 ${darkMode ? "" : "bg-white"}`}>
        {SECTIONS.map(({ id, label, icon: Icon, color }) => (
          <div key={id} className="rounded-xl overflow-hidden border border-slate-800/80">
            {/* Section Header */}
            <button
              onClick={() => toggle(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 md:py-3.5 ${darkMode ? 'bg-slate-900/60' : `bg-slate-800 ${openSections[id] ? 'hover:bg-slate-800' : ''}`} hover:bg-slate-700/90 cursor-pointer transition-colors text-left`}
            >
              <Icon size={16} className={color} />
              <span className="flex-1 text-md font-semibold text-slate-300">{label}</span>
              <div className={`transition-transform duration-200 ${openSections[id] ? 'rotate-180' : ''}`}>
                <ChevronDown size={15} className="text-slate-400" />
              </div>
            </button>

            {/* Section Body */}
            {openSections[id] && (
              <div className={`px-4 py-4 ${darkMode ? "bg-slate-900/50" : "bg-slate-300"} border-t border-slate-800/60`}>
                {renderSection(id)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
