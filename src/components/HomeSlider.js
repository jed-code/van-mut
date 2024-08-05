import Link from "next/link";
import { Fragment } from "react";
import munfirmSlider from "../munfirmSlider";
import { urlFor } from "../../lib/sanity";
export const HomeSlider1 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Bienvenu à Van mut</div>
                <h1> Créativité &amp; Précision</h1>
                <h6>25 Years of experience in agriculture farming</h6>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <div className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-image1.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="pumpkin-shape"
            src="assets/images/slider/pumpkin.png"
            alt="Pumpkin"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="assets/images/slider/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </div>
      <div
        className={`slider-single-item slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-image2.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">still a demo </div>
                <h1>Créativité &amp; Précision</h1>
                <h6>25 Years of experience in agriculture farming</h6>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <div className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="pumpkin-shape"
            src="assets/images/slider/pumpkin.png"
            alt="Pumpkin"
          />
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="assets/images/slider/half-leaf.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="assets/images/slider/leaf-1.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/slider/leaf-2.png"
            alt="Leaf"
          />
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider2 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-two ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Bienvenu à Van mut</div>
                <h1>Créativité &amp; Précision</h1>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <div className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                  {/* <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two1.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <div className="sub-title mb-20">Bienvenu à Van mut</div>
                <h1>Créativité &amp; Précision</h1>
                <div className="slider-btns mt-30">
                  {/* <Link href="/about">
                    <div className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </div>
                  </Link> */}
                  <Link href="/shop-grid">
                    <div className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two3.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider3 = ({ data }) => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>
      {data?.map((item, i) => {
        return (
          <div
            className={`slider-single-item style-three slide-one ${
              active == 1 ? "slick-active" : ""
            }`}
            key={i}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-5">
                  <div className="slider-content">
                    <div className="sub-title mb-20">{item?.meta_section1}</div>
                    <h1> {item?.title_section1}</h1>
                    <p>{item?.description_section1}</p>
                    <div className="slider-btns mt-20">
                      <Link href="/produits">
                        <div className="theme-btn style-One">
                          Voir plus <i className="fas fa-angle-double-right" />
                        </div>
                      </Link>
                      {/* <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-9">
                  <div className="slider-images">
                    <img
                      className="image"
                      src={urlFor(item?.imageSection1)?.url()}
                      // src="assets/images/slider/home-slider-1.png"
                      alt="Slider"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {data?.map((item, i) => {
        return (
          <div
            className={`slider-single-item style-three slide-two ${
              active == 2 ? "slick-active" : ""
            }`}
            key={i}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-9">
                  <div className="slider-images">
                    <img
                      className="image"
                      src={urlFor(item?.imageSection2)?.url()}
                      alt="Slider"
                    />
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="slider-content">
                    <div className="sub-title mb-20">{item?.meta_section2}</div>
                    <h1>{item?.title_section2}</h1>
                    <p>{item?.description_section2}</p>
                    <div className="slider-btns mt-20">
                      <Link href="/produits">
                        <div className="theme-btn style-One">
                          Voir plus <i className="fas fa-angle-double-right" />
                        </div>
                      </Link>
                      {/* <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
