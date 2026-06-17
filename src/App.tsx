import { ChatDemo } from "./components/ChatDemo";
import { CompleteWebsiteSections, SiteFooter } from "./components/CompleteWebsiteSections";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { PricingSection } from "./components/PricingSection";
import { VisionBanner } from "./components/VisionBanner";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#f5f2ea]">
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
      <NavBar />
      <Hero />
      <PricingSection />
      <CompleteWebsiteSections />
      <VisionBanner />
      <SiteFooter />
      <ChatDemo />
    </main>
  );
}

export default App;
