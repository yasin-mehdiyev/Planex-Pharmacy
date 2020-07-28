$(document).ready(function () {

    // 1) ScrollTop Section
    $(window).on('scroll', function () {
        var distanceFromTop = $(window).scrollTop();
        var buttonTop = $('.button-top');

      

        if (distanceFromTop > 400) {
            buttonTop.addClass('button-show');
        }
        else {
            buttonTop.removeClass('button-show');
        }
    });

    $(".button-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })


    // 2) Preloader Section
    $(window).on('load', function(){
        $(".preloader-activate").removeClass('preloader-active');

        setTimeout(function(){
            $('.open_tm_preloader').addClass('loaded');
            }, 1000);
    });

    // 3) Adding BgColor to Navbar when it is scrolling

    $(window).on('scroll',function(){
        $fromBodyHeightOfScroll=$(window).scrollTop();
        $navbarMenu=$('.navbar-default');

        if($fromBodyHeightOfScroll>400){
            $navbarMenu.addClass('nav-scroll');
        }
        else{
            $navbarMenu.removeClass('nav-scroll');
        }
    });

});