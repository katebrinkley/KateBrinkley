$(document).ready(function(){

//SMOOTH SCROLL FOR NAV BAR (DESKTOP)



$('nav.toggleNav a').click(function(e){
  		var id = $(this).attr('href'); //home
  		var headerHeight = $('div').outerHeight();

  		$('html, body').animate({
	  		scrollTop: $(id).offset().top
        }, 2000);

        e.preventDefault();
    });


//MENU TOGGLE (ON MOBILE)

$('.hamburgerMenu').click(function(){
    $('nav').slideToggle(200);
});

//SLIDER BOXES FOR FABRIC TYPES


$('.bambooToggle').click(function(){
	$('.bambooSlide').slideToggle('slow');
});


$('.silkToggle').click(function(){
	$('.silkSlide').slideToggle('slow');
});

$('.cottonToggle').click(function(){
	$('.cottonSlide').slideToggle('slow');
});

$('.woolToggle').click(function(){
	$('.woolSlide').slideToggle('slow');
});

//OVERLAY FUNCTIONS

function on(hover) {
    document.getElementsByClassName("overlay").style.display = "block";
}

function off(hover) {
    document.getElementsByClassName("overlay").style.display = "none";
}



// SLICK SLIDER 

$('.boxes').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 10,
  autoplay: false,
  autoplaySpeed: 4000,

});

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

})

	