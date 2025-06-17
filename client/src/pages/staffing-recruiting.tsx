import { Link } from "wouter";
import JJTechNavigation from "../components/jjtech-navigation";

export default function StaffingRecruiting() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JJTechNavigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Staffing and Recruiting Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect with top-tier technology professionals and build exceptional teams that drive your business forward.
          </p>
          <Link href="/contact" className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center inline-block">
            Find Talent Today
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recruiting Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in connecting organizations with exceptional technology professionals across all levels and specializations.
            </p>
          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">IT Professionals</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Software developers, system administrators, network engineers, cybersecurity specialists, and database administrators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">AI & Data Specialists</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Machine learning engineers, data scientists, AI researchers, business intelligence analysts, and automation specialists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Project Managers</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Certified PMP, Agile, and Scrum professionals with expertise in leading complex technology initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Executive Leadership</h3>
              </div>
              <p className="text-gray-600 text-sm">
                CTOs, IT Directors, VP of Engineering, and senior technology executives with proven track records.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Specialized Consultants</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Change management experts, ITSM specialists, business analysts, and digital transformation leaders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Contract & Permanent</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Flexible staffing solutions including contract-to-hire, direct placement, and project-based engagements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">Change Managers</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Highly skilled change management professionals who deliver world-class services for organizational transformations and user adoption initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-sky-200">
              <div className="flex items-center mb-3">
                <span className="text-green-600 text-xl mr-2">✅</span>
                <h3 className="text-lg font-semibold text-gray-800">ITSM Expertise</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Comprehensive IT Service Management specialists who ensure seamless service delivery with industry best practices and frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose JJ-Tech for Staffing?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our deep industry expertise and extensive network ensure you get the right talent at the right time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Extensive Network</h4>
                    <p className="text-gray-600 text-sm">Access to thousands of pre-screened technology professionals across all skill levels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Rigorous Screening</h4>
                    <p className="text-gray-600 text-sm">Comprehensive technical assessments, background checks, and cultural fit evaluations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fast Turnaround</h4>
                    <p className="text-gray-600 text-sm">Average placement time of 2-3 weeks for most positions, urgent needs within days.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Placement Guarantee</h4>
                    <p className="text-gray-600 text-sm">90-day replacement guarantee for all permanent placements with no additional fees.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Market Expertise</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-sky-600">
                  <div className="font-semibold text-gray-800">Cloud Technologies</div>
                  <div className="text-sm text-gray-600">AWS, Azure, GCP specialists</div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-sky-600">
                  <div className="font-semibold text-gray-800">DevOps & Automation</div>
                  <div className="text-sm text-gray-600">CI/CD, Infrastructure as Code</div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-sky-600">
                  <div className="font-semibold text-gray-800">Cybersecurity</div>
                  <div className="text-sm text-gray-600">CISSP, CISA, ethical hackers</div>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-sky-600">
                  <div className="font-semibold text-gray-800">Modern Development</div>
                  <div className="text-sm text-gray-600">React, Python, Microservices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our recruiting expertise spans across multiple industries with deep understanding of sector-specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Financial Services</h4>
              <p className="text-sm text-gray-600">Banking, fintech, insurance technology</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Healthcare</h4>
              <p className="text-sm text-gray-600">Health IT, medical devices, telemedicine</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">E-commerce</h4>
              <p className="text-sm text-gray-600">Online retail, marketplace platforms</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600">IoT, automation, supply chain tech</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Government</h4>
              <p className="text-sm text-gray-600">Public sector digital transformation</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
              <p className="text-sm text-gray-600">EdTech, learning management systems</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Startups</h4>
              <p className="text-sm text-gray-600">Early-stage tech companies</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-gray-800 mb-2">Enterprise</h4>
              <p className="text-sm text-gray-600">Fortune 500 corporations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recruiting Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A streamlined, transparent approach that delivers results quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Requirements Analysis</h3>
              <p className="text-sm text-gray-600">Deep dive into your technical needs, team culture, and project requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Candidate Sourcing</h3>
              <p className="text-sm text-gray-600">Leverage our network and advanced search techniques to identify top talent.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Screening & Assessment</h3>
              <p className="text-sm text-gray-600">Comprehensive technical and cultural evaluations to ensure perfect matches.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Placement & Support</h3>
              <p className="text-sm text-gray-600">Seamless onboarding with ongoing support to ensure successful integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <div className="bg-sky-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h3>
          <p className="text-xl text-sky-100 mb-6">
            Let's discuss your staffing needs and connect you with exceptional technology professionals.
          </p>
          <div className="space-y-3 text-lg text-sky-100">
            <div>📧 <strong>Email:</strong> Info@jj-tech.co or JJ.tech.us.corp@gmail.com</div>
          </div>
        </div>
      </div>

    </div>
  );
}