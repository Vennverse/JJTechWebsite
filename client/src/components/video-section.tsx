import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See Our Technology in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how we transform businesses through innovative technology solutions
            that drive real results and sustainable growth.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            {/* Video Element */}
            <video
              id="hero-video"
              className="w-full h-auto"
              poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                type="video/mp4"
              />
              <p className="text-white p-8 text-center">
                Your browser does not support the video tag. Please upgrade to a modern browser.
              </p>
            </video>

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors duration-300">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handlePlayPause}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 rounded-full w-16 h-16 p-0"
                  size="lg"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </Button>
                
                <Button
                  onClick={handleMuteToggle}
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30 rounded-full w-12 h-12 p-0"
                  size="sm"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Video Information Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Digital Transformation Journey
              </h3>
              <p className="text-gray-200 text-sm">
                Discover how we help businesses leverage technology to achieve unprecedented growth and efficiency.
              </p>
            </div>
          </div>

          {/* Video Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-brand-600 dark:bg-brand-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Rapid Implementation
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quick deployment of cutting-edge solutions with minimal disruption to your operations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-600 dark:bg-brand-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Proven Results
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Measurable improvements in efficiency, productivity, and business outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-600 dark:bg-brand-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12h-6m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Scalable Solutions
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Technology infrastructure that grows with your business needs and ambitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}