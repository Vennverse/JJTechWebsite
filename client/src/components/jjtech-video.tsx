export default function JJTechVideo() {
  return (
    <div className="bg-white">
      {/* Yellow Banner */}
      <div className="bg-yellow-400 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-black text-lg">
            IT Services - We provide the best in class service for you. We are your trusted partners.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/dOs-cRC1Pqw"
            title="Welcome to JJ Tech"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-96 md:h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}