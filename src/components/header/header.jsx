import "./header.css";
import man from "../../assets/img/man.png";
import rectangle from "../../assets/img/rec.png";
import rectangle2 from "../../assets/img/rec2.png";
import vec1 from "../../assets/img/vec1.png";
import vec2 from "../../assets/img/vec2.png";
import vec3 from "../../assets/img/vec3.png";
import vec4 from "../../assets/img/vec4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="section header">
      <div className="header-txt" data-aos="fade-right">
        <h1>
          Build Your <br /> Awesome <br /> Platform
        </h1>
        <p>
          Enver studio is a digital studio that offers several services <br />
          such as UI/UX Design to developers, we will provide the best <br />
          service for those of you who use our services.
        </p>
        <button>Our Services</button>
      </div>

      <div className="header-image" data-aos="fade-left">
        <img className="man-image" src={man} alt="man" />
        <img className="rec1" src={rectangle} alt="rec1" />
        <img className="rec2" src={rectangle2} alt="rec2" />
      </div>

      <img className="vec1" src={vec1} />
      <img className="vec2" src={vec2} />
      <img className="vec3" src={vec3} />
      <img className="vec4" src={vec4} />
    </div>
  );
};

export default Header;
