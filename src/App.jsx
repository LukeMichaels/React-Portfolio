// src/App.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GalaxyBackground from "./components/GalaxyBackground.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Work = lazy(() => import("./pages/Work.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export default function App() {
  return (
    <div className="app has-galaxy">
      <GalaxyBackground />
      <ScrollToTop />
      <Header />
      <Hero />
      <main className="site-main" id="main-content" tabIndex={-1}>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}