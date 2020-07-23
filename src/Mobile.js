import React from "react";
import Card from "./card";
import Mdata from "./Mdata";
import Footer from "./Footer";

const Mobile = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center strongfont">Mobile Phone Under 15,000Rs</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Mdata.map((val, ind) => {
                return (
                  <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    url={val.url}
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
export default Mobile;
