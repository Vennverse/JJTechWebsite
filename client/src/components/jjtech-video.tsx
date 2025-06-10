export default function JJTechVideo() {
  return (
    <div className="bg-white">
      {/* Sky Blue Banner */}
      <div className="bg-sky-600 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white text-lg">
            IT Services - We provide the best in class service for you. We are your trusted partners.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/dOs-cRC1Pqw?rel=0&modestbranding=1"
            title="Welcome to JJ Tech"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full aspect-video"
            style={{ minHeight: "400px" }}
          ></iframe>
        </div>
        
        {/* Video Description */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Welcome to JJ Tech</h2>
          <p className="text-gray-600 text-sm">
            Discover our comprehensive IT services and solutions that help businesses transform and grow.
          </p>
        </div>
      </div>
    </div>
  );
}