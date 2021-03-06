import React from "react";
import Card03 from "./card03";
import Fdata from "./Fdata";
import Footer from "./Footer";

const Mobile = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <h1 className="strongfont">Mobile Phones under 15,000Rs</h1>
        </div>
        <div className="row ">
          {Fdata.map((val, ind) => {
            return <Card03 url={val.url} />;
          })}
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Mobile;
