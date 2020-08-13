$(document).ready(() => {
    $('#phone').mouseenter(function () {
        $('#phone-hover').css({"display": "flex"})
    })
    $('.search-block__search a:first-child button').click(function () {
        $('.search-block__search-hover').css({"display": "flex"})
    })
    $('.search-block__search-hover span').click(function () {
        $('.search-block__search-hover').css({"display": "none"})
    })
    $('.categories-block div:first-child').click(function () {
        $('#hot').toggleClass("toggle-click");

    })
    $('.categories-block div:nth-child(2)').click(function () {
        $('#cold').toggleClass("toggle-click");
    })
    $('#close-form').click(function () {
        $('#phone-hover').css({"display": "none"})
    })
    $('.header_mobile img').click(function () {
        $('#header').toggleClass('active');
        $('#nav').toggleClass('active_nav');
    })
})
