import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { spread } from "axios";

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    spread:1000,
    autoplaySpread:2000,

  };
  return (
    <div className="slider-container" style={{
      backgroundColor:"yellow",
      width:"90%",
      margin:"auto",
      height:"300px",
      position:"relative",
      zIndex:-1,

    }}>
      <Slider {...settings}>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20" alt="" />
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20" alt="" />
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20" alt="" />
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20" alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default ProductSlider;
