/* global $ */

$(function () {

    'use strict';

    // Nice Scroll 

    $('body').niceScroll({
        
        cursorcolor: '#FF0000',
        cursorwidth: '15px',
        cursorborderradius: 0,
        cursorborder: '1px solid #FF0000'
    });

    //Scroll To Features
    
    $('.buttons .our-works').click(function () {

        $('html, body').animate({

            scrollTop: $('.our-work').offset().top

        }, 1000);
    });
    
    $('.buttons .hire').click(function () {

        $('html, body').animate({

            scrollTop: $('.our-team').offset().top

        }, 1000);
    });

    $('.fa-chevron-up').click(function () {

        $('html, body').animate({

            scrollTop: $('.header').offset().top

        }, 1000);
    });

    // Show Hidden Items From Work

    $('.show-more').click(function () {

        $('.our-work .hidden').fadeIn(500);

    });

    // Chech Testimonials 

    var leftArrow = $('.testimonials .fa-chevron-left'),

        rightArrow = $('.testimonials .fa-chevron-right');


    function chechClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();
        }

    }

    chechClients();

    $('.testimonials i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.testimonials .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                chechClients();
            });

        } else {

            $('.testimonials .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                chechClients();

            });
        }
    });
});
