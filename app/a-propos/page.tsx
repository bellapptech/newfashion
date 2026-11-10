
import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Centre de formation",
    subtitle: "Apprendre • Se perfectionner • Réussir",
    description:
      "Des formations professionnelles et pratiques dans plusieurs domaines pour développer vos compétences et préparer votre avenir.",
    image: "/assets/formationcoiffuremixt.jpg",
    link: "/formations",
    action: "Découvrir nos formations",
  },
  {
    number: "02",
    title: "Prestations de services",
    subtitle: "Beauté • Coiffure • Bien-être",
    description:
      "Des prestations professionnelles de coiffure, esthétique et beauté pour répondre à vos besoins au quotidien.",
    image: "/assets/coiffurecouple.jpg",
    link: "/prestations",
    action: "Voir nos prestations",
  },
  {
    number: "03",
    title: "Immigration & International",
    subtitle: "Études • Voyage • Opportunités",
    description:
      "Des informations et un accompagnement pour mieux préparer vos projets d'études, de voyage et de mobilité internationale.",
    image: "/assets/headerimage.jpeg",
    link: "/immigration",
    action: "Explorer nos services",
  },
  {
    number: "04",
    title: "Boutique & E-commerce",
    subtitle: "Acheter • Vendre • Découvrir",
    description:
      "Une boutique proposant différents articles et produits, avec des possibilités d'achat au détail et en gros.",
    image: "/assets/boutiqueecranetbaffle.jpg",
    link: "/boutique",
    action: "Visiter la boutique",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "Nous recherchons la qualité dans nos formations, nos services et notre accompagnement.",
  },
  {
    icon: "🤝",
    title: "Engagement",
    description:
      "Nous plaçons l'écoute, la confiance et la satisfaction de nos clients au cœur de notre travail.",
  },
  {
    icon: "🌍",
    title: "Ouverture internationale",
    description:
      "Nous encourageons l'apprentissage, les échanges et les opportunités au-delà des frontières.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Nous évoluons avec les besoins du marché et les nouvelles opportunités professionnelles.",
  },
];

const whatsappLink =
  "https://wa.me/237676266865?text=" +
  encodeURIComponent(
    "Bonjour New Fashion, je souhaite mieux connaître votre établissement et vos services."
  );

export default function AboutPage() {
  return (
    <main className="nf-about">

      {/* HERO */}
      <section className="nf-about-hero">
        <Image
          src="/assets/headerimage.jpeg"
          alt="New Fashion, centre international et bilingue de formation professionnelle"
          fill
          priority
          className="nf-about-hero-image"
        />

        <div className="nf-about-hero-overlay" />

        <div className="nf-about-hero-content">
          <span className="nf-about-eyebrow">
            BIENVENUE CHEZ NEW FASHION
          </span>

          <h1>
            Nous formons
            <br />
            <span>les talents de demain.</span>
          </h1>

          <p>
            Un centre international et bilingue qui rassemble
            formation professionnelle, services, boutique et
            accompagnement international.
          </p>

          <div className="nf-about-hero-buttons">
            <a href="#about-story" className="nf-about-button">
              Découvrir notre histoire →
            </a>

            <Link href="/formations" className="nf-about-secondary">
              Nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="nf-about-story" id="about-story">
        <div className="nf-about-story-image">
          <Image
            src="/assets/aboutregistration.jpeg"
            alt="Accueil et environnement de New Fashion"
            fill
            className="nf-about-cover"
          />
          <div className="nf-about-image-label">
            <strong>NEW FASHION</strong>
            <span>Former • Accompagner • Servir</span>
          </div>
        </div>

        <div className="nf-about-story-content">
          <span className="nf-about-kicker">
            QUI SOMMES-NOUS ?
          </span>

          <h2>
            Bien plus qu'un centre de formation.
            <span> Un espace d'opportunités.</span>
          </h2>

          <p>
            New Fashion est un établissement basé à Douala,
            au Cameroun, qui propose une approche diversifiée
            de la formation professionnelle, des services,
            du commerce et de l'accompagnement international.
          </p>

          <p>
            Notre ambition est de permettre à chacun de
            développer ses compétences, découvrir de nouvelles
            possibilités et accéder à des services adaptés
            à ses besoins.
          </p>

          <p>
            À travers nos différentes activités, nous souhaitons
            contribuer au développement des compétences,
            à l'entrepreneuriat et à l'épanouissement professionnel.
          </p>

          <div className="nf-about-signature">
            <span>🇨🇲</span>
            <div>
              <strong>Made with ambition in Cameroon</strong>
              <small>Une vision ouverte sur le monde</small>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="nf-about-pillars">
        <div className="nf-about-heading">
          <span className="nf-about-kicker">
            NOTRE UNIVERS
          </span>

          <h2>
            Quatre activités.
            <span> Une seule vision.</span>
          </h2>

          <p>
            New Fashion rassemble plusieurs domaines d'activités
            pour accompagner vos ambitions personnelles et professionnelles.
          </p>
        </div>

        <div className="nf-about-pillar-grid">
          {pillars.map((pillar) => (
            <article className="nf-about-pillar" key={pillar.number}>
              <div className="nf-about-pillar-image">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="nf-about-cover"
                />
                <span>{pillar.number}</span>
              </div>

              <div className="nf-about-pillar-content">
                <small>{pillar.subtitle}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>

                <Link href={pillar.link}>
                  {pillar.action} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="nf-about-mission">
        <div className="nf-about-mission-content">
          <span className="nf-about-kicker">
            NOTRE MISSION
          </span>

          <h2>
            Donner à chacun les moyens
            <span> de construire son avenir.</span>
          </h2>

          <p>
            Notre mission est de proposer des formations
            professionnelles de qualité, des services utiles
            et des opportunités permettant à chacun de progresser.
          </p>
        </div>

        <div className="nf-about-vision-content">
          <span className="nf-about-kicker">
            NOTRE VISION
          </span>

          <h2>
            Devenir une référence
            <span> en formation et en services.</span>
          </h2>

          <p>
            Nous aspirons à développer un établissement reconnu
            pour son professionnalisme, son ouverture internationale,
            son innovation et sa contribution à la société.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="nf-about-values">
        <div className="nf-about-heading">
          <span className="nf-about-kicker">
            CE QUI NOUS GUIDE
          </span>

          <h2>
            Nos valeurs,
            <span> notre engagement.</span>
          </h2>

          <p>
            Les principes qui orientent nos activités et
            notre relation avec chaque client et apprenant.
          </p>
        </div>

        <div className="nf-about-values-grid">
          {values.map((value) => (
            <article className="nf-about-value" key={value.title}>
              <span>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TRAINING HIGHLIGHT */}
      <section className="nf-about-training">
        <div className="nf-about-training-image">
          <Image
            src="/assets/formationcosmetique.jpg"
            alt="Formation professionnelle pratique chez New Fashion"
            fill
            className="nf-about-cover"
          />
        </div>

        <div className="nf-about-training-content">
          <span className="nf-about-kicker">
            APPRENDRE POUR RÉUSSIR
          </span>

          <h2>
            La formation aujourd'hui.
            <span> Les opportunités demain.</span>
          </h2>

          <p>
            De la beauté à l'informatique, de la mode à la
            restauration, nous encourageons l'acquisition de
            compétences pratiques et professionnelles.
          </p>

          <p>
            Notre approche met l'accent sur l'apprentissage,
            la pratique et la préparation au monde professionnel.
          </p>

          <Link href="/formations" className="nf-about-button">
            Explorer nos formations →
          </Link>
        </div>
      </section>

      {/* LOCATION */}
      <section className="nf-about-location">
        <div>
          <span className="nf-about-kicker">
            RETROUVEZ-NOUS AU CAMEROUN
          </span>

          <h2>
            Votre partenaire à Douala.
          </h2>

          <p>
            New Fashion vous accueille à SIS Ndogbong (Socaver),
            en face de la Banque SCB, Douala, Cameroun.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            Échanger avec notre équipe →
          </a>
        </div>

        <div className="nf-about-location-icon">
          🇨🇲
          <strong>DOUALA</strong>
          <span>CAMEROUN</span>
        </div>
      </section>

      {/* CTA */}
      <section className="nf-about-cta">
        <span>NEW FASHION • FORMATION • SERVICES • BOUTIQUE</span>

        <h2>
          Votre avenir mérite
          <br />
          de belles opportunités.
        </h2>

        <p>
          Découvrez notre univers et faites le premier pas
          vers vos ambitions.
        </p>

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          Contactez New Fashion →
        </a>
      </section>

      <div className="back-home">
        <Link href="/">← Retour à l'accueil</Link>
      </div>
    </main>
  );
}
