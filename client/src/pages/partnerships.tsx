import JJTechNavigation from "@/components/jjtech-navigation";

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              Our Partnerships
            </h1>
          </div>
        </section>

        <div className="bg-sky-600 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg">
              Strategic partnerships that enable us to deliver comprehensive solutions to our clients.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technology Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading technology companies to provide cutting-edge solutions and services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">Partnerships with major cloud providers for scalable infrastructure solutions.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
              <p className="text-gray-600">Collaborations with software companies for enhanced development capabilities.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Security Solutions</h3>
              <p className="text-gray-600">Partnerships with cybersecurity leaders for comprehensive protection.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}