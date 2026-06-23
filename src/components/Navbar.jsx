import { useReactToPrint } from 'react-to-print'
import { FileDown, Sun, Moon, RotateCcw, Sparkles, FileText } from 'lucide-react'

export default function Navbar({ darkMode, onToggleDark, onLoadDemo, onReset, printRef }) {
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'My Resume',
    pageStyle: `
      @page { size: A4; margin: 0; }
      @media print {
        body { margin: 0; }
        .no-print { display: none !important; }
      }
    `,
  })

  return (
    <header className={`no-print flex items-center justify-between px-1.5 md:px-3 h-14 w-full
     border-slate-800 ${darkMode ? 'bg-slate-950/80 border-b' : 'bg-white shadow shadow-slate-400'} backdrop-blur-lg sticky top-0 z-50 flex-shrink-0`}>
      {/* Logo */}
      <div className="flex items-center justify-evenly gap-1 md:gap-2.5">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <FileText size={18} className="text-white" />
        </div>
        <div className='md:flex ml-0.5 md:ml-0'>
          <h1 className={`font-bold text-[12px] flex-col md:text-lg tracking-tight ${darkMode ? 'text-slate-100' : 'text-slate-950/90'}`}>
            Resume
          </h1>
          <h1 className="text-indigo-400 text-[12px] md:text-lg tracking-tight md:ml-1 font-bold">Builder</h1>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center md:py-2 md:px-1 gap-1.5 md:gap-2">
        {/* Demo */}
        <button
          id="btn-load-demo"
          onClick={onLoadDemo}
          className={`flex justify-center items-center px-1 py-1 md:gap-1.5 md:px-3 md:w-100% md:py-1.5 text-[10px] md:text-xs font-medium text-amber-400 border 
            border-amber-400/50 hover:bg-amber-400/20 rounded-lg transition-all duration-150 cursor-pointer
            ${darkMode ? 'bg-amber-400/20' : 'bg-amber-400/10'}`}
        >
          <Sparkles size={10} /> Load Demo
        </button>

        {/* Reset */}
        <button
          id="btn-reset"
          onClick={onReset}
          title="Clear all data"
          className={`md:p-2 md:ml-1  ${darkMode ? 'text-slate-500' : 'text-slate-800'} cursor-pointer hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-150`}
        >
          <RotateCcw size={18} />
        </button>

        {/* Theme toggle */}
        <button
          id="btn-theme-toggle"
          onClick={onToggleDark}
          title="Toggle theme"
          className={`md:p-2 cursor-pointer transition-all duration-150 ${darkMode ? 'text-slate-400 hover:text-slate-200' : 'rounded-lg text-slate-800 hover:bg-slate-100'}`}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Export PDF */}
        <button
          id="btn-export-pdf"
          onClick={handlePrint}
          className={`flex items-center cursor-pointer gap-1 px-1.5 py-1.5 md:gap-1.5 md:px-2 md:py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white
          text-[11px] md:text-[15px] font-semibold rounded-lg shadow-lg shadow-indigo-500/30 transition-all duration-150 hover:shadow-indigo-500/50 hover:scale-[1.02]`}
        >
          <FileDown size={18} /> Export PDF
        </button>
      </div>
    </header>
  )
}
