import "./services.css";
import { FaLaptopCode } from "react-icons/fa6";
import { FiLayers } from "react-icons/fi";
import { IoMdFolderOpen } from "react-icons/io";
import { LuCamera } from "react-icons/lu";
import { PiVideoCamera } from "react-icons/pi";
import vec1 from "../../assets/img/vec3.png";
import add from "../../assets/img/add.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="section services">
        <div className="service-heading" data-aos="fade-down">
          <h1>
            The Service We Provide <br /> For You
          </h1>
        </div>

        <div className="services-items">
          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <span>
              <FaLaptopCode />
            </span>
            <h3>Development</h3>
            <p>
              Create a platform with the best <br /> and coolest quality from
              us.
            </p>
          </div>

          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span>
              <FiLayers />
            </span>
            <h3>UI/UX Designer</h3>
            <p>
              We provide UI/UX Design services, <br /> and of course with the
              best quality
            </p>
          </div>

          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span>
              <FaLaptopCode />
            </span>
            <h3>Graphik Designer</h3>
            <p>
              We provide Graphic Design <br /> services, with the best designers
            </p>
          </div>

          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <span>
              <IoMdFolderOpen />
            </span>
            <h3>Motion Graphik</h3>
            <p>
              Create a platform with the best <br /> and coolest quality from
              us.
            </p>
          </div>

          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <span>
              <LuCamera />
            </span>
            <h3>Photography</h3>
            <p>
              We provide Photography services, <br /> and of course with the
              best quality
            </p>
          </div>

          <div
            className="services-detail"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <span>
              <PiVideoCamera />
            </span>
            <h3>Videography</h3>
            <p>
              Create a platform with the best <br /> and coolest quality from
              us.
            </p>
          </div>
        </div>

        <span className="img1">
          <img src={vec1} alt="decoration1" />
        </span>
        <span className="img2">
          <img src={add} alt="decoration2" />
        </span>
        <span className="img3">
          <img src={add} alt="decoration3" />
        </span>
      </div>
    </>
  );
};

export default Services;
