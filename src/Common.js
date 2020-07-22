import React from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-1 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
              <h1>{props.name}</h1>
              <p className="brand-name"> Top Trending Info</p>

              <h2 className="my-1">Your One Stop Solution for Tech Gadgets</h2>
              <div className="mt-2">
                <NavLink to={props.visit} className="btn-get-started">
                  {props.btname}
                </NavLink>
              </div>
            </div>
            <div className="col-md-6  pt-2 pt-lg-0 order-2 order-lg-1 header-img">
              <img
                src={props.imgsrc}
                className="img-fluid animated"
                alt="imageslide"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
