// src/pages/Home.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className="about">
      <div className="about-columns">

        {/* LEFT COLUMN – Portrait + Links */}
        <div className="about-left">
          <img
            src="/images/ui/2025-about-image.webp"
            alt="Portrait of Luke Michaels"
          />
          <div className="about-links" aria-label="Contact and profile links">
            <a
              href="/documents/Luke_Michaels_Resume_2025.pdf"
              title="Download my resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="about-icon">
                <FontAwesomeIcon icon={faPaperclip} aria-hidden="true" />
              </div>
              <div className="about-link-title">Resume</div>
            </a>
            <a
              href="mailto:lmichaels@gmail.com"
              title="Send me an email"
            >
              <div className="about-icon">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </div>
              <div className="about-link-title">Email</div>
            </a>
            <a href="tel:+15038900222" title="Call me">
              <div className="about-icon">
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              </div>
              <div className="about-link-title">Phone</div>
            </a>
            <a
              href="https://github.com/LukeMichaels"
              title="Visit my GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="about-icon">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </div>
              <div className="about-link-title">GitHub</div>
            </a>
            <a
              href="https://www.linkedin.com/in/lmichaels"
              title="Visit my LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="about-icon">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </div>
              <div className="about-link-title">LinkedIn</div>
            </a>
          </div>
        </div>{/* about-left */}

        {/* RIGHT COLUMN – Content */}
        <div className="about-right">
          {/* Intro */}
          <div className="about-group">
            <h1>Hi, I&apos;m Luke.</h1>
            <p>
              I’m a front-end developer and UX-focused designer who builds accessible, high-impact websites and web apps for nonprofits, artists, and mission-driven organizations. I blend visual design, motion, and clean, maintainable code to create intuitive digital experiences that feel great to use.
            </p>
            <p style={{ marginBottom: 0 }}>
              Over the last 15+ years, I’ve designed and engineered websites, interfaces, and interactive components across a wide range of projects—from content-heavy nonprofit platforms to experimental LED-driven installations. My work focuses on accessibility, performance, and thoughtful interface design, with an emphasis on crafting reusable systems that scale.
            </p>
          </div>

          {/* Primary Skills */}
          <div className="about-group primary-skills">
            <h2 className="about-title">Primary Skills</h2>

            <h3 className="about-heading">Front-End Development</h3>
            <div className="about-detail">
              HTML5, CSS/Sass, JavaScript (ES6+), PHP, accessibility (WCAG), performance optimization, responsive UI systems.
            </div>

            <h3 className="about-heading">WordPress &amp; CMS Development</h3>
            <div className="about-detail">
              Custom themes, ACF Pro, custom blocks, Gutenberg, WooCommerce, API integrations, modular component architecture.
            </div>

            <h3 className="about-heading">UX &amp; Visual Design</h3>
            <div className="about-detail">
              Wireframes, prototypes, UI systems, typography, layout, interaction and motion design.
            </div>

            <h3 className="about-heading">Workflow &amp; Tooling</h3>
            <div className="about-detail">
              Git/GitHub, Vite and modern build tooling, npm/yarn, local development (MAMP, etc.), component-based design and development, performance profiling.
            </div>
          </div>{/* primary-skills */}

          {/* Creative & Technical Exploration */}
          <div className="about-group technical-exploration">
            <h2 className="about-title">Creative &amp; Technical Exploration</h2>
            <p>
              Beyond the browser, I enjoy creating graphics, 3D modeling, and building motion pieces and interactive LED installations using FastLED and microcontrollers. These experiments often influence my approach to animation, interaction patterns, and visual systems on the web.
            </p>

            <h3 className="about-heading">Graphics &amp; Motion</h3>
            <div className="about-detail">
              Illustrator, Photoshop, Figma/Sketch, basic motion graphics.
            </div>

            <h3 className="about-heading">3D &amp; Physical</h3>
            <div className="about-detail">
              Blender, 3D modeling for print, LED/interactive installations.
            </div>

            <h3 className="about-heading">Media</h3>
            <div className="about-detail">
              Photo retouching, basic video editing.
            </div>
          </div>{/* technical-exploration */}

          {/* Education */}
          <div className="about-group education">
            <h2 className="about-title">Education</h2>
            <h3 className="about-heading">
              Computer Science – Digital Media
            </h3>
            <div className="about-detail">Full Sail University (2005)</div>
          </div>{/* education */}

          {/* Favorites */}
          <div className="about-group favorites">
            <h2 className="about-title">Some Favorites</h2>
            <div className="about-heading">
              Design Tool:{" "}
              <span className="about-detail">Adobe Illustrator</span>
            </div>
            <div className="about-heading">
              CSS Preprocessor:{" "}
              <span className="about-detail">Sass</span>
            </div>
            <div className="about-heading">
              Novel:{" "}
              <span className="about-detail">
                <em>Cat&apos;s Cradle</em>
              </span>
            </div>
            <div className="about-heading">
              Musician:{" "}
              <span className="about-detail">Flying Lotus</span>
            </div>
            <div className="about-heading">
              Film:{" "}
              <span className="about-detail">
                <em>Funeral Parade of Roses</em>
              </span>
            </div>
          </div>{/* favorites */}
        </div>{/* about-right */}

      </div>{/* about-columns */}
    </section>
  );
}
