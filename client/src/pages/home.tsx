import JJTechNavigation from "@/components/jjtech-navigation";
import JJTechHeader from "@/components/jjtech-header";
import JJTechVideo from "@/components/jjtech-video";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <JJTechHeader />
        
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
              
              {/* IT Services */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Server Racks */}
                    <rect x="50" y="60" width="80" height="120" fill="#ffffff" rx="8" opacity="0.9"/>
                    <rect x="60" y="70" width="60" height="8" fill="#0ea5e9" rx="2"/>
                    <rect x="60" y="85" width="60" height="8" fill="#10b981" rx="2"/>
                    <rect x="60" y="100" width="60" height="8" fill="#f59e0b" rx="2"/>
                    <rect x="60" y="115" width="60" height="8" fill="#ef4444" rx="2"/>
                    
                    <rect x="150" y="40" width="80" height="140" fill="#ffffff" rx="8" opacity="0.9"/>
                    <rect x="160" y="50" width="60" height="8" fill="#0ea5e9" rx="2"/>
                    <rect x="160" y="65" width="60" height="8" fill="#10b981" rx="2"/>
                    <rect x="160" y="80" width="60" height="8" fill="#f59e0b" rx="2"/>
                    
                    <rect x="250" y="70" width="80" height="110" fill="#ffffff" rx="8" opacity="0.9"/>
                    <rect x="260" y="80" width="60" height="8" fill="#0ea5e9" rx="2"/>
                    <rect x="260" y="95" width="60" height="8" fill="#10b981" rx="2"/>
                    
                    {/* Network connections */}
                    <line x1="130" y1="120" x2="150" y2="120" stroke="#ffffff" strokeWidth="3"/>
                    <line x1="230" y1="120" x2="250" y2="120" stroke="#ffffff" strokeWidth="3"/>
                    
                    {/* Cloud icon */}
                    <ellipse cx="350" cy="80" rx="30" ry="20" fill="#ffffff" opacity="0.8"/>
                    <text x="350" y="85" fill="#0ea5e9" fontSize="12" fontWeight="bold" textAnchor="middle">CLOUD</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">IT Infrastructure</h3>
                  <p className="text-gray-600 mb-4">Complete IT infrastructure management, cloud migration, and system optimization services.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Server & Network Management</li>
                    <li>• Cloud Solutions & Migration</li>
                    <li>• Security Implementation</li>
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

              {/* Training Services */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Classroom setup */}
                    <rect x="50" y="50" width="120" height="80" fill="#ffffff" rx="8" opacity="0.9"/>
                    <rect x="60" y="60" width="100" height="60" fill="#8b5cf6" rx="4"/>
                    
                    {/* Students */}
                    <circle cx="220" cy="120" r="15" fill="#ffffff"/>
                    <circle cx="260" cy="120" r="15" fill="#ffffff"/>
                    <circle cx="300" cy="120" r="15" fill="#ffffff"/>
                    
                    {/* Laptops */}
                    <rect x="210" y="140" width="20" height="15" fill="#ffffff" rx="2"/>
                    <rect x="250" y="140" width="20" height="15" fill="#ffffff" rx="2"/>
                    <rect x="290" y="140" width="20" height="15" fill="#ffffff" rx="2"/>
                    
                    {/* Instructor */}
                    <circle cx="110" cy="40" r="12" fill="#ffffff"/>
                    
                    {/* Certification badges */}
                    <circle cx="320" cy="60" r="20" fill="#ffffff" opacity="0.8"/>
                    <text x="320" y="65" fill="#8b5cf6" fontSize="10" fontWeight="bold" textAnchor="middle">PMP</text>
                    
                    <circle cx="360" cy="80" r="20" fill="#ffffff" opacity="0.8"/>
                    <text x="360" y="85" fill="#8b5cf6" fontSize="9" fontWeight="bold" textAnchor="middle">ITIL</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Training</h3>
                  <p className="text-gray-600 mb-4">Comprehensive certification training programs to advance your career and technical skills.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• PMP & ITIL Certification</li>
                    <li>• Agile & Scrum Training</li>
                    <li>• Career Development</li>
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

              {/* Cybersecurity */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Shield */}
                    <path d="M200 30 L160 50 L160 120 Q160 150 200 170 Q240 150 240 120 L240 50 Z" fill="#ffffff" opacity="0.9"/>
                    
                    {/* Lock icon */}
                    <rect x="185" y="90" width="30" height="25" fill="#ef4444" rx="4"/>
                    <path d="M190 90 Q190 80 200 80 Q210 80 210 90" stroke="#ef4444" strokeWidth="3" fill="none"/>
                    
                    {/* Security elements */}
                    <circle cx="120" cy="80" r="15" fill="#ffffff" opacity="0.6"/>
                    <text x="120" y="85" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">SSL</text>
                    
                    <circle cx="280" cy="80" r="15" fill="#ffffff" opacity="0.6"/>
                    <text x="280" y="85" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">2FA</text>
                    
                    <circle cx="120" cy="130" r="15" fill="#ffffff" opacity="0.6"/>
                    <text x="120" y="135" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">VPN</text>
                    
                    <circle cx="280" cy="130" r="15" fill="#ffffff" opacity="0.6"/>
                    <text x="280" y="135" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">FW</text>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cybersecurity</h3>
                  <p className="text-gray-600 mb-4">Comprehensive security solutions to protect your digital assets and infrastructure.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Security Assessment</li>
                    <li>• Threat Protection</li>
                    <li>• Compliance Management</li>
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

            </div>
          </div>
        </section>

        <JJTechVideo />
      </main>
    </div>
  );
}
