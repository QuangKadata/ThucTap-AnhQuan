// This is for the SERVICE SECTION
$(document).ready(function() {
        var  divEl = $(".myService"),
         divELoffest = divEl.offset().top/1.50,
        documentEl = $(document);
    documentEl.on('scroll', function(){
        if (documentEl.scrollTop() > divELoffest && divEl.hasClass("myService")) divEl.css({'opacity': '1', 'transition': '2s',});
    });
});

// This is for PACKAGE SECTION
$(document).ready(function() {
        var  divEl = $(".myPackage"),
         divELoffest = divEl.offset().top/1.25,
        documentEl = $(document);
    documentEl.on('scroll', function(){
        if (documentEl.scrollTop() > divELoffest && divEl.hasClass("myPackage")) divEl.css({'opacity': '1', 'transition': '2s',});
    });
});