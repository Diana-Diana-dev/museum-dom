 $(document).ready(function(){
        $('.video-journey__big_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.video-journey__small-slider'
        });
        $('.video-journey__small-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed:1000,
            easing:'ease',
            infinite:true,
            autoplay:false,
            autoplaySpeed:2000,
            touchThreshold:10,
            waitForAnimate:false,
            centerMode:true,
            variableWidth:false,
            draggable:true,
            asNavFor: '.video-journey__big_slider',
            dots: true,
            centerMode: false,
            focusOnSelect: true,
            draggable:true,
         
          
        });    
    
    });