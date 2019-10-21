$(window).scroll(function(){
    if($(window).scrollTop() > 1000){
        $('.count').each(function (){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
            duration: 1000,
            easing: 'linear',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
            });      
        });
    }
});
