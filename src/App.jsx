import { useRef, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { emptyData, demoData } from './data/demoData'
import Navbar from './components/Navbar'
import TemplateSwitcher from './components/TemplateSwitcher'
import FormPanel from './components/FormPanel/FormPanel'
import PreviewPanel from './components/PreviewPanel'
import './index.css'

const MOBILE_TABS = ['Edit', 'Preview']

export default function App() {
  const [resumeData, setResumeData] = useLocalStorage('resumebuilder-data', emptyData)
  const [template, setTemplate] = useLocalStorage('resumebuilder-template', 'modern-dark')
  const [darkMode, setDarkMode] = useLocalStorage('resumebuilder-dark', true)
  const [mobileTab, setMobileTab] = useState('Edit')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const printRef = useRef(null)

  const handleLoadDemo = () => setResumeData(demoData)

  const handleReset = () => {
    if (showResetConfirm) {
      setResumeData(emptyData)
      setShowResetConfirm(false)
    } else {
      setShowResetConfirm(true)
      setTimeout(() => setShowResetConfirm(false), 3000)
    }
  }

  return (
    <div
      id="app-root"
      className={`${darkMode ? 'dark' : ''} flex flex-col h-screen`}
      style={{ background: darkMode ? '#020617' : '#f1f5f9' }}
    >
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        onLoadDemo={handleLoadDemo}
        onReset={handleReset}
        printRef={printRef}
      />

      {/* Reset confirmation toast */}
      {showResetConfirm && (
        <div className="no-print fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white text-xs md:text-sm w-55 py-2 text-center md:px-4 md:py-2 rounded-lg shadow-xl animate-bounce">
          Click again to confirm clear all data
        </div>
      )}

      {/* Template Switcher */}
      <TemplateSwitcher selected={template} onSelect={setTemplate} darkMode={darkMode} />

      {/* Mobile tab bar */}
      <div className="no-print md:hidden flex border-b border-slate-800 bg-slate-950 flex-shrink-0 mt-13.5">
        {MOBILE_TABS.map((tab) => (
          <button
            key={tab}
            id={`mobile-tab-${tab.toLowerCase()}`}
            onClick={() => setMobileTab(tab)}
            className={`flex-1 py-2 cursor-pointer text-md font-semibold transition-all ${mobileTab === tab
              ? 'text-indigo-400 border-b-2 border-indigo-400'
              : 'text-slate-500'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className='absolute bottom-15 z-50 rounded-2xl animate-bounce btn-shadow'>
          <button className={`bg-emerald-400 px-3 text-sm font-semibold py-3 rounded-2xl text-white cursor-pointer md:text-[16px]`}>Built for Digital Heroes</button>
        </a>
      </div>
      <div className='flex justify-center items-center px-10'>
        <div className='flex justify-center items-center gap-4 absolute z-50 bottom-33.5 py-2.5 px-3 bg-cyan-600 rounded-2xl'>
          <h1 className={`text-sm text-white font-semibold md:text-md`}>Vinay Sunkari</h1>
          <div className='border border-1.5 h-6 border-emerald-200'></div>
          <a href="mailto:sunkarivinay68@gmail.com" target="_blank" className='rounded-2xl'>
            <button className='text-sm font-semibold rounded-xl text-white cursor-pointer md:text-md mb-1'>sunkarivinay68@gmail</button>
          </a>
        </div>
      </div>

      {/* Form Panel and Preview */}
      <div className="flex flex-1 overflow-hidden md:mt-15">
        {/* Form Panel */}
        <aside
          id="form-panel"
          className={`
            no-print
            ${mobileTab === 'Edit' ? 'flex' : 'hidden'}
            md:flex flex-col
            w-full md:w-[350px] lg:w-[440px]
            overflow-x-auto flex-shrink-0 min-h-0
            ${darkMode ? 'bg-slate-950 border-r border-slate-900' : 'bg-white'}
          `}
          style={{ height: 'calc(100dvh - 96px)' }}
        >
          <FormPanel data={resumeData} onChange={setResumeData} darkMode={darkMode} />
        </aside>
        {/* Preview Panel */}
        <main
          id="preview-panel"
          className={`
            ${mobileTab === 'Preview' ? 'flex' : 'hidden'}
            md:flex flex-col flex-1 py-2 pb-3 min-h-0 overflow-hidden
          `}
          style={{ height: 'calc(100dvh - 96px)' }}
        >
          <PreviewPanel
            data={resumeData}
            template={template}
            printRef={printRef}
            darkMode={darkMode}
          />
        </main>
      </div>
    </div>
  )
}
