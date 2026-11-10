
"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [language, setLanguage] = useState<"FR" | "EN">("FR");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isFrench = language === "FR";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = isFrench
      ? `Bonjour New Fashion !\n\nNom : ${name}\nTéléphone : ${phone}\nSujet : ${subject}\n\nMessage :\n${message}`
      : `Hello New Fashion!\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`;

    const whatsappURL = `https://wa.me/237676266865?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            NEW FASHION — DOUALA, CAMEROON
          </span>

          <h1>
            {isFrench
              ? "Parlons de votre avenir."
              : "Let's talk about your future."}
          </h1>

          <p>
            {isFrench
              ? "Une question sur nos formations, nos prestations, notre boutique ou nos services d'accompagnement international ? Notre équipe est là pour vous."
              : "Have a question about our training, services, shop or international guidance? Our team is here to help."}
          </p>

          <button
            className="contact-language"
            onClick={() => setLanguage(isFrench ? "EN" : "FR")}
          >
            {isFrench ? "English" : "Français"}
          </button>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-intro">
          <span className="contact-tag">
            {isFrench ? "CONTACTEZ-NOUS" : "GET IN TOUCH"}
          </span>
          <h2>
            {isFrench ? "Nous sommes à votre écoute" : "We are here to help"}
          </h2>
          <p>
            {isFrench
              ? "Remplissez le formulaire et envoyez-nous directement votre message sur WhatsApp."
              : "Complete the form and send your message directly to us on WhatsApp."}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-card">
            <h3>
              {isFrench ? "Envoyez-nous un message" : "Send us a message"}
            </h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="contact-name">
                {isFrench ? "Nom complet" : "Full name"}
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder={isFrench ? "Votre nom" : "Your name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="contact-phone">
                {isFrench ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="+237..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label htmlFor="contact-subject">
                {isFrench ? "Sujet" : "Subject"}
              </label>
              <select
                id="contact-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">
                  {isFrench ? "Choisissez un sujet" : "Choose a subject"}
                </option>
                <option value={isFrench ? "Formations" : "Training"}>
                  {isFrench ? "Formations" : "Training"}
                </option>
                <option value={isFrench ? "Prestations" : "Services"}>
                  {isFrench ? "Prestations" : "Services"}
                </option>
                <option value={isFrench ? "Boutique" : "Shop"}>
                  {isFrench ? "Boutique" : "Shop"}
                </option>
                <option value="Immigration">Immigration</option>
                <option value={isFrench ? "Autre demande" : "Other enquiry"}>
                  {isFrench ? "Autre demande" : "Other enquiry"}
                </option>
              </select>

              <label htmlFor="contact-message">
                {isFrench ? "Votre message" : "Your message"}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder={
                  isFrench
                    ? "Comment pouvons-nous vous aider ?"
                    : "How can we help you?"
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button type="submit" className="contact-submit">
                <span>WhatsApp</span>
                {isFrench ? "Envoyer le message" : "Send message"}
                <span>→</span>
              </button>

              <p className="contact-form-note">
                {isFrench
                  ? "WhatsApp s'ouvrira avec votre message prérempli."
                  : "WhatsApp will open with your message ready to send."}
              </p>
            </form>
          </div>

          <div className="contact-details">
            <div className="contact-detail-card">
              <span className="contact-icon">📍</span>
              <div>
                <h3>{isFrench ? "Notre adresse" : "Our location"}</h3>
                <p>
                  SIS Ndogbong (Socaver), en face de SCB Bank,
                  Douala, Cameroun.
                </p>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-icon">📞</span>
              <div>
                <h3>{isFrench ? "Appelez-nous" : "Call us"}</h3>
                <a href="tel:+237676266865">+237 676 26 68 65</a>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-icon">💬</span>
              <div>
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/237676266865"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isFrench ? "Discuter avec nous" : "Chat with us"}
                </a>
              </div>
            </div>

            <div className="contact-detail-card">
              <span className="contact-icon">🌐</span>
              <div>
                <h3>{isFrench ? "Réseaux sociaux" : "Social media"}</h3>
                <a
                  href="https://web.facebook.com/123newfashion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <span className="contact-social-divider"> | </span>
                <a
                  href="https://www.instagram.com/institut_new_fashion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <a
              className="contact-map-link"
              href="https://www.google.com/maps/search/?api=1&query=SIS+Ndogbong+Socaver+Douala+Cameroon"
              target="_blank"
              rel="noopener noreferrer"
            >
              {isFrench ? "Obtenir l'itinéraire" : "Get directions"} →
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="New Fashion location in Douala"
            src="https://www.google.com/maps?q=SIS%20Ndogbong%20Socaver%20Douala%20Cameroon&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
