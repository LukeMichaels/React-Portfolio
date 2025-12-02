// src/components/Header.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 10;
    const SHORT_PAGE_EPS = 5;

    function updateBarVisibility() {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const isShortPage = maxScroll <= SHORT_PAGE_EPS;

      if (isShortPage) {
        setShowBar(true);
      } else {
        setShowBar(window.scrollY > SCROLL_THRESHOLD);
      }
    }

    updateBarVisibility();

    window.addEventListener("scroll", updateBarVisibility, { passive: true });
    window.addEventListener("resize", updateBarVisibility);

    return () => {
      window.removeEventListener("scroll", updateBarVisibility);
      window.removeEventListener("resize", updateBarVisibility);
    };
  }, []);

  function handleSkipToMain(event) {
    const mainContent = document.getElementById("main-content");

    if (mainContent) {
      event.preventDefault();
      mainContent.focus({ preventScroll: true });
      mainContent.scrollIntoView({ block: "start" });
    }
  }

  return (
    <header aria-label="Primary site header">
      <a className="skip-link visually-hidden" href="#main-content" onClick={handleSkipToMain}>
        Skip to main content
      </a>
      <div
        className={
          showBar
            ? "site-header-bar site-header-bar--visible"
            : "site-header-bar"
        } >
        <div className="site-header-inner">
          <NavLink to="/" className="site-logo">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faEye} aria-hidden="true" />
            </div>
            <span className="site-logo-mark">LM</span>
            <span className="site-logo-text">Luke Michaels</span>
          </NavLink>
          <nav aria-label="Main navigation">
            <ul className="site-nav">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "site-nav-link is-active" : "site-nav-link"
                  } >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    isActive ? "site-nav-link is-active" : "site-nav-link"
                  } >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "site-nav-link is-active" : "site-nav-link"
                  } >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
