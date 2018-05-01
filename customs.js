$(document).ready(function(){

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

});