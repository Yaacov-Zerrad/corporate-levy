import React, { FunctionComponent } from "react";
import Testimony from "../components/ Testimony";
import Contact from "../components/Contact";
import Facts from "../components/Facts";
import Header from "../components/Header";
import Services from "../components/ServicesList";
import LastPosts from "../components/LastPosts";
import NavBar from "../components/NavBar";


const Home: FunctionComponent = () => {
    window.scrollTo(0, 0);

    return (
        <div className="">
            <Header />

            <Services />
            <LastPosts />
            {/* <Facts /> */}
            <Testimony />
            <Contact />
        </div>
    );
};

export default Home;
