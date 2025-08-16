import "./portfolio.css";
import g1 from "../../assets/img/g1.png";
import g2 from "../../assets/img/g2.png";
import g3 from "../../assets/img/g3.png";
import vector2 from "../../assets/img/vec2.png";
import vector1 from "../../assets/img/vec1.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    renderMode: "performance",
  });
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="portfolio section" data-aos="zoom-in">
      <div className="portfolio-heading" data-aos="zoom-in">
        <h1>Our Awesome Portfolio</h1>
      </div>

      <div
        ref={sliderRef}
        className="keen-slider portfolio-slider"
        data-aos="zoom-out"
      >
        <div className="keen-slider__slide box1">
          <img src={g1} alt="g1" />
        </div>
        <div className="keen-slider__slide box2">
          <img src={g2} alt="g2" />
        </div>
        <div className="keen-slider__slide box3">
          <img src={g3} alt="g3" />
        </div>
      </div>

      <div className="dots" data-aos="zoom-in">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={currentSlide === idx ? "dot active" : "dot"}
          />
        ))}
      </div>

      <span className="vector" data-aos="zoom-out">
        <img src={vector2} alt="" />
      </span>
      <div className="vector1" data-aos="zoom-in">
        <img src={vector1} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
