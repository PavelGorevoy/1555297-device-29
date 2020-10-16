const headerMenu = document.querySelector('.header-catalog-menu');
const menuButton = document.querySelector('.plus-image');
const firstSlide = document.querySelector('.slider-product-list-page1');
const secondSlide = document.querySelector('.slider-product-list-page2');
const thirdSlide = document.querySelector('.slider-product-list-page3');
const firstSlideButton = document.getElementById('first-slide');
const secondSlideButton = document.getElementById('second-slide');
const thirdSlideButton = document.getElementById('third-slide');
const writeUs = document.getElementById('write-us');
const modalWrite = document.querySelector('.modal-write');
const modalName = document.querySelector('.name-form');
const modalEmail = document.querySelector('.email-form');
const writeForm = document.querySelector('.write-form');
const modalMap = document.querySelector('.modal-map');
const map = document.querySelector('.map-pop-up');
const close = document.querySelector('.modal-close');
const closeWriteUs = document.getElementById('close-write-us');
const firstSlideSecond = document.querySelector('.slider-services-item-first');
const secondSlideSecond = document.querySelector('.slider-services-item-second');
const thirdSlideSecond = document.querySelector('.slider-services-item-third');
const firstSlideButtonSecond = document.getElementById('slider-button-first');
const secondSlideButtonSecond = document.getElementById('slider-button-second');
const thirdSlideButtonSecond = document.getElementById('slider-button-third');


let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

menuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  headerMenu.classList.toggle('visually-hidden');
});

firstSlideButton.addEventListener('click', function (evt) {
  firstSlide.classList.remove('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

secondSlideButton.addEventListener('click', function (evt) {
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.remove('visually-hidden');
  thirdSlide.classList.add('visually-hidden');
});

thirdSlideButton.addEventListener('click', function (evt) {
  firstSlide.classList.add('visually-hidden');
  secondSlide.classList.add('visually-hidden');
  thirdSlide.classList.remove('visually-hidden');
});

firstSlideButtonSecond.addEventListener('click', function (evt) {
  firstSlideSecond.classList.remove('visually-hidden');
  secondSlideSecond.classList.add('visually-hidden');
  thirdSlideSecond.classList.add('visually-hidden');
  firstSlideButtonSecond.classList.add('slider-button-first');
  firstSlideButtonSecond.classList.remove('slider-button-1');
  firstSlideButtonSecond.classList.remove('slider-services-button');
  secondSlideButtonSecond.classList.add('slider-button-2');
  secondSlideButtonSecond.classList.add('slider-services-button');
  secondSlideButtonSecond.classList.remove('slider-button-second');
  thirdSlideButtonSecond.classList.add('slider-button-3');
  thirdSlideButtonSecond.classList.add('slider-services-button');
  thirdSlideButtonSecond.classList.remove('slider-button-third');
});

secondSlideButtonSecond.addEventListener('click', function (evt) {
  firstSlideSecond.classList.add('visually-hidden');
  secondSlideSecond.classList.remove('visually-hidden');
  thirdSlideSecond.classList.add('visually-hidden');
  firstSlideButtonSecond.classList.remove('slider-button-first');
  firstSlideButtonSecond.classList.add('slider-button-1');
  firstSlideButtonSecond.classList.add('slider-services-button');
  secondSlideButtonSecond.classList.remove('slider-button-2');
  secondSlideButtonSecond.classList.remove('slider-services-button');
  secondSlideButtonSecond.classList.add('slider-button-second');
  thirdSlideButtonSecond.classList.add('slider-button-3');
  thirdSlideButtonSecond.classList.add('slider-services-button');
  thirdSlideButtonSecond.classList.remove('slider-button-third');
});

thirdSlideButtonSecond.addEventListener('click', function (evt) {
  firstSlideSecond.classList.add('visually-hidden');
  secondSlideSecond.classList.add('visually-hidden');
  thirdSlideSecond.classList.remove('visually-hidden');
  firstSlideButtonSecond.classList.remove('slider-button-first');
  firstSlideButtonSecond.classList.add('slider-button-1');
  firstSlideButtonSecond.classList.add('slider-services-button');
  secondSlideButtonSecond.classList.add('slider-button-2');
  secondSlideButtonSecond.classList.add('slider-services-button');
  secondSlideButtonSecond.classList.remove('slider-button-second');
  thirdSlideButtonSecond.classList.remove('slider-button-3');
  thirdSlideButtonSecond.classList.remove('slider-services-button');
  thirdSlideButtonSecond.classList.add('slider-button-third');
});

writeUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove('visually-hidden');

  if (storage) {
    modalName.value = storage;
    modalEmail.focus();
  } else {
    modalName.focus();
  }
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
  modalName.classList.remove("modal-error");
  modalEmail.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!modalName.value) {
    evt.preventDefault();
    modalName.classList.add("modal-error");
  }
});

writeForm.addEventListener("submit", function (evt) {
  if (!modalEmail.value) {
    evt.preventDefault();
    modalEmail.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modalWrite.classList.add("visually-hidden");
    modalMap.classList.add("visually-hidden");
    headerMenu.classList.add("visually-hidden");
  }
});
