import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [posY, setPosY] = useState(window.pageYOffset);
  sessionStorage.setItem("pageHeight", window.innerHeight * 4);
  useEffect(() => {
    const handleScroll = (e) => setPosY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    if (posY > 0) {
      sessionStorage.setItem("posY", posY);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  };

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-body">
        <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
        <Navbar handleSidebar={handleSidebar} />
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </header>
    </div>
  );
}

export default App;
