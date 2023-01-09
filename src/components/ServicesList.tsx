import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../features/servicesSlice";
import { Service } from "../Model/ServiceType";
import State from "../Model/StateType";
import ServicesService from "../services/get-api-address";
import ServiceCard from "./ServiceCard";

const ServicesList: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { services } = useSelector((state: any) => state.services);
    
    // axios.defaults.baseURL = 'http://127.0.0.1:8000'
    // fetch("http://127.0.0.1:8000/api/services")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     });

    useEffect(() => {
        ServicesService.getServices().then((data) => {
            //   console.log(data);

            dispatch(setServices(data));
        });
        console.log(services);
        console.log(services.length);
    }, []);
    return (
        <section id="services" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>
                    Dans notre clinique nous vous proposons du Neurofeedback de l'Hypnose et du NFT dans un moment de détente, de retour aux sources et aux sensations pour recalibrer votre cerveau de la meilleure manière possible.
                    </p>
                </div>
                    {/* and class ---- portfolio-container */}
                <div
                    className="row "
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    
                    {services?.map((service: any) => (
                        <ServiceCard key={service.name} data={service} />
                    ))}
                    {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img
                                src="assets/img/portfolio/portfolio-1.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="portfolio-info">
                                <h4>Hypnose</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a
                                        href="assets/img/portfolio/portfolio-1.jpg"
                                        data-gallery="portfolioGallery"
                                        className="portfolio-lightbox"
                                        title="Hypnose"
                                    >
                                        <i className="bx bx-plus"></i>
                                    </a>
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
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default ServicesList;
