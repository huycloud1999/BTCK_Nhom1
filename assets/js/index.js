const carousel = document.querySelector('.carousel');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  clearInterval(intervalId);
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  setCarouselInterval();
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  setCarouselInterval();
});

carousel.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = x - startX;
  carousel.scrollLeft = scrollLeft - walk;
});

let intervalId;

function setCarouselInterval() {
  intervalId = setInterval(() => {
    carousel.scrollLeft += carousel.offsetWidth;
  }, 5000);
}

setCarouselInterval();
