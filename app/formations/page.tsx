import Link from "next/link";

const courses = [
  {
    title: "Coiffure Homme",
    category: "Coiffure",
    description:
      "Apprenez les techniques professionnelles de coupe, de dégradé, de coiffure et de soins capillaires pour hommes.",
    image: "/assets/formationcoiffurehommebouleazero.jpg",
  },
  {
    title: "Coiffure Femme",
    category: "Coiffure",
    description:
      "Découvrez les techniques de coiffure féminine, lace frontale, locks et différentes réalisations.",
    image: "/assets/formationencoifurefemmelacefrontale.jpg",
  },
  {
    title: "Coiffure Mixte",
    category: "Coiffure",
    description:
      "Développez vos compétences en coiffure pour hommes et femmes avec une formation pratique.",
    image: "/assets/formationcoiffuremixt.jpg",
  },
  {
    title: "Locks et coiffure spécialisée",
    category: "Coiffure",
    description:
      "Maîtrisez les techniques de création, d'entretien et de réalisation des coiffures locks.",
    image: "/assets/formationencoiffurehommelocks.jpg",
  },
  {
    title: "Cosmétique",
    category: "Beauté",
    description:
      "Apprenez les bases des produits cosmétiques, des soins et des techniques de beauté.",
    image: "/assets/formationcosmetique.jpg",
  },
  {
    title: "Esthétique",
    category: "Beauté",
    description:
      "Développez vos compétences en esthétique et en soins professionnels.",
    image: "/assets/formationenesthetique.jpg",
  },
  {
    title: "Soins du visage",
    category: "Beauté",
    description:
      "Découvrez les techniques de nettoyage, de traitement et de soin du visage.",
    image: "/assets/formationesthetiquesoindevisage.jpg",
  },
  {
    title: "Make-up professionnel",
    category: "Beauté",
    description:
      "Apprenez les techniques de maquillage, les associations de couleurs et les finitions professionnelles.",
    image: "/assets/formationmakeup.jpg",
  },
  {
    title: "Stylisme et Modélisme",
    category: "Mode",
    description:
      "Apprenez la création de vêtements, le dessin de mode, la coupe et les techniques de confection.",
    image: "/assets/formationstylismetmodelisme.jpg",
  },
  {
    title: "Art et Décoration",
    category: "Créativité",
    description:
      "Développez votre créativité et apprenez les techniques artistiques et décoratives.",
    image: "/assets/formationenartetdecoration.jpg",
  },
  {
    title: "Informatique",
    category: "Technologie",
    description:
      "Développez vos compétences numériques et informatiques pour vos études et votre carrière.",
    image: "/assets/formationeninformatique.jpg",
  },
  {
    title: "Langues",
    category: "Langues",
    description:
      "Améliorez vos compétences linguistiques grâce à des cours adaptés à votre niveau.",
    image: "/assets/formationencourdelangue.jpg",
  },
  {
    title: "Restauration",
    category: "Hôtellerie et restauration",
    description:
      "Découvrez les techniques professionnelles de restauration et de préparation culinaire.",
    image: "/assets/formationenrestauration.jpg",
  },
  {
    title: "Pâtisserie",
    category: "Hôtellerie et restauration",
    description:
      "Initiez-vous aux techniques de préparation et de réalisation de produits de pâtisserie.",
    image: null,
  },
  {
    title: "Auto-école",
    category: "Formation pratique",
    description:
      "Découvrez notre offre de formation à la conduite et à la sécurité routière.",
    image: "/assets/formationautoecole.jpg",
  },
];

export default function FormationsPage() {
  const whatsappMessage = encodeURIComponent(
    "Bonjour New Fashion, je souhaite obtenir des informations sur vos formations et les inscriptions."
  );

  return (
    <>
      <section className="page-hero formation-hero">
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="hero-label">NEW FASHION ACADEMY</span>
            <h1>Construisez votre avenir grâce à la formation.</h1>
            <p>
              Apprenez, développez vos talents et préparez-vous à de nouvelles
              opportunités professionnelles avec New Fashion.
            </p>
            <a
              href={`https://wa.me/237676266865?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Demander des informations
            </a>
          </div>
        </div>
      </section>

      <section className="courses-intro">
        <span className="section-label">NOS PROGRAMMES</span>
        <h2>Découvrez nos formations</h2>
        <p>
          New Fashion vous accompagne dans le développement de vos compétences
          à travers plusieurs domaines de formation professionnelle et pratique.
          Choisissez le domaine qui correspond à vos ambitions.
        </p>
      </section>

      <section className="courses-section">
        <div className="courses-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              {course.image ? (
                <img src={course.image} alt={course.title} />
              ) : (
                <div className="course-image-placeholder">
                  <span>PÂTISSERIE</span>
                </div>
              )}

              <div className="course-content">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <a
                  href={`https://wa.me/237676266865?text=${encodeURIComponent(
                    `Bonjour New Fashion, je souhaite avoir des informations sur la formation : ${course.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demander des informations →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="registration-banner">
        <div>
          <span className="section-label">INSCRIPTIONS</span>
          <h2>Votre talent mérite de se développer.</h2>
          <p>
            Contactez notre équipe pour connaître les conditions d'inscription,
            les programmes disponibles et les prochaines sessions.
          </p>
          <a
            href={`https://wa.me/237676266865?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Contacter New Fashion
          </a>
        </div>
        <img
          src="/assets/aboutregistration.jpeg"
          alt="Informations d'inscription New Fashion"
        />
      </section>

      <div className="back-home">
        <Link href="/">← Retour à l'accueil</Link>
      </div>
    </>
  );
}