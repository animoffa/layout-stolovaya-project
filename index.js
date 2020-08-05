$(document).ready(() => {
    $('#phone').mouseenter(function() {
        $('#phone-hover').css({"display":"flex"})
        })
    $('.search-block__search a:first-child button').click(function(){
        $('.search-block__search-hover').css({"display":"flex"})
    })
    $('.search-block__search-hover span').click(function(){
        $('.search-block__search-hover').css({"display":"none"})
    })
    $('.categories-block div:first-child').click(function() {
        $('.toggle-click').css({"display":"flex"})
    })
    $('.categories-block div:nth-child(2)').click(function() {
        $('.categories__cold-hover').css({"display":"flex"})
    })
})
