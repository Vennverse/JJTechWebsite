import JJTechNavigation from "@/components/jjtech-navigation";
import { MapPin, Mail, Phone, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-sky-600 to-sky-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact JJ-Tech
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Ready to transform your business with technology? Get in touch with our team of experts today.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Email Contact */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-sky-600">Info@jj-tech.co</p>
                  <p className="text-lg font-semibold text-sky-600">JJ.tech.us.corp@gmail.com</p>
                </div>
                <p className="text-gray-600 mt-4">
                  Send us an email for general inquiries, project discussions, or partnership opportunities.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold">Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-semibold">Saturday</p>
                    <p>10:00 AM - 2:00 PM EST</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Response Time</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="font-semibold">Email Inquiries</p>
                    <p>Within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold">Project Consultations</p>
                    <p>Same business day</p>
                  </div>
                  <div>
                    <p className="font-semibold">Emergency Support</p>
                    <p>Within 4 hours</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Can Help</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you need IT consulting, AI solutions, custom development, or training services, 
                we're here to help your business succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">IT Services</h4>
                <p className="text-sm text-gray-600">Infrastructure, cloud, security, and support</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">AI Solutions</h4>
                <p className="text-sm text-gray-600">Machine learning, automation, and chatbots</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">PMO Services</h4>
                <p className="text-sm text-gray-600">Project management and ITSM consulting</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Training</h4>
                <p className="text-sm text-gray-600">Technical skills and certification prep</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-sky-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Contact us today to discuss your technology needs and discover how JJ-Tech can help 
              transform your business.
            </p>

          </div>
        </section>

      </main>
    </div>
  );
}