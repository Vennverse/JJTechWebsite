import JJTechNavigation from "@/components/jjtech-navigation";

export default function ITTraining() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Page Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              IT Training
            </h1>
          </div>
        </section>

        {/* Teal Blue Banner */}
        <div className="bg-teal-600 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg">
              Professional IT training programs to enhance your team's technical skills and capabilities.
            </p>
          </div>
        </div>

        {/* Training Content */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Training Programs</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cloud Technologies</h3>
                  <p className="text-gray-600">AWS, Azure, and Google Cloud Platform training for cloud migration and management.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cybersecurity</h3>
                  <p className="text-gray-600">Security awareness, threat detection, and incident response training programs.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Software Development</h3>
                  <p className="text-gray-600">Modern programming languages, frameworks, and development methodologies.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Training Approach</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Assessment</h4>
                    <p className="text-gray-600 text-sm">Evaluate current skill levels and identify training needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Customization</h4>
                    <p className="text-gray-600 text-sm">Develop tailored training programs for your specific requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Delivery</h4>
                    <p className="text-gray-600 text-sm">Hands-on training sessions with practical exercises and real-world scenarios.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Certification</h4>
                    <p className="text-gray-600 text-sm">Industry-recognized certifications and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}