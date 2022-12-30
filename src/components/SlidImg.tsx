import React, { FunctionComponent } from "react";
import Carousel from "react-bootstrap/Carousel";

const SlidImg: FunctionComponent = () => {
    return (
        <section id="hero-slider" className="hero-slider">
            <div className="container-md" data-aos="fade-in">
                <div className="row">
                    <div className="col-12">
                        {/* <div className="swiper sliderFeaturedPosts">
              <div className="swiper-wrapper"> */}
                        <Carousel>
                            <Carousel.Item>
                                <a
                                    href="#"
                                    className="img-bg d-flex align-items-end"
                                    style={{
                                        backgroundImage:
                                            "url('./images/post-slide-1.jpg')",
                                    }}
                                />

                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <a
                                    href="#"
                                    className="img-bg d-flex align-items-end"
                                    style={{
                                        backgroundImage:
                                            "url('./images/post-slide-4.jpg')",
                                    }}
                                />

                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <a
                                    href="#"
                                    className="img-bg d-flex align-items-end"
                                    style={{
                                        backgroundImage:
                                            "url('./images/post-slide-2.jpg')",
                                    }}
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <a
                                    href="#"
                                    className="img-bg d-flex align-items-end"
                                    style={{
                                        backgroundImage:
                                            "url('./images/post-slide-3.jpg')",
                                    }}
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        {/* <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-1.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>

                <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-2.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-3.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-4.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-5.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#" className="img-bg d-flex align-items-end" style={{backgroundImage: "url('./images/post-slide-6.jpg')"}}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
                    </div>
                  </a>
                </div> */}
                    </div>
                    {/* <div className="custom-swiper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swiper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>

              <div className="swiper-pagination"></div> */}
                </div>
            </div>
            {/* </div>
      </div> */}
        </section>
    );
};

export default SlidImg;
