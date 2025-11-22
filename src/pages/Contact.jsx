// src/pages/Contact.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please add a short message.";
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("");
      return;
    }

    const subject = formData.subject.trim() || "Portfolio contact from lukemichaels.com";

    const body = [
      "Hi Luke,",
      "",
      formData.message.trim(),
      "",
      `— ${formData.name}`,
      formData.email
    ].join("\n");

    const mailto = `mailto:lmichaels@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("Opening your email client so you can send this message.");
  }

  return (
    <section className="contact">
      <div className="contact-columns">
        {/* LEFT: Intro + direct contact info */}
        <div className="contact-left">
          <h1>Let&apos;s work together.</h1>
          <p>
            I collaborate with nonprofits, artists, and mission-driven teams to
            build accessible, high-impact websites and interactive experiences.
            If you have a project in mind—or just want to talk through an idea—I&apos;d
            love to hear from you.
          </p>
          <p>
            I&apos;m currently based in Portland, Oregon and available for
            remote work, contract collaborations, and select ongoing partnerships.
          </p>

          <div className="contact-details" aria-label="Direct contact details">
            <div className="contact-detail-row">
              <FontAwesomeIcon
                icon={faEnvelope}
                aria-hidden="true"
                className="contact-detail-icon"
              />
              <a href="mailto:lmichaels@gmail.com">lmichaels@gmail.com</a>
            </div>

            <div className="contact-detail-row">
              <FontAwesomeIcon
                icon={faPhone}
                aria-hidden="true"
                className="contact-detail-icon"
              />
              <a href="tel:+15038900222">+1 (503) 890-0222</a>
            </div>

            <div className="contact-detail-row">
              <FontAwesomeIcon
                icon={faLocationDot}
                aria-hidden="true"
                className="contact-detail-icon"
              />
              <span>Portland, Oregon (Remote-friendly)</span>
            </div>
          </div>

          <div className="contact-links" aria-label="Profile links">
            <a
              href="https://github.com/LukeMichaels"
              title="Visit my GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lmichaels"
              title="Visit my LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Contact form */}
        <div className="contact-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="contact-form-group">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p className="contact-error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p className="contact-error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact-form-group">
              <label htmlFor="subject">Project or subject (optional)</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p className="contact-error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="contact-actions">
              <button type="submit" className="contact-submit">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                  className="contact-submit-icon"
                />
                <span>Send message</span>
              </button>
              {status && (
                <p className="contact-status" role="status">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
