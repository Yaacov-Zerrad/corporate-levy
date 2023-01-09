import React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServiceDetail from "../pages/ServiceGalleryList";
import Service from "../components/ServiceCard";
import AllPage from "../pages/AllPage";
import Home from "../pages/Home";
import ArticlesGallery from "../pages/ArticlesGallery";
import ArticleDetail from "../pages/ArticleDetail";

const Routering: FunctionComponent = () => {
    return (
        <div className="router">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all" element={<AllPage />} />
                    <Route path="/articles" element={<ArticlesGallery />} />
                    <Route path="/services/:name" element={<ArticlesGallery />} />
                    <Route path="/article/:id" element={<ArticleDetail />} />

                    {/* <Route path="/error" element={<Error />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routering;
