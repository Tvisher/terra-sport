'use strict';
import * as baseFunction from './modules/functions.js';
import './vendors/vendors.js';
import ModalVideo from 'modal-video';
import Swiper, {
    Navigation,
    Pagination,
    EffectFade,
    Autoplay,
    Thumbs,
    Mousewheel
} from 'swiper';

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

const programsSectionSlider = new Swiper('.programs-section__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'programs-section__slide',
    wrapperClass: 'programs-section__slider-wrapper',
    speed: 900,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.section__slider-button-next',
        prevEl: '.section__slider-button-prev',
    },
    breakpoints: {
        560: {
            spaceBetween: 30,
        }
    }
});

const trainersSectionSlider = new Swiper('.trainers-section__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'trainers-section__slide',
    wrapperClass: 'trainers-section__slider-wrapper',
    speed: 900,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.section__slider-button-next',
        prevEl: '.section__slider-button-prev',
    },
    breakpoints: {
        560: {
            spaceBetween: 30,
        }
    }
});

const photoGalerySlider = new Swiper('.photo-galery__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'photo-galery__slide',
    wrapperClass: 'photo-galery__wrapper',
    speed: 900,
    slidesPerView: 1,
    navigation: {
        nextEl: '.section__slider-button-next.galery-arrows',
        prevEl: '.section__slider-button-prev.galery-arrows',
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        440: {
            slidesPerView: 2,
        }
    }
});

const subscriptionsSlider = new Swiper('.subscriptions__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'subscriptions__slide',
    wrapperClass: 'subscriptions__slider-wrapper',
    speed: 900,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.section__slider-button-next.subscriptions-arrows',
        prevEl: '.section__slider-button-prev.subscriptions-arrows',
    },
    breakpoints: {
        560: {
            spaceBetween: 30,
        }
    }
});

const reviewsSectionSlider = new Swiper('.reviews-section__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'reviews-section__slide',
    wrapperClass: 'reviews-section__slider-wrapper',
    speed: 900,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.section__slider-button-next.reviews-section-btns',
        prevEl: '.section__slider-button-prev.reviews-section-btns',
    },
    breakpoints: {
        576: {
            spaceBetween: 30,
        },
    }
});

const instagramGalerySlider = new Swiper('.instagram-galery__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    slideClass: 'instagram-galery__slide',
    wrapperClass: 'instagram-galery__wrapper',
    speed: 900,
    slidesPerView: 1,
    navigation: {
        nextEl: '.section__slider-button-next.instagram-arrows',
        prevEl: '.section__slider-button-prev.instagram-arrows',
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
    }
});

const swiperGalery = new Swiper(".galery-section__slider-thumbs", {
    modules: [Navigation, Thumbs, Mousewheel],
    spaceBetween: 5,
    slidesPerView: 2,
    speed: 400,
    watchSlidesProgress: true,
    direction: 'horizontal',
    mousewheel: {
        enabled: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            direction: 'vertical',
            slidesPerView: 3,

        },
        576: {
            direction: 'horizontal',
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
});

const swiperGaleryThumbs = new Swiper(".galery-section__slider", {
    modules: [Navigation, Thumbs, EffectFade],
    allowTouchMove: false,
    speed: 900,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: ".swiper-button-next-galery-section__slider",
        prevEl: ".swiper-button-prev-galery-section__slider",
    },
    thumbs: {
        swiper: swiperGalery,
    },

});

const promotionsSectionSlider = new Swiper('.promotions-section__slider', {
    modules: [Navigation],
    spaceBetween: 15,
    speed: 900,
    slidesPerView: 1,
    navigation: {
        nextEl: '.promotions-section__slider-button-next',
        prevEl: '.promotions-section__slider-button-prev',
    },
    breakpoints: {
        980: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        }
    }
});

OverlayScrollbars(document.querySelectorAll(".post__content"), {});
OverlayScrollbars(document.querySelector("body"), {});


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
        // событие при выборе даты (сюда можно повешать get запрос )
        onSelect: function (dateText) {
            let datapickerValue = $(this).parent().find(".shedule__datepicker-value");
            datapickerValue.text(dateText);
        }
    });
});


// Принцип работы выпадающих списков секции расписания
$("body").click(function (event) {
    let target = event.target;
    if (target.closest('.select__name')) {
        let openedContentBlock = $('.select__content.show');
        let showBlockTitle = $('.select__name.show');
        //Если есть открытий блок, закрываем
        if (showBlockTitle && openedContentBlock && !target.classList.contains('show')) {
            openedContentBlock.removeClass('show');
            showBlockTitle.removeClass('show');
            openedContentBlock.slideToggle(300);
        }
        // Окрываем таргетный блок
        $(target).toggleClass('show');
        let slideContent = $(target).parent().find('.select__content');
        slideContent.slideToggle(300);
        slideContent.toggleClass('show');
    }
});


//Табы на странице личного кабинета
function tabsSwitch(e) {
    const target = e.target;
    if (target.hasAttribute('data-tabs-switch')) {
        e.preventDefault();
        const activeTabsBtn = document.querySelector('.active[data-tabs-switch]');
        activeTabsBtn.classList.remove('active');
        target.classList.add('active');
        const tabId = target.getAttribute('href');
        const showingTab = document.querySelector('[data-tabs-content].show');
        showingTab && showingTab.classList.remove('show');
        document.querySelector(`${tabId}`).classList.add('show');
    }
}
document.body.addEventListener('click', tabsSwitch);



//Анимация инпутов с placeholder выезжающим за пределы поля инпута
const stylinginputs = document.querySelectorAll('[data-focus-item]');
stylinginputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        const input = e.target;
        const inputpParent = e.target.parentNode;
        const transformtext = inputpParent.querySelector('.transform-text');
        transformtext.classList.add('fixed');

        input.addEventListener('blur', (e) => {
            const inputValue = e.target.value.trim();
            if (inputValue.length === 0) {
                transformtext.classList.remove('fixed');
            }
        }, { once: true });
    });
});



// Принцип работы открытия и закрытия мобальных окон регистрации и авторизации
document.body.addEventListener("click", (e) => {
    const targetElem = e.target;
    if (targetElem.closest('[data-modal-open]')) {
        e.preventDefault();
        let openModal = document.querySelector('.modal.show');
        openModal && openModal.classList.remove('show');

        const loginBtn = targetElem.closest('[data-modal-open]');
        const modalId = loginBtn.getAttribute('data-modal-open');
        const openedModal = document.querySelector(`#${modalId}`);
        openedModal.classList.add('show');
        document.body.style.overflow = 'hidden';

        openedModal.addEventListener("click", (e) => {
            const modalTarget = e.target;
            if (!modalTarget.closest('.modal__content') || modalTarget.closest('.modal__close')) {
                openedModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});


// Маска для инпутов с номером телефона
const phoneInputs = document.querySelectorAll('input[type=tel]');
phoneInputs.forEach(input => {
    $(input).mask("+7 (999) 999-99-99");
});
