import React, { FunctionComponent } from "react";
import { Outlet, Link } from "react-router-dom";


const NavBar:FunctionComponent = () => {

    return (
        <div className="">
              <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>

<header id="header" className="d-flex flex-column justify-content-center">

  <nav id="navbar" className="navbar nav-menu">
    <ul>
      <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Accueil</span></a></li>
      <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
      {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li> */}
      <li><a href="#hero-slider" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Posts</span></a></li>
      <li><a href="#testimonials" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Temoignage</span></a></li>
      <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
    </ul>
  </nav>

</header>
        </div>
    )
}

export default NavBar