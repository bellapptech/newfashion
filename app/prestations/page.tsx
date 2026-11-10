const services = [
  {
    title: "Coiffure Femme",
    category: "Coiffure",
    description:
      "Des coiffures adaptées à votre style, vos envies et vos occasions spéciales.",
    image: "/assets/prestationcoiffurefemme.jpg",
  },
  {
    title: "Coiffure Homme et Femme",
    category: "Coiffure",
    description:
      "Des prestations de coiffure pour hommes et femmes, réalisées avec soin.",
    image: "/assets/coiffurecouple.jpg",
  },
  {
    title: "Soins des ongles",
    category: "Beauté",
    description:
      "Prenez soin de vos ongles et découvrez nos prestations de beauté des mains.",
    image: "/assets/onglere.jpg",
  },
  {
    title: "Soins capillaires",
    category: "Soins",
    description:
      "Des conseils et solutions adaptés aux différents problèmes capillaires.",
    image: "/assets/problemcapilair.jpg",
  },
  {
    title: "Soins et beauté de la peau",
    category: "Esthétique",
    description:
      "Découvrez nos solutions et conseils pour prendre soin de votre peau.",
    image: "/assets/solutiondepiggmentationdjansan.jpg",
  },
  {
    title: "Conseils beauté – Teint banane",
    category: "Beauté",
    description:
      "Découvrez nos conseils et solutions beauté adaptés à vos besoins.",
    image: "/assets/solutionpourteintbanane.jpg",
  },
  {
    title: "Conseils beauté – Teint caramel",
    category: "Beauté",
    description:
      "Explorez nos conseils et solutions pour votre routine de beauté.",
    image: "/assets/solutionteintcaramel.jpg",
  },
];

export default function PrestationsPage() {
  return (
    <>
      <section className="page-hero prestations-hero">
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="hero-label">NEW FASHION – NOS SERVICES</span>

            <h1>
              Révélez votre beauté.
              <br />
              Profitez de notre savoir-faire.
            </h1>

            <p>
              Découvrez les prestations professionnelles de New Fashion
              dans les domaines de la coiffure, de la beauté et des soins.
            </p>

            <a
              href="https://wa.me/237676266865?text=Bonjour%20New%20Fashion%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20prestations."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Demander une prestation
            </a>
          </div>
        </div>
      </section>

      <section className="courses-intro">
        <span className="section-label">NOTRE SAVOIR-FAIRE</span>
        <h2>Nos prestations de services</h2>
        <p>
          Notre équipe met ses compétences à votre disposition pour vous
          proposer des prestations adaptées à vos besoins. Découvrez nos
          différents domaines de services et contactez-nous pour obtenir
          plus d'informations.
        </p>
      </section>

      <section className="courses-section">
        <div className="courses-grid">
          {services.map((service) => (
            <article className="course-card" key={service.title}>
              <img src={service.image} alt={service.title} />

              <div className="course-content">
                <span className="course-category">{service.category}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={`https://wa.me/237676266865?text=${encodeURIComponent(
                    `Bonjour New Fashion, je souhaite obtenir des informations sur votre prestation : ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demander cette prestation →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="registration-banner">
        <div>
          <span className="section-label">CONTACTEZ-NOUS</span>
          <h2>Nous sommes à votre écoute.</h2>

          <p>
            Vous souhaitez bénéficier d'une prestation ou obtenir un
            renseignement ? Contactez New Fashion directement sur WhatsApp.
          </p>

          <a
            href="https://wa.me/237676266865?text=Bonjour%20New%20Fashion%2C%20je%20souhaite%20prendre%20des%20informations%20sur%20vos%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Contacter New Fashion
          </a>
        </div>

        <img
          src="/assets/imageoftheinside.jpg"
          alt="New Fashion"
        />
      </section>

      <div className="back-home">
        <a href="/">← Retour à l'accueil</a>
      </div>
    </>
  );
}