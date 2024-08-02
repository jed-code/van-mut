import Link from "next/link";
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import {
  Home,
  Produits,
  Blog,
  Contact,
  PagesDasktop,
  Portfolio,
  Shop,
} from "./Menus";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <Home />
    {/* <li className="dropdown">
      <a href="#">Home</a>
      <ul>
        <Home />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    {/* <li className="dropdown">
      <a href="#">pages</a>
      <ul>
        <PagesDasktop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    {/* <li className="dropdown">
      <a href="#">portfolio</a>
      <ul>
        <Portfolio />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}

    {/* <li className="dropdown">
      <a href="#">shop</a>
      <ul>
        <Shop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li> */}
    <Produits />
    <Blog />
    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            <a>
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => (
  <header className="main-header">
    <div className="header-top-wrap bg-primary text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Adresse email :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    {/* <i className="far fa-clock" /> <b>Heure de travail :</b>{" "} */}
                    <i className="far fa-clock" />
                    Lundi - Samedi: 8:00 - 16:00
                    {/* , Samedi: 8:00-12:00 */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Appel :</b>{" "}
                    <a href="callto:+012(345)67899">+243 (81) 214 45 42</a>
                  </li>
                  {/* <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            {/* <div className="nav-search py-15">
              <SearchBtn />
            </div> */}
            {/* <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button> */}
            {/* <button className="user">
              <i className="far fa-user-circle" />
            </button> */}
            {/* <Link href="/contact">
              <a className="theme-btn" >
                Reservation <i className="fas fa-angle-double-right" />
              </a>
            </Link> */}
            {/* menu sidbar */}
            {/* <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header1 = () => (
  <header className="main-header menu-absolute">
    <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Working Hours :</b> Monday
                    - Friday, 08 am - 05 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <Link href="/contact">
              <a className="theme-btn">
                Consultations <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header2 = () => (
  <header className="main-header header-two">
    <div className="header-top-wrap">
      <div className="container">
        <div className="header-top bg-light-green text-white py-10">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Adresse email :</b>{" "}
                    <a href="mailto:support@gmail.com">
                      {" "}
                      vanmutgroupe@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Appelez-nous :</b>{" "}
                    <a href="callto:+243812144542">+243 (81) 214 45 42</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container rel clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                  <img
                    src="assets/images/logos/logo-white.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
            </button>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);

// customize top header
const Header3 = () => (
  <header className="main-header header-three menu-absolute">
    {/* <header className="main-header header-three menu-absolute"> */}
    <div
      className="header-top-wrap bg-primary py-10"
      // style={{ backgroundColor: "#007bff" }}
    >
      {/* <div className="container-fluid">
        <div className="header-top px-0">
          <ul>
            <li style={{ color: "white" }}>25% OFF Upcoming Product</li>
            <li style={{ color: "white" }}>100% Fresh &amp; natural foods</li>
            <li style={{ color: "white" }}>free shipping over $99</li>
            <li style={{ color: "white" }}>money back guarantee</li>
            <li style={{ color: "white" }}>cash on delivery</li>
          </ul>
        </div>
      </div> */}
    </div>
    <div className="header-middle py-15">
      <div className="container-fluid">
        <div className="header-middle-inner">
          <div className="menu-middle-left">
            {/* <select name="currentcy" id="currentcy">
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="EURO">EURO</option>
            </select>

            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Arabic">Arabic</option>
            </select>

            <div className="follower">
              <i className="fab fa-facebook" />
              <a href="#">250k+ Followers</a>
            </div> */}
          </div>
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo-two.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            {/* <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="nav-search"
            >
              <input
                type="text"
                placeholder="Search here"
                className="searchbox"
                required=""
              />
              <button type="submit" className="searchbutton far fa-search" />
            </form> */}
            {/* <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button> */}
            {/* <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <button className="heart">
              <i className="far fa-heart" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper px-0">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* menu sidbar */}
          {/* <div className="menu-sidebar" onClick={() => sidebarToggle()}>
            <button>
              <i className="far fa-ellipsis-h" />
              <i className="far fa-ellipsis-h" />
              <i className="far fa-ellipsis-h" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
