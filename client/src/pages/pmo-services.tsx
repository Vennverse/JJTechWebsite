import JJTechNavigation from "@/components/jjtech-navigation";

export default function PMOServices() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              JJ-TECH - PMO Services
            </h1>
          </div>
        </section>

        {/* Sky Blue Banner */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              PMO Services - We partner and collaborate with you in setting up your PMO. We are your trusted advisors.
            </h2>
          </div>
        </div>

        {/* Large Professional PMO Services Image */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-8 rounded-2xl shadow-xl max-w-5xl w-full">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Background */}
                <rect width="800" height="400" fill="url(#pmoGradient)" rx="20"/>
                
                {/* PMO Office Setting */}
                <rect x="50" y="80" width="700" height="280" fill="#f8fafc" rx="15" opacity="0.9"/>
                
                {/* Project Dashboard */}
                <rect x="80" y="110" width="300" height="200" fill="#0284c7" rx="10"/>
                <rect x="90" y="120" width="280" height="180" fill="#ffffff" rx="5"/>
                
                {/* Dashboard Elements */}
                <rect x="100" y="130" width="260" height="30" fill="#0ea5e9" rx="5"/>
                <text x="230" y="150" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">PROJECT DASHBOARD</text>
                
                {/* Progress Bars */}
                <rect x="100" y="170" width="200" height="12" fill="#e5e7eb" rx="6"/>
                <rect x="100" y="170" width="160" height="12" fill="#10b981" rx="6"/>
                <text x="310" y="180" fill="#64748b" fontSize="10">Project A - 80%</text>
                
                <rect x="100" y="190" width="200" height="12" fill="#e5e7eb" rx="6"/>
                <rect x="100" y="190" width="120" height="12" fill="#f59e0b" rx="6"/>
                <text x="310" y="200" fill="#64748b" fontSize="10">Project B - 60%</text>
                
                <rect x="100" y="210" width="200" height="12" fill="#e5e7eb" rx="6"/>
                <rect x="100" y="210" width="180" height="12" fill="#0ea5e9" rx="6"/>
                <text x="310" y="220" fill="#64748b" fontSize="10">Project C - 90%</text>
                
                {/* Metrics */}
                <circle cx="150" cy="260" r="25" fill="#10b981"/>
                <text x="150" y="265" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">95%</text>
                <text x="150" y="290" fill="#64748b" fontSize="10" textAnchor="middle">Success Rate</text>
                
                <circle cx="230" cy="260" r="25" fill="#0ea5e9"/>
                <text x="230" y="265" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">24</text>
                <text x="230" y="290" fill="#64748b" fontSize="10" textAnchor="middle">Active Projects</text>
                
                {/* Team Collaboration Area */}
                <rect x="420" y="110" width="300" height="200" fill="#64748b" rx="10" opacity="0.1"/>
                
                {/* Meeting Table */}
                <ellipse cx="570" cy="200" rx="120" ry="60" fill="#374151" opacity="0.3"/>
                
                {/* Team Members */}
                <circle cx="520" cy="170" r="20" fill="#0284c7"/>
                <circle cx="570" cy="160" r="20" fill="#10b981"/>
                <circle cx="620" cy="170" r="20" fill="#f59e0b"/>
                <circle cx="540" cy="230" r="20" fill="#ef4444"/>
                <circle cx="600" cy="230" r="20" fill="#8b5cf6"/>
                
                {/* Laptops */}
                <rect x="510" y="150" width="25" height="15" fill="#1f2937" rx="2"/>
                <rect x="560" y="140" width="25" height="15" fill="#1f2937" rx="2"/>
                <rect x="610" y="150" width="25" height="15" fill="#1f2937" rx="2"/>
                
                {/* PMO Process Flow */}
                <g transform="translate(100, 340)">
                  <rect x="0" y="0" width="80" height="40" fill="#0284c7" rx="8"/>
                  <text x="40" y="25" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">PLAN</text>
                  
                  <rect x="100" y="0" width="80" height="40" fill="#10b981" rx="8"/>
                  <text x="140" y="25" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">EXECUTE</text>
                  
                  <rect x="200" y="0" width="80" height="40" fill="#f59e0b" rx="8"/>
                  <text x="240" y="25" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">MONITOR</text>
                  
                  <rect x="300" y="0" width="80" height="40" fill="#8b5cf6" rx="8"/>
                  <text x="340" y="25" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">CONTROL</text>
                  
                  <rect x="400" y="0" width="80" height="40" fill="#ef4444" rx="8"/>
                  <text x="440" y="25" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">CLOSE</text>
                  
                  {/* Arrows */}
                  <path d="M85 20 L95 20" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M185 20 L195 20" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M285 20 L295 20" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <path d="M385 20 L395 20" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                </g>
                
                {/* Title */}
                <text x="400" y="40" fill="#1e40af" fontSize="32" fontWeight="bold" textAnchor="middle">PMO Excellence</text>
                <text x="400" y="65" fill="#64748b" fontSize="18" textAnchor="middle">Strategic Planning • Project Oversight • Process Optimization</text>
                
                <defs>
                  <linearGradient id="pmoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f9ff"/>
                    <stop offset="100%" stopColor="#e0f2fe"/>
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#374151"/>
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="space-y-6 text-gray-700 mb-8">
            <div className="flex items-start space-x-2">
              <span className="text-black">•</span>
              <span>We offer TOP NOTCH IT PMO services to our esteemed clients.</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-black">•</span>
              <span>We provide Seasoned Project Managers that provide flawless execution for your high visibility complex, global, enterprise -wide implementations and deployments</span>
            </div>
          </div>

          {/* PMO Offering Box */}
          <div className="flex justify-center">
            <div className="bg-sky-600 border-4 border-sky-700 rounded-lg p-8 max-w-2xl">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-4">PMO OFFERING</h3>
                
                {/* Circular diagram representation */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48">
                    {/* Center circle */}
                    <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="text-white text-xs font-bold text-center">PMO</div>
                    </div>
                    
                    {/* Surrounding circles */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 rounded-full"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-600 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-400 rounded-full"></div>
                    <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-white text-sm space-y-2">
                <div className="text-center space-y-1">
                  <div><strong>Portfolio Management</strong></div>
                  <div><strong>Program Management</strong></div>
                  <div><strong>Project Management</strong></div>
                  <div><strong>Process Improvement</strong></div>
                  <div><strong>Repeatable Processes</strong></div>
                  <div><strong>Best practices/Standards</strong></div>
                  <div><strong>Governance</strong></div>
                  <div><strong>Methodologies</strong></div>
                  <div><strong>ROI</strong></div>
                </div>
                
                <div className="text-center mt-6 pt-4 border-t border-sky-300">
                  <div className="text-white font-bold">Contact us at 214.699.1761 or email us at jj.tech.us.corp@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}