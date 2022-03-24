$(function() {
    $('.burger__menu').click(function() {
        $('.nav').toggleClass('active');
        $('.burger__menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    })

});