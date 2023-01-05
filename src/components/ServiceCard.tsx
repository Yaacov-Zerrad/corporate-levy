import React, { FunctionComponent } from "react";


type Props = {
    data :any
}

const ServiceCard:FunctionComponent<Props> = ({data}) => {

    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img
                                src={data.img}
                                className="img-fluid"
                                alt="dfsg"
                            />
                            <div className="portfolio-info">
                                <h4>{data?.name}</h4>
                                <p>{data?.description}</p>
                                <div className="portfolio-links">
                                    {/* <a
                                        href="assets/img/portfolio/portfolio-1.jpg"
                                        data-gallery="portfolioGallery"
                                        className="portfolio-lightbox"
                                        title="Neurofeedback"
                                    >
                                        <i className="bx bx-plus"></i>
                                    </a> */}
                                    <a
                                        href="portfolio-details.html"
                                        className="portfolio-details-lightbox"
                                        data-glightbox="type: external"
                                        title="Portfolio Details"
                                    >
                                        <i className="bx bx-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ServiceCard