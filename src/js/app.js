// Проверка поддержки webP
import * as baseFunction from './modules/functions.js';
baseFunction.testWebP();


import ModalVideo from 'modal-video';
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

const firstScreenSlider = new Swiper(".main__slider", {
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



new ModalVideo('.js-modal-btn', {
    // theme: 'dark'
});
