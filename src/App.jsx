import { useEffect, useState, useRef } from "react";
import { useLenis } from "./hooks/useLenis";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureScene from "./components/FeatureScene";
import AgentScene from "./components/AgentScene";
import FAQSection from "./components/FAQSection";
import FinalSection from "./components/FinalSection";
import News from "./components/News";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5750);

    return () => clearTimeout(timer);
  }, []);

  const handleLetsGoClick = () => {
    const firstFeature = document.getElementById('features');
    if (firstFeature) {
      firstFeature.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const switchAudio = (newSrc) => {
    if (audioRef.current) {
      audioRef.current.src = newSrc;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <Preloader setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Header />
          <main>
            <HeroSection onLetsGoClick={handleLetsGoClick} />
            <div id="features">
              <FeatureScene
                title="Live Match Stats"
                subtitle="See player ranks and stats in real-time"
                sceneNumber={1}
              />
              <FeatureScene
                title="Match History"
                subtitle="Track performance across all recent games"
                sceneNumber={2}
              />
              <FeatureScene
                title="Player Search"
                subtitle="Look up any player, anytime"
                sceneNumber={3}
              />
            </div>
            <AgentScene />
            <News />
            <FAQSection />
            <FinalSection switchAudio={switchAudio} />
          </main>
          <Footer />
          <audio ref={audioRef} style={{ display: 'none' }} />
        </>
      )}
    </>
  );
}

export default App;
