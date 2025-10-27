import React from "react";
import "./styles/App.css";
import {
  Navigation,
  Footer,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
