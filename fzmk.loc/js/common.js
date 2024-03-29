$(function () {



    $(".product-styler").styler();


    // START меню


    $(".mobile-nav-trigger").click(function(e){
        e.stopPropagation();
        $(".mobile-menu").fadeIn();
    });

    $(".mobile-close-menu").click(function(e){
        e.stopPropagation();
        $(".mobile-menu").fadeOut();
    });



    // END меню






    $(".fancybox-link").fancybox({
        toolbar : true,
        arrows  : true,
        infobar : false
    });




    $("#form-download-project").validate({
        messages: {
            name: {
                required: 'Введите имя'
            },
            tel: {
                required: 'Введите телефон'
            },
            email: {
                required: 'Введите email'
            },
            textarea: {
                required: 'Введите текст'
            },
            agree: {
                required: 'Пожалуйста, примите нашу политику'
            }

        }
    });

    $("#form-download-project-vertical").validate({
        messages: {
            name: {
                required: 'Введите имя'
            },
            tel: {
                required: 'Введите телефон'
            },
            email: {
                required: 'Введите email'
            },
            textarea: {
                required: 'Введите текст'
            },
            agree: {
                required: 'Пожалуйста, примите нашу политику'
            }

        }
    });

    $('.inner-page-parallax .parallax').parallax();

    $(".trigger-vertical-menu").click(function(e){
         e.stopPropagation();
         if($(this).hasClass("active")){
            $(this).removeClass("active");
         $(".vertical-menu-block").slideUp();
         } else {
         $(this).addClass("active");
            $(".vertical-menu-block").slideDown();
         }
     });



    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function() {
        $('body,html').animate({scrollTop : 0}, 800);
    });

    $("input[type=tel]").inputmask({mask : "+38(999) 999-99-99",clearMaskOnLostFocus: false});

    $(".add-file").styler({
        filePlaceholder: "Прикрепить файл"
    });




});

$( window ).resize(function() {
    if($(window).width() > 991) {
        $(".mobile-search-trigger").removeClass("active");
        $(".mobile-menu").css({"display" : ""});

        $(".trigger-vertical-menu").removeClass("active");
        $(".vertical-menu-block").css({"display" : ""});

    } else {
    }
});
