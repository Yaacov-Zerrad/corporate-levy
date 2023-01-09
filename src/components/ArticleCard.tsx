import React, { FunctionComponent, useEffect } from "react";

type Props = {
    data: any;
};

const ArticleCard: FunctionComponent<Props> = ({ data }) => {
    useEffect(() => {

    });
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
                <img src={data?.img} className="img-fluid" alt="..." />
                <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        {/* subject */}
                        <h4>{data?.service?.name}</h4>
                        {/* added date */}
                        {/* <p className="price">{data?.added_date}</p> */}
                    </div>

                    <h3>
                        <a href="course-details.html">{data?.title}</a>
                    </h3>
                    <p>{data?.content}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                            <img
                                src="assets/img/trainers/trainer-2.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <span>Rivka</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                            {/* <i className="bx bx-user"></i>
                        &nbsp;35 &nbsp;&nbsp; */}
                            <i className="bx bx-heart"></i>
                            &nbsp;42
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
