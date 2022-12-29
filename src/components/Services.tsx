import React, { FunctionComponent } from "react";


const Services:FunctionComponent = () => {

    return (
        <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  

  
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
  
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Neurofeedback</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Neurofeedback"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Hypnose</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Hypnose"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>EFT</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="EFT"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            
  
          </div>
  
        </div>
      </section>
    )
}

export default Services