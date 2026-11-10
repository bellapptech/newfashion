import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>NEW FASHION</h3>
          <p>
            Formation, services professionnels, boutique et accompagnement
            international.
          </p>
        </div>

        <div>
          <h4>Navigation</h4>
          <Link href="/formations">Formations</Link>
          <Link href="/prestations">Prestations</Link>
          <Link href="/boutique">Boutique</Link>
          <Link href="/immigration">Immigration</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>WhatsApp: +237 6 76 26 68 65</p>
          <a href="https://www.instagram.com/institut_new_fashion/">
            Instagram
          </a>
          <a href="https://web.facebook.com/123newfashion/">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} New Fashion. Tous droits réservés.
      </div>
    </footer>
  );
}