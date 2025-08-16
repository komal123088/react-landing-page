import React, { useState } from "react";
import "./footer.css";
import logo from "../../assets/img/logo.png";
import vector3 from "../../assets/img/vec2.png";
import vector4 from "../../assets/img/vec4.png";
import Form from "./form";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="footer">
        <div className="text section">
          <div className="footer-heading">
            <h1>Contact us for the service you want to use</h1>
          </div>
          <div className="footer-btn">
            <button onClick={() => setShowModal(true)}>Contact Us</button>
          </div>
          <span className="footer-vector">
            <img src={vector3} className="last-vec" />
            <img src={vector4} className="last-vec2" />
          </span>
        </div>

        <div className="last-section section">
          <div className="footer-logo">
            <span>
              <img src={logo} alt="" />
            </span>
            <h1>Enver</h1>
          </div>
          <div className="footer-list">
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms And Conditions</a>
          </div>
          <div className="para">
            <p>
              © 2025 Made by komal With Creative Babar Team, All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {showModal && <Form onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Footer;
