$(document).ready(function(){

//SMOOTH SCROLL FOR NAV BAR (DESKTOP)

	$("nav.toggleNav a").click(function(e) {
		var id = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 200);

	    e.preventDefault();
	});
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



// SLICK SLIDER 

$('.boxes').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 10,
  autoplay: false,
  autoplaySpeed: 4000,

});

prevArrow: $('.prev')
nextArrow: $('.next')

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

	


// 	var images = [
// 		'images/outfit1.jpg',
// 		'images/outfit2.jpg',
// 		'images/outfit3.jpg',
// 	];

// 	i = 0;

// 	$('#prevButton').click(function(){
// 		i--;

// 		if(i < 0) {
// 			i = images.length - 1;
// 		}
// console.log(i);
// 		$('#image').attr('src',images[i]);
// 	});

// 	$("#nextButton").click(function(){
// 		i++;

// 		if(i >= images.length) {
// 			i = 0;
// 		}
// 		console.log(i);
// 		$("#image").attr("src", images[i]);
// 	});

// });