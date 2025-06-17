import JJTechNavigation from "@/components/jjtech-navigation";
import { Link } from "wouter";

export default function ITTraining() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header for Training Services */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              IT Training Services
            </h1>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Professional certification training and skill development programs designed to advance your IT career
            </p>
            <div className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg">
              <span>WE GUARANTEE YOUR SUCCESS</span>
            </div>
          </div>
        </div>

        {/* Training Services Grid */}
        <div className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Professional Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-sky-600">
              <div className="text-sky-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Certifications</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-sky-600 font-bold text-lg">•</span>
                  <div><strong className="text-sky-700">PMP</strong> - Project Management Professional</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-600 font-bold text-lg">•</span>
                  <div><strong className="text-sky-700">ITIL</strong> - ITIL Practitioner</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-600 font-bold text-lg">•</span>
                  <div><strong className="text-sky-700">ACP</strong> - Agile Certified Practitioner</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-600 font-bold text-lg">•</span>
                  <div><strong className="text-sky-700">CSM</strong> - Scrum Master Certification</div>
                </div>
              </div>
            </div>

            {/* Program Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Management</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <div><strong className="text-green-700">PMO</strong> Program Governance & Delivery</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <div>Budget Planning & Forecasting</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <div>Cost Variance & P&L Management</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-lg">•</span>
                  <div>Capex/Opex Financial Planning</div>
                </div>
              </div>
            </div>

            {/* Project Management Skills */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Management Skills</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <div>Beginner to Senior Level Training</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <div>Practical PMBOK Applications</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <div>Resource Utilization Strategies</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold text-lg">•</span>
                  <div>Free eBook & RAID Log Templates</div>
                </div>
              </div>
            </div>

            {/* IT Operations */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-600">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IT Operations</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold text-lg">•</span>
                  <div>KPI & Metrics Development</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold text-lg">•</span>
                  <div>Operational Reporting Systems</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold text-lg">•</span>
                  <div>Dashboard Creation & Management</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 font-bold text-lg">•</span>
                  <div>Performance Monitoring</div>
                </div>
              </div>
            </div>

            {/* Business Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2V6a1 1 0 10-2 0v1a1 1 0 102 0zm3 0V6a1 1 0 10-2 0v1a1 1 0 102 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Analysis</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <div>Requirements Gathering Techniques</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <div>AS-IS & TO-BE Analysis</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <div>GAP Analysis & Business Transformation</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-600 font-bold text-lg">•</span>
                  <div>Process Flow Diagrams & Charts</div>
                </div>
              </div>
            </div>

            {/* Career Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
              <div className="text-red-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Development</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <div>Interview Preparation & Coaching</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <div>Professional Resume Critique</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <div>Career Path Guidance</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <div>Professional Skill Assessment</div>
                </div>
              </div>
            </div>

            {/* Change Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
              <div className="text-teal-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Change Management</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-teal-600 font-bold text-lg">•</span>
                  <div>Organizational Change Strategy</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-600 font-bold text-lg">•</span>
                  <div>Stakeholder Engagement & Communication</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-600 font-bold text-lg">•</span>
                  <div>Change Impact Assessment</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-600 font-bold text-lg">•</span>
                  <div>Training & Adoption Planning</div>
                </div>
              </div>
            </div>

            {/* ITSM (IT Service Management) */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ITSM</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>IT Service Management Foundations</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Incident & Problem Management</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Service Request Management</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>SLA & Performance Management</div>
                </div>
              </div>
            </div>

            {/* QA (Quality Assurance) */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-600">
              <div className="text-pink-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">QA</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold text-lg">•</span>
                  <div>Software Testing Fundamentals</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold text-lg">•</span>
                  <div>Test Case Design & Execution</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold text-lg">•</span>
                  <div>Automated Testing Frameworks</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-pink-600 font-bold text-lg">•</span>
                  <div>Quality Metrics & Reporting</div>
                </div>
              </div>
            </div>

            {/* IT Strategy */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-600">
              <div className="text-amber-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IT Strategy</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold text-lg">•</span>
                  <div>Digital Transformation Planning</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold text-lg">•</span>
                  <div>Technology Roadmap Development</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold text-lg">•</span>
                  <div>IT Governance & Risk Management</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold text-lg">•</span>
                  <div>Business-IT Alignment Strategies</div>
                </div>
              </div>
            </div>

            {/* AI Training */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-600">
              <div className="text-indigo-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Training</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Machine Learning Fundamentals</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>AI Implementation Strategies</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Neural Networks & Deep Learning</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>AI Ethics & Responsible AI Development</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Natural Language Processing</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-indigo-600 font-bold text-lg">•</span>
                  <div>Computer Vision Applications</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Start Your Training Journey?</h3>
            <div className="space-y-3 text-lg text-gray-700">
              <div>📧 <strong>Email:</strong> Info@jj-tech.co or jj.tech.us.corp@gmail.com</div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}