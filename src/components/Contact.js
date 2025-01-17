import React, { useState } from "react";
import "../styles/ContactStyles.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Contact() {
  // Información de contacto (ajusta tus datos reales)
  const phone = "+57 312 694 9134";
  const email = "mdflorezalvear@gmail.com";
  const linkedin = "Maicol Florez";

  // Estado para mostrar u ocultar el formulario
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      {/* Tarjeta con datos de contacto */}
      <div className="contact-info-card">
        <div className="contact-info-row">
          <FaPhoneAlt className="contact-icon" />
          <span>{phone}</span>
        </div>
        <div className="contact-info-row">
          <FaEnvelope className="contact-icon" />
          <span>{email}</span>
        </div>
        <div className="contact-info-row">
          <FaLinkedin className="contact-icon" />
          <span>{linkedin}</span>
        </div>
      </div>

      <p className="contact-invitation">
        If you are interested in working with me or have any questions, feel
        free to reach out!
      </p>

      {/* Botón/flecha para mostrar u ocultar el formulario */}
      <button className="toggle-button" onClick={toggleForm}>
        {showForm ? "Hide Form" : "Send Me a Message"}
        {showForm ? (
          <FaChevronUp className="arrow-icon" />
        ) : (
          <FaChevronDown className="arrow-icon" />
        )}
      </button>

      {/* Formulario desplegable */}
      {showForm && (
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" rows="4" />

          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
