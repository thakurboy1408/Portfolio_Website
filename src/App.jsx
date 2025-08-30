import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import CertificateSection from "./components/CertificateSection";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Other Sections */}
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        {/* <section id="certificates">
          <CertificateSection />
        </section> */}

        <section id="contact">
          <Contact />
        </section>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;