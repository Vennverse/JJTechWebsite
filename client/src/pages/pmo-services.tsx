import JJTechNavigation from "@/components/jjtech-navigation";

export default function PMOServices() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              PMO Services
            </h1>
          </div>
        </section>

        <div className="bg-teal-600 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg">
              Project Management Office services to ensure successful project delivery and organizational efficiency.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Planning</h3>
              <p className="text-gray-600">Strategic project planning and roadmap development to ensure successful outcomes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Resource Management</h3>
              <p className="text-gray-600">Optimal allocation and management of resources across multiple projects and initiatives.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Management</h3>
              <p className="text-gray-600">Proactive identification and mitigation of project risks to minimize potential impacts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Comprehensive quality control processes to ensure deliverables meet requirements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Monitoring</h3>
              <p className="text-gray-600">Real-time tracking and reporting of project progress and key performance indicators.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Change Management</h3>
              <p className="text-gray-600">Structured approach to managing organizational changes and ensuring smooth transitions.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}