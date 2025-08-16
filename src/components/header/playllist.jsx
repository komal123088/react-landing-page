import image from "../../assets/img/image.png";
import { FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Playvideo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="section main">
      <div className="main-txt">
        <div className="heading" data-aos="fade-up">
          <h1>
            Why Enver Is The <br /> Best Choice?
          </h1>
        </div>
        <p data-aos="fade-up" data-aos-delay="100">
          Watch this one minute video so you understand why you should <br />
          use our services!
        </p>
      </div>

      <div className="main-img" data-aos="zoom-in" data-aos-delay="200">
        <img src={image} />
        <span>
          <FaPlay />
        </span>
      </div>
    </div>
  );
};

export default Playvideo;
