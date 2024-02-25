import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto">

        <Navbar />
        <HeroSection />

      </div>
    </div>
  );
}
