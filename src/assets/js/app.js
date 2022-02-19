"use strict"
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// ===========слайдер для проектов ============

const projects = new Swiper('.done-projects-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    freeMode: true,
  });
const projectsSwiper = document.querySelector('.done-projects-swiper').swiper;

let projectsLeftBtn = document.querySelector('.swiper-left')
let projectsRightBtn = document.querySelector('.swiper-right')

projectsLeftBtn.addEventListener('click', function() {
    console.log('pushed-left')
    projectsSwiper.slidePrev();
})

projectsRightBtn.addEventListener('click', function() {

    console.log('pushed-right')
    projectsSwiper.slideNext();
})


// ===============слайдер для менеджеров качества============

const qualityManagers = new Swiper('.quality-swiper', {
    slidesPerView: 1,
})

const managersSwiper = document.querySelector('.quality-swiper').swiper;

let managersButtons = document.querySelector('.quality-buttons')

let managerLftBtn = managersButtons.querySelector('.prev-button')
let managerRightBtn = managersButtons.querySelector('.next-button')

managerLftBtn.addEventListener('click', function() {
    managersSwiper.slidePrev()
})

managerRightBtn.addEventListener('click', function() {
    managersSwiper.slideNext()
})
