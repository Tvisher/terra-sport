'use strict';

import * as baseFunction from './modules/functions.js';
import ModalVideo from 'modal-video';
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// Проверка поддержки webP
baseFunction.testWebP();

//слайдер на главной в шапке
const firstScreenSlider = new Swiper('.main__slider', {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    speed: 900,
    loop: true,
    autoplay: {
        delay: 4100,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index) {
            return `<span class="swiper-pagination-bullet main__slider-bullet">${index + 1}</span>`;
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

//модалки с видео в слайдере на главной  
new ModalVideo('.js-modal-btn', { theme: 'dark' });

//слайдер расписания
// const sheduleSlider = new Swiper('.shedule__slider', {
//     modules: [Navigation],
//     speed: 800,
//     freeMode: true,
//     slideClass: 'shedule__slider-slide',
//     wrapperClass: 'shedule__slider-wrapper',
//     slidesPerView: 5,
//     centeredSlides: true,
//     grabCursor: true,
//     spaceBetween: 6,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });