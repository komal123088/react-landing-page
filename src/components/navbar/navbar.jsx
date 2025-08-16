import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/img/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar section" data-aos="fade-down">
      <div className="logo">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <h1>Enver</h1>
      </div>

      <div className={`nav-list ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Our Project</Link>
        <Link to="/playlist">Play List </Link>
        <div className="btn">
          <Link to="/contact">
            <button>Contact us</button>
          </Link>
        </div>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </div>
    </div>
  );
};

export default Navbar;
