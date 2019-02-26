$(document).ready(function () {

    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


    // ANIMATION 

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
        });
    }//end of animation function

    animation();

    $(window).scroll(function () {
        animation();
    });

    // SUBMENU

    $('.navbar-nav').on('click', '.toggler-1', function (e) {
        e.preventDefault();
        $('.toggle-submenu').toggleClass('fa-angle-down fa-angle-up');
        $('.toggle-submenu').parent().next('.submenu').slideToggle();
        $('.search-form').slideUp();
    });

    $('.level-1').on('click', '.toggler-2', function (e) {
        e.preventDefault();
        $('.toggle-submenu-2').toggleClass('fa-angle-double-right fa-angle-double-left');
        $('.toggle-submenu-2').parent().next('.submenu-2').slideToggle();
    });



    // SEARCH 

    $('.search-icon').click(function () {
        $(this).next().slideToggle();
        $('.small-cart').removeClass('active');
        $('.body-overlay').hide(0);
        $('.submenu').slideUp();
        $('.toggle-submenu').removeClass('fa-angle-up').addClass('fa-angle-down');
    });



    // SMALL CART

    $('.cart').click(function () {
        $('.small-cart').addClass('active');
        $('.body-overlay').show(0);
        $('.search-form').slideUp();
        $('.submenu').slideUp();
        $('.toggle-submenu').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('.body-overlay').click(function () {
        $('.small-cart').removeClass('active');
        $('.body-overlay').hide();
    });


    // OWL CAROUSEL

    if ($('.owl-carousel').length > 0) {
        $('.lead-slider').owlCarousel({
            items: 1,
            dots: true,
            loop: true
        });
        
        $('.toys-slider').owlCarousel({
           items: 12,
           dots: false,
           loop: true,
           responsive: {
                0:{
                    items: 2
                },
                576:{
                    items: 6
                },
                992:{
                    items: 8
                },
                1340:{
                    items: 12
                }
            }
        });
        
        $('.most-popular-slider').owlCarousel({
           items: 4,
           dots: false,
           loop: true,
           autoplay: true,
           responsive: {
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                992:{
                    items: 3
                },
                1140:{
                    items: 4
                }
            }
        });
    };

});//end document.ready


