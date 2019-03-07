$(document).ready(function () {

    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // CUSTOM SCROLLBAR
    $(window).on("load", function () {
        $(".content").mCustomScrollbar({
            theme: "dark"
        });
    });
    (jQuery);

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

//
//    $('.wobble').hover(function () {
//        $(this).toggleClass('wobble-hor-bottom');
//    });
//    
    $('.wobble').hover(function () {
        $(this).toggleClass('toy-animate');
    });



    // SUBMENU

    $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-angle-down fa-angle-up');
        $(this).parent().next('.submenu').slideToggle();
        $('.search-form').slideUp();
    });

    $('.toggler-1').hover(function (e) {
        e.preventDefault();
        $('.toggle-submenu').toggleClass('fa-angle-down fa-angle-up');
        $('.toggle-submenu').parent().next('.submenu').slideToggle();
    })

    $('.navbar-nav').on('click', '.toggle-submenu-sm', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-angle-down fa-angle-up');
        $(this).parent().next('.submenu').slideToggle();
        $('.search-form').slideUp();
    });

    $('.level-1').on('click', '.toggler-2', function (e) {
        e.preventDefault();
        $('.toggle-submenu-2').toggleClass('fa-angle-double-right fa-angle-double-left');
        $('.toggle-submenu-2').parent().next('.submenu-2').slideToggle();
        $('.toggle-submenu-2-sm').toggleClass('fa-angle-double-down fa-angle-double-up');
    });

    //fixed contact 

    $('.contact-fixed').on('click', '.contact-fixed-item', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-sm');
    })


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
        $('.products').removeClass('active-filter');
    });

    $('.body-overlay').click(function () {
        $('.small-cart').removeClass('active');
        $('.body-overlay').hide();
        $('.products').removeClass('active-filter');
    });

    // PRODUCT FILTER

    $('.products').on('click', '.toggle-filter', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-angle-right fa-angle-left');
        $('.products').toggleClass('active-filter');
        $('.cart .small-cart').removeClass('active');
        $('.body-overlay').show();
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
                450: {
                    items: 3
                },
                576: {
                    items: 5
                },
                768: {
                    items: 6
                },
                992: {
                    items: 8
                },
                1400: {
                    items: 12
                }
            }
        });

        // most popular section slider

        $('.most-popular-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            margin: 30,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });

        // new products

        $('.new-products-slider').owlCarousel({
            items: 4,
            dots: false,
            loop: true,
            margin: 30,
            nav: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1400: {
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
            margin: 30,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1400: {
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
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1400: {
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
        $('.single-product-tabulator .description').parent().addClass('active');
        $('.single-product-tabulator .delivery, .single-product-tabulator .paymant').parent().removeClass('active');
    });

    $('.single-product-tabulator').on('click', '.paymant', function (e) {
        e.preventDefault();
        $('.tab-description').hide();
        $('.tab-delivery').hide();
        $('.tab-paymant').show();
        $('.single-product-tabulator .paymant').parent().addClass('active');
        $('.single-product-tabulator .description, .single-product-tabulator .delivery').parent().removeClass('active');
    });

    $('.single-product-tabulator').on('click', '.delivery', function (e) {
        e.preventDefault();
        $('.tab-description').hide();
        $('.tab-paymant').hide();
        $('.tab-delivery').show();
        $('.single-product-tabulator .delivery').parent().addClass('active');
        $('.single-product-tabulator .description, .single-product-tabulator .paymant').parent().removeClass('active');
    });




    if ($('.product-select').length > 0) {

        $('.product-select').select2({
            minimumResultsForSearch: -1,
            dropdownAutoWidth: true,
            width: 'auto'
        });

    }

    $('input[type="range"]').rangeslider({
        polyfill: false,

        onInit: function () {
            this.output = $('<div class="range-output" />').insertBefore(this.$range).html(this.$element.val());
        },
        onSlide: function (position, value) {
            this.output.html(value);
        }
    });


});//end document.ready


