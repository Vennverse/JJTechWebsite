import JJTechNavigation from "@/components/jjtech-navigation";

export default function ITTraining() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              JJ-TECH - IT TRAINING
            </h1>
          </div>
        </section>

        {/* Sky Blue Banner */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              Training Service - We Enable, Equip and Empower (e3)
            </h2>
          </div>
        </div>

        {/* Large Professional IT Training Image */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-8 rounded-2xl shadow-xl max-w-5xl w-full">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Background */}
                <rect width="800" height="400" fill="url(#itTrainingGradient)" rx="20"/>
                
                {/* Classroom Setting */}
                <rect x="50" y="100" width="600" height="250" fill="#f8fafc" rx="15" opacity="0.9"/>
                
                {/* Instructor and Whiteboard */}
                <rect x="70" y="120" width="200" height="150" fill="#0284c7" rx="10"/>
                <rect x="80" y="130" width="180" height="130" fill="#ffffff" rx="5"/>
                
                {/* Code/Tech Content on Board */}
                <rect x="90" y="140" width="160" height="8" fill="#0ea5e9" rx="2"/>
                <rect x="90" y="155" width="120" height="6" fill="#38bdf8" rx="2"/>
                <rect x="90" y="168" width="140" height="6" fill="#7dd3fc" rx="2"/>
                <rect x="90" y="185" width="100" height="8" fill="#0284c7" rx="2"/>
                <rect x="90" y="200" width="150" height="6" fill="#0ea5e9" rx="2"/>
                
                {/* Tech Icons */}
                <circle cx="200" cy="230" r="15" fill="#10b981"/>
                <text x="200" y="235" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">&lt;/&gt;</text>
                
                <circle cx="230" cy="230" r="15" fill="#f59e0b"/>
                <text x="230" y="235" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">DB</text>
                
                {/* Students/Laptops */}
                <rect x="320" y="140" width="80" height="50" fill="#374151" rx="5"/>
                <rect x="325" y="145" width="70" height="40" fill="#1f2937" rx="3"/>
                <rect x="330" y="150" width="60" height="30" fill="#0284c7" rx="2"/>
                
                <rect x="420" y="140" width="80" height="50" fill="#374151" rx="5"/>
                <rect x="425" y="145" width="70" height="40" fill="#1f2937" rx="3"/>
                <rect x="430" y="150" width="60" height="30" fill="#10b981" rx="2"/>
                
                <rect x="520" y="140" width="80" height="50" fill="#374151" rx="5"/>
                <rect x="525" y="145" width="70" height="40" fill="#1f2937" rx="3"/>
                <rect x="530" y="150" width="60" height="30" fill="#f59e0b" rx="2"/>
                
                {/* Students */}
                <circle cx="360" cy="240" r="25" fill="#64748b"/>
                <circle cx="460" cy="240" r="25" fill="#64748b"/>
                <circle cx="560" cy="240" r="25" fill="#64748b"/>
                
                {/* Technology Symbols */}
                <g transform="translate(680, 80)">
                  <circle r="40" fill="#0284c7" opacity="0.1"/>
                  <circle r="30" fill="#0284c7" opacity="0.2"/>
                  <circle r="20" fill="#0284c7" opacity="0.3"/>
                  <text x="0" y="5" fill="#0284c7" fontSize="24" fontWeight="bold" textAnchor="middle">IT</text>
                </g>
                
                {/* Floating Tech Elements */}
                <rect x="680" y="150" width="60" height="40" fill="#10b981" rx="8" opacity="0.8"/>
                <text x="710" y="175" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">CLOUD</text>
                
                <rect x="680" y="210" width="60" height="40" fill="#f59e0b" rx="8" opacity="0.8"/>
                <text x="710" y="235" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">DATA</text>
                
                <rect x="680" y="270" width="60" height="40" fill="#ef4444" rx="8" opacity="0.8"/>
                <text x="710" y="295" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">SEC</text>
                
                {/* Title */}
                <text x="400" y="65" fill="#64748b" fontSize="18" textAnchor="middle">Hands-on Learning • Expert Instructors • Industry Certification</text>
                
                <defs>
                  <linearGradient id="itTrainingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f9ff"/>
                    <stop offset="100%" stopColor="#e0f2fe"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Section with Training Information */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-200 rounded-lg overflow-hidden shadow-lg max-w-4xl">
              {/* Left side - Key image */}
              <div className="bg-gray-300 p-8 flex items-center justify-center w-1/3">
                <div className="relative">
                  <div className="w-32 h-20 bg-yellow-600 rounded-full flex items-center justify-center transform -rotate-12">
                    <div className="text-white text-center">
                      <div className="text-xs font-bold">WE GUARANTEE</div>
                      <div className="text-lg font-bold">YOUR SUCCESS</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-green-600">$</div>
                  </div>
                  <div className="absolute top-8 -left-8 text-gray-600 text-xs font-bold transform rotate-12">
                    JJ-TECH
                  </div>
                </div>
              </div>

              {/* Right side - Training details */}
              <div className="bg-sky-600 p-6 w-2/3">
                <div className="text-white text-sm space-y-4">
                  <div className="font-bold text-center mb-4">Training will be provided on the following:</div>
                  
                  <div className="space-y-2">
                    <div><strong>PMP</strong> - Project Management Practitioner</div>
                    <div><strong>ITIL</strong> - ITIL Practitioner</div>
                    <div><strong>ACP</strong> - Agile Certified Practitioner</div>
                    <div><strong>CSM</strong>- Scrum Master Certification</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>PMO</strong> Program Management - Program Governance, Delivery, Budget/Planning, Forecasting, Cost variance, P&L, Capex/Opex</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Project Management Skills</strong> for Beginners and Mid to Senior level exec's. Practical Project management Lessons, PMBOK, Resource, Utilization Free Project Management eBook, Templates for Practical use - RAID log</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>IT operations</strong>- KPI's/Metrics and Operational Reporting, Dashboards</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Business Analysis Training</strong> - Requirements Gathering, AS-IS, TO-BE, GAP Analysis, Business transformation, Creation of Process flow Diagrams, Graphs and Charts,</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Interview prep, Resume Critique and many more</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-8 space-y-2">
            <div className="text-sm text-gray-700">EMAIL US AT JJ.TECH.US.CORP@GMAIL.COM OR REACH US 214.699.1761</div>
            <div className="text-sm text-gray-700">Email: jj.tech.us.corp@gmail.com</div>
            <div className="text-sm text-gray-700">Phone - 214.699.1761</div>
          </div>
        </div>
      </main>
    </div>
  );
}