import React from "react";
import Card03 from "./card03";
import Smdata from "./Smdata";
import Footer from "./Footer";

const Smartwatches = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="strongfont">Best Smartwatches in India</h1>
        </div>
        <div className="row">
          {Smdata.map((val, ind) => {
            return <Card03 url={val.url} />;
          })}
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Smartwatches;
