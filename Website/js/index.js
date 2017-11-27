$(document).ready(function(){

	//Window scroll
	$("nav.toggleNav a").click(function(e) {
		var id = $(this).attr('href');

	    $('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 2000);

	    e.preventDefault();
	});
});


$('.hamburgerMenu').click(function(){
    $('nav').slideToggle(200);
});

//Slick carousel
$('.gridRow').slick({
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
  ]
});




// $(document).ready(function(){



// $("button").click(function(){
//   $("button").attr("href", "file:///Users/kevinbrinkley/Sites/KateBrinkley/Website/signup.html");
// });

// $('.hamburgerMenu').click(function(){
// 	$('nav').slideToggle('slow');
// };

// }

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