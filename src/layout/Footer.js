import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const Footer = ({ footer }) => {
  const year = new Date().getFullYear();
  switch (footer) {
    case 1:
      return <DefaultFooter year={year} />;
    case 3:
      return <Footer3 year={year} />;

    default:
      return <DefaultFooter year={year} />;
  }
};
export default Footer;

const ScrollTopBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      style={{ display: "inline-block" }}
      className="scroll-top scroll-to-target"
      data-target="html"
      onClick={() => scrollTop()}
    >
      <span className="fas fa-angle-double-up" />
    </button>
  );
};

const DefaultFooter = ({ year }) => (
  <footer className="main-footer footer-black text-white">
    <div className="container">
      {/* <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
      </div> */}
      <div className="row justify-content-center pt-3">
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="footer-widget about-widget text-center">
            <div className="footer-logo mb-30">
              <Link href="/">
                <a>
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
            <p>Suivez-nous sur les réseaux sociaux</p>
            <div className="social-style-two pt-10">
              <Link href="/contact">
                <a>
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <i className="fab fa-youtube" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-1">
          <div className="footer-widget menu-widget one-column">
            <h4 className="footer-title">Raccourcis</h4>
            <ul>
              <li>
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="/produits">
                  <a>Produits</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Nos Contacts</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 order-md-3">
          <div className="footer-widget contact-widget">
            <h4 className="footer-title">Contacter Nous</h4>
            <p>Retrouvez-nous aux adresses suivantes :</p>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                04 Av. du marché Q/Révolution C/Gombe ville/Kinshasa R.D.Congo
              </li>
              <li>
                <i className="far fa-envelope" />
                <a href="mailto:vanmutgroupe@gmail.com">
                  vanmutgroupe@gmail.com
                </a>
              </li>
              <li>
                <i className="far fa-phone" />
                <a href="calto:+243(81)2144542">+243 (81) 214 45 42</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-10">
        <p>Copyright © {year} van mut. Tous droits réservés</p>
        <ul className="footer-menu">
          <li>
            <Link href="/contact">Paramètres &amp; confidentialité</Link>
          </li>
          {/* <li>
            <Link href="/faqs">
              <a>Faqs</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">Payments</Link>
          </li> */}
        </ul>
        {/* Scroll Top Button */}
        <ScrollTopBtn />
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
const Footer3 = ({ year }) => (
  <footer className="main-footer footer-black text-white">
    <div className="container-fluid">
      {/* <div className="footer-top-newsletter py-80 mb-75">
        <div className="section-title">
          <h2>Newsletter Subscribe</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="#">
          <input type="email" placeholder="Email Address" required="" />
          <button className="theme-btn">
            subscribe now <i className="fas fa-angle-double-right" />
          </button>
        </form>
        <div className="happy-clients counter-item">
          <i className="flaticon-quote" />
          <b className="count-text" data-speed={3000} data-stop={56384}>
            <Counter end={56384} />
          </b>
          <span>Happy Clients</span>
        </div>
      </div> */}
      <div className="row justify-content-between pt-3">
        <div className="col-xl-5">
          <div className="row justify-content-between">
            <div className="col-sm-7">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-30">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Transformez vos impressions en véritables œuvres d'art avec
                  Magic Mut ! Notre équipe d'experts passionnés est à votre
                  service pour vous offrir des impressions d'une qualité
                  inégalée, alliant créativité et précision pour un résultat
                  magique.
                </p>
                <div className="social-style-two pt-10">
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a>
                      <i className="fab fa-youtube" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Raccourcis</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Accueil</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/produits">
                      <a>Produits</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Nos Contacts</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget news-widget">
                <h4 className="footer-title">Actualités récentes</h4>
                <ul>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget1.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Universal Principles User Experience
                        </Link>
                      </h6>
                      <span className="name">By Westfield</span>
                    </div>
                  </li>
                  <li>
                    <div className="image">
                      <img
                        src="assets/images/news/news-widget2.jpg"
                        alt="News"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="/blog-details">
                          Roll Out New Featuc Without Hurting
                        </Link>
                      </h6>
                      <span className="name">By Mendonca</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">Contacter Nous</h4>
                <p>Retrouvez-nous aux adresses suivantes :</p>
                <ul>
                  <li>
                    <i className="fal fa-map-marker-alt" />
                    04 Av. du marché Q/Révolution C/Gombe ville/Kinshasa
                    R.D.Congo
                  </li>
                  <li>
                    <i className="far fa-envelope" />
                    <a href="mailto:vanmutgroupe@gmail.com">
                      vanmutgroupe@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    <a href="calto:+243(81)2144542">+243 (81) 214 45 42</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="footer-widget gallery-widget">
                <h4 className="footer-title">Galerie</h4>
                <ul>
                  <li>
                    <a href="assets/images/widgets/gallery1.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery1.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery2.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery2.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery3.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery3.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery4.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery4.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery5.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery5.jpg"
                      alt="Gallery"
                    />
                  </li>
                  <li>
                    <a href="assets/images/widgets/gallery6.jpg">
                      <i className="fas fa-plus" />
                    </a>
                    <img
                      src="assets/images/widgets/gallery6.jpg"
                      alt="Gallery"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area-wrap">
      <div className="container-fluid">
        <div className="copyright-area pt-25 pb-10">
          <p>Copyright © {year} van mut. Tous droits réservés.</p>
          <ul className="footer-menu">
            <li>
              <Link href="/contact">
                <a>Paramètres &amp; confidentialité</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/faqs">
                <a>Faqs</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Payments</a>
              </Link>
            </li> */}
          </ul>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fas fa-angle-double-up" />
          </button>
        </div>
      </div>
    </div>
    <div className="footer-shapes">
      <img
        className="footer-bg"
        src="assets/images/background/footer-bg-shape.png"
        alt="Shape"
      />
      <img
        className="shape-one"
        src="assets/images/shapes/footer1.png"
        alt="Shape"
      />
      <img
        className="shape-two"
        src="assets/images/shapes/footer2.png"
        alt="Shape"
      />
      <img
        className="shape-three"
        src="assets/images/shapes/footer3.png"
        alt="Shape"
      />
      <img
        className="shape-four"
        src="assets/images/shapes/footer4.png"
        alt="Shape"
      />
    </div>
  </footer>
);
