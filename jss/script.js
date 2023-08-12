const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("#img-size");
let currentImage = 0;
function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[index].style.display = "block";
}
function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}
setInterval(nextImage, 3000); // Change image every 3 seconds
