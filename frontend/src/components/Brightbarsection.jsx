import React from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import productdata from "../commonjs/commondata";
import { Link } from "react-router-dom";
// Ensure these styles are imported for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BrightBarssection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bright-bar section-margin">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-7">
            <h4 className="secondery-title">
              <span>
                <img
                  src="/images/titleimg.png"
                  alt="title img"
                  className="px-1"
                  height={20}
                  width={30}
                />
              </span>
              Ready to perform products
            </h4>
            <div className="main-text-box">
              {/* <video autoPlay muted loop>
                <source src="/video/bg3.mp4" type="video/mp4" />
                <source src="/video/bg3.webm" type="video/webm" />
                <source src="/video/bg3.ogv" type="video/ogg" />
                Your browser does not support the video tag.
              </video> */}
              <h2 className="main-title">A Showcase of Our Products</h2>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5">
            <div className="right-content">
              <h4 className="text-content">We have set the bar for the bars.</h4>
              <Link to="/category" className="primary-btn">
                All Categories <span className="primary-arrow"><FaArrowRight /></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="row mt-5">
          <div className="col-lg-6 d-xl-block d-lg-block d-md-none d-sm-none d-none">
            <div className="img-container">
              <img src="/images/side3.jpg" alt="product img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="slider-section">
              <Slider {...settings}>
                {productdata.map((product) => (
                  <div key={product.id} className="product-card">
                    <h3 className="product-name">{product.prod_title}</h3>
                    <div className="img-container">
                      <img src={product.prodimg} alt={product.alt_data} />
                    </div>
                    <p>{product.description}</p>
                    <a
                      href={product.link}
                      className="readmore-btn my-2 d-flex align-items-center"
                    >
                      Read More <span><FaArrowRight /></span>
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrightBarssection;
