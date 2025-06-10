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
                
                <div className="text-center mt-6 pt-4 border-t border-yellow-600">
                  <div className="text-black font-bold">Contact us at 214.699.1761 or email us at jj.tech.us.corp@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}