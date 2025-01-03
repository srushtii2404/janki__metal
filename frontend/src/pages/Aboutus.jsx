import React, { useState, useEffect } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { GiBoltEye, GiProgression } from "react-icons/gi";
import { AiFillSketchCircle } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";


import AOS from 'aos';
import 'aos/dist/aos.css';


// JavaScript to open and close the dialog
// JavaScript to handle dialog open and close
document.querySelectorAll('button[data-dialog]').forEach(button => {
  const dialogId = button.getAttribute('data-dialog'); // Get dialog ID
  const dialog = document.getElementById(dialogId); // Find dialog by ID

  // Open the dialog on button click
  button.addEventListener('click', () => {
    if (dialog) dialog.showModal(); // Open the dialog
  });

  // Close the dialog when close button is clicked
  dialog?.querySelector('.closeDialog').addEventListener('click', () => {
    dialog.close(); // Close the dialog
  });
});




const Aboutus = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const [expandedCard, setExpandedCard] = useState(null);
  const years = [2019, 2020, 2021, 2022, 2023];

  

  const calculateLineWidth = (year) => {
    const index = years.indexOf(year);
    const width = `${(index / (years.length - 1)) * 100}%`;
    console.log("Calculated Width for Year", year, ":", width); // Debugging line
    return width;
  };


  const carouselData = [
    { imgSrc: "https://img.freepik.com/free-photo/factory-worker-protective-uniform-hardhat-operating-industrial-machine-production-line_342744-218.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "https://img.freepik.com/free-photo/portrait-young-worker-hard-hat-large-metalworking-plant_146671-19572.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "https://img.freepik.com/premium-photo/rear-view-two-young-men-uniform-discussing-quality-new-equipment_274679-37753.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid", title: "Metal Masters", subtitle: "Metallogenuity" },
    { imgSrc: "https://img.freepik.com/free-photo/man-spraying-powder-paint-from-gun-full-shot_23-2149878748.jpg?uid=R105870901&ga=GA1.1.79573969.1735278794&semt=ais_hybrid", title: "Metal Masters", subtitle: "Metallogenuity" },
  ];

  const leadershipData = [
    {
      name: "Mr Vinaye Jain",
      position: "CEO",
      imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
      details: "Vinaye Jain is a visionary leader with over 20 years of experience in the steel and metal industry.",
    },
    {
      name: "Mr Raman Poddar",
      position: "CTO",
      imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
      details: "Raman Poddar specializes in technological innovation and has spearheaded multiple successful projects.",
    },
    {
      name: "Mr Jivansh Jain",
      position: "COO",
      imgSrc: "https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg",
      details: "Jivansh Jain is known for his operational excellence and strategic planning in scaling businesses.",
    },
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

      <section className="vision-mission-values">
        <div className="vision-box">
          <TbTargetArrow size={30} className="m-icon" />
          <h3>Our Vision</h3>
          <p>
            Our vision is to become the global leader in the metal industry, providing
            innovative and sustainable solutions for a better future.
          </p>
        </div>

        <div className="mission-box">
          <GiBoltEye size={30} className="m-icon" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver high-quality metal products, invest in
            technological advancements, and maintain a strong commitment to customer
            satisfaction and ethical practices.
          </p>
        </div>

        <div className="values-box">
          <GiProgression size={30} className="m-icon" />
          <h3>Our Values</h3>
          <p>
            We believe in integrity, quality, innovation, and social responsibility,
            guiding us in every aspect of our operations.
          </p>
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
                <p>This is the content for the year Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor sit sequi et natus, nostrum animi quaerat unde, hic soluta amet ratione similique placeat deserunt maiores quasi minima iure? Dolore reiciendis recusandae consequuntur quis nostrum placeat accusamus cum qui! Sint odit incidunt soluta laborum, sit cupiditate modi! Repellat corporis beatae velit exercitationem quibusdam libero aspernatur esse autem at aliquam itaque commodi repellendus corrupti enim ea quisquam possimus placeat, dolore inventore incidunt veniam eius. Harum recusandae, laboriosam quidem, nobis dolorum, aliquam eius blanditiis doloribus corrupti ut perspiciatis corporis voluptatibus animi nemo? Nihil tenetur soluta amet. Tempore laudantium atque fugit qui nam! {year}.</p>
              </div>
            )
        )}
      </div>




      <section className="leadership-section">
        <h2 data-aos="fade-up">Our Leadership Team</h2>
        <p data-aos="fade-up">Meet the dynamic leaders who drive our success and vision.</p>
        <div className="leadership-cards">
          {leadershipData.map((leader, index) => (
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



      <section className="contributors-section">
  <h2 data-aos='fade-up'>Our Group Of Companies</h2>
  <p data-aos='fade-up'>Meet the talented individuals who contribute to our success and growth.</p>
  <div className="row d-flex justify-content-around text-center">
    <div className="col-lg-3">
      <button data-dialog="dialogOne">Logo</button>
      <dialog id="dialogOne">
        <button className="closeDialog">&times;</button>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      </dialog>
    </div>
    <div className="col-lg-3">hello</div>
    <div className="col-lg-3">hello</div>
    <div className="col-lg-3">hello</div>
  </div>
</section>














    </div>
  );
};

export default Aboutus;
