// src/components/SiteHeader/SiteHeader.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SiteHeader() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // show nav after ~20px scroll
      setShowBar(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header" aria-label="Primary site header">
      <div
        className={
          showBar
            ? "site-header-bar site-header-bar--visible"
            : "site-header-bar"
        }
      >
        <div className="site-header-inner">
          <NavLink to="/" className="site-logo">
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
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    isActive ? "site-nav-link is-active" : "site-nav-link"
                  }
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "site-nav-link is-active" : "site-nav-link"
                  }
                >
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
