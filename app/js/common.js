$('document').ready(function () {
//     var trigger = $('#hamburger'),
//         isClosed = true;
//
//     trigger.click(function () {
//         burgerTime();
//     });
//
//     function burgerTime() {
//         if (isClosed == false) {
//             trigger.removeClass('is-open');
//             trigger.addClass('is-closed');
//             isClosed = true;
//         } else {
//             trigger.removeClass('is-closed');
//             trigger.addClass('is-open');
//             isClosed = false;
//         }
//     }
//     var bool = true;
//     $("#hamburger").click(function () {
//
//         console.log('hello');
//         $('.for-menu').toggleClass('list-new')
//         $(".open-menu-box").slideToggle();
//     });
//     // $('.thank-you').click(function() {
//     //     $(this).hide();
//     // });
//     $('.button-crest').click(function () {
//        $('.thank-you').hide();
//        $('.thank-you').hide();
//     });
//     $('.button[data-form]').click(function () {
//         $('.thank-you-form').show();
//     });
//     ///////////////// mail////////////////////
//
//     var patternPhone=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
//     $('form input').on('mouseover',function () {
//         $(this).css('border','1px solid #c6c6c6');
//     });
//
//     $('form').submit(function (event) {
//         event.preventDefault();
//         //event.preventDefault();
//         var mname = $('form input[name="name"]').val();
//         var mphone = $('form input[name="phone"]').val();
//
//         //console.log(mname);
//         if(!patternPhone.test(mphone)){
//             $('form input[name="phone"]').css('border','1px solid red');
//         }
//
//         if(mname ==""){
//             $('form input[name="name"]').css('border','1px solid red');
//         }
//         if(mphone ==""){
//             $('form input[name="phone"]').css('border','1px solid red');
//         }
//         if(mname && mphone &&  patternPhone.test(mphone)){
//
//             $('.thank-you-form').hide();
//             $('.thank-you-finish').show();
//
//             var msg   = $(this).serialize();
//             console.log(msg);
//             $.ajax({
//                 type: 'POST',
//                 url: 'contact.php',
//                 data: msg,
//                 success: function(data) {
//                     $('#results').html(data);
//                 },
//                 error:  function(xhr, str){
//                     alert('Возникла ошибка: ' + xhr.responseCode);
//                 }
//             });
//         }
//
//     });
//


    // SLICK
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        prevArrow:'<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
        focusOnSelect: true,
        centerPadding: '40px',
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 1062,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }

        ]
    });
    $('.big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.small',
        adaptiveHeight: true,
        prevArrow:'<button class="prev1"></button>',
        nextArrow:'<button class="next1"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                }
            },
            {
                breakpoint: 1062,
                settings: {


                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false

                }
            }

        ]
    });
    $('.small').slick({
        slidesToShow:5,
        slidesToScroll: 1,
        asNavFor: '.big',
        dots: false,
        focusOnSelect: true,
        centerPadding: '40px',
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:5
                }
            },
            {
                breakpoint: 1062,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

                }
            }

        ]
    });
    $('.button-crest').click(function () {
        $('.thank-you').hide();

    });

    $('[data-form]').click(function () {
        $('.thank-you-form').show();
    });

    ///////////////// mail////////////////////

    var patternPhone=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    $('form input').on('mouseover',function () {
        $(this).css('border','1px solid #c6c6c6');
    });

    $('form').submit(function (event) {
        event.preventDefault();
        //event.preventDefault();
        var mname = $('form input[name="name"]').val();
        var mphone = $('form input[name="phone"]').val();

        //console.log(mname);
        if(!patternPhone.test(mphone)){
            $('form input[name="phone"]').css('border','1px solid red');
        }

        if(mname ==""){
            $('form input[name="name"]').css('border','1px solid red');
        }
        if(mphone ==""){
            $('form input[name="phone"]').css('border','1px solid red');
        }
        if(mname && mphone &&  patternPhone.test(mphone)){

            $('.thank-you-form').hide();
            $('.thank-you-finish').show();

            var msg   = $(this).serialize();
            console.log(msg);
            $.ajax({
                type: 'POST',
                url: 'contact.php',
                data: msg,
                success: function(data) {
                    $('#results').html(data);
                },
                error:  function(xhr, str){
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        }

    });
    $(".slider-box").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('data-href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.phone').click(function () {
        $(this).toggleClass('hover-effect');
        $(".tel-win").slideToggle();

    });
    $('.crest').click(function () {
        $('.popup-images').removeClass('pop-n');

    });
    $('[data-photo="sahara"]').click(function () {
        $(".sahara").addClass('pop-n');
    });
    $('[data-photo="khata"]').click(function () {
        $(".sahara").addClass('pop-n');
    });

// // ZOOM
//     $('.ex1').zoom();
//
// // STYLE GRAB
//     $('.ex2').zoom({ on:'grab' });
//
// // STYLE CLICK
//     $('.ex3').zoom({ on:'click' });
//
// // STYLE TOGGLE
//     $('.ex4').zoom({ on:'toggle' });
});