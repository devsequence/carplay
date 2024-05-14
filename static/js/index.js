window.creatium = {
    "creatium": true,
    "visit_id": null,
    "screens": "screens-xs-sm-md-lg",
    "animations": [],
    "cookies": {"alert": 0, "message": ""},
    "integrations": [],
    "misc": {"cdn_host": "img2.creatium.app"},
    "allow_cookies": true,
    "site_options": {
        "captcha_signup": false,
        "captcha_orders": false,
        "member_allow_signup": false,
        "member_allow_auth": false
    },
    "member": {"id": 0},

    "device": "other",
    "mini": false,
    "scroll": {"snapping": false}
};
window.cr = window.creatium;
window.plp = window.creatium;
window.error_handler = function (e, fn_id) {
    window.console && console.log && console.log(fn_id);
    window['error_handler_' + fn_id] && eval(window['error_handler_' + fn_id]);
    window.console && console.error && console.error(e.message);
};
cr.api = function (v, cb) { cr.api.queue.push([v, cb]) };
cr.api.queue = [];
cr.layout = {"top":0,"left":0};
creatium.getWindowWidth = function () {
    var windowWidth = window.innerWidth;


    if (window.innerWidth === 980 && !window.MSStream && /iPhone|iPod/.test(navigator.userAgent)) {
        windowWidth = window.outerWidth;
    }

    return windowWidth;
}

creatium.getScreen = function () {
    var _windowWidth = creatium.getWindowWidth();

    var lgWidth = 1200 + cr.layout._left_current;
    var mdWidth = 992 + cr.layout._left_current;
    var smWidth = 768 + cr.layout._left_current;

    if (creatium.screens === 'screens-xs') return 'xs';
    else if (creatium.screens === 'screens-sm') return 'sm';
    else if (creatium.screens === 'screens-md') return 'md';
    else if (creatium.screens === 'screens-lg') return 'lg';
    else if (creatium.screens === 'screens-xs-sm') {
        if (_windowWidth >= smWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'xs';
    } else if (creatium.screens === 'screens-sm-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else return 'sm';
    } else if (creatium.screens === 'screens-sm-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'sm';
    } else if (creatium.screens === 'screens-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'md';
    } else if (creatium.screens === 'screens-xs-sm-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else if (_windowWidth >= smWidth && _windowWidth < mdWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-sm-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= smWidth && _windowWidth < lgWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else return 'xs';
    } else if (creatium.screens === 'screens-sm-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else return 'sm';
    } else if (creatium.screens === 'screens-xs-sm-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else if (_windowWidth >= smWidth && _windowWidth < mdWidth) return 'sm';
        else return 'xs';
    }
}

creatium.isLayoutMobile = function () {
    if (creatium.getScreen() !== 'xs') return false;
    return creatium.getWindowWidth() < 420 + cr.layout.left;
}

cr.layout._left_current = cr.layout.left;
if (cr.layout._left_current) {
    document.body.classList.add('layout-left-active');
}

creatium.layout.mobile = creatium.isLayoutMobile();
if (creatium.layout.mobile) {
    document.body.classList.add('layout-mobile');
}

creatium.screen = creatium.getScreen();
document.body.classList.add('screen-' + creatium.screen);

if (creatium.device) {
    creatium.device_fix = false;
    if (creatium.screen === 'xs' && creatium.device !== 'mobile') creatium.device_fix = true;
    if (creatium.screen === 'sm' && creatium.device !== 'tablet') creatium.device_fix = true;
    if (creatium.screen === 'md' && creatium.device !== 'other') creatium.device_fix = true;
    if (creatium.screen === 'lg' && creatium.device !== 'other') creatium.device_fix = true;
    // if (creatium.device_fix) document.write('<script src="' + creatium.async.js_adaptive_sections + '"></scr'+'ipt>');
}
if (
    creatium.device_fix
    && "xs md lg".indexOf(creatium.screen) < 0
    && creatium._adaptive_sections
    && creatium._adaptive_sections["ulrz33j7aqqr09g6htdf"]
) {
    document.write(creatium._adaptive_sections["ulrz33j7aqqr09g6htdf"]);
    creatium._adaptive_sections["ulrz33j7aqqr09g6htdf"] = null;
}
// screen-lg
// var eventFired = 0;
//
// if ($(window).width() < 768) {
//     $("body").addClass('screen-xs').removeClass('screen-lg');
// }
// else {
//     $("body").addClass('screen-lg').removeClass('screen-xs');
//     eventFired = 1;
// }
// $(window).on('resize', function() {
//     if (!eventFired) {
//         if ($(window).width() < 1200) {
//             $("body").addClass('screen-md').removeClass('screen-lg');
//         }
//         else if ($(window).width() < 992) {
//             $("body").addClass('screen-sm').removeClass('screen-md');
//         }
//         else if ($(window).width() < 768) {
//             $("body").addClass('screen-xs').removeClass('screen-md');
//         } else {
//             $("body").addClass('screen-md').removeClass('screen-xs');
//         }
//     }
// });
$('.hvr-fade').on('click', function (e) {
    e.preventDefault();
    var targetID = $(this).attr('href');
    if($(targetID).length){
        $('.hamburger1-toggle').toggleClass('is-expanded , is-collapsed');
        $('.hamburger1-menu ').toggleClass('is-expanded , is-collapsed').slideToggle();
        var targetOffset = $(targetID).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    }
    return false;
});
$('.css27 .btn-legacy').on('click', function (e) {
    e.preventDefault();
    var targetID = $(this).attr('href');
    if($(targetID).length){
        var targetOffset = $(targetID).offset().top;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    }
    return false;
});
$('.to-top').on('click',  function (e) {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

$(document).on('click', '.spoiler2', function (e) {
    $(this).find('.spoiler2-header').toggleClass('is-expanded , is-collapsed');
    $(this).find('.spoiler2-container').toggleClass('is-expanded , is-collapsed');
    if($(this).find('.spoiler2-container').hasClass('is-expanded')){
        $(this).find('.spoiler2-container').css('display', '');
    }else{
        $(this).find('.spoiler2-container').css('display', 'none');
    }
});
var swiper = new Swiper(".css76 .gallery1-container", {
    loop: true,
    navigation: {
        nextEl: ".css76 .gallery1-previous",
        prevEl: ".css76 .gallery1-next",
    },
});
var swipersRoot = new Swiper(".slider1-container", {
    loop: true,
    navigation: {
        nextEl: ".slider1-next",
        prevEl: ".slider1-previous",
    },
    pagination: {
        el: ".slider1-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="slider1-page ' + className + '">' + (index + 1) + "</div>";

        },
    }
});
var galleryThumbs = new Swiper('.css81 .gallery1-pagination', {
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.css81 .gallery1-container', {
    loop: true,
    navigation: {
        nextEl: '.css81 .gallery1-next',
        prevEl: '.css81 .gallery1-previous',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
// var galleryTop = new Swiper('.css81 .gallery1-container', {
//     navigation: {
//         nextEl: '.css81 .gallery1-next',
//         prevEl: '.css81 .gallery1-previous',
//     },
//     loop: true,
// });
// var galleryThumbs = new Swiper('.css81 .gallery1-pagination', {
//     slidesPerView: 'auto',
//     touchRatio: 0.2,
//     slideToClickedSlide: true,
//     loop: true,
// });
// galleryTop.controller.control = galleryThumbs;
// galleryThumbs.controller.control = galleryTop;
$('a[data-modal="modal"]').on('click',  function (e) {
    e.preventDefault();
    if ($(this).data('modal') === 'modal') {
        var targetID = $(this).attr('href');
        $(targetID).addClass('active');
        $('.modal-back').css({'background-color' : 'rgba(0, 0, 0, 0.5)', 'display' : 'block',});
        $('.modal4-root').addClass('is-active');
    }
});
$('button[data-modal="modal"]').on('click',  function (e) {
    e.preventDefault();
    var targetID = '#modal-form';
    $(targetID).addClass('active');
    $('.modal-back').css({'background-color' : 'rgba(0, 0, 0, 0.5)', 'display' : 'block',});
    $('.modal4-root').addClass('is-active');
});
$('.modal4-close, .modal-back').on('click',  function (e) {
    e.preventDefault();
    $(this).parents('.modal').removeClass('active');
    $('.modal-back').css({'background-color' : 'rgba(0, 0, 0, 0.5)', 'display' : 'none',});
    $('.modal4-root').removeClass('is-active');

});
$('.hamburger1-toggle').on('click',  function (e) {
    $(this).toggleClass('is-expanded , is-collapsed');
    $('.hamburger1-menu ').toggleClass('is-expanded , is-collapsed').slideToggle();
});


Fancybox.bind("[fancybox]", {
    // Your custom options
});