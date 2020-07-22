import React from "react";
import web from "../src/assets/images/Robot01.png";
import { NavLink } from "react-router-dom";
import Commom from "./Common";
import Footer from "./Footer";
import ab01 from "../src/assets/images/new00.png";
import ab02 from "../src/assets/images/nexonev.jpg";

const About = () => {
  return (
    <>
      <Commom
        name="Know what we do at"
        imgsrc={web}
        visit="./contact"
        btname="Contact us"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-10 mb-5 mt-5">
            <h3 className="mt-5">
              <strong className="strongfont">What We</strong> Do
            </h3>
            <p className="textjusti mt-5">
              Check out Expert <strong> Reviews </strong> and Ratings of Latest
              Technology Products,<strong> Gadgets,</strong> Gizmos, mobile
              phones, tablets, laptops, cameras, apps etc.
              <br />
              <br />
              Search, browse and compare the
              <strong>latest technology reviews</strong> and products covering
              computing, home entertainment systems, gadgets and more
              <br />
              <br />
              all latest gadgets and tech products to help you make a good
              decision. Read our review and<strong> ratings </strong> to know
              which mobiles or any
              <strong>electronics appliances</strong> fits in your pocket and
              works
              <br />
              <br />
              Looking for an in-depth car review? Read articles of full road
              test – performance, handling, reliability and economy – plus the
              <strong> latest car news,</strong> video and opinion.
              <br />
              <br />
              Read the most comprehensive <strong>Car Reviews</strong> of the
              Indian automobile industry
              <br />
              <br />
              <strong>We help you in car buying decision? </strong>Read real car
              user reviews on almost every car in India. Connect with other car
              owners and learn from there..
              <br />
              <br />
              <strong>Looking for reliable Car advice? </strong>Read what our
              experts have to say about first drives, comparison and road tests
              which will help you speed up your car search.
            </p>
          </div>
          <div className="col-md-6 col-10 mb-5 mt-5">
            <img src={ab02} className="img-fluid animated"></img>
            <img src={ab01} className="img-fluid animated"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
