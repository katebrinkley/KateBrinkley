$(document).ready(function(){

var cityOptions = [
	"NYC",
	"SF",
	"LA",
	"ATX",
	"SYD"
];

$(cityOptions).each(function(i, city) {
	$('#city-type').append("option value='+city+'">'+city+"</option>'
		);
});

/*var cityType = "cityTypeValue"

/*Create a loop to display options*/

for (var i = 0; i < cityOptions.length; i++) {
    $("#city-type").append("<option>" + "NYC" + "</option>");
} 

/*get user input value*/

/* If city-type equals NewYork, NYC or New York City, then change the background*/

/*if(cityTypeValue === "NYC") {
	$('body').addClass('.nyc');*/


/*Stop form from submitting*/

});