import JJTechNavigation from "@/components/jjtech-navigation";

export default function BusinessConsulting() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              JJ-TECH - Franchising Brokerage
            </h1>
          </div>
        </section>

        {/* Yellow Banner */}
        <div className="bg-yellow-400 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-black text-lg font-medium">
              Franchise Brokerage-Consulting - We help fulfill your dream of Entrepreneurship
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="space-y-6 text-gray-700">
            <p>
              JJ-Tech franchising Brokerage and consulting offer you nearly 300 business opportunities to pick from.
            </p>
            
            <p>
              We at JJ- Tech consult and collaborate with prospective Business/Franchise owners to provide all the support and guidance needed for you to transition into an entrepreneur.
            </p>
            
            <p>
              Please allow us to take you on a journey to be your own boss, to enjoy financial freedom and stability. Our service costs you nothing and is completely free ( no hidden Costs).
            </p>
            
            <p>
              This amazing opportunity is open to people across the globe. We have franchises/ Business Opportunities ranging from as low as 10,000 USD all the way upto 100,000 USD.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <div className="relative">
              <div className="w-64 h-64 bg-blue-900 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-red-500 text-lg font-bold mb-2">
                      Opportunities Are Endless As You Venture<br/>
                      Into The World Of Franchising
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400 p-6 rounded-lg max-w-sm">
              <div className="text-black text-sm space-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <div className="text-black font-bold">⏰</div>
                  </div>
                  <div>
                    <div className="font-bold">The world is moving towards entrepreneurship......</div>
                    <div>How about you? Are you ready??? Time is ticking away... Don't procrastinate. Do it now!!!</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="font-bold">Contact us at JJ-Tech at corp@gmail.com or 214.699.1761</div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="font-bold">Fulfill your dream of business ownership for financial freedom, stability and security.</div>
                  <div>Be your own boss... This is the year to get invested in a franchise and own your own business. We offer 300+ franchises ranging from $10,000 to $150,000.</div>
                  <div className="text-blue-600 font-bold">Our service is 100% free ( No Hidden Costs)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}