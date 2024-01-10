import { useState } from "react";
import stl from "./Slider.module.css";

const Slider = () => {
  const slides = ["/images/slide2.png", "/images/slide1.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide === slides.length - 1) return;
    setCurrentSlide((pre) => pre + 1);
  };
  const prev = () => {
    if (currentSlide === 0) return;

    setCurrentSlide((pre) => pre - 1);
  };

  return (
    <div className={stl.slider}>
      <div className={stl.btns}>
        <img src="/images/nex.svg" className={stl.prev} onClick={next} />
        <img src={"/images/prev.svg"} className={stl.nxt} onClick={prev} />
      </div>
      <div className={"slide"}>
        <img src={slides[currentSlide]} alt="" className={stl.imgs} />
      </div>
    </div>
  );
};

export default Slider;
