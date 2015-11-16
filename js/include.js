(jQuery)(function ($) {

    // MAIN NAVIGATION
    $('.nav .dropdown').hover(function () {
        $(this).find('ul:first').css({
            visibility: "visible",
            display: "none"
        }).fadeIn(300);
    }, function () {
        $(this).find('ul:first').css({
            display: "none"
        });
    });

    // RESPONSIVE NAVIGATION
    $(function () {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-2',
                classout: 'dl-animate-out-2'
            }
        });
    });

    // SEARCH
    $('#header').on('click', '#search.search-type-1, #search.search-type-2', function (e) {
        e.preventDefault();
        $(this).find('#search-box').fadeToggle();
        $(this).find('.search-submit-wrapper').addClass("search-submit-active");
        e.stopPropagation();
    });
    $(document.body).click(function () {
        $('.search-type-1 #search-box, .search-type-2 #search-box, .search-type-3 #search-box').fadeOut();
        $(this).find('.search-submit-wrapper').removeClass("search-submit-active");
    });

    $('.search-type-1 #search-box, .search-type-2 #search-box, .search-type-3 #search-box').click(function (e) {
        e.stopPropagation();
    });

    $('#header').on('click', '#search.search-type-3', function (e) {
        e.preventDefault();

        $(this).find('#search-box').fadeIn();
        $(this).find('.search-submit-wrapper').addClass("search-submit-active");
        $(this).find('.close-search').fadeIn();
        e.stopPropagation();
    });

    $('.close-search').click(function (e) {
        e.preventDefault();

        $(this).parent().fadeOut();
    });
    
    pi_header_wrapper_height();
    function pi_header_wrapper_height() {
        var headerWwrapperHeight = $('#header-wrapper').height();
        $('#header-wrapper').next().css('margin-top', headerWwrapperHeight);
        $('#header-wrapper.header-on-scroll').next().css('margin-top', "");
    }
    

    //ACCORDION
    (function () {
        'use strict';
        $('.accordion').on('click', '.title', function (event) {
            event.preventDefault();
            $(this).siblings('.accordion .active').next().slideUp('normal');
            $(this).siblings('.accordion .title').removeClass("active");

            if ($(this).next().is(':hidden') === true) {
                $(this).next().slideDown('normal');
                $(this).addClass("active");
            }
        });
        $('.accordion .content').hide();
        $('.accordion .active').next().slideDown('normal');
    })();


    (function () {
        // INFORMATION BOXES 
        $('.information-boxes .close').on('click', function () {
            $(this).parent().slideUp(300);
        });
    })();


    // SCROLL TO TOP 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // NEWSLETTER FORM AJAX SUBMIT
    $('.newsletter .submit').on('click', function (event) {
        event.preventDefault();
        var email = $(this).siblings('.email').val();
        var form_data = new Array({'Email': email});
        $.ajax({
            type: 'POST',
            url: "contact.php",
            data: ({'action': 'newsletter', 'form_data': form_data})
        }).done(function (data) {
            alert(data);
        });
    });


    // function to check is user is on touch device
    if (!is_touch_device()) {
        // ANIMATION FOR CONTENT
        $.stellar({
            horizontalOffset: 0,
            horizontalScrolling: false
        });

        // ANIMATED CONTENT
        if ($(".animated")[0]) {
            jQuery('.animated').css('opacity', '0');
        }

        var currentRow = -1;
        var counter = 1;

        $('.triggerAnimation').waypoint(function () {
            var $this = $(this);
            var rowIndex = $('.row').index($(this).closest('.row'));
            if (rowIndex !== currentRow) {
                currentRow = rowIndex;
                $('.row').eq(rowIndex).find('.triggerAnimation').each(function (i, val) {
                    var element = $(this);
                    setTimeout(function () {
                        var animation = element.attr('data-animate');
                        element.css('opacity', '1');
                        element.addClass("animated " + animation);
                    }, (i * 250));
                });

            }

            //counter++;

        },
                {
                    offset: '70%',
                    triggerOnce: true
                }
        );

        $('.post-timeline-item').waypoint(function () {
            var timeline_animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + timeline_animation);
        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );

    }
    ;

    // function to check is user is on touch device
    function is_touch_device() {
        return Modernizr.touch;
    }

    // Placeholder fix for old browsers
    $('input, textarea').placeholder();

    // SLIDE DOWN TO THE NEXT SECTION
    $(function () {
        $('.btn-slide-down').click(function (e) {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 800);

            return false;

            e.preventDefault();
        });
    });

    // SHOW HEADER ON SCROLL
    $(function () {
        $(window).scroll(function () {
            var position = $(window).scrollTop();
            if (position > 950) {
                $('#header-wrapper.header-on-scroll').addClass('slide-down');
            }
            else {
                $('#header-wrapper.header-on-scroll').removeClass('slide-down');
            }
        });
    });

    // CALCULATE HEIGHT OF TEAM MEMBER MASK
    function pi_calculate_team_members_height() {
        var image_height = $(".team-member img").height();
        $(".team-member .mask").height(image_height);
    }

    pi_calculate_team_members_height();

    $(window).resize(function () {
        pi_calculate_team_members_height();
    });
});


