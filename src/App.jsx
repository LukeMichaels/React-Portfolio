// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import GalaxyBackground from "./components/GalaxyBackground.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
// import LEDArt from "./pages/LEDArt.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="app has-galaxy">
      <GalaxyBackground />
      <Header />
      <Hero />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          {/* <Route path="/led-art" element={<LEDArt />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
