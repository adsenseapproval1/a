// Scroll-based animations for fadeIn
$(document).ready(function () {
    // Hero section fade-in effect
    $('#hero').addClass('fadeIn');
    
    // Scroll animation
    $(window).scroll(function () {
        $('.fadeIn').each(function () {
            var scroll = $(window).scrollTop();
            var offset = $(this).offset().top;

            if (scroll + $(window).height() > offset) {
                $(this).addClass('fadeIn');
            }
        });
    });
});
