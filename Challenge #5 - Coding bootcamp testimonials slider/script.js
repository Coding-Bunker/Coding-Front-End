let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let firstSlide = document.querySelector(".first-slide");
let secondSlide = document.querySelector(".second-slide");

prev.addEventListener("click", function() {
  if (firstSlide.classList.contains("active")) {
    firstSlide.classList.remove("active");
    secondSlide.classList.add("active");
  } else {
    firstSlide.classList.add("active");
    secondSlide.classList.remove("active");
  }
});

next.addEventListener("click", function() {
  if (firstSlide.classList.contains("active")) {
    firstSlide.classList.remove("active");
    secondSlide.classList.add("active");
  } else {
    firstSlide.classList.add("active");
    secondSlide.classList.remove("active");
  }
});