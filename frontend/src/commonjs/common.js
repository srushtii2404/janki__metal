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
  