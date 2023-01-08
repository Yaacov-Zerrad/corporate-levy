import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";


const Footer:FunctionComponent = () => {
  const { state } = useSelector((state: any) =>{ return state});

    return (
        <footer id="footer">
        <div className="container">
          <h3>Rivka Levy</h3>
          <p>
          Praticienne diplômée de l'Institut Zengar, Neuroptimal, avec plus de 5 ans d'expérience dans neurofeedback, hypnose, eft vous propose plusieurs techniques pour résoudre vos problèmes de toutes natures.
          </p>
          <div className="social-links">
            <a href="https://wa.me/33697047951" target='_blank' ><i className="bx bxl-whatsapp"></i></a>
            <a href="tel:+33697047951" target='_blank' ><i className="bx bx-phone"></i></a>
            <a href="sms:+33697047951"  target='_blank' ><i className="bx bxs-chat"></i></a>
            <a href={"mailto:"+state.email} target='_blank' ><i className="bx bxl-gmail"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>RivkaNeurofeedback</span></strong>. Tout Droits Reserves
          </div>
          <div className="credits">
     
            
            Developer by <a href="mailto:yaazerrad@gmail.com">Yaacov-Zerrad</a> 	&nbsp;
            <a href="https://wa.me/972545564449" target='_blank' ><i className="bx bxl-whatsapp"></i></a>
          </div>
        </div>
      </footer>
    )
}

export default Footer