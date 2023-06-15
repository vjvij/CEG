import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear"
    };
    return (
      <div style={{height:"250px"}}>
        <Slider {...settings} className="Slider_css">
          <div>
            <img src="https://cde.annauniv.edu/data1/images/img_5063.jpg"/>
          </div>
          <div>
          <img src="https://cde.annauniv.edu/data1/images/img_5086.jpg"/>
          </div>
          <div>
          <img src="https://cde.annauniv.edu/data1/images/img_5280.jpg"/>
          </div>
          <div>
          <img src="https://cde.annauniv.edu/data1/images/img_5283.jpg"/>
          </div>
          <div>
          <img src="https://cde.annauniv.edu/data1/images/img_5063.jpg"/>
          </div>
          <div>
          <img src="https://cde.annauniv.edu/data1/images/img_5086.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}