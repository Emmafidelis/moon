// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

// function showSlide() {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });

//   slides[currentSlide].classList.add("active");
// }

// function nextSlide() {
//   currentSlide++;
//   if (currentSlide === slides.length) {
//     currentSlide = 0;
//   }
//   showSlide();
// }

// setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentItemIndex = 0;
  function showCurrentItem() {
    carouselItems.forEach((item, index) => {
      item.classList.toggle("active", index === currentItemIndex);
    });
  }
  function nextItem() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    showCurrentItem();
  }
  // Change slide every 5 seconds
  setInterval(nextItem, 5000);
});
