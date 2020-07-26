import React from "react";

import Sdata from "./Sdata";
import Footer from "./Footer";
import Card02 from "./card02";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center strongfont">Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card02
                    imgsrc={val.imgsrc}
                    title={val.title}
                    visit={val.visit}
                    text={val.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Service;
