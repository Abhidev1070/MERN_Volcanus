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
      height:"300px"

    }}>
      <Slider {...settings}>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20" alt="" />
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20" alt="" />
        </div>
        <div>
        <img src="" alt="" />
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
