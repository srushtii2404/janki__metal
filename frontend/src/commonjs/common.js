// Function to split the text and animate each character
function animateText() {
  document.querySelectorAll(".hero-section .slider-content .caresoule-title,.hero-section .slider-content .caresoule-content").forEach(function (element) {
    const text = element.textContent;
    const splitText = Array.from(text).map(function (char) {
      return `<span>${char}</span>`;
    }).join('');
    element.innerHTML = splitText; // Apply the split text with individual <span> for each character

    // Reset animation for each character
    const spans = element.querySelectorAll('span');
    spans.forEach(span => {
      span.style.animation = 'none';
    });

    setTimeout(() => {
      spans.forEach((span, index) => {
        span.style.animation = `slideInLeftChar 1s ease forwards ${index * 0.1}s`;
      });
    }, 50);
  });
}

// Function to reset and animate text
function resetAndAnimateText() {
  const sliderContent = document.querySelectorAll(".slider-content");
  sliderContent.forEach(content => {
    content.style.opacity = "0"; // Hide text
  });

  setTimeout(() => {
    animateText(); // Trigger animation
    sliderContent.forEach(content => {
      content.style.opacity = "1"; // Make text visible
    });
  }, 500); // Adjust timing based on desired delay
}

// Trigger text animation when the slide changes
//   carousel.addEventListener('changed.owl.carousel', function () {
//     resetAndAnimateText(); // Trigger animation on slide change
//   });

// Trigger text animation when user clicks the dots
document.querySelectorAll(".owl-dot").forEach(dot => {
  dot.addEventListener('click', function () {
    resetAndAnimateText(); // Trigger animation when a dot is clicked
  });
});

// Trigger text animation when user clicks navigation buttons
document.querySelectorAll(".owl-prev, .owl-next").forEach(button => {
  button.addEventListener('click', function () {
    resetAndAnimateText(); // Trigger animation when navigation buttons are clicked
  });
});

// Trigger animation on first slide load
setTimeout(function () {
  animateText(); // Trigger animation after initial delay
  document.querySelectorAll(".slider-content").forEach(content => {
    content.style.opacity = "1"; // Ensure initial visibility
  });
}, 1000); // Adjust initial delay if needed




/*video popup */
document.addEventListener("DOMContentLoaded", function () {
  // Select all anchor tags within the .video-gallery container
  const videoGallery = document.querySelector(".video-section");
  const links = videoGallery.querySelectorAll("#play-video");

  // Add click event listeners to each link
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Create an iframe dynamically
      const iframe = document.createElement("iframe");
      iframe.src = this.href;
      iframe.style.width = "80%";
      iframe.style.height = "80%";
      iframe.style.border = "none";

      // Create a popup container
      const popup = document.createElement("div");
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

      // Add a click event to close the popup
      closeButton.addEventListener("click", function () {
        popup.remove();
      });

      // Append the iframe and close button to the popup
      popup.appendChild(iframe);
      popup.appendChild(closeButton);

      // Append the popup to the body
      document.body.appendChild(popup);
    });
  });
});
