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

        {/* Large Professional Business Consulting Image */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-8 rounded-2xl shadow-xl max-w-5xl w-full">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Background */}
                <rect width="800" height="400" fill="url(#businessGradient)" rx="20"/>
                
                {/* Conference Room Setting */}
                <rect x="50" y="80" width="700" height="280" fill="#f8fafc" rx="15" opacity="0.9"/>
                
                {/* Presentation Screen */}
                <rect x="80" y="110" width="250" height="150" fill="#374151" rx="10"/>
                <rect x="90" y="120" width="230" height="130" fill="#ffffff" rx="5"/>
                
                {/* Business Growth Chart */}
                <g transform="translate(110, 140)">
                  <rect x="0" y="80" width="30" height="20" fill="#0284c7"/>
                  <rect x="40" y="60" width="30" height="40" fill="#0ea5e9"/>
                  <rect x="80" y="40" width="30" height="60" fill="#38bdf8"/>
                  <rect x="120" y="20" width="30" height="80" fill="#0284c7"/>
                  <rect x="160" y="10" width="30" height="90" fill="#10b981"/>
                  
                  {/* Arrow pointing up */}
                  <path d="M200 50 L220 30 L210 35 L230 15" stroke="#10b981" strokeWidth="3" fill="none"/>
                  <text x="110" y="125" fill="#64748b" fontSize="12" fontWeight="bold" textAnchor="middle">Revenue Growth</text>
                </g>
                
                {/* Consultant Figure */}
                <circle cx="400" cy="180" r="30" fill="#0284c7"/>
                <rect x="385" y="210" width="30" height="60" fill="#374151" rx="5"/>
                <circle cx="415" cy="160" r="8" fill="#f3f4f6"/>
                
                {/* Presentation Pointer */}
                <line x1="430" y1="180" x2="300" y2="160" stroke="#374151" strokeWidth="3"/>
                
                {/* Business Meeting Table */}
                <ellipse cx="580" cy="220" rx="150" ry="80" fill="#e5e7eb" opacity="0.8"/>
                
                {/* Meeting Participants */}
                <circle cx="520" cy="190" r="20" fill="#64748b"/>
                <circle cx="580" cy="180" r="20" fill="#64748b"/>
                <circle cx="640" cy="190" r="20" fill="#64748b"/>
                <circle cx="550" cy="250" r="20" fill="#64748b"/>
                <circle cx="610" cy="250" r="20" fill="#64748b"/>
                
                {/* Laptops on table */}
                <rect x="570" y="200" width="25" height="15" fill="#1f2937" rx="2"/>
                <rect x="540" y="210" width="25" height="15" fill="#1f2937" rx="2"/>
                <rect x="600" y="210" width="25" height="15" fill="#1f2937" rx="2"/>
                
                {/* Business Strategy Elements */}
                <g transform="translate(500, 100)">
                  <circle cx="0" cy="0" r="25" fill="#10b981" opacity="0.8"/>
                  <text x="0" y="5" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">$</text>
                  <text x="0" y="-40" fill="#64748b" fontSize="10" textAnchor="middle">ROI</text>
                  
                  <circle cx="60" cy="0" r="25" fill="#f59e0b" opacity="0.8"/>
                  <text x="60" y="5" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">📈</text>
                  <text x="60" y="-40" fill="#64748b" fontSize="10" textAnchor="middle">Growth</text>
                  
                  <circle cx="120" cy="0" r="25" fill="#8b5cf6" opacity="0.8"/>
                  <text x="120" y="5" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">🎯</text>
                  <text x="120" y="-40" fill="#64748b" fontSize="10" textAnchor="middle">Strategy</text>
                </g>
                
                {/* Franchise Opportunities */}
                <g transform="translate(100, 320)">
                  <rect x="0" y="0" width="120" height="50" fill="#0284c7" rx="8" opacity="0.9"/>
                  <text x="60" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Franchise</text>
                  <text x="60" y="35" fill="white" fontSize="10" textAnchor="middle">$10K - $100K</text>
                  
                  <rect x="140" y="0" width="120" height="50" fill="#10b981" rx="8" opacity="0.9"/>
                  <text x="200" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Global</text>
                  <text x="200" y="35" fill="white" fontSize="10" textAnchor="middle">Opportunities</text>
                  
                  <rect x="280" y="0" width="120" height="50" fill="#f59e0b" rx="8" opacity="0.9"/>
                  <text x="340" y="20" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Business</text>
                  <text x="340" y="35" fill="white" fontSize="10" textAnchor="middle">Growth</text>
                </g>
                
                {/* Success Indicators */}
                <g transform="translate(650, 320)">
                  <circle cx="0" cy="0" r="20" fill="#10b981"/>
                  <text x="0" y="5" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">✓</text>
                  <text x="0" y="35" fill="#64748b" fontSize="10" textAnchor="middle">Success</text>
                  
                  <circle cx="50" cy="0" r="20" fill="#0ea5e9"/>
                  <text x="50" y="5" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">★</text>
                  <text x="50" y="35" fill="#64748b" fontSize="10" textAnchor="middle">Quality</text>
                </g>
                
                {/* Title */}
                <text x="400" y="40" fill="#1e40af" fontSize="32" fontWeight="bold" textAnchor="middle">Business Consulting Excellence</text>
                <text x="400" y="65" fill="#64748b" fontSize="18" textAnchor="middle">Strategic Growth • Franchise Opportunities • Global Expansion</text>
                
                <defs>
                  <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0f9ff"/>
                    <stop offset="100%" stopColor="#e0f2fe"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
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