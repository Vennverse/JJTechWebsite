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

        {/* Sky Blue Banner */}
        <div className="bg-sky-600 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-white text-lg font-medium">
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
              {/* Franchising Success Illustration */}
              <div className="w-64 h-64 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center relative overflow-hidden shadow-xl">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  {/* Globe */}
                  <circle cx="100" cy="100" r="80" fill="#10b981" opacity="0.8"/>
                  <path d="M40 100 Q100 60 160 100 Q100 140 40 100" fill="#059669"/>
                  <path d="M100 20 Q130 100 100 180 Q70 100 100 20" fill="#047857"/>
                  
                  {/* Success arrows */}
                  <path d="M60 80 L80 60 L70 65 L90 45" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                  <path d="M140 80 L120 60 L130 65 L110 45" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                  
                  {/* Dollar signs */}
                  <text x="50" y="70" fill="#fbbf24" fontSize="20" fontWeight="bold">$</text>
                  <text x="140" y="70" fill="#fbbf24" fontSize="20" fontWeight="bold">$</text>
                  <text x="95" y="50" fill="#fbbf24" fontSize="24" fontWeight="bold">$</text>
                </svg>
                
                <div className="absolute bottom-4 text-white text-center text-sm font-bold">
                  Opportunities Are Endless<br/>
                  In Franchising
                </div>
              </div>
            </div>
            
            <div className="bg-sky-600 p-6 rounded-lg max-w-sm">
              <div className="text-white text-sm space-y-2">
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