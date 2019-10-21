$(document).ready(function(){
    var btt= $('.go-to-top');
    
    btt.on('click', function(){
       $('html, body').animate({
           scrollTop: 0
       }, 'slow');
    });
    $(window).on('scroll', function(){
       var self=$(this),
           height = self.height(),
           top = self.scrollTop();
        
        if(top > height){
            if(!btt.is(':visible')){
                btt.fadeIn(500);
            }
        }
        else{
            btt.fadeOut(500);
        }
    });
});