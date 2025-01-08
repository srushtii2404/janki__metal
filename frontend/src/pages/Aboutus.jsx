import React, { useState, useEffect } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { GiBoltEye, GiProgression } from "react-icons/gi";
import { AiFillSketchCircle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const years = [2019, 2020, 2021, 2022, 2023];

const calculateLineWidth = (year) => {
  const index = years.indexOf(year);
  const width = `${(index / (years.length - 1)) * 100}%`;
  console.log("Calculated Width for Year", year, ":", width); // Debugging line
  return width;
};


  const carouselData = [
    { imgSrc: "/images/slide1.jpg", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "/images/banner3.jpg", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "/images/banner4.webp", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "/images/banner5.jpg", title: "Metal Masters", subtitle: "Metallogenuity" },
  ];

  const leadershipData = [
    { name: "Mr Vinaye Jain", position: "CEO", imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" },
    { name: "Mr Raman Poddar", position: "CTO", imgSrc: "/images/leader2.jpg" },
    { name: "Mr Jivansh Jain", position: "COO", imgSrc: "/images/leader3.jpg" },
  ];

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselData.map((slide, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="img-container-box">
                  <div className="img-inner-box">
                    <img src={slide.imgSrc} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  </div>
                </div>
                <div className="slider-content">
                  <h1 className="caresoule-title">
                    <span className="break-word">{slide.title}</span>
                  </h1>
                  <p className="caresoule-content">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="control-txt prev-view">Previous</span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="control-txt prev-next">Next</span>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="timeline-section row">
        <div className="timeline-details">
          <h3>Janki Metal's Evolution</h3>
          <p>This timeline highlights our company’s progress in the steel and metal industry, from our humble beginnings to becoming a leader in the field.</p>
        </div>
        <div className="timeline">
          <div className="timeline-line">
            {/* Dynamically calculated width for the progress line */}
            <div className="progress-line" style={{ width: calculateLineWidth(selectedYear) }}></div>
          </div>

          {/* Render Timeline Items */}
          {years.map((year) => (
            <div
              className={`timeline-item ${selectedYear === year ? "active" : ""}`}
              key={year}
              onClick={() => handleYearClick(year)}
            >
              <span className="timeline-year">
                <GiProgression />
              </span>
              <p className="year-text">{year}</p>
            </div>
          ))}
        </div>

        {/* Render the content for the selected year */}
        {years.map(
          (year) =>
            selectedYear === year && (
              <div className="timeline-content" key={year}>
                <h3>{year} Content</h3>
                <p>This is the content for the year {year}.</p>
              </div>
            )
        )}
      </div>


      <section className="leadership-section" data-aos="fade-up">
        <h2>Our Leadership Team</h2>
        <p>Meet the dynamic leaders who drive our success and vision.</p>
        <div className="leadership-cards">
          {leadershipData.map((leader, index) => (
            <div className="leadership-card" key={index}>
              <img src={leader.imgSrc} alt={leader.name} className="leadership-image" />
              <div className="team-content">
              <h3 className="leader-name">{leader.name}</h3>
              <p>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
