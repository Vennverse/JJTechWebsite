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

        {/* Blue Banner */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              PMO Services - We partner and collaborate with you in setting up your PMO. We are your trusted advisors.
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">

          {/* PMO Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Portfolio Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Strategic oversight and governance of all projects and programs to ensure alignment with business objectives and maximize value delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Program Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Coordinated management of related projects to achieve benefits and control not available from managing them individually.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Project Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                End-to-end project execution with proven methodologies to deliver projects on time, within budget, and to specification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Process Improvement</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Continuous enhancement of organizational processes to increase efficiency, reduce waste, and improve quality outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Repeatable Processes</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Development and implementation of standardized, repeatable processes that ensure consistent delivery and quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Best Practices/Standards</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Implementation of industry best practices and standards to ensure excellence in project delivery and organizational maturity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Governance</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Establishment of governance frameworks to ensure proper oversight, decision-making, and accountability across all initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Methodologies</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Implementation of proven project management methodologies including Agile, Waterfall, and hybrid approaches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">ROI & Value Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Measurement and optimization of return on investment to ensure maximum value delivery from all projects and programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Change Management</h3>
              </div>
              <p className="text-gray-600 text-sm">
                World-class change management services delivered by highly skilled professionals to ensure smooth organizational transitions and user adoption.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">ITSM</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Comprehensive IT Service Management solutions implementing industry best practices to optimize service delivery and enhance customer satisfaction.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12 p-6 bg-sky-600 rounded-lg">
            <div className="text-white font-bold">Email us at jj.tech.us.corp@gmail.com</div>
          </div>
        </div>
      </main>
    </div>
  );
}