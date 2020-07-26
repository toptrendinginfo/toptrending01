import React from "react";
import web from "../src/assets/images/Robot.png";

import Commom from "./Common";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Commom
        name="Know about your Gadgets at"
        imgsrc={web}
        visit="./about"
        btname="Know more"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3 mt-5">
            <h3>
              <strong className="strongfont">TOP TRENDING </strong> ELECTRIC TWO
              WHEELER
            </h3>
            <p>
              Here are the best electric two-wheelers in India based on
              performance, features and quality. But you get to decide which one
              of them takes the crown.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 mb-3 mt-5">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                title="video"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/HU0gpmNMJ6Q"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
};
export default Home;
