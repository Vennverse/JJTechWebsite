import JJTechNavigation from "@/components/jjtech-navigation";
import JJTechHeader from "@/components/jjtech-header";
import JJTechVideo from "@/components/jjtech-video";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <JJTechHeader />
        <JJTechVideo />
        
        {/* Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering comprehensive technology solutions with proven expertise across multiple domains
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* ITSM Capabilities */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* ITSM Service Desk */}
                    <rect x="80" y="40" width="240" height="120" fill="#ffffff" rx="12" opacity="0.9"/>
                    
                    {/* Service Desk Interface */}
                    <rect x="100" y="60" width="200" height="80" fill="#0ea5e9" rx="8" opacity="0.8"/>
                    
                    {/* Ticket Management */}
                    <rect x="110" y="70" width="60" height="12" fill="#ffffff" rx="2"/>
                    <rect x="110" y="90" width="80" height="8" fill="#10b981" rx="2"/>
                    <rect x="110" y="105" width="70" height="8" fill="#f59e0b" rx="2"/>
                    <rect x="110" y="120" width="60" height="8" fill="#ef4444" rx="2"/>
                    
                    {/* ITIL Processes */}
                    <circle cx="220" cy="85" r="25" fill="#ffffff" opacity="0.8"/>
                    <text x="220" y="90" fill="#0ea5e9" fontSize="8" fontWeight="bold" textAnchor="middle">ITIL</text>
                    
                    <circle cx="260" cy="110" r="20" fill="#ffffff" opacity="0.8"/>
                    <text x="260" y="115" fill="#0ea5e9" fontSize="7" fontWeight="bold" textAnchor="middle">SLA</text>
                    
                    {/* Service Categories */}
                    <rect x="50" y="170" width="60" height="20" fill="#ffffff" opacity="0.7" rx="4"/>
                    <text x="80" y="183" fill="#0ea5e9" fontSize="9" fontWeight="bold" textAnchor="middle">Incident</text>
                    
                    <rect x="130" y="170" width="60" height="20" fill="#ffffff" opacity="0.7" rx="4"/>
                    <text x="160" y="183" fill="#0ea5e9" fontSize="9" fontWeight="bold" textAnchor="middle">Change</text>
                    
                    <rect x="210" y="170" width="60" height="20" fill="#ffffff" opacity="0.7" rx="4"/>
                    <text x="240" y="183" fill="#0ea5e9" fontSize="9" fontWeight="bold" textAnchor="middle">Problem</text>
                    
                    <rect x="290" y="170" width="60" height="20" fill="#ffffff" opacity="0.7" rx="4"/>
                    <text x="320" y="183" fill="#0ea5e9" fontSize="9" fontWeight="bold" textAnchor="middle">Request</text>
                    
                    {/* Workflow arrows */}
                    <polygon points="190,95 210,85 210,90 205,90 205,100 210,100 210,105" fill="#ffffff" opacity="0.6"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">ITSM Capabilities</h3>
                  <p className="text-gray-600 mb-4">Comprehensive IT Service Management following ITIL best practices for operational excellence.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Incident & Problem Management</li>
                    <li>• Change & Release Management</li>
                    <li>• Service Level Management</li>
                  </ul>
                </div>
              </div>

              {/* PMO Services */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Project timeline */}
                    <line x1="50" y1="100" x2="350" y2="100" stroke="#ffffff" strokeWidth="4"/>
                    
                    {/* Milestones */}
                    <circle cx="80" cy="100" r="12" fill="#ffffff"/>
                    <text x="80" y="125" fill="#ffffff" fontSize="10" textAnchor="middle">Plan</text>
                    
                    <circle cx="160" cy="100" r="12" fill="#ffffff"/>
                    <text x="160" y="125" fill="#ffffff" fontSize="10" textAnchor="middle">Execute</text>
                    
                    <circle cx="240" cy="100" r="12" fill="#ffffff"/>
                    <text x="240" y="125" fill="#ffffff" fontSize="10" textAnchor="middle">Monitor</text>
                    
                    <circle cx="320" cy="100" r="12" fill="#ffffff"/>
                    <text x="320" y="125" fill="#ffffff" fontSize="10" textAnchor="middle">Close</text>
                    
                    {/* Progress bars */}
                    <rect x="70" y="60" width="40" height="8" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="150" y="50" width="40" height="8" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="230" y="70" width="40" height="8" fill="#ffffff" opacity="0.8" rx="4"/>
                    
                    {/* Charts */}
                    <rect x="100" y="140" width="200" height="40" fill="#ffffff" opacity="0.2" rx="4"/>
                    <text x="200" y="165" fill="#ffffff" fontSize="12" textAnchor="middle">Project Dashboard</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Project Management</h3>
                  <p className="text-gray-600 mb-4">Professional PMO services ensuring successful project delivery and organizational efficiency.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Program Governance</li>
                    <li>• Budget & Resource Planning</li>
                    <li>• Performance Monitoring</li>
                  </ul>
                </div>
              </div>

              {/* Recruitment and Placement */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Recruitment Process */}
                    <rect x="50" y="80" width="300" height="80" fill="#ffffff" rx="12" opacity="0.2"/>
                    
                    {/* Candidates */}
                    <circle cx="80" cy="120" r="20" fill="#ffffff"/>
                    <circle cx="130" cy="120" r="20" fill="#ffffff"/>
                    <circle cx="180" cy="120" r="20" fill="#ffffff"/>
                    
                    {/* Selection funnel */}
                    <polygon points="220,90 280,90 270,130 230,130" fill="#ffffff" opacity="0.8"/>
                    <text x="250" y="115" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle">Filter</text>
                    
                    {/* Selected candidate */}
                    <circle cx="320" cy="120" r="25" fill="#ffffff"/>
                    <circle cx="320" cy="120" r="15" fill="#10b981"/>
                    <text x="320" y="125" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">✓</text>
                    
                    {/* Skills badges */}
                    <rect x="60" y="50" width="40" height="15" fill="#ffffff" opacity="0.8" rx="3"/>
                    <text x="80" y="62" fill="#8b5cf6" fontSize="8" fontWeight="bold" textAnchor="middle">Java</text>
                    
                    <rect x="110" y="50" width="40" height="15" fill="#ffffff" opacity="0.8" rx="3"/>
                    <text x="130" y="62" fill="#8b5cf6" fontSize="8" fontWeight="bold" textAnchor="middle">AWS</text>
                    
                    <rect x="160" y="50" width="40" height="15" fill="#ffffff" opacity="0.8" rx="3"/>
                    <text x="180" y="62" fill="#8b5cf6" fontSize="8" fontWeight="bold" textAnchor="middle">PM</text>
                    
                    {/* Company match */}
                    <rect x="290" y="50" width="60" height="25" fill="#ffffff" opacity="0.9" rx="4"/>
                    <text x="320" y="67" fill="#8b5cf6" fontSize="9" fontWeight="bold" textAnchor="middle">Company</text>
                    
                    {/* Connection line */}
                    <line x1="320" y1="75" x2="320" y2="95" stroke="#ffffff" strokeWidth="3"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Recruitment & Placement</h3>
                  <p className="text-gray-600 mb-4">Connect top IT talent with leading organizations through our comprehensive recruitment services.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Technical Talent Sourcing</li>
                    <li>• Skills Assessment & Matching</li>
                    <li>• Contract & Permanent Placement</li>
                  </ul>
                </div>
              </div>

              {/* Digital Transformation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Digital transformation concept */}
                    <rect x="50" y="80" width="100" height="60" fill="#ffffff" opacity="0.3" rx="8"/>
                    <text x="100" y="115" fill="#ffffff" fontSize="12" textAnchor="middle">Legacy</text>
                    
                    {/* Arrow */}
                    <polygon points="170,110 200,95 200,105 220,105 220,115 200,115 200,125" fill="#ffffff"/>
                    
                    <rect x="250" y="60" width="100" height="100" fill="#ffffff" opacity="0.9" rx="8"/>
                    <text x="300" y="105" fill="#f97316" fontSize="12" textAnchor="middle">Digital</text>
                    <text x="300" y="120" fill="#f97316" fontSize="12" textAnchor="middle">Future</text>
                    
                    {/* Tech elements */}
                    <circle cx="80" cy="50" r="8" fill="#ffffff" opacity="0.6"/>
                    <circle cx="320" cy="40" r="8" fill="#ffffff" opacity="0.8"/>
                    <circle cx="300" cy="180" r="8" fill="#ffffff" opacity="0.8"/>
                    
                    {/* Connection lines */}
                    <line x1="88" y1="50" x2="312" y2="40" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="320" y1="48" x2="300" y2="172" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Transformation</h3>
                  <p className="text-gray-600 mb-4">Modernize your business processes and technology stack for the digital age.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Process Automation</li>
                    <li>• System Integration</li>
                    <li>• Technology Modernization</li>
                  </ul>
                </div>
              </div>

              {/* IT Assessment and Strategy */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Assessment Framework */}
                    <rect x="80" y="40" width="240" height="120" fill="#ffffff" rx="12" opacity="0.9"/>
                    
                    {/* Strategic Planning Grid */}
                    <rect x="100" y="60" width="80" height="35" fill="#ef4444" rx="4" opacity="0.8"/>
                    <text x="140" y="82" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Current State</text>
                    
                    <rect x="200" y="60" width="80" height="35" fill="#f97316" rx="4" opacity="0.8"/>
                    <text x="240" y="82" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Gap Analysis</text>
                    
                    <rect x="100" y="110" width="80" height="35" fill="#10b981" rx="4" opacity="0.8"/>
                    <text x="140" y="132" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Future State</text>
                    
                    <rect x="200" y="110" width="80" height="35" fill="#0ea5e9" rx="4" opacity="0.8"/>
                    <text x="240" y="132" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Roadmap</text>
                    
                    {/* Strategic Elements */}
                    <circle cx="60" cy="100" r="15" fill="#ffffff" opacity="0.8"/>
                    <text x="60" y="105" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">SWOT</text>
                    
                    <circle cx="340" cy="100" r="15" fill="#ffffff" opacity="0.8"/>
                    <text x="340" y="105" fill="#ef4444" fontSize="7" fontWeight="bold" textAnchor="middle">ROI</text>
                    
                    {/* Assessment indicators */}
                    <rect x="120" y="170" width="30" height="8" fill="#ffffff" opacity="0.7" rx="2"/>
                    <rect x="160" y="170" width="30" height="8" fill="#ffffff" opacity="0.7" rx="2"/>
                    <rect x="200" y="170" width="30" height="8" fill="#ffffff" opacity="0.7" rx="2"/>
                    <rect x="240" y="170" width="30" height="8" fill="#ffffff" opacity="0.7" rx="2"/>
                    
                    {/* Arrow showing progression */}
                    <polygon points="290,95 310,85 310,90 305,90 305,100 310,100 310,105" fill="#ffffff" opacity="0.8"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">IT Assessment & Strategy</h3>
                  <p className="text-gray-600 mb-4">Comprehensive IT assessments and strategic planning to optimize your technology investments.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Current State Assessment</li>
                    <li>• Technology Roadmap Planning</li>
                    <li>• Strategic IT Alignment</li>
                  </ul>
                </div>
              </div>

              {/* Business Analysis */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Analysis charts */}
                    <rect x="50" y="120" width="80" height="60" fill="#ffffff" opacity="0.2" rx="4"/>
                    
                    {/* Bar chart */}
                    <rect x="60" y="140" width="12" height="30" fill="#ffffff"/>
                    <rect x="75" y="130" width="12" height="40" fill="#ffffff"/>
                    <rect x="90" y="135" width="12" height="35" fill="#ffffff"/>
                    <rect x="105" y="125" width="12" height="45" fill="#ffffff"/>
                    
                    {/* Pie chart */}
                    <circle cx="200" cy="100" r="40" fill="#ffffff" opacity="0.2"/>
                    <path d="M200 60 A40 40 0 0 1 235 85 L200 100 Z" fill="#ffffff" opacity="0.8"/>
                    <path d="M235 85 A40 40 0 0 1 200 140 L200 100 Z" fill="#ffffff" opacity="0.6"/>
                    <path d="M200 140 A40 40 0 0 1 165 85 L200 100 Z" fill="#ffffff" opacity="0.4"/>
                    <path d="M165 85 A40 40 0 0 1 200 60 L200 100 Z" fill="#ffffff" opacity="0.7"/>
                    
                    {/* Process flow */}
                    <rect x="280" y="60" width="40" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="280" y="100" width="40" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="280" y="140" width="40" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    
                    {/* Arrows */}
                    <polygon points="300,85 300,95 305,90" fill="#ffffff"/>
                    <polygon points="300,125 300,135 305,130" fill="#ffffff"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Analysis</h3>
                  <p className="text-gray-600 mb-4">Data-driven insights and process optimization to improve business efficiency.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Requirements Analysis</li>
                    <li>• Process Improvement</li>
                    <li>• Gap Analysis</li>
                  </ul>
                </div>
              </div>

              {/* QA Services */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* QA Testing Process */}
                    <rect x="60" y="50" width="280" height="100" fill="#ffffff" rx="12" opacity="0.2"/>
                    
                    {/* Test Cases */}
                    <rect x="80" y="70" width="60" height="60" fill="#ffffff" opacity="0.9" rx="8"/>
                    <text x="110" y="105" fill="#16a34a" fontSize="10" fontWeight="bold" textAnchor="middle">Test Cases</text>
                    
                    {/* Automation */}
                    <rect x="160" y="70" width="60" height="60" fill="#ffffff" opacity="0.9" rx="8"/>
                    <text x="190" y="95" fill="#16a34a" fontSize="10" fontWeight="bold" textAnchor="middle">Auto</text>
                    <text x="190" y="115" fill="#16a34a" fontSize="10" fontWeight="bold" textAnchor="middle">Testing</text>
                    
                    {/* Quality Metrics */}
                    <rect x="240" y="70" width="60" height="60" fill="#ffffff" opacity="0.9" rx="8"/>
                    <text x="270" y="95" fill="#16a34a" fontSize="10" fontWeight="bold" textAnchor="middle">Quality</text>
                    <text x="270" y="115" fill="#16a34a" fontSize="10" fontWeight="bold" textAnchor="middle">Metrics</text>
                    
                    {/* Check marks */}
                    <circle cx="110" cy="80" r="8" fill="#10b981"/>
                    <text x="110" y="85" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">✓</text>
                    
                    <circle cx="190" cy="80" r="8" fill="#10b981"/>
                    <text x="190" y="85" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">✓</text>
                    
                    <circle cx="270" cy="80" r="8" fill="#10b981"/>
                    <text x="270" y="85" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">✓</text>
                    
                    {/* Bug tracking */}
                    <rect x="150" y="160" width="100" height="25" fill="#ffffff" opacity="0.8" rx="4"/>
                    <text x="200" y="177" fill="#16a34a" fontSize="9" fontWeight="bold" textAnchor="middle">Bug Tracking</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">QA & Testing Services</h3>
                  <p className="text-gray-600 mb-4">Comprehensive quality assurance and testing solutions to ensure flawless software delivery.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Automated Testing Frameworks</li>
                    <li>• Performance & Load Testing</li>
                    <li>• Security & Compliance Testing</li>
                  </ul>
                </div>
              </div>

              {/* AI Solutions */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* AI Brain */}
                    <ellipse cx="200" cy="100" rx="80" ry="60" fill="#ffffff" opacity="0.3"/>
                    
                    {/* Neural network nodes */}
                    <circle cx="160" cy="80" r="6" fill="#ffffff"/>
                    <circle cx="200" cy="70" r="6" fill="#ffffff"/>
                    <circle cx="240" cy="80" r="6" fill="#ffffff"/>
                    <circle cx="160" cy="120" r="6" fill="#ffffff"/>
                    <circle cx="200" cy="130" r="6" fill="#ffffff"/>
                    <circle cx="240" cy="120" r="6" fill="#ffffff"/>
                    
                    {/* Connections */}
                    <line x1="160" y1="80" x2="200" y2="70" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="200" y1="70" x2="240" y2="80" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="160" y1="120" x2="200" y2="130" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="200" y1="130" x2="240" y2="120" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="160" y1="80" x2="160" y2="120" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="240" y1="80" x2="240" y2="120" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    
                    {/* AI symbols */}
                    <text x="200" y="105" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">AI</text>
                    
                    {/* Data streams */}
                    <rect x="60" y="90" width="60" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    <text x="90" y="105" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">Data Input</text>
                    
                    <rect x="280" y="90" width="60" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    <text x="310" y="105" fill="#6366f1" fontSize="9" fontWeight="bold" textAnchor="middle">AI Output</text>
                    
                    {/* Arrows */}
                    <polygon points="125,100 140,95 140,105" fill="#ffffff"/>
                    <polygon points="275,100 260,95 260,105" fill="#ffffff"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AI Solutions</h3>
                  <p className="text-gray-600 mb-4">Cutting-edge artificial intelligence solutions to transform your business operations and decision-making.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Machine Learning Implementation</li>
                    <li>• AI Chatbots & Virtual Assistants</li>
                    <li>• Predictive Analytics & Automation</li>
                  </ul>
                </div>
              </div>

              {/* Training & Coaching */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Training classroom */}
                    <rect x="80" y="60" width="240" height="100" fill="#ffffff" rx="12" opacity="0.3"/>
                    
                    {/* Presenter */}
                    <rect x="100" y="80" width="60" height="60" fill="#ffffff" opacity="0.9" rx="8"/>
                    <circle cx="130" cy="100" r="12" fill="#14b8a6"/>
                    <rect x="120" y="115" width="20" height="20" fill="#14b8a6"/>
                    <text x="130" y="105" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">👨‍🏫</text>
                    
                    {/* Students */}
                    <rect x="180" y="90" width="30" height="30" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="220" y="90" width="30" height="30" fill="#ffffff" opacity="0.8" rx="4"/>
                    <rect x="260" y="90" width="30" height="30" fill="#ffffff" opacity="0.8" rx="4"/>
                    
                    {/* Training materials */}
                    <rect x="180" y="130" width="110" height="20" fill="#ffffff" opacity="0.8" rx="4"/>
                    <text x="235" y="145" fill="#14b8a6" fontSize="9" fontWeight="bold" textAnchor="middle">Training Materials</text>
                    
                    {/* Knowledge transfer arrows */}
                    <polygon points="170,100 175,95 175,105" fill="#ffffff"/>
                    <line x1="160" y1="100" x2="170" y2="100" stroke="#ffffff" strokeWidth="2"/>
                    
                    {/* Certification */}
                    <rect x="150" y="40" width="100" height="15" fill="#ffffff" opacity="0.9" rx="3"/>
                    <text x="200" y="52" fill="#14b8a6" fontSize="8" fontWeight="bold" textAnchor="middle">Certification Ready</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Training & Coaching</h3>
                  <p className="text-gray-600 mb-4">Professional development programs and coaching services to enhance your team's technical capabilities.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Technical Skills Development</li>
                    <li>• Leadership & Management Training</li>
                    <li>• Certification Preparation</li>
                  </ul>
                </div>
              </div>

              {/* Custom App Development & Website Creation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* App Development Process */}
                    <rect x="50" y="40" width="300" height="120" fill="#ffffff" rx="12" opacity="0.3"/>
                    
                    {/* Code Editor */}
                    <rect x="70" y="60" width="120" height="80" fill="#ffffff" opacity="0.9" rx="8"/>
                    <rect x="80" y="70" width="100" height="8" fill="#2563eb" opacity="0.8" rx="2"/>
                    <rect x="80" y="85" width="80" height="8" fill="#2563eb" opacity="0.6" rx="2"/>
                    <rect x="80" y="100" width="90" height="8" fill="#2563eb" opacity="0.7" rx="2"/>
                    <rect x="80" y="115" width="70" height="8" fill="#2563eb" opacity="0.5" rx="2"/>
                    
                    {/* Arrow */}
                    <polygon points="210,100 230,90 230,95 225,95 225,105 230,105 230,110" fill="#ffffff"/>
                    
                    {/* Mobile/Web App */}
                    <rect x="250" y="70" width="80" height="60" fill="#ffffff" opacity="0.9" rx="12"/>
                    <rect x="260" y="80" width="60" height="8" fill="#2563eb" opacity="0.8" rx="2"/>
                    <rect x="260" y="95" width="40" height="8" fill="#2563eb" opacity="0.6" rx="2"/>
                    <rect x="260" y="110" width="50" height="8" fill="#2563eb" opacity="0.7" rx="2"/>
                    
                    {/* Website elements */}
                    <circle cx="100" cy="40" r="8" fill="#ffffff" opacity="0.8"/>
                    <circle cx="200" cy="35" r="8" fill="#ffffff" opacity="0.8"/>
                    <circle cx="300" cy="40" r="8" fill="#ffffff" opacity="0.8"/>
                    
                    {/* Connection lines */}
                    <line x1="108" y1="40" x2="192" y2="35" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                    <line x1="208" y1="35" x2="292" y2="40" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Custom App Development & Website Creation</h3>
                  <p className="text-gray-600 mb-4">End-to-end development of custom applications and responsive websites tailored to your business needs.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Custom Web & Mobile Applications</li>
                    <li>• Responsive Website Design</li>
                    <li>• E-commerce & CMS Solutions</li>
                  </ul>
                </div>
              </div>

              {/* Digital Marketing & Lead Generation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-pink-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Marketing Funnel */}
                    <rect x="80" y="40" width="240" height="120" fill="#ffffff" rx="12" opacity="0.3"/>
                    
                    {/* Funnel Shape */}
                    <polygon points="120,60 280,60 260,90 140,90" fill="#ffffff" opacity="0.9"/>
                    <text x="200" y="80" fill="#ec4899" fontSize="10" fontWeight="bold" textAnchor="middle">Awareness</text>
                    
                    <polygon points="140,95 260,95 240,120 160,120" fill="#ffffff" opacity="0.8"/>
                    <text x="200" y="112" fill="#ec4899" fontSize="10" fontWeight="bold" textAnchor="middle">Interest</text>
                    
                    <polygon points="160,125 240,125 220,150 180,150" fill="#ffffff" opacity="0.7"/>
                    <text x="200" y="142" fill="#ec4899" fontSize="9" fontWeight="bold" textAnchor="middle">Conversion</text>
                    
                    {/* SEO/Marketing elements */}
                    <circle cx="60" cy="80" r="15" fill="#ffffff" opacity="0.9"/>
                    <text x="60" y="85" fill="#ec4899" fontSize="8" fontWeight="bold" textAnchor="middle">SEO</text>
                    
                    <circle cx="340" cy="80" r="15" fill="#ffffff" opacity="0.9"/>
                    <text x="340" y="85" fill="#ec4899" fontSize="8" fontWeight="bold" textAnchor="middle">PPC</text>
                    
                    <circle cx="60" cy="130" r="15" fill="#ffffff" opacity="0.9"/>
                    <text x="60" y="135" fill="#ec4899" fontSize="7" fontWeight="bold" textAnchor="middle">Social</text>
                    
                    <circle cx="340" cy="130" r="15" fill="#ffffff" opacity="0.9"/>
                    <text x="340" y="135" fill="#ec4899" fontSize="7" fontWeight="bold" textAnchor="middle">Email</text>
                    
                    {/* Arrows pointing to funnel */}
                    <line x1="75" y1="80" x2="110" y2="70" stroke="#ffffff" strokeWidth="2"/>
                    <line x1="325" y1="80" x2="290" y2="70" stroke="#ffffff" strokeWidth="2"/>
                    <line x1="75" y1="130" x2="150" y2="140" stroke="#ffffff" strokeWidth="2"/>
                    <line x1="325" y1="130" x2="250" y2="140" stroke="#ffffff" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Marketing & Lead Generation</h3>
                  <p className="text-gray-600 mb-4">Comprehensive digital marketing strategies to drive growth, generate leads, and optimize your sales cycle.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• SEO & Content Marketing</li>
                    <li>• Lead Generation & Sales Funnels</li>
                    <li>• Social Media & PPC Campaigns</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
