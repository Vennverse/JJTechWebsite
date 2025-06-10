import JJTechNavigation from "@/components/jjtech-navigation";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              About Us
            </h1>
          </div>
        </section>

        <div className="bg-teal-600 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg">
              JJ-Tech is your trusted technology partner, delivering innovative solutions since our founding.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between business needs and technological innovation, 
                JJ-Tech has been helping organizations transform their operations and achieve their goals through 
                cutting-edge technology solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals combines deep technical expertise with business acumen 
                to deliver solutions that not only meet current requirements but also position organizations 
                for future growth and success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To empower businesses through innovative technology solutions that drive efficiency, 
                productivity, and sustainable growth in an ever-evolving digital landscape.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span><strong>Innovation:</strong> Continuously exploring new technologies and methodologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span><strong>Excellence:</strong> Delivering the highest quality solutions and services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span><strong>Partnership:</strong> Building long-term relationships with our clients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <span><strong>Integrity:</strong> Maintaining transparency and trust in all our interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}