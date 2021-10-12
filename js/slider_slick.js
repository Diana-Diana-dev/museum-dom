$(document).ready(function(){
	$('.welcome__sliders').slick({
	 	  dots:true,
	 	  slidesToShow:1,
          slidesToScroll: 1,
	 	  speed:1000,
	 	  easing:'ease',
	 	  infinite:true,
	 	  autoplay:false,
	 	  autoplaySpeed:2000,
	 	  touchThreshold:10,
	 	  waitForAnimate:false,
	 	  centerMode:false,
	 	  variableWidth:false,
         responsive: [
        {
     		 breakpoint: 1024,
     		 settings: {
          		
          		 
          	}
         },
         {
         	breakpoint: 768,
     		 settings: {
          		
             
         }
     }
        ]
	 });
});







var $status = $('.pagingInfo');
    var $slickElement = $('.slideshow');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text('0' + i  + ' | ' + '0' + slick.slideCount);
    });


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
