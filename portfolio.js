// toggle hamburger menu icon with jQuery
$('.hamburger-btn, .nav-list li a').click(function(){
    $('.nav-list').toggleClass("open");
});


//scroll to top button fade in and out when at top
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#btnScrollToTop').fadeIn();
    } else {
        $('#btnScrollToTop').fadeOut();
    }
});

//Click event to scroll to top button
$('#btnScrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});