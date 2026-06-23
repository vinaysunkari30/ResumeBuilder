import ModernDark from '../templates/ModernDark'
import ClassicPro from '../templates/ClassicPro'
import Minimalist from '../templates/Minimalist'
import Creative from '../templates/Creative'
import Executive from '../templates/Executive'
import TechDev from '../templates/TechDev'
import BoldDesigner from '../templates/BoldDesigner'
import CorporateBlue from '../templates/CorporateBlue'
import Compact from '../templates/Compact'
import Elegant from '../templates/Elegant'

const TEMPLATE_MAP = {
  'modern-dark': ModernDark,
  'classic-pro': ClassicPro,
  'minimalist': Minimalist,
  'creative': Creative,
  'executive': Executive,
  'tech-dev': TechDev,
  'bold-designer': BoldDesigner,
  'corporate-blue': CorporateBlue,
  'compact': Compact,
  'elegant': Elegant,
}

export default function PreviewPanel({ data, template, printRef, darkMode }) {
  const TemplateComponent = TEMPLATE_MAP[template] || ModernDark

  return (
    <div className={`flex-1 ${darkMode ? "bg-slate-950": 'bg-white'} overflow-auto flex flex-col items-center py-4 pb-15 md:pb-8 px-4 min-h-0`}>
      {/* Preview scale wrapper */}
      <div
        id="resume-preview-wrapper"
        className="w-full flex justify-center"
      >
        <div
          ref={printRef}
          id="resume-preview"
          className="shadow-2xl shadow-black/60 overflow-hidden"
          style={{
            width: '210mm',
            maxWidth: '100%',
            transformOrigin: 'top center',
          }}
        >
          <TemplateComponent data={data} />
        </div>
      </div>
    </div>
  )
}
