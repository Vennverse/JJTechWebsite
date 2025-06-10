import JJTechNavigation from "@/components/jjtech-navigation";
import JJTechHeader from "@/components/jjtech-header";
import JJTechVideo from "@/components/jjtech-video";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <JJTechNavigation />
      <main>
        <JJTechHeader />
        <JJTechVideo />
      </main>
    </div>
  );
}
