const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", () => {
  counter++;
  cursol();
});
prevBtn.addEventListener("click", () => {
  counter--;
  cursol();
});

function cursol() {
  slides.forEach((slide) => {
    if (counter > slides.length - 1) {
      counter = 0;
    } else if (counter < 0) {
      counter = slides.length - 1;
    }

    

    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    if (counter < slides.length) {
      nextBtn.style.display = "block";
    } else {
      prevBtn.style.display = "block";
    }

    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
