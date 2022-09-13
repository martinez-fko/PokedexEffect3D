import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="redes">
        <div className="iconBox">
          <i className="bx bxl-github"></i>
        </div>
        <div className="iconBox">
          <i className="bx bxs-briefcase-alt-2"></i>
        </div>
        <div className="iconBox">
          <i className="bx bxl-linkedin"></i>
        </div>
      </div>
      <p>Make with ❤ by Francisco Martinez</p>
    </footer>
  );
};

export default Footer;
