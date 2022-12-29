import React, { FunctionComponent } from "react";
import { Outlet, Link } from "react-router-dom";


const Header:FunctionComponent = () => {

    return (
        <div className="">

  <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Rivka Levy</h1>
      <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Praticienne</span></p>
      <p>+33 6 97 04 79 51</p>
      <div className="social-links">
        <a href="https://wa.me/33697047951" target='_blank' ><i className="bx bxl-whatsapp"></i></a>
        <a href="tel:+33697047951" target='_blank'><i className="bx bx-phone"></i></a>
        <a href="sms:+33697047951"  target='_blank'><i className="bx bxs-chat"></i></a>
        <a href="mailto:rivkaNeurofeedback@gmail.com"  target='_blank'><i className="bx bxl-gmail"></i></a>
      </div>
    </div>

  </section>
        </div>
    )
}

export default Header