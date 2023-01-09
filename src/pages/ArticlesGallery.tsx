import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from "react";
import Contact from "../components/Contact";
import { useDispatch, useSelector } from "react-redux";
import ServicesApi from "../services/get-api-address";
import ArticleCard from "../components/ArticleCard";
import { setPosts } from "../features/postsSlice";
import ArticleDetail from "../pages/ArticleDetail";
import { useParams } from "react-router-dom";

const ArticlesGallery: FunctionComponent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { posts } = useSelector((state: any) => state.posts);

    useEffect(() => {
        window.scrollTo(0, 0);
        ServicesApi.getPosts().then((data) => {
            if (Object.keys(params).length !== 0) {
                const obj = data.filter((obj: any) => {
                    return obj.service.name == params.name;
                });
                dispatch(setPosts(obj));
            } else {
                dispatch(setPosts(data));
            }
        });
    }, []);

    return (
        <div className="">
            <main id="main" data-aos="fade-in">
                {/* <div className={"modal "+modal}  onClick={openDetail} > */}
                {/* <ArticleDetail /> */}
                {/* <div className="modal-content">super</div> */}
                {/* </div> */}
                {/* <button type="button" onClick={openDetail} className="bx">
                    test
                </button> */}
                {/* <!-- ======= Courses Section ======= --> */}
                <section id="courses" className="courses">
                    <div className="container" data-aos="fade-up">
                        <div
                            className="row"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            {posts?.map((post: any) => (
                                <ArticleCard key={post.id} data={post} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Contact />
        </div>
    );
};

export default ArticlesGallery;
