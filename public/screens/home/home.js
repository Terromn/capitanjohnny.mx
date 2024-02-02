window.addEventListener("scroll", () => {
  const scrollableContainer = document.getElementById("scrollable-container");
  if (scrollableContainer) { // Check if the container exists
    const scrollAmount = window.scrollY;
    scrollableContainer.scrollLeft = scrollAmount;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.review-item');
  let currentIndex = 0;

  // Define setRandomBackground function
  function setRandomBackground() {
    const section = document.getElementById('reviews-section');
    const imageNumber = Math.floor(Math.random() * 9) + 1; // Adjusted to include 10
    const imagePath = `/assets/clients_photos/0${imageNumber.toString().padStart(2, '0')}.png`;

    section.style.backgroundImage = `url(${imagePath})`;
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundPosition = 'center';
    section.style.backgroundSize = 'cover';
  }

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
    setRandomBackground(); // Call setRandomBackground here to change on each slide
  }

  const intervalTime = 5000; // 5 seconds
  setInterval(nextSlide, intervalTime);

  updateCarousel(currentIndex); // Initialize carousel
  setRandomBackground(); // Set initial background
});
