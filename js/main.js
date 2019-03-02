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


    $('.wobble').hover(function () {
        $(this).toggleClass('wobble-hor-bottom');
    });


    // SUBMENU

    $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-angle-down fa-angle-up');
        $(this).parent().next('.submenu').slideToggle();
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

        //toys logos slider

        $('.toys-slider').owlCarousel({
            items: 12,
            dots: false,
            loop: true,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 6
                },
                992: {
                    items: 8
                },
                1340: {
                    items: 12
                }
            }
        });

        // most popular section slider

        $('.most-popular-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1340: {
                    items: 4
                }
            }
        });

        // new products

        $('.new-products-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1340: {
                    items: 4
                }
            }
        });

        // toys category

        $('.toys-category-slider').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        // recomended-products

        $('.recomended-products-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1340: {
                    items: 4
                }
            }
        });


        // category

        $('.category-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            nav: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1340: {
                    items: 4
                }
            }
        });
    }
    ;


// SELECT 2 

    if ($('.custom-select').length > 0) {

        $('.custom-select').select2({
            minimumResultsForSearch: -1,
            dropdownAutoWidth: true,
            width: 'auto'
        });

    }


// SINGLE PRODUCT SECTION

$('.single-product-tabulator').on('click', '.description', function (e) {
         e.preventDefault();
         $('.tab-description').show();
         $('.tab-paymant').hide();
         $('.tab-delivery').hide();
    });
    
$('.single-product-tabulator').on('click', '.paymant', function (e) {
         e.preventDefault();
         $('.tab-description').hide();
         $('.tab-delivery').hide();
         $('.tab-paymant').show();
    });
    
$('.single-product-tabulator').on('click', '.delivery', function (e) {
         e.preventDefault();
         $('.tab-description').hide();
         $('.tab-paymant').hide();
         $('.tab-delivery').show();
    });




});//end document.ready


