import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <HomePage />
        <AboutMe />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
