/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------
   ---------------------------------- Nucléus Technologies Blog Scripts ----------------------------------
   ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------
*/

$(function () {

    // Basic Intructions and Framework Definitions
    
    window.sr = ScrollReveal({ reset: true })

    sr.reveal('.bl-home-articles .card', { 
        easing: 'ease-in-out'
    })

    $('.btn-load-menu').on('click', function () {
        $('.bl-nav, .bl-prev-nav').addClass('show')
        $(this).fadeOut()
    })

    $('.btn-close-menu').on('click', function () {
        $('.bl-nav, .bl-prev-nav').removeClass('show')
        $('.btn-load-menu').fadeIn()
    })

    $(window).scroll(function () {
        ($(this).scrollTop() > 200) ? $('.btn-load-menu').addClass('sticked') : $('.btn-load-menu').removeClass('sticked')
    })

})