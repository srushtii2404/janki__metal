import React, { useState } from "react";

export const Gallerysection = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "images/slide1.jpg",
    "images/slide2.webp",
    "images/slde3.webp",
    "images/slide4.webp",
    "images/meltsteel.jpg",
    "images/banner5.jpg",
  ];

  const openPopup = (index) => {
    setCurrentImage(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const showPrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="section-margin gallery-section">
        <div className="container">
          <h2 className="ternery-title gallery-title mb-4">
            <span>
              <img
                src="images/titleimg.png"
                alt="title img"
                className="px-1"
              />
            </span>
            Photo Gallery
          </h2>
        {/* Photo gallery section */}
        <div className="gallery" style={{ display: "flex", gap: "20px" }}>
          {images.map((image, index) => (
            <div key={index} className="img-container"
              onClick={() => openPopup(index)}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                />
              <div
                className="up-icon"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#ffffff",
                  fontSize: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <i className="fa-regular fa-eye"></i>
              </div>
            </div>
          ))}
        </div>
        </div>
      

        {/* Popup Viewer */}
        {popupVisible && (
          <div
            className="popup"
          >
            <button
              className="close"
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "24px",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <div
              className="controls"
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                width: "90%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <button
                className="prev"
                onClick={showPrevImage}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                className="next"
                onClick={showNextImage}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <img
              src={images[currentImage]}
              alt={`Popup Image ${currentImage + 1}`}
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                borderRadius: "8px",
              }}
            />
          </div>
          
        )}
      </section>
    </>
  );
};
