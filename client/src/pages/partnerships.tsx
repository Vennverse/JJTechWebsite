import JJTechNavigation from "@/components/jjtech-navigation";

export default function Partnerships() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              Our Partnerships
            </h1>
            {/* Sky Blue underline */}
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-sky-600"></div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="text-gray-700">
            <p>
              As a NCTRAE- MWBE and SBE entity, we are a vendor for the state of Texas. Below are a few of the entities that we work with for the state of Texas
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}