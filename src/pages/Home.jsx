// src/pages/Home.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPaperclip,
  faEnvelope,
  faPhone,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className="about">
      <div className="about-columns">

        {/* LEFT COLUMN – Portrait + Links */}
        <div className="about-left">
          <img
            src="/images/ui/Luke_Michaels_Photograph_250.webp"
            srcSet="/images/ui/Luke_Michaels_Photograph_250.webp 1x, /images/ui/Luke_Michaels_Photograph_700.webp 2x"
            alt="Portrait of Luke Michaels"
            width={250}
            height={250}
          />
          <div className="about-links" aria-label="Contact and profile links">
            <a
              href="/documents/Luke_Michaels_Resume.pdf"
              title="Download my resume"
              target="_blank"
              rel="noopener noreferrer"
              //download
              aria-describedby="pdf-meta"
            >
              <div className="about-icon">
                <FontAwesomeIcon icon={faPaperclip} aria-hidden="true" />
              </div>
              <div className="about-link-title">Resume</div>
            </a>
            <a
              href="mailto:hello@lukemichaels.com"
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
            {/*
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
            */}
          </div>
        </div>{/* about-left */}

        {/* RIGHT COLUMN – Content */}
        <div className="about-right">
          {/* Intro */}
          <div className="about-group">
            <h1>Hi, I&apos;m Luke.</h1>
            <p>
              I'm a front-end developer and designer with 15+ years of experience building accessible web products out of complicated requirements. I like staying involved across the whole thing, from early research and rough wireframes through to production code. {/* I'm drawn to products where the design actually matters for real people. The more complex the problem, the more I want to understand it from the inside out. */}
            </p>
            <p>
              I think in systems. Designing a component, mapping a user journey, building out a design system, it's all the same instinct: keep it consistent and think about whoever inherits the work after me. In code that shows up as clean, maintainable work and specs that don't leave developers guessing. In design it's documentation, contribution standards, and patterns that hold up as a product grows. I'm comfortable running a workshop, walking stakeholders through the reasoning, and reworking things once research comes back.
            </p>
            <p style={{ marginBottom: 0 }}>
              Away from the browser, I build interactive LED installations, mess around with microcontrollers, and do some 3D modeling. That work feeds back into the web more than I'd expect, mostly in how I think about motion and interaction.
            </p>
          </div>

          {/* Primary Skills */}
          <div className="about-group primary-skills">
            <h2 className="about-title">What I do</h2>

            <h3 className="about-heading">Front-End Development</h3>
            <div className="about-detail">
              HTML5, CSS/Sass, JavaScript (ES6+), React, PHP, WCAG accessibility, performance optimization, responsive UI systems.
            </div>

            <h3 className="about-heading">UX Research & Strategy</h3>
            <div className="about-detail">
              Discovery, usability testing, stakeholder interviews, and synthesis. Turning what I learn, both the numbers and the interviews, into clear recommendations and a sense of what to tackle first.
            </div>

            <h3 className="about-heading">Interaction Design & Prototyping</h3>
            <div className="about-detail">
              Design work in Figma, from low-fidelity concepts and journey maps through to developer-ready specs and high-fidelity interactive prototypes.
            </div>

            <h3 className="about-heading">Design Systems</h3>
            <div className="about-detail">
              Building and maintaining component libraries and design systems: contribution standards, adoption plans, style guides, and enough back-and-forth with engineering that the design and the code don't drift apart.
            </div>

            <h3 className="about-heading">WordPress &amp; CMS</h3>
            <div className="about-detail">
              Custom blocks, plugins, and themes. Gutenberg, WooCommerce, API integrations, modular component architecture.
            </div>

            <h3 className="about-heading">Brand Identity &amp; Visual Systems</h3>
            <div className="about-detail">
              Logo design, type pairing, color systems, and brand guidelines, from scratch or extended across an existing identity for digital and print.
            </div>

            <h3 className="about-heading">Interaction &amp; Motion</h3>
            <div className="about-detail">
              Micro-interactions, animated UI components, scroll-driven effects, and motion graphics. For me animation earns its place when it does a job, pointing attention somewhere or showing that something changed, and I watch performance the whole time. Tools include GSAP, CSS and JS animation, and After Effects.
            </div>

            <h3 className="about-heading">Graphics &amp; Media</h3>
            <div className="about-detail">
              Illustrator, Photoshop, Figma, Procreate, InDesign, Blender, After Effects.
            </div>
            
            <h3 className="about-heading">Video Editing</h3>
            <div className="about-detail">
              Premier, Final Cut.
            </div>
          </div>{/* primary-skills */}

          {/* Creative & Technical Exploration 
          <div className="about-group technical-exploration">
            <h2 className="about-title">Creative &amp; Technical Exploration</h2>
            <p>
              Beyond the browser, I enjoy creating graphics, 3D modeling, and building interactive LED installations using FastLED and microcontrollers. These experiments often influence my approach to animation, interaction patterns, and visual systems on the web.
            </p>

            <h3 className="about-heading">Graphics &amp; Motion</h3>
            <div className="about-detail">
              Illustrator, Photoshop, Figma, Procreate. Comfortable working across vector illustration, image retouching, and layout composition.
            </div>

            <h3 className="about-heading">Print & Editorial</h3>
            <div className="about-detail">
              InDesign for editorial layouts, print collateral, and multi-page documents.
            </div>

            <h3 className="about-heading">3D &amp; Physical</h3>
            <div className="about-detail">
              Blender, 3D modeling for print, LED/interactive installations.
            </div>

            <h3 className="about-heading">Media</h3>
            <div className="about-detail">
              Photo retouching, video editing, motion graphics (After Effects).
            </div>
          </div>{/* technical-exploration */}

          {/* Education */}
          <div className="about-group education">
            <h2 className="about-title">Education</h2>
            <h3 className="about-heading">
              Computer Science &amp; Digital Media
            </h3>
            <div className="about-detail">Full Sail University (2005)</div>
          </div>{/* education */}

          {/* Favorites */}
          <div className="about-group favorites">
            <h2 className="about-title">Some Favorites</h2>
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

          <div className="about-cta">
            <Link
              to="/work"
              title="Visit my portfolio page">
              <div className="about-icon">
                <FontAwesomeIcon icon={faFolderOpen} aria-hidden="true" />
              </div>
              <div className="about-link-title">View My Work</div>
            </Link>
          </div>{/* about-cta */}
        </div>{/* about-right */}

      </div>{/* about-columns */}
    </section>
  );
}
