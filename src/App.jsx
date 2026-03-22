import React from "react";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="portfolio-app min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <PageLoader />
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
