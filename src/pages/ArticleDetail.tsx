import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
import ServicesApi from "../services/get-api-address";
type Params = {
    data: any;
};

const ArticleDetail: FunctionComponent= () => {
    const { posts } = useSelector((state: any) => state.posts);
    const [post, setPost] = useState({title:null, content:null, added_date:null, img:''})
    // const post = posts?.map()
  const params = useParams();
    useEffect(()=>{
        const obj = posts.filter((obj: any) => {
            return obj.id == params.id
        })
        setPost(obj[0])
        
    })
    return (


        <main >

        <section id="events" className="events">
          <div className="container" data-aos="fade-up">
    
            <div className="row justify-content-center">
              <div className="col-md-8 d-flex align-items-stretch">
                <div className="card">

                  <div className="card-img">
                    <img src={post?.img} alt="..."/>
                  </div>
                  <div className="card-body">

                    <h5 className="card-title">{post?.title}</h5>
                    <p className="fst-italic text-center">{post?.added_date}</p>
                    <p className="card-text">{post?.content}</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6 d-flex align-items-stretch">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/events-2.jpg" alt="..."/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Marketing Strategies</a></h5>
                    <p className="fst-italic text-center">Sunday, November 15th at 7:00 pm</p>
                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                  </div>
                </div>
    
              </div> 
            </div>*/}
    
          </div>

          </div></section></main>

    );
};

export default ArticleDetail;
