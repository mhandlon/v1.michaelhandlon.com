function myScroll(scroll){
    var winHeight = $(window).height();
    var changeAt = winHeight * (scroll);

    if(window.pageYOffset>changeAt){
        $(".navbar-default").css('background-color', 'white');
        $('.nav-item a').css('color', 'black');
        $('.navbar-brand').css('color', '#57ad68');
    } else {
        $(".navbar-default").css('background-color', 'rgba(0, 0, 0, 0.3)');
        $('.nav-item a').css('color', 'rgba(255, 255, 255, 0.7)');
        $('.navbar-brand').css('color', 'rgba(255, 255, 255, 0.7)');
    }
}

new WOW().init();
