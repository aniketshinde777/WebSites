(function($) {
    $(document).ready(function() {
        "use strict";



        // TAB BORDER EFFECT
        var nav = $('.nav-tabs');
        var line = $('<div />').addClass('line');

        line.appendTo(nav);

        var active = nav.find('li a.active');
        var pos = 0;
        var wid = 0;

        if (active.length) {
            pos = active.position().left;
            wid = active.width();
            line.css({
                left: pos,
                width: wid
            });
        }

        nav.find('li a').click(function(e) {
            if (!$(this).parent().hasClass('active')) {
                e.preventDefault();

                var _this = $(this);

                nav.find('li').removeClass('active');

                var position = _this.parent().position();
                var width = _this.parent().width();

                if (position.left >= pos) {
                    line.animate({
                        width: ((position.left - pos) + width)
                    }, 300, function() {
                        line.animate({
                            width: width,
                            left: position.left
                        }, 150);
                        _this.parent().addClass('active');
                    });
                } else {
                    line.animate({
                        left: position.left,
                        width: ((pos - position.left) + wid)
                    }, 300, function() {
                        line.animate({
                            width: width
                        }, 150);
                        _this.parent().addClass('active');
                    });
                }

                pos = position.left;
                wid = width;
            }
        });



        // TEXT ROTATER
        var sloganArea = $(".slogan ul");
        var textwidth480 = window.matchMedia("(max-width: 480px)");
        var textwidth375 = window.matchMedia("(max-width: 375px)");

        sloganArea.width(sloganArea.find("li").eq(0).find("span").width());

        setInterval(function() {
            var itemHeight = $(".slogan ul li").eq(0).height();

            // test if else statement
            if (textwidth375.matches) {
                var itemHeight = $(".slogan ul li").eq(0).height() + 20;
                // window width is at less than 375px
            } else if (textwidth480.matches) {
                var itemHeight = $(".slogan ul li").eq(0).height() + 25;
                // window width is greater than 480px
            } else {
                var itemHeight = $(".slogan ul li").eq(0).height() + 50;
                // window width is greater than 480px
            }

            // TEST STATEMENT

            sloganArea.animate({
                width: $(".slogan ul li").eq(1).find("span").width(),
                top: itemHeight * -1
            }, 350, function() {
                sloganArea.append($(".slogan ul li").eq(0));
                sloganArea.css("top", 0);

                $(".slogan ul li").each(function(i) {
                    $(this).css("top", i * itemHeight);
                });
            });
        }, 3000);
        // $(".slogan ul li").eq(5);hideword.hide();



        // PARTICLES BG EFFECT 
        var n = document.getElementById("particles-bg");
        if (n == null) {} else {

            particlesJS("particles-bg", {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        };






        // TOOLTIP
        $('[data-toggle="tooltip"]').tooltip()




        $('.nav-item a').click(function() {
            $(this).parent().children('.site-nav ul').slideToggle(300);
            $(this).parent().siblings().children().next().slideUp();
            return true;

        });


        // MEGA MENU
        $('.mega-menu').hover(function() {
            $('.mega-dropdown').toggleClass('open');
        });

        $('.mega-dropdown').hover(function() {
            $('.mega-dropdown').toggleClass('open');
        });




        // STELLAR PARALLAX BG
        $.stellar({
            horizontalOffset: 0,
            verticalOffset: 0
        });



        // COUNTER FLIP CLOCK
        var clock;

        $(document).ready(function() {
            var clock;

            clock = $('.clock').FlipClock({
                clockFace: 'DailyCounter',
                autoStart: false,
                callbacks: {
                    stop: function() {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });

            clock.setTime(220880);
            clock.setCountdown(true);
            clock.start();

        });




        // FOOTER HEIGHT CALCULATION	
        $('.footer-spacing').css({
            'height': $('.footer').innerHeight()
        });


        // HAMBURGER
        $('.hamburger-menu').on('click', function(e) {
            $(this).toggleClass('open');
            $('body').toggleClass('overflow-hidden');
            $('.side-menu').toggleClass('side-menu-open');
            $('.header').toggleClass('side-menu-open');
            $('.topbar').toggleClass('side-menu-open');
        });



        // SEARCH 
        $('.search-icon').on('click', function(e) {
            $('.search-box').addClass('open');
        });

        $('.search-close').on('click', function(e) {
            $('.search-box').removeClass('open');
        });



        // MASONRY
        $(window).load(function() {
            $('.works-grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });
        });


        // ISOTOPE FILTER
        var $container = $('.works-grid');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.isotope-filter li a').click(function() {
            $('.isotope-filter li a.current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


    });


    // GO TO TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });




    // COUNTER 
    if (!document.getElementById("counter")) {} else {

        var lastWasLower = false;
        $(document).scroll(function() {

            var p = $("#counter");
            var position = p.position();
            var position2 = position.top;

            if ($(document).scrollTop() > position2 - 300) {
                if (!lastWasLower)
                    $('#1').html('11');
                $('#2').html('870');
                $('#3').html('252');
                $('#4').html('99');

                lastWasLower = true;
            } else {
                lastWasLower = false;
            }
        });
    };





    // STICKY HEADER

    if (!document.getElementById("stick-me")) {} else {

        var top = document.getElementById('stick-me').offsetTop;
        $(window).scroll(function() {
            $('#stick-me').toggleClass('sticky', $(document).scrollTop() > top);

        });
    };


    // SWIPER CAROUSEL
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });



    // SWIPER SLIDER 
    var swiper2 = new Swiper('.swiper-slider', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1
    });



    // DATA BACKGROUND IMAGE
    var pageSection = $(".site-section");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });



    // WOW ANIMATION 
    wow = new WOW({
        animateClass: 'animated',
        offset: 50
    });
    wow.init();


    // PRETTY PRINT
    window.prettyPrint && prettyPrint()


})(jQuery);