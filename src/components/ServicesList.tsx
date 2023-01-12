import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../features/servicesSlice";
import { Service } from "../Model/ServiceType";
import State from "../Model/StateType";
import ServicesService from "../services/get-api-address";
import ServiceCard from "./ServiceCard";

const ServicesList: FunctionComponent = () => {
    window.scrollTo(0, 0);

    const { services } = useSelector((state: any) => state.services);
    useEffect(() => {

    }, []);
    return (
        <section id="services" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title ">
                    <h2>Présentation</h2>
                </div>
                <div className="row justify-content-center">
                    <p className="col-9 text-justify">
                        Après des années d'enseignement, des années de relations
                        avec parents et enfants, j'ai cherché des outils pour
                        aider chacun à donner le meilleur de lui-même. Trouver
                        les forces intérieures, les mettre en avant dans sa vie
                        et ressentir ce bien-être si recherché aujourd'hui. Un
                        bien-être où sommeil, confiance, concentration,
                        sérénité, calme intérieur, lâcher prise... s'ensuivent
                        automatiquement. Tout cela avec, pour outils, le
                        Neurofeedback, l'hypnose et l'Eft. <br />
                        Des méthodes thérapeutiques brèves, non invasives qui
                        ont des effets extraordinaires et ont déjà fait leurs
                        preuves dans le monde entier. <br />
                        Vous aussi, vous avez le droit d'évoluer.
                        <br />
                        Vous voulez vous en sortir ? Vous pouvez y arriver.{" "}
                        <br />
                        {/* C'est le moment de prendre Rdv. */}
                    </p>
                    {/* and class ---- portfolio-container */}
                </div>
                <div className="row " data-aos="fade-up" data-aos-delay="200">
                    {services?.map((service: any) => (
                        <ServiceCard key={service.name} data={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
