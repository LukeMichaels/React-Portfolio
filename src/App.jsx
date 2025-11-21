// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import GalaxyBackground from "./components/GalaxyBackground.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";
export default function App() {
  return (
    <div className="app has-galaxy">
      <GalaxyBackground />
      <Header />
      <main className="site-main">
        <Hero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
