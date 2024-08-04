import dynamic from "next/dynamic";
import Link from "next/link";
// import { useFetch } from "../../lib/useFetch";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { client } from "../../lib/sanity";
import { urlFor } from "../../lib/sanity";
import { companyProfile, gallery } from "../../lib/queries";
import { formatPhoneNumber } from "../../lib/phoneNumberFormat";

const Counter = dynamic(() => import("../components/Counter"), {
  ssr: false,
});

const queryClient = new QueryClient();

const useFetch = (queryKey, query) => {
  const fetchProperties = async () => {
    const data = await client.fetch(query);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn: fetchProperties,
  });
};

const Footer = ({ footer }) => {
  const {
    data: getCompanyProfile,
    error: errorCompanyProfile,
    isLoading: isLoadingCompanyProfile,
  } = useFetch(["companyProfile"], companyProfile);
  const {
    data: getGalleryImages,
    error: errorGalleryImages,
    isLoading: isLoadingGalleryImages,
  } = useFetch(["gallery"], gallery);

  // console.log("getCompanyProfile...", getCompanyProfile);

  const year = new Date().getFullYear();
  switch (footer) {
    case 1:
      return <DefaultFooter year={year} data={getCompanyProfile} />;
    case 3:
      return (
        <Footer3
          year={year}
          data={getCompanyProfile}
          galleryData={getGalleryImages}
        />
      );

    default:
      return <DefaultFooter year={year} data={getCompanyProfile} />;
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

const DefaultFooter = ({ year, data }) => {
  return (
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
                  {/* <a> */}
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                  {/* </a> */}
                </Link>
              </div>
              <p>Suivez-nous sur les réseaux sociaux</p>
              <div className="social-style-two pt-10">
                <Link href="/contact">
                  {/* <a> */}
                  <i className="fab fa-facebook-f" />
                  {/* </a> */}
                </Link>
                <Link href="/contact">
                  {/* <a> */}
                  <i className="fab fa-twitter" />
                  {/* </a> */}
                </Link>
                <Link href="/contact">
                  {/* <a> */}
                  <i className="fab fa-linkedin-in" />
                  {/* </a> */}
                </Link>
                <Link href="/contact">
                  {/* <a> */}
                  <i className="fab fa-youtube" />
                  {/* </a> */}
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
                    {/* <a> */}
                    Accueil
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="/produits">
                    {/* <a> */}
                    Produits
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    {/* <a> */}
                    Blog
                    {/* </a> */}
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    {/* <a> */}
                    Nos Contacts
                    {/* </a> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {data?.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 order-md-3" key={index}>
                <div className="footer-widget contact-widget">
                  <h4 className="footer-title">Contacter Nous</h4>
                  <p>Retrouvez-nous aux adresses suivantes :</p>
                  <ul>
                    <li>
                      <i className="fal fa-map-marker-alt" />
                      {item?.companyAdress}
                    </li>
                    <li>
                      <i className="far fa-envelope" />
                      <a href={`mailto:${item?.companyAdress}`}>
                        {item?.companyAdress}
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />
                      <a href={`calto:${item?.companyPrimaryPhoneNumber}`}>
                        {formatPhoneNumber(item?.companyPrimaryPhoneNumber)}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
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
};
const Footer3 = ({ year, data, galleryData }) => {
  return (
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
                      {/* <a> */}
                      <img
                        src="assets/images/logos/logo-two-white.png"
                        alt="Logo"
                      />
                      {/* </a> */}
                    </Link>
                  </div>
                  {data?.map((item, index) => {
                    return <p key={index}>{item?.companyDescription}</p>;
                  })}

                  <div className="social-style-two pt-10">
                    <Link href="/contact">
                      {/* <a> */}
                      <i className="fab fa-facebook-f" />
                      {/* </a> */}
                    </Link>
                    <Link href="/contact">
                      {/* <a> */}
                      <i className="fab fa-twitter" />
                      {/* </a> */}
                    </Link>
                    <Link href="/contact">
                      {/* <a> */}
                      <i className="fab fa-linkedin-in" />
                      {/* </a> */}
                    </Link>
                    <Link href="/contact">
                      {/* <a> */}
                      <i className="fab fa-youtube" />
                      {/* </a> */}
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
                        {/* <a> */}
                        Accueil
                        {/* </a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/produits">
                        {/* <a> */}
                        Produits
                        {/* </a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        {/* <a> */}
                        Blog
                        {/* </a> */}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        {/* <a> */}
                        Nos Contacts
                        {/* </a> */}
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
              {data?.map((item, index) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="footer-widget contact-widget">
                      <h4 className="footer-title">Contacter Nous</h4>
                      <p>Retrouvez-nous aux adresses suivantes :</p>
                      <ul>
                        <li>
                          <i className="fal fa-map-marker-alt" />
                          {item?.companyAdress}
                        </li>
                        <li>
                          <i className="far fa-envelope" />
                          <a href={`mailto:${item?.companyAdress}`}>
                            {item?.companyAdress}
                          </a>
                        </li>
                        <li>
                          <i className="far fa-phone" />
                          <a href={`calto:${item?.companyPrimaryPhoneNumber}`}>
                            {formatPhoneNumber(item?.companyPrimaryPhoneNumber)}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
              {galleryData?.map((item, index) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="footer-widget gallery-widget">
                      <h4 className="footer-title">Galerie</h4>
                      <ul>
                        {item?.image?.map((gallery, index) => {
                          return (
                            <li key={index}>
                              <a
                              // href={urlFor(gallery)?.width(150)?.url()}
                              // href="#"
                              >
                                <i className="fas fa-plus" />
                              </a>
                              <img
                                src={urlFor(gallery)?.width(150)?.url()}
                                alt="Gallery"
                              />
                            </li>
                          );
                        })}

                        {/* <li>
                          <a href="assets/images/widgets/gallery6.jpg">
                            <i className="fas fa-plus" />
                          </a>
                          <img
                            src="assets/images/widgets/gallery6.jpg"
                            alt="Gallery"
                          />
                        </li> */}
                      </ul>
                    </div>
                  </div>
                );
              })}
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
                  {/* <a> */}
                  Paramètres &amp; confidentialité
                  {/* </a> */}
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
};
