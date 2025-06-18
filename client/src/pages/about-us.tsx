import JJTechNavigation from "@/components/jjtech-navigation";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              Who We Are
            </h1>
          </div>
        </section>

        {/* Who We Are Section */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              Who We Are
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="text-gray-700 space-y-4">
            <p>
              We are a women owned, small business specializing in comprehensive technology solutions and consulting services.
            </p>
            <p>
              Our Mission is to understand the clients needs and solve their problems while providing unparalleled services to our clients.
            </p>
            <p>
              We offer chatbots and brains for schools and colleges. We provide AI solutions and services, PMO and ITSM services, IT Assessment and strategy. We provide large scale project implementations, IT Operations and Support. We have a well established team for staffing and recruitment.
            </p>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Core Services Include:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">IT Services & Solutions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cloud Solutions and Migration</li>
                    <li>• Cybersecurity Services</li>
                    <li>• Infrastructure Management</li>
                    <li>• Software Development</li>
                    <li>• IT Support and Maintenance</li>
                    <li>• Technology Strategy Consulting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">AI Solutions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI Essentials for Small Business</li>
                    <li>• AI Growth Package</li>
                    <li>• AI Business Pro Suite</li>
                    <li>• AI Custom Development</li>
                    <li>• AI Chatbots and AI Brains</li>
                    <li>• Marketing/Lead Generation Automation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">PMO & ITSM Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Project Management Office</li>
                    <li>• IT Service Management</li>
                    <li>• Process Optimization</li>
                    <li>• Portfolio Management</li>
                    <li>• Change Management</li>
                    <li>• ITIL Framework Implementation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Training & Development</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cloud Computing Training</li>
                    <li>• Cybersecurity Certification</li>
                    <li>• Software Development</li>
                    <li>• Data Analytics</li>
                    <li>• Project Management</li>
                    <li>• AI and Machine Learning</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-2">Additional Services</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Staffing and Recruitment</li>
                    <li>• Custom App Development</li>
                    <li>• Website Creation</li>
                    <li>• Digital Marketing</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• QA & Testing Services</li>
                    <li>• IT Operations Support</li>
                    <li>• Large Scale Project Implementation</li>
                    <li>• SEO and Lead Generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              Our Mission
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="text-gray-700">
            <p>
              Our Mission is to understand the clients needs and solve their problems while providing unparalleled services to our clients.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
              Our Vision
            </h2>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="text-gray-700">
            <p>
              Our Vision is to Enable, Equip and Empower (E3) Companies and people to achieve their strategic goals by streamlining processes and by increasing operational effectiveness
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}