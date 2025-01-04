import React, { useState, useEffect } from 'react';
import { TbTargetArrow } from "react-icons/tb";
import { GiBoltEye, GiProgression } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { aboutus } from '../commonjs/Data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const openPopup = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);


  const calculateLineWidth = (year) => {
    const years = aboutus.timeline.years;
    const index = years.indexOf(year);
    return `${(index / (years.length - 1)) * 100}%`;
  };

  const contributors = [
    { id: 1, title: "Hello 1", content: "This is detailed information for Hello 1." },
    { id: 2, title: "Hello 2", content: "This is detailed information for Hello 2." },
    { id: 3, title: "Hello 3", content: "This is detailed information for Hello 3." },
    { id: 4, title: "Hello 4", content: "This is detailed information for Hello 4." },
  ];


  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const toggleDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
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
            {aboutus.carouselData.map((slide, index) => (
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


      {/* vision,mission,values */}
      <section className="vision-mission-values">
        <div className="value-details bg-light p-5">
          <h2 data-aos="fade-up">Shaping the Future</h2>
          <p data-aos="fade-up">
            We strive to lead the metal industry with innovation, sustainability, and ethical practices,
            delivering high-quality products while maintaining integrity and responsibility.
          </p>
        </div>

        <div className="vision-mission-values-container">


          <div className="mission-box">
            <TbTargetArrow size={30} className="m-icon" />
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver high-quality metal products, invest in technological advancements, and maintain a strong commitment to customer satisfaction and ethical practices.
            </p>
          </div>

          <div className="vision-box">
            <GiBoltEye size={30} className="m-icon" />
            <h3>Our Vision</h3>
            <p>
              Our vision is to become the global leader in the metal industry, providing innovative and sustainable solutions for a better future.
            </p>
          </div>

          <div className="values-box">
            <GiProgression size={30} className="m-icon" />
            <h3>Our Values</h3>
            <p>
              We believe in integrity, quality, innovation, and social responsibility, guiding us in every aspect of our operations.
            </p>
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <div className="timeline-section row">
        <div className="timeline-details" data-aos="fade-up">
          <h3>Janki Metal's Evolution</h3>
          <p>This timeline highlights our company’s progress in the steel and metal industry, from our humble beginnings to becoming a leader in the field.</p>
        </div>
        <div className="timeline">
          <div className="timeline-line">
            <div className="progress-line" style={{ width: calculateLineWidth(selectedYear) }}></div>
          </div>

          {/* Render Timeline Items */}
          {aboutus.timeline.years.map((year) => (
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
        <div className="timeline-content">
          <h3>{selectedYear} Content</h3>
          <p>{aboutus.timeline.content[selectedYear]}</p>
        </div>
      </div>



      {/* leadership */}
      <section className="leadership-section">
        <h2 data-aos="fade-up">Our Leadership Team</h2>
        <p data-aos="fade-up">Meet the dynamic leaders who drive our success and vision.</p>
        <div className="leadership-cards">
          {aboutus.leadership.map((leader, index) => (
            <div
              className={`leadership-card ${expandedCard === index ? "expanded" : ""}`}
              key={index}
            >
              <img src={leader.imgSrc} alt={leader.name} className="leadership-image" />
              <h3>{leader.name}</h3>
              <p>{leader.position}</p>
              {expandedCard === index && <p className="details">{leader.details}</p>}
              <button
                className="know-more"
                onClick={() => toggleDetails(index)}
              >
                {expandedCard === index ? "Show Less" : `Know More About ${leader.name}`}
              </button>
            </div>
          ))}
        </div>
      </section>

 
      {/* contributors */}
      <section className="contributors-section">
        <h2 data-aos="fade-up">Our Contributors</h2>
        <p data-aos="fade-up">Meet the talented individuals who contribute to our success and growth.</p>
        <div className="row d-flex justify-content-around text-center">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="col-lg-3 contributor-box"
              onClick={() => openPopup(contributor.content)}
            >
              {contributor.title}
            </div>
          ))}
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <IoCloseOutline className="close-button" onClick={closePopup} size={24} />
            <h3>Contributor Details</h3>
            <p>{popupContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutus;
