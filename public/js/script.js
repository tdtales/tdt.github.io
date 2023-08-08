$(document).ready(function(){

    $('.mobile-nav-btn').click(() => {
        navToggle()    
    })
    
    if ($(window).width() < 768) {
        $(document).click((e) => {
            if (!document.querySelector('header').contains(e.target)) {
                $('nav.mobile').slideUp(300)
                $('.nav-show').show()
                $('.nav-close').hide()
            }
        })
    }

    function navToggle() {
        if ($('nav.mobile').is(':hidden')) {
            $('nav.mobile').slideDown(300)
            $('.nav-show').hide()
            $('.nav-close').show()
        }
        else {
            $('nav.mobile').slideUp(300)
            $('.nav-show').show()
            $('.nav-close').hide()
        }
    }
})