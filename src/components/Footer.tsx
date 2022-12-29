import React, { FunctionComponent } from "react";


const Footer:FunctionComponent = () => {

    return (
        <footer id="footer">
        <div className="container">
          <h3>Rivka Levy</h3>
          <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          <div className="social-links">
            <a href="https://wa.me/33697047951" target='_blank' ><i className="bx bxl-whatsapp"></i></a>
            <a href="tel:+33697047951" target='_blank' ><i className="bx bx-phone"></i></a>
            <a href="sms:+33697047951"  target='_blank' ><i className="bx bxs-chat"></i></a>
            <a href="mailto:rivkaNeurofeedback@gmail.com" target='_blank' ><i className="bx bxl-gmail"></i></a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>RivkaNeurofeedback</span></strong>. Tout Droits Reserves
          </div>
          <div className="credits">
     
            Designed by <a href="mailto:yaazerrad@gmail.com">Yaacov-Zerrad</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer