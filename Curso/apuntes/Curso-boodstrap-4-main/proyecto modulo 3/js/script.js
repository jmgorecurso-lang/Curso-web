// Tooltips init
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

// Carousel speed control
const carousel = document.querySelector('#heroCarousel');
new bootstrap.Carousel(carousel, {
  interval: 1500,
  ride: 'carousel'
});
