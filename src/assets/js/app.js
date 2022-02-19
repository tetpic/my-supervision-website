"use strict"
// import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const projects = new Swiper('.done-projects-swiper', {
    
    slidesPerView: 'auto',
    spaceBetween: 5,
    mousewheel: true,
    freeMode: true,
  
    
    
  });
// import Swiper from 'swiper/bundle';
// console.log('file 1');
const swiper = document.querySelector('.done-projects-swiper').swiper;

// console.log(swiper)

let projectsLeftBtn = document.querySelector('.swiper-left')
let projectsRightBtn = document.querySelector('.swiper-right')

projectsLeftBtn.addEventListener('click', function() {
    console.log('pushed-left')
    swiper.slidePrev();
})

projectsRightBtn.addEventListener('click', function() {

    console.log('pushed-right')
    swiper.slideNext();
})