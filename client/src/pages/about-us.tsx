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
              We are a women owned, small business. We offer a number of services ranging from PMO Services, IT Training, IT services, Digital Marketing including Website Design and Development, Custom Application, Mobile Application to Digital Marketing, including SEO.
            </p>
            <p>
              JJ-Tech Franchising offers Franchise Brokering and Consulting
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
              Our Mission is to Provide unparalleled services to our clients
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}