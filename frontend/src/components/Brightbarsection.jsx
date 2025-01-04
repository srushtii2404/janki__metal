import React, { useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from "react-icons/fa";
import productdata from "../commonjs/commondata";
import { Link } from "react-router-dom";

const BrightBarssection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true, // Enables center mode
    centerPadding: '20px', // Adjust padding around center slides
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
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          margin:20
        },
      },
    ],
  };
  
  // Add margin between slides using JavaScript
  useEffect(() => {
    const slickSlides = document.querySelectorAll(".slick-slide");

    // Loop through each slide and add margin
    slickSlides.forEach((slide) => {
      slide.style.margin = "0 20px 0 0"; // 20px margin between slides
    });
  }, []);

  return (
    <>
      <section className="bright-bar section-margin">
        <div className="row">
          {/* left part */}
          <div className="col-lg-7">
            <h4 className="ternery-title">
              <span>
                <img src="images/titleimg.png" alt="title img" className="px-1" height={20} width={30} />
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

          {/* right part */}
          <div className="col-lg-5">
            <div className="right-content">
              <h4 className="text-content">We have set the bar for the bars.</h4>
              <Link to="/category" className='primary-btn'>All Categorys<span className='primary-arrow'><FaArrowRight /></span></Link>
              {/* Optional arrow button */}
              {/* <a href="#" className='primary-btn'>All Products <span className='primary-arrow'><FaArrowRight /></span></a> */}
            </div>
          </div>
        </div>

        {/* Carousel section */}
        <div className="row mt-5">
          <div className="col-lg-6 d-xl-block d-lg-block d-md-none d-sm-none d-none">
            <div className="img-container">
              <img src="/images/side3.jpg" alt="product img" />
            </div>
          </div>
          <div className='col-lg-6'>
            {/* Owl Carousel */}
            <div>
              <div className='slider-section'>
                <Slider {...settings}>
                {productdata.map((product) => (
                    <div key={product.id} className="product-card">
                      <h3 className="product-name">{product.prod_title}</h3>
                      <div className="img-container">
                        <img
                          src={product.prodimg}
                          alt={product.alt_data}
                        />
                      </div>
                      <p>{product.description}</p>
                      <a href={product.link} className="readmore-btn my-2 d-flex align-items-center">
                        Read More <span><FaArrowRight /></span>
                      </a>
                    </div>
                  ))}
                                  
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default BrightBarssection;
