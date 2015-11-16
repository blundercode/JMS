$(window).load(function () {
    /* ================ VERFIFY IF USER IS ON TOUCH DEVICE ================ */

    if (is_touch_device()) {
        $(".portfolio-item-container").on('click', function (e) {
            $(this).find('.mask').show();
        });
    }

    // function to check is user is on touch device
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
                || 'onmsgesturechange' in window; // works on ie10
    }

    /* ================ PORTFOLIO ISOTOPE FILTER ================ */

    (function () {
        //ISOTOPE
        // cache container
        var $portfolioitems = $('#portfolioitems');
        // initialize isotope
        $portfolioitems.isotope({
            filter: '*',
            masonry: {
                columnWidth: 1,
                isResizable: true
            }
        });

        // filter items when filter link is clicked
        $('#filters a').click(function () {
            $('#filters li').removeClass('active');
            var selector = $(this).closest('li').addClass('active').end().attr('data-filter');
            $portfolioitems.isotope({
                filter: selector
            });
            return false;
        });
    })();

    $('.page-content').on('click', '.btn-filter', function (e) {
        $('.portfolio-filters-type-2').fadeToggle();
        $(this).addClass("btn-filter-active");
        e.stopPropagation();
    });

    $(document.body).click(function () {
        $('.portfolio-filters-type-2').fadeOut();
        $(this).find(".btn-filter").removeClass("btn-filter-active");
    });

    $('.portfolio-filters-type-2').click(function (e) {
        e.stopPropagation();
    });
});

jQuery(document).ready(function ($) {
    'use strict';
    //PORTFOLIO IMAGE LIGHTBOX
    $('.triggerZoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.triggerZoomVideo').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.portfolio-item.hover-caption figcaption').each(function () {
        var height = $(this).outerHeight();
        $(this).css('bottom', -height);
    });

    $('.portfolio-item.hover-caption').hover(
            function () {
                var height = $(this).find('figcaption').outerHeight();
                $(this).find('figcaption').animate({
                    bottom: 0
                }, 200);

                $(this).find('.portfolio-img').animate({
                    top: -height
                }, 200);
            }, function () {
        var height = $(this).find('figcaption').outerHeight();
        $(this).find('figcaption').animate({
            bottom: "-" + height
        }, 200);

        $(this).find('.portfolio-img').animate({
            top: 0
        }, 200);
    }
    );


    //galleryAnimation();
});

