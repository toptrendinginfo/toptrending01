import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>&copyright 2020 - Top Trending Info</p>
      </div>
      <div className="social">
        <NavLink to="#" className="support">
          Contact Us
        </NavLink>
        <a href="https://www.facebook.com/toptrendinginfo07" className="face">
          f
        </a>
        <NavLink to="#" className="tweet">
          t
        </NavLink>
        <a
          href="https://www.youtube.com/channel/UCFF_A7Zd0WrXOUt8RA4XIsA"
          className="linked"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
