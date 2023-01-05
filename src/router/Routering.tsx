import React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetail from "../pages/ServiceDetail";
import Service from "../components/ServiceCard";
import AllPage from "../pages/AllPage";
import Home from "../pages/Home";

const Routering: FunctionComponent = () => {
    return (
        <div className="router">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all" element={<AllPage />} />
                    <Route path="/services/:service" element={<ServiceDetail />} />

                    {/* <Route path="/error" element={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routering;
