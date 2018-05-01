$(window).scroll(function(){
    myScroll(1/3);
});

$(".nav-item a").hover(function(){
    var winHeight = $(window).height();
    var changeAt = winHeight * (1/3);

    if(window.pageYOffset>changeAt) {
        $(this).css('color', '#57ad68');
    } else {
        $(this).css('color', 'white');
    }

},function(){
    var winHeight = $(window).height();
    var changeAt = winHeight * (1/3);

    if(window.pageYOffset>changeAt) {
        $(this).css('color', 'black');
    } else {
        $(this).css('color', 'rgba(255, 255, 255, 0.7)');
    }

});

$('.navbar-brand').hover(function() {
    var winHeight = $(window).height();
    var changeAt = winHeight * (1/3);

    if (window.pageYOffset > changeAt) {
        $(this).css('color', '#458c53');
    } else {
        $(this).css('color', 'white');
    }
},function(){
    var winHeight = $(window).height();
    var changeAt = winHeight * (1/3);

    if(window.pageYOffset>changeAt) {
        $(this).css('color', '#57ad68');
    } else {
        $(this).css('color', 'rgba(255, 255, 255, 0.7)');
    }
});