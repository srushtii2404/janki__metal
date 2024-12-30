<<<<<<< HEAD
import React from 'react'

const Aboutus = () => {
  return (
    <div>Aboutus</div>
  )
}

export default Aboutus
=======
import React, { useState } from 'react';
import { TbTargetArrow } from "react-icons/tb";
import { GiBoltEye, GiProgression } from "react-icons/gi";
import { AiFillSketchCircle } from "react-icons/ai";

const Aboutus = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const years = [2019, 2020, 2021, 2022, 2023];

  // Dynamic carousel data
  const carouselData = [
    { imgSrc: "/images/slide1.jpg", title: "Discover Right Steel", subtitle: "Stainless Steel" },
    { imgSrc: "/images/banner3.jpg", title: "Discover Right Steel", subtitle: "Stainless Steel" },
    { imgSrc: "/images/banner4.webp", title: "Discover Right Steel", subtitle: "Stainless Steel" },
    { imgSrc: "/images/banner5.jpg", title: "Discover Right Steel", subtitle: "Stainless Steel" },
  ];

  // Dynamic Leadership Data
  const leadershipData = [
    { name: "Mr Vinaye Jain", position: "CEO", imgSrc: "/images/leader1.jpg" },
    { name: "Mr Raman Poddar", position: "CTO", imgSrc: "/images/leader2.jpg" },
    { name: "Mr Jivansh Jain", position: "COO", imgSrc: "/images/leader3.jpg" },
  ];

  const calculateLineWidth = () => {
    if (!selectedYear) return "0%";
    const index = years.indexOf(selectedYear);
    return `${(index / (years.length - 1)) * 100}%`;
  };

  const handleYearClick = (year) => {
    setSelectedYear(selectedYear === year ? null : year); // Toggle content visibility
  };

  return (
    <div>
      {/* Carousel Section */}
      <section className="hero-section">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselData.map((slide, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="img-container-box">
                  <div className="img-inner-box">
                    <img src={slide.imgSrc} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  </div>
                </div>
                <div className="slider-content">
                  <h1 className="caresoule-title"><span className="break-word">{slide.title}</span></h1>
                  <p className="caresoule-content">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="control-txt prev-view">Previous</span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="control-txt prev-next">Next</span> <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <div className="mission-section justify-content-center p-5">
        <div className="row mission-item container">
          <div className="col-md-3 d-flex gap-3 align-items-center mission-main">
            <span className="mission-icon"><TbTargetArrow /></span>
            <span className="mission-title">Our Mission</span>
          </div>
          <div className="col-md-9">
            <p className="mission-text">
              We always look for new trends in our industry, and we aim to facilitate you with a solution that is not “trendy” but one, which can fit your requirement.
            </p>
          </div>
        </div>
        <div className="row mission-item container">
          <div className="col-md-3 d-flex gap-3 align-items-center mission-main">
            <span className="mission-icon"><GiBoltEye /></span>
            <span className="mission-title">Our Vision</span>
          </div>
          <div className="col-md-9">
            <p className="mission-text">
              We always look for new trends in our industry, and we aim to facilitate you with a solution that is not “trendy” but one, which can fit your requirement.
            </p>
          </div>
        </div>
        <div className="row mission-item container">
          <div className="col-md-3 d-flex gap-3 align-items-center mission-main">
            <span className="mission-icon"><AiFillSketchCircle /></span>
            <span className="mission-title">Our Values</span>
          </div>
          <div className="col-md-9">
            <p className="mission-text">
              We always look for new trends in our industry, and we aim to facilitate you with a solution that is not “trendy” but one, which can fit your requirement.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section row">
        <div className="timeline-details">
          <h3>Janki Metal's Evolution</h3>
          <p>This timeline highlights our company’s progress in the steel and metal industry, from our humble beginnings to becoming a leader in the field.</p>
        </div>
        <div className="timeline">
          {years.map(year => (
            <div className="timeline-item" key={year} onClick={() => handleYearClick(year)}>
              <span className="timeline-year"><GiProgression /></span>
              <p className="year-text">{year}</p>
            </div>
          ))}
        </div>

        {/* Dynamic content for selected year */}
        {years.map(year => (
          selectedYear === year && (
            <div className="timeline-content" key={year}>
              <h3>{year} Content</h3>
              <p>This is the content for the year {year}.</p>
            </div>
          )
        ))}
      </div>

      {/* Leadership Section */}
      <div className="row">
        <div className="leadership-section  justify-content-center p-5 bg-light text-center">
          <div className="timeline-details">
            <h3>Our Leadership</h3>
            <p>At Janki Metals, our leadership team combines industry expertise with a commitment to innovation, quality, and sustainability.</p>
          </div>

          <div className="leader-data">
            {leadershipData.map((leader, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={index}>
                <h1>{leader.name}</h1>
                <p>{leader.position}</p>
                <img src={leader.imgSrc} alt={leader.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
>>>>>>> c2f0fa2 (data)
