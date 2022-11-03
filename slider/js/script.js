// Slider

let slideIndex = 1;

const slides = document.querySelectorAll(".offer__slide"),
  prev = document.querySelector(".offer__slider-prev"),
  next = document.querySelector(".offer__slider-next"),
  total = document.querySelector("#total"),
  current = document.querySelector("#current");

let currentSlide;

if (localStorage.getItem("currentSlide")) {
  currentSlide = +localStorage.getItem("currentSlide");
  slideIndex = currentSlide;
} else {
  localStorage.setItem("currentSlide", slideIndex);
}

showSlides(slideIndex);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
} else {
  total.textContent = slides.length;
}

// Нажатие кнопок для переключения
document.addEventListener("keydown", function (event) {
  if (event.code == "Space") {
    plusSlides(1);
  }

  if (event.code == "ArrowRight") {
    plusSlides(1);
  }

  if (event.code == "ArrowLeft") {
    plusSlides(-1);
  }
});

setInterval(() => {
  plusSlides(1);
}, 2000);

// Слайд назад
prev.addEventListener("click", function () {
  plusSlides(-1);
});

// Слайд вперёд
next.addEventListener("click", function () {
  plusSlides(1);
});

// Показ слайдов
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));

  slides[slideIndex - 1].style.display = "block";

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  localStorage.setItem("currentSlide", slideIndex);
}
