
import Image from "next/image";
import Link from "next/link";

const whatsappLink =
  "https://wa.me/237676266865?text=" +
  encodeURIComponent(
    "Bonjour New Fashion, je souhaite obtenir des informations sur vos services d'immigration et d'accompagnement international."
  );

const services = [
  {
    number: "01",
    title: "Étudier à l'étranger",
    description:
      "Découvrez des possibilités d'études, de formations professionnelles et de parcours universitaires à l'international.",
    image:
      "https://images.unsplash.com/photo-1594750852517-f37738fa2384?auto=format&fit=crop&w=1000&q=85",
    alt: "Étudiants africains diplômés célébrant leur réussite",
    tag: "Éducation internationale",
  },
  {
    number: "02",
    title: "Orientation sur les visas",
    description:
      "Comprenez les différentes catégories de visas, les conditions générales et les étapes de préparation de votre dossier.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
    alt: "Voyage international en avion",
    tag: "Conseils et orientation",
  },
  {
    number: "03",
    title: "Préparation des documents",
    description:
      "Bénéficiez de conseils pour organiser vos documents de voyage, formulaires et pièces justificatives.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    alt: "Documents et préparation administrative",
    tag: "Assistance documentaire",
  },
  {
    number: "04",
    title: "Opportunités internationales",
    description:
      "Explorez les possibilités de mobilité, de formation, d'expériences professionnelles et de développement personnel.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "Jeunes étudiants travaillant ensemble",
    tag: "Mobilité internationale",
  },
];

const steps = [
  {
    number: "01",
    title: "Parlez-nous de votre projet",
    description:
      "Contactez notre équipe et expliquez-nous votre objectif.",
  },
  {
    number: "02",
    title: "Analyse de vos besoins",
    description:
      "Nous échangeons avec vous pour mieux comprendre votre situation.",
  },
  {
    number: "03",
    title: "Conseils et orientation",
    description:
      "Nous vous présentons les informations et les possibilités adaptées à votre projet.",
  },
  {
    number: "04",
    title: "Préparation",
    description:
      "Nous vous accompagnons dans l'organisation des prochaines étapes convenues.",
  },
];

const destinations = [
  {
    name: "Canada",
    description: "Études et mobilité internationale",
    flag: "🇨🇦",
  },
  {
    name: "France",
    description: "Études et formations",
    flag: "🇫🇷",
  },
  {
    name: "Allemagne",
    description: "Formation et études",
    flag: "🇩🇪",
  },
  {
    name: "Autres destinations",
    description: "Explorez vos possibilités",
    flag: "🌍",
  },
];

export default function ImmigrationPage() {
  return (
    <main className="nf-immigration">

      {/* HERO */}
      <section className="nf-immigration-hero">
        <Image
          src="https://images.unsplash.com/photo-1594750852517-f37738fa2384?auto=format&fit=crop&w=2200&q=90"
          alt="Jeunes diplômés africains célébrant leur avenir"
          fill
          priority
          unoptimized
          className="nf-hero-image"
        />

        <div className="nf-hero-overlay" />

        <div className="nf-hero-content">
          <span className="nf-hero-label">
            NEW FASHION INTERNATIONAL
          </span>

          <span className="nf-hero-location">
            <span>🇨🇲</span> DEPUIS LE CAMEROUN, VERS LE MONDE
          </span>

          <h1>
            Votre avenir
            <br />
            <span>n'a pas de frontières.</span>
          </h1>

          <p>
            Études, voyages et opportunités internationales.
            New Fashion vous accompagne pour transformer
            vos ambitions en projets mieux préparés.
          </p>

          <div className="nf-hero-actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="nf-button-primary"
            >
              Parler à un conseiller →
            </a>

            <a href="#nf-services" className="nf-button-outline">
              Découvrir nos services
            </a>
          </div>

          <div className="nf-hero-bottom">
            <span>ÉDUCATION</span>
            <span>VOYAGE</span>
            <span>MOBILITÉ INTERNATIONALE</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="nf-immigration-intro">
        <div className="nf-intro-visual">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
            alt="Étudiants africains travaillant ensemble sur un projet"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="nf-intro-image-caption">
            <span>🇨🇲</span>
            <div>
              <strong>Votre ambition, notre accompagnement.</strong>
              <small>New Fashion International</small>
            </div>
          </div>
        </div>

        <div className="nf-intro-content">
          <span className="nf-section-kicker">
            BIENVENUE CHEZ NEW FASHION INTERNATIONAL
          </span>

          <h2>
            Le monde offre des possibilités.
            <span> Préparez-vous à les découvrir.</span>
          </h2>

          <p>
            Vous êtes au Cameroun et vous rêvez de poursuivre
            vos études à l'étranger, de voyager ou de découvrir
            de nouvelles opportunités internationales ?
          </p>

          <p>
            New Fashion vous propose un service d'information,
            d'orientation et d'accompagnement pour vous aider
            à mieux comprendre les possibilités qui correspondent
            à votre projet.
          </p>

          <p>
            Que vous soyez étudiant, jeune diplômé, professionnel
            ou parent, nous sommes à votre écoute pour vous
            guider dans la préparation de votre démarche.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer">
            Parlons de votre projet →
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="nf-services-section" id="nf-services">
        <div className="nf-section-heading">
          <span className="nf-section-kicker">
            NOS SERVICES INTERNATIONAUX
          </span>

          <h2>
            Des solutions pour préparer
            <br />
            <span>votre prochaine étape.</span>
          </h2>

          <p>
            Découvrez comment New Fashion peut vous accompagner
            dans votre projet international.
          </p>
        </div>

        <div className="nf-services-grid">
          {services.map((service) => (
            <article className="nf-service-card" key={service.number}>
              <div className="nf-service-image">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="nf-service-number">
                  {service.number}
                </span>
              </div>

              <div className="nf-service-content">
                <span className="nf-service-tag">
                  {service.tag}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={
                    whatsappLink +
                    "&service=" +
                    encodeURIComponent(service.title)
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  En savoir plus →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="nf-destinations">
        <div className="nf-destinations-content">
          <span className="nf-section-kicker">
            EXPLOREZ LE MONDE
          </span>

          <h2>
            Où souhaitez-vous
            <br />
            <span>aller demain ?</span>
          </h2>

          <p>
            Chaque destination possède ses propres conditions
            d'admission, de visa et de séjour. Découvrez les
            destinations qui pourraient correspondre à votre projet.
          </p>

          <div className="nf-destination-grid">
            {destinations.map((destination) => (
              <article
                className="nf-destination-card"
                key={destination.name}
              >
                <span>{destination.flag}</span>
                <div>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nf-button-primary"
          >
            Trouver ma destination →
          </a>
        </div>

        <div className="nf-destinations-image">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1100&q=85"
            alt="Voyage international et préparation du départ"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="nf-process-section">
        <div className="nf-section-heading">
          <span className="nf-section-kicker">
            COMMENT NOUS TRAVAILLONS
          </span>

          <h2>
            Votre projet commence
            <span> par une conversation.</span>
          </h2>

          <p>
            Quatre étapes pour mieux organiser votre démarche.
          </p>
        </div>

        <div className="nf-process-grid">
          {steps.map((step) => (
            <article className="nf-process-card" key={step.number}>
              <span className="nf-process-number">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="nf-immigration-cta">
        <div>
          <span>NEW FASHION INTERNATIONAL • CAMEROUN</span>

          <h2>
            Votre prochain chapitre
            <br />
            commence ici.
          </h2>

          <p>
            Partagez votre ambition avec notre équipe.
            Nous serons heureux d'échanger avec vous.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nf-button-primary"
          >
            <span>Discuter sur WhatsApp</span> →
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div className="nf-immigration-disclaimer">
        New Fashion fournit des informations, des conseils et un
        accompagnement selon les services effectivement proposés.
        Les décisions relatives aux visas, admissions et autorisations
        de voyage relèvent exclusivement des autorités et établissements
        compétents. Aucun résultat n'est garanti.
      </div>

      <div className="back-home">
        <Link href="/">← Retour à l'accueil</Link>
      </div>
    </main>
  );
}
