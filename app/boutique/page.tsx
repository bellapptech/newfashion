
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique en ligne | New Fashion",
  description:
    "Découvrez la boutique New Fashion : beauté, accessoires, électronique et autres produits.",
};

const products = [
  {
    name: "Ventilateur",
    category: "Équipements",
    description:
      "Découvrez notre offre de ventilateurs et équipements pour votre confort.",
    image: "/assets/ventilateur.jpg",
  },
  {
    name: "Accessoires et plomberie",
    category: "Accessoires",
    description:
      "Découvrez notre sélection d'accessoires et de produits de plomberie.",
    image: "/assets/boutiqueaccessorplumbier.jpg",
  },
  {
    name: "Écrans et baffles",
    category: "Électronique",
    description:
      "Explorez notre sélection de produits électroniques et équipements audio.",
    image: "/assets/boutiqueecranetbaffle.jpg",
  },
  {
    name: "Produits de boutique",
    category: "Produits divers",
    description:
      "Découvrez les produits disponibles dans notre espace boutique.",
    image: "/assets/boutiquevosvins.jpg",
  },
  {
    name: "Après-rasage",
    category: "Beauté et soins",
    description:
      "Découvrez nos produits de soin et d'entretien après-rasage.",
    image: "/assets/boutonapresrasage.jpg",
  },
];

function getWhatsAppLink(productName: string) {
  const message = encodeURIComponent(
    `Bonjour New Fashion, je souhaite avoir des informations sur le produit : ${productName}. Est-il disponible et quel est son prix ?`
  );

  return `https://wa.me/237676266865?text=${message}`;
}

export default function BoutiquePage() {
  return (
    <>
      <section className="page-hero boutique-hero">
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="hero-label">NEW FASHION – E-SHOP</span>

            <h1>
              Découvrez notre boutique.
              <br />
              Trouvez ce qu'il vous faut.
            </h1>

            <p>
              Explorez notre sélection de produits de beauté,
              accessoires, électronique et autres articles.
              Contactez-nous pour connaître les disponibilités et les prix.
            </p>

            <a
              href="https://wa.me/237676266865?text=Bonjour%20New%20Fashion%2C%20je%20souhaite%20d%C3%A9couvrir%20votre%20boutique."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Contacter la boutique
            </a>
          </div>
        </div>
      </section>

      <section className="courses-intro">
        <span className="section-label">NOTRE BOUTIQUE</span>

        <h2>Découvrez nos produits</h2>

        <p>
          New Fashion vous propose une sélection de produits dans
          plusieurs catégories. Parcourez notre catalogue et contactez
          notre équipe pour obtenir les prix et les informations
          sur la disponibilité.
        </p>
      </section>

      <section className="shop-categories">
        <a href="#electronique">Électronique</a>
        <a href="#accessoires">Accessoires</a>
        <a href="#beaute">Beauté et soins</a>
        <a href="#autres">Autres produits</a>
      </section>

      <section className="courses-section">
        <div className="shop-heading" id="electronique">
          <span className="section-label">CATALOGUE</span>
          <h2>Nos produits</h2>
        </div>

        <div className="shop-grid">
          {products.map((product, index) => (
            <article
  className="shop-card"
  key={product.name}
  id={
    product.category === "Électronique"
      ? "electronique"
      : product.category === "Accessoires"
        ? "accessoires"
        : product.category === "Beauté et soins"
          ? "beaute"
          : "autres"
  }
>
              <div className="shop-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>

              <div className="shop-card-content">
                <span className="course-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shop-order-link"
                >
                  Demander le prix →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shop-contact">
        <div>
          <span className="section-label">BESOIN D'UN RENSEIGNEMENT ?</span>
          <h2>Votre prochain achat commence ici.</h2>
          <p>
            Vous recherchez un produit particulier ? Écrivez-nous
            sur WhatsApp pour connaître nos disponibilités, nos prix
            et les modalités de commande.
          </p>

          <a
            href="https://wa.me/237676266865?text=Bonjour%20New%20Fashion%2C%20je%20recherche%20un%20produit%20dans%20votre%20boutique."
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Écrire à la boutique
          </a>
        </div>

        <img
          src="/assets/headerimage2.jpeg"
          alt="New Fashion Boutique"
          loading="lazy"
        />
      </section>

      <div className="back-home">
        <a href="/">← Retour à l'accueil</a>
      </div>
    </>
  );
}
