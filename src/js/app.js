'use strict';

import * as baseFunction from './modules/functions.js';

import './vendors/vendors.js';
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


// Календарь на странице Расписание
$(function () {
    // региональные настройки
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(".shedule__datepicker").datepicker({
        // событие при выборе даты
        onSelect: function (dateText) {
            let datapickerValue = $(this).parent().find(".shedule__datepicker-value");
            datapickerValue.text(dateText);
        }
    });
});





$("body").click(function (event) {
    let target = event.target;
    if (target.closest('.select__name')) {
        let openedContentBlock = $('.select__content.show');
        let showBlockTitle = $('.select__name.show');
        if (showBlockTitle && openedContentBlock && !target.classList.contains('show')) {
            openedContentBlock.removeClass('show');
            showBlockTitle.removeClass('show');
            openedContentBlock.slideToggle(300);
        }

        $(target).toggleClass('show');
        let slideContent = $(target).parent().find('.select__content');
        slideContent.slideToggle(300);
        slideContent.toggleClass('show');
    }
});



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