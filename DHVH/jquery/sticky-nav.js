$(document).ready(function(){
    var stickey_nav_bar = $('.navbar').offset().top;
    var stickey_navigation = function(){
        var scroll_top = $(window).scrollTop();
        if(scroll_top > stickey_nav_bar){
            $('.navbar.navbar-inverse').addClass('when-addclass-inverse');
            $('.navbar-header a img').addClass('when-addclass-logo');
            $('.menuBar').addClass('when-addclass-menubar');
            $('.navbar-toggle').addClass('when-addclass-mobileMenu');
        }
        else{
            $('.navbar.navbar-inverse').removeClass('when-addclass-inverse');
            $('.navbar-header a img').removeClass('when-addclass-logo');
            $('.menuBar').removeClass('when-addclass-menubar');
            $('.navbar-toggle').removeClass('when-addclass-mobileMenu');
            
        }
    };
    
    $(window).scroll(function(){
        stickey_navigation();
    });
});