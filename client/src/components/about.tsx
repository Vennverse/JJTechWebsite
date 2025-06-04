import { Lightbulb, Handshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About JJ-Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to bridge the gap between business needs and
            technological innovation, we've been helping companies transform their
            operations for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Since our inception, JJ-Tech has been at the forefront of
              technological innovation. We understand that every business is
              unique, which is why we take a personalized approach to every
              project we undertake.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced professionals combines deep technical
              expertise with business acumen to deliver solutions that not only
              meet your current needs but also position your organization for
              future growth.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Lightbulb className="h-12 w-12 text-brand-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Cutting-edge solutions</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Handshake className="h-12 w-12 text-brand-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                <p className="text-sm text-gray-600">Long-term relationships</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Modern corporate office space"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Team collaboration workspace"
              className="rounded-lg shadow-lg w-full h-48 object-cover mt-4"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Technology innovation workspace"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Professional meeting room"
              className="rounded-lg shadow-lg w-full h-48 object-cover mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
