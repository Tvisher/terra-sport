// Проверка поддержки webP
import * as baseFunction from './modules/functions.js';
baseFunction.testWebP();


import ModalVideo from 'modal-video';
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

const firstScreenSlider = new Swiper(".main__slider", {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index) {
            return `<span class="swiper-pagination-bullet main__slider-bullet">${index + 1}</span>`
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



new ModalVideo('.js-modal-btn', {
    // theme: 'dark'
});
