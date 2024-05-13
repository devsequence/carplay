$('.hvr-fade').on('click', function (e) {
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
var galleryTop = new Swiper('.css81 .gallery1-container', {
    navigation: {
        nextEl: '.css81 .gallery1-next',
        prevEl: '.css81 .gallery1-previous',
    },
    loop: true,
    loopedSlides: 7
});
var galleryThumbs = new Swiper('.css81 .gallery1-pagination', {
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 7
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
$('.btn-legacy').on('click',  function (e) {
    if ($(this).data('modal') === 'modal') {
        e.preventDefault();
        var targetID = $(this).attr('href');
        $(targetID).addClass('active');
        $('.modal-back').css({'background-color' : 'rgba(0, 0, 0, 0.5)', 'display' : 'block',});
        $('.modal4-root').addClass('is-active');
        console.log('modal');
    }
});
$('.modal4-close, .modal-back').on('click',  function (e) {
    e.preventDefault();
    $(this).parents('.modal').removeClass('active');
    $('.modal-back').css({'background-color' : 'rgba(0, 0, 0, 0.5)', 'display' : 'none',});
    $('.modal4-root').removeClass('is-active');

});

Fancybox.bind("[fancybox]", {
    // Your custom options
});