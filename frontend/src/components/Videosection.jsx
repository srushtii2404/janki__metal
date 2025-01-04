import React, { useEffect } from 'react';

export const Videosection = () => {
  useEffect(() => {
    // Video popup logic
    const videoLinks = document.querySelectorAll("#play-video");

    videoLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        // Check if a popup already exists, remove it if necessary
        const existingPopup = document.querySelector(".video-popup-container");
        if (existingPopup) {
          existingPopup.remove();
        }

        // Create an iframe dynamically
        const iframe = document.createElement("iframe");
        iframe.src = link.href; // Use the link's href for the iframe source
        iframe.style.width = "80%";
        iframe.style.height = "80%";
        iframe.style.border = "none";
        iframe.allow = "autoplay; fullscreen";

        // Create a popup container
        const popup = document.createElement("div");
        popup.className = "video-popup-container"; // Add a class to identify the popup
        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "1000";

        // Create a close button
        const closeButton = document.createElement("div");
        closeButton.textContent = "✖";
        closeButton.style.position = "absolute";
        closeButton.style.top = "20px";
        closeButton.style.right = "20px";
        closeButton.style.fontSize = "24px";
        closeButton.style.color = "#fff";
        closeButton.style.cursor = "pointer";
        closeButton.style.zIndex = "1001";

        // Close popup on button click
        closeButton.addEventListener("click", () => {
          popup.remove();
        });

        // Append iframe and close button to the popup
        popup.appendChild(iframe);
        popup.appendChild(closeButton);

        // Append popup to the body
        document.body.appendChild(popup);
      });
    });
  }, []);

  return (
    <section className="mt-3 video-section">
      <div className="container-fluid p-0">
        <div className="video-section-container">
          <div className="video-header px-3">
            <div className="heading-section">
              <h4 className="heading">JANKI METAL STRIPS LTD</h4>
            </div>
          </div>
          <div className="button-section">
            <div className="line"></div>
            <div className="play-icon">
              <a
                id="play-video"
                className="video-play-button"
                href="https://www.youtube.com/embed/hXAdt5w3sPQ"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
