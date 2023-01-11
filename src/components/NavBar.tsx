import React, { FunctionComponent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setServices } from "../features/servicesSlice";
import ServicesApi from "../services/get-api-address";
const NavBar: FunctionComponent = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const dispatch = useDispatch();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const isMobile = width <= 768;

    useEffect(() => {
        // console.log(isMobile);     
        // ServicesApi.getServices().then((data) => {
        //   //   console.log(data);
  
        //   dispatch(setServices(data));
        // });
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);


    return (
        <div>
            {!isMobile ? (
                <div className="">
                    <header
                        id="header"
                        className="d-flex flex-column justify-content-center"
                    >
                        <nav id="navbar" className="navbar nav-menu">
                            <ul>
                                <li>
                                    <Link
                                        className="nav-link scrollto active"
                                        to="/"
                                    >
                                        <i className="bx bx-home"></i>{" "}
                                        <span>Accueil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link scrollto"
                                        to="/articles"
                                    >
                                        <i className="bx bx-file-blank"></i>{" "}
                                        <span>Articles</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link scrollto"
                                        to="/services"
                                    >
                                        <i className="bx bx-server"></i>{" "}
                                        <span>Présentations</span>
                                    </Link>
                                </li>
                                {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li> */}

                                <li>
                                    {/* <Link
                                        className="nav-link scrollto"
                                        to="#testimonials"
                                    >
                                        <i className="bx bx-book-content"></i>{" "}
                                        <span>Temoignage</span>
                                    </Link> */}
                                </li>
                                <li>
                                    <Link
                                        className="nav-link scrollto"
                                        to="/contact"
                                    >
                                        <i className="bx bx-envelope"></i>{" "}
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            ) : (
                <div className="">
                    {/* <i className="bi bi-list mobile-nav-toggle d-lg-none"></i> */}
                    <Navbar collapseOnSelect expand="lg" style={{background:'rgba(0, 0, 0, .15)'}}  >
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            {/* <header id="header" className="d-flex flex-column justify-content-center"> */}
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link >
                                    <Link to="/">
                                    <i className="bx bx-home"></i>{" "}
                                        <span>Accueil</span>
                                        </Link>

                                    </Nav.Link>
                                    <Nav.Link
                                        href="/articles"
                                        className="nav-link scrollto"
                                    >
                                        <Link to="/articles">
                                            <i className="bx bx-file-blank"></i>{" "}
                                            <span>Articles</span>
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/services"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-server"></i>{" "}
                                        <span>Présentations</span>
                                    </Nav.Link>
                                    {/* <Nav.Link
                                        href="/#testimonials"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-book-content"></i>{" "}
                                        <span>Temoignage</span>
                                    </Nav.Link> */}
                                    <Nav.Link
                                        href="#contact"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-envelope"></i>{" "}
                                        <span>Contact</span>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            )}
        </div>
    );
};

export default NavBar;
