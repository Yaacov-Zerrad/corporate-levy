import React, { FunctionComponent } from "react";
import Carousel from "react-bootstrap/Carousel";
type Props = {
    data: any;
};

const PostCarousel: FunctionComponent = () => {
    return (
        <Carousel.Item>
        <a
            href="#"
            className="img-bg d-flex align-items-end"
            // style={{
            //     backgroundImage:
            //         "url('./images/post-slide-3.jpg')",
            // }}
        >
            <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
            ></img>
        </a>

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel
                scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
    </Carousel.Item>
    );
};

export default PostCarousel;
