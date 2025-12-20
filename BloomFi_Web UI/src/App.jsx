import AboutSection from "./components/AboutSection";
import BusinessSection from "./components/BusinessSection";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Features />
      <BusinessSection />
    </div>
  );
};

export default App;
