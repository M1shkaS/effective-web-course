// Slider

const slides = document.querySelectorAll(".offer__slide");
const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
const total = document.querySelector("#total");
const current = document.querySelector("#current");

let currentSlide;
let slideIndex = 1;
let timeInterval;

if (localStorage.getItem("currentSlide")) {
  currentSlide = +localStorage.getItem("currentSlide");
  slideIndex = currentSlide;
} else {
  localStorage.setItem("currentSlide", slideIndex);
}

showSlides(slideIndex);
autoSlider();
getZero(total, slides.length);

document.addEventListener("keydown", function (event) {
  if (event.code == "Space") {
    toggleSlide(1);
  }

  if (event.code == "ArrowRight") {
    toggleSlide(1);
  }

  if (event.code == "ArrowLeft") {
    toggleSlide(-1);
  }
});

prev.addEventListener("click", function () {
  clearInterval(timeInterval);
  plusSlides(-1);
  autoSlider(total, slides.length);
});

next.addEventListener("click", function () {
  clearInterval(timeInterval);
  plusSlides(1);
  autoSlider();
});

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));

  slides[slideIndex - 1].style.display = "block";

  getZero(current, slideIndex);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  localStorage.setItem("currentSlide", slideIndex);
}

function autoSlider() {
  timeInterval = setInterval(() => {
    plusSlides(1);
  }, 2000);
}

function getZero(elem, numberSlide) {
  if (slides.length < 10) {
    elem.textContent = `0${numberSlide}`;
  } else {
    elem.textContent = numberSlide;
  }
}

function toggleSlide(num) {
  clearInterval(timeInterval);
  plusSlides(num);
  autoSlider();
}
