import JJTechNavigation from "@/components/jjtech-navigation";

export default function ITServices() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Page Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              IT Services
            </h1>
          </div>
        </section>

        {/* Teal Blue Banner */}
        <div className="bg-teal-600 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg">
              Comprehensive IT solutions designed to drive your business forward with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Services Content */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Infrastructure Management</h3>
              <p className="text-gray-600">
                Complete IT infrastructure setup, monitoring, and maintenance to ensure optimal performance and reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">
                Secure cloud migration, deployment, and management services to modernize your business operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Advanced security solutions to protect your data, systems, and business from cyber threats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Network Solutions</h3>
              <p className="text-gray-600">
                Design, implementation, and optimization of network infrastructure for seamless connectivity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Support</h3>
              <p className="text-gray-600">
                24/7 technical support and helpdesk services to keep your business running smoothly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">System Integration</h3>
              <p className="text-gray-600">
                Seamless integration of diverse systems and applications to improve workflow efficiency.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}