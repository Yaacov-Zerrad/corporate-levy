import React, { FunctionComponent, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar: FunctionComponent = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        console.log(isMobile);
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;

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
                                    <a
                                        href="/"
                                        className="nav-link scrollto active"
                                    >
                                        <i className="bx bx-home"></i>{" "}
                                        <span>Accueil</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/articles"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-file-blank"></i>{" "}
                                        <span>Articles</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#services"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-server"></i>{" "}
                                        <span>Services</span>
                                    </a>
                                </li>
                                {/* <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li> */}
                                <li>
                                    <a
                                        href="/#testimonials"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-book-content"></i>{" "}
                                        <span>Temoignage</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-envelope"></i>{" "}
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            ) : (
                <div className="">
                    {/* <i className="bi bi-list mobile-nav-toggle d-lg-none"></i> */}
                    <Navbar collapseOnSelect expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            {/* <header id="header" className="d-flex flex-column justify-content-center"> */}
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">
                                        <i className="bx bx-home"></i>{" "}
                                        <span>Accueil</span>
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/articles"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-file-blank"></i>{" "}
                                        <span>Articles</span>
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/#services"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-server"></i>{" "}
                                        <span>Services</span>
                                    </Nav.Link>
                                    <Nav.Link
                                        href="/#testimonials"
                                        className="nav-link scrollto"
                                    >
                                        <i className="bx bx-book-content"></i>{" "}
                                        <span>Temoignage</span>
                                    </Nav.Link>
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
