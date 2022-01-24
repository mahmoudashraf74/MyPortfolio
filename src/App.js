import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Footer/Copyright";
import Headers from "./components/Header/Header";
import AboutMe from "./components/Section/About/AboutMe";
import Heading from "./assistent/Heading";
import Landing from "./components/Header/Landing";
import Certification from "./components/Section/Certifcates/Certification";
import Projects from "./components/Section/Projects/Projects";
import About from "./components/Section/About/About";
import Skills from "./components/Section/Skills/Skills";

//import { Router } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <Headers />
      <Landing />
      <Heading heading="ABOUT ME" />
      <AboutMe />

      <About />
      <Heading heading="Resume" />
      <Certification id="certification" />
      <Heading heading="Skills" />
      <Skills />
      <Heading heading="Projects" />
      <Projects />

      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
