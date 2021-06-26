import React from "react";

import storyData from "../../../data/data";
import "./styles.scss";

const Blogs = () => {
  
  return (
    <section className="blogs">
      <div className="container">
        <div className="row">
          {storyData.map((item) => {
            return (
              <div className="col-4 blogs__inner">
                <div className="blogs__img">
                  <img src={item.img}/>
                </div>
                <div className="blogs__info">
                  <h4 className="description">{item.title}</h4>
                  <p className="text blogs__info-text">{item.text}</p>
                  <span className='date blogs__info-date'>{item.date}</span>
                  <button className='button-2'>Read more</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
