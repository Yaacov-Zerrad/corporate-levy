import React, { FunctionComponent } from "react";
import Testimony from "../components/ Testimony";
import Contact from "../components/Contact";
import Facts from "../components/Facts";
import Header from "../components/Header";
import Services from "../components/Services";
import SlidImg from "../components/SlidImg";

const Home: FunctionComponent = () => {
    return (
        <div className="">
            <Header />
            <Services />
            <SlidImg />
            <Facts />
            <Testimony />
            <Contact />
        </div>
    );
};

export default Home;
