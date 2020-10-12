const headerMenu = document.querySelector('.header-catalog-menu');
const menuButton = document.querySelector('.plus-image');
const firstSlide = document.querySelector('.slider-product-list-page1');
const secondSlide = document.querySelector('.slider-product-list-page2');
const thirdSlide = document.querySelector('.slider-product-list-page3');
const firstSlideButton1 = document.getElementById('first-slide');
const secondSlideButton1 = document.getElementById('second-slide');
const thirdSlideButton1 = document.getElementById('third-slide');
const firstSlideButton2 = document.getElementById('first-slide2');
const secondSlideButton2 = document.getElementById('second-slide2');
const thirdSlideButton2 = document.getElementById('third-slide2');
const firstSlideButton3 = document.getElementById('first-slide3');
const secondSlideButton3 = document.getElementById('second-slide3');
const thirdSlideButton3 = document.getElementById('third-slide3');
const writeUs = document.getElementById('write-us');
const modalWrite = document.querySelector('.modal-write');
const modalMap = document.querySelector('.modal-map');
const map = document.querySelector('.map-pop-up');
const close = document.querySelector('.modal-close');
const closeWriteUs = document.getElementById('close-write-us');

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  headerMenu.classList.toggle('visually-hidden');
});

firstSlideButton1.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

secondSlideButton1.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.remove('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

thirdSlideButton1.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.remove('visually-hidden');
});

firstSlideButton2.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

secondSlideButton2.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.remove('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

thirdSlideButton2.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.remove('visually-hidden');
});

firstSlideButton3.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.remove('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

secondSlideButton3.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.remove('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

thirdSlideButton3.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.remove('visually-hidden');
});

writeUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove('visually-hidden');
});

map.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('visually-hidden');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('visually-hidden');
});

closeWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.add('visually-hidden');
});
