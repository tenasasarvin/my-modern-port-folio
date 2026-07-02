import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// --- COMPONENTS ---
import AppNavigation from "./components/AppNavigation.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen transition-colors duration-300 antialiased selection:bg-[#E5E7EB]">
        <AppNavigation />
        {/* <main className="md:ml-64 pt-16 md:pt-0"> */}
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
