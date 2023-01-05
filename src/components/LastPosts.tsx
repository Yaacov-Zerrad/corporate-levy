import React, { FunctionComponent, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../features/postsSlice";
import ServicesService from "../services/get-api-address";


const LastPosts: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state: any) => state.posts);


    useEffect(() => {
        ServicesService.getPosts().then((data) => {
            console.log(data);

            dispatch(setPosts(data));
        });
        console.log(posts);
        console.log(posts.length);
    }, []);
    return (
        <section id="hero-slider" className="hero-slider">
            <div className="container-md" data-aos="fade-in">
                <div className="section-title">
                    <h2>Derniers Articles</h2>
                    {/* <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius
                        consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et
                        nemo qui impedit suscipit alias ea. Quia fugiat sit in
                        iste officiis commodi quidem hic quas.
                    </p> */}
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* <div className="swiper sliderFeaturedPosts">
              <div className="swiper-wrapper"> */}
                        <Carousel>
                            {/* <Carousel.Item>
                                <a
                                    href="#"
                                    className="img-bg d-flex align-items-end"
                                    // style={{
                                    //     backgroundImage:
                                    //         "url('./images/post-slide-3.jpg')",
                                    // }}
                                >
                                    <img
                                        src="assets/img/portfolio/portfolio-1.jpg"
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
                            </Carousel.Item> */}

                            {/* loop */}
                            {posts?.map((post: any) => (
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
                                        src={post.img}
                                        className="img-fluid"
                                        alt=""
                                    ></img>
                                </a>

                                <Carousel.Caption>
                                    <h3>{post.title}</h3>
                                    <p>
                                        {post.content}
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            ))}
                            {/* {posts?.map((service: any) => (
                            <PostCarousel key={service.name} data={service} />
                        ))} */}
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

export default LastPosts;
