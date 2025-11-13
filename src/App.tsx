import About from "./sections/About";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { usePageTracking } from "./hooks/usePageTracking";

const App = () => {
  // Enable Google Analytics page tracking
  usePageTracking();

  return (
    <main className="max-w-7xl mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Footer/>
    </main>
  );
};

export default App;