// This is for SCREENSHOOT section sliders
$('#owlScreenshoot').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    item : 1,
    autoplay : 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// This is for TESTIMONIAL SECTION sliders
$('#owl-testimonial').owlCarousel({
    items:1,
    loop:true,
    center:true,
    Navigation: true,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});