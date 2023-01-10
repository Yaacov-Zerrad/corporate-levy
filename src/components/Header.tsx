import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";


const Header:FunctionComponent = () => {
  const { state } = useSelector((state: any) =>{ return state});

    return (
        <div className="">

  <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Rivka Levy</h1>
      <p><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Praticienne</span>	&nbsp;<span className="descr-serv"style={{color:'#45505b', fontStyle: 'italic'}}>Hypnose, Neuro-feedback, EFT </span></p>
      <p><a href={"tel:"+state.mobile} target='_blank' className="link-tel">+33 6 97 04 79 51</a></p>
      <div className="social-links">
        <a href="https://wa.me/+33697047951" target='_blank' ><i className="bx bxl-whatsapp"></i></a>
        <a href={"tel:"+state.mobile} target='_blank'><i className="bx bx-phone"></i></a>
        <a href={"sms:"+state.mobile}  target='_blank'><i className="bx bxs-chat"></i></a>
        <a href={"mailto:"+state.email}  target='_blank'><i className="bx bxl-gmail"></i></a>
      </div>
    </div>

  </section>
        </div>
    )
}

export default Header