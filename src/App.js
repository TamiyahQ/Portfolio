import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen">
     <Header />
     <About />
     <Skills />
     <Experience />
     <Projects />
     <Contact />
     <Resume />
     <Footer />
    </div>
  );
}

export default App;
