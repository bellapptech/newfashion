import Link from "next/link";

const divisions = [
  {
    title: "Centre de formation",
    description:
      "Développez vos compétences grâce à nos formations professionnelles et pratiques.",
    image: "/assets/formationstylismetmodelisme.jpg",
    href: "/formations",
    action: "Découvrir nos formations",
  },
  {
    title: "Prestations de services",
    description:
      "Bénéficiez de prestations professionnelles dans nos différents domaines d'expertise.",
    image: "/assets/prestationcoiffurefemme.jpg",
    href: "/prestations",
    action: "Découvrir nos services",
  },
  {
    title: "E-Shop / Boutique",
    description:
      "Découvrez notre sélection de produits, accessoires, beauté et équipements.",
    image: "/assets/boutiqueecranetbaffle.jpg",
    href: "/boutique",
    action: "Visiter la boutique",
  },
  {
    title: "Immigration",
    description:
      "Découvrez nos services d'accompagnement pour vos projets et opportunités à l'international.",
    image: "/assets/headerimage3.jpeg",
    href: "/immigration",
    action: "En savoir plus",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-label">BIENVENUE CHEZ NEW FASHION</span>
            <h1>
              Votre avenir,
              <br />
              notre passion.
            </h1>
            <p>
              Formation professionnelle, prestations de services, boutique
              et accompagnement international : découvrez les quatre univers
              de New Fashion.
            </p>

            <div className="hero-actions">
              <Link href="/formations" className="primary-button">
                Découvrir nos formations
              </Link>
              <Link href="/contact" className="secondary-button">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <span className="section-label">NEW FASHION</span>
        <h2>Bien plus qu'un centre de formation</h2>
        <p>
          New Fashion rassemble quatre divisions complémentaires pour
          accompagner vos ambitions, développer vos compétences et répondre
          à vos besoins.
        </p>
      </section>

      <section className="divisions-section">
        <div className="section-heading">
          <span className="section-label">NOS ACTIVITÉS</span>
          <h2>Découvrez nos quatre divisions</h2>
        </div>

        <div className="division-grid">
          {divisions.map((division) => (
            <article className="division-card" key={division.href}>
              <img src={division.image} alt={division.title} />
              <div className="division-card-content">
                <h3>{division.title}</h3>
                <p>{division.description}</p>
                <Link href={division.href}>{division.action} →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="registration-section">
        <div>
          <span className="section-label">PASSEZ À L'ACTION</span>
          <h2>Votre prochaine étape commence ici.</h2>
          <p>
            Contactez New Fashion pour obtenir des informations sur nos
            formations, nos services, nos produits et nos prestations
            d'accompagnement.
          </p>
          <Link href="/contact" className="primary-button">
            Contactez-nous
          </Link>
        </div>
        <img
          src="/assets/aboutregistration.jpeg"
          alt="Informations sur les inscriptions New Fashion"
        />
      </section>
    </>
  );
}