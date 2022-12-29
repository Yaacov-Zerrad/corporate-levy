import React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Service from "../components/Service";
import AllPage from "../pages/AllPage";
import Home from "../pages/Home";

const Routering: FunctionComponent = () => {
    return (
        <div className="router">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all" element={<AllPage />} />
                    <Route path="/services/:service" element={<Service />} />

                    {/* <Route path="/error" element={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routering;
