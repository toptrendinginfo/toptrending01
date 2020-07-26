import React from "react";
import { NavLink } from "react-router-dom";

const Card02 = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <NavLink to={props.visit} className="btn btn-primary">
              Click here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card02;
