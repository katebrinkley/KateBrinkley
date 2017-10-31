/////*CITIPIX HOMEWORK ASSIGNMENT*////


$(document).ready(function(){

$("form").submit(function(event){
	var inputField = $("input").val();

	if(inputField === "New York" || inputField === "NYC" || 
		inputField === "New York City") {
	/*$('body').css("background", 'url('./images/nyc.jpg'))'*/
$('body').addClass('nyc';)
	} else if (inputField ==='SF') {
		$('body').addClass('sf')
	}
})





 	event.preventDefault();

});