import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactUs = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contacter Nous"} />{" "}
      <section className="contact-info-area rel z-1 pt-130 rpt-100">
        <div className="container">
          <div className="section-title contact-title mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Contactez-nous</span>
            <h3>Retrouvez-nous aux adresses suivantes :</h3>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/contact/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Address</h4>
                  <span>
                    04 Av. du marché Q/Révolution C/Gombe ville/Kinshasa
                    R.D.Congo
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <img src="assets/images/contact/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Adresse email</h4>
                  <a href="mailto:vanmutgroupe@gmail.com">
                    vanmutgroupe@gmail.com
                  </a>
                  <br />
                  <a href="mailto:support@info.com">support@vanmut.shop</a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/contact/icon3.png" alt="Icon" />
                </div>
                <div className="content">
                  <h4>Appelez-nous</h4>
                  <a href="callto:+243812144542">+243 (81) 214 45 42</a>
                  <br />
                  <a href="callto:+27742521102">+27 (74) 252 11 02</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leafs"
            src="assets/images/shapes/contact-leafs.png"
            alt="Leafs"
          />
          <img
            className="pumpkin"
            src="assets/images/shapes/pumpkin.png"
            alt="pumpkin"
          />
        </div>
      </section>
      {/* Contact Info End */}
      {/* Contact From Start */}
      <section className="contact-form-area rel z-1 pt-100 rpt-70 pb-130 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contactForm"
                className="contact-form rmb-65 wow fadeInLeft delay-0-2s"
                name="contactForm"
                action="assets/php/form-process.php"
                method="post"
              >
                <div className="section-title contact-title mb-55">
                  <span className="sub-title mb-15">Contactez-nous</span>
                  <h3>Envoyez-nous un message</h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Nom complet"
                        required=""
                        data-error="Veuillez entrer votre nom"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        defaultValue=""
                        placeholder="Numéro de téléphone"
                        required=""
                        data-error="Veuillez entrer votre numéro de téléphone"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Adresse email"
                        required=""
                        data-error="Veuillez entrer votre adresse email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Écrire un message"
                        required=""
                        data-error="Veuillez entrer votre message
                        "
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button type="submit" className="theme-btn style-one">
                        Envoyer le message
                        <i className="fas fa-angle-double-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInRight delay-0-4s">
                <img
                  src="assets/images/contact/contact-right.png"
                  alt="Contact From"
                />
                <img
                  className="bg"
                  src="assets/images/contact/contact-right-bg.png"
                  alt="Contact From BG"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="leaf"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="shape"
            src="assets/images/shapes/contact-shape.png"
            alt="Shape"
          />
          <img
            className="two-leaf"
            src="assets/images/shapes/two-lear.png"
            alt="Leaf"
          />
        </div>
      </section>
    </Layout>
  );
};
export default ContactUs;
