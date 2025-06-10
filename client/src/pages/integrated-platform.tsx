import JJTechNavigation from "@/components/jjtech-navigation";

export default function IntegratedPlatform() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        {/* Main Header */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-normal text-gray-800 mb-4">
              BIZBUYSELL MARKETPLACE
            </h1>
          </div>
        </section>

        {/* Yellow Banner */}
        <div className="bg-yellow-400 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-black text-xl font-medium">
              BIZBUYSELLMARKET - A SINGLE INTEGRATED PLATFORM FOR YOUR BUSINESS BUYING AND SELLING NEEDS
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                BRINGING PEOPLE AND BUSINESS TOGETHER ON AN INTERNATIONAL PLATFORM
              </h3>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  <a href="http://www.bizbuysellmarket.com/" className="text-blue-600 hover:underline">
                    http://www.bizbuysellmarket.com/
                  </a>
                </p>
                
                <p>
                  BizBuySellMarket has a large inventory of businesses and franchises for sale on an International Platform
                </p>
                
                <p>
                  A large Internet marketplace for our B2B Audience. BizBuySellMarket provides a platform for prospective franchise owners, prospective buyers and sellers looking to buy and sell businesses, franchises and those looking to post ads to market their businesses and expand their operations globally.
                </p>
                
                <p>
                  BizBuySellMarket provides many offerings such as franchise opportunities, Businesses for sale and many more and it provides a platform for businesses and people to expand their operations globally at no additional cost.
                </p>
                
                <p>
                  <a href="http://www.bizbuysellmarket.com/" className="text-blue-600 hover:underline">
                    http://www.bizbuysellmarket.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}