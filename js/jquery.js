$(document).ready(function () {

    // 1) ScrollTop Section
    $(window).on('scroll', function () {
        var distanceFromTop = $(window).scrollTop();
        var buttonTop = $('.button-top');

        console.log(distanceFromTop, buttonTop);

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


});