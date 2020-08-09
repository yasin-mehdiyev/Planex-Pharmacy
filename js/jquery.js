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

    // 4) ScrollIt Plugins Importing
        $.scrollIt({
            upKey: 38,                // key code to navigate to the next section
            downKey: 40,              // key code to navigate to the previous section
            easing: 'swing',         // the easing function for animation
            scrollTime: 600,          // how long (in ms) the animation takes
            activeClass: 'active',    // class given to the active nav element
            onPageChange: null,       // function(pageIndex) that is called when page is changed
            topOffset: -60            // offste (in px) for fixed top navigation
          });

});