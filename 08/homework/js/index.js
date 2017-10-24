//Stop Links from Jumping to Top of Page//

var linkElements = document.getElementsByTagName('a');

console.dir(linkElements);

for (var i=0; i<linkElements.length;i++) {
	linkElements[i].onclick = function(event) {
		console.log(event);
		event.preventDefault();
	}
}

//Toggle Between readmore and readless

var readMoreElement = document.getElementsByClassName('readmore');
var readLessElement = document.getElementsByClassName('readless');
var showThisElement = document.getElementById('show-this-on-click');


console.dir(showThisElement); //Object
console.dir(readLessElement); //Array
console.dir(readMoreElement); //Array


//---make sure to select number of each item in the array as below([0])

readMoreElement[0].onclick = function() {
	readMoreElement[0].style.display = 'none';
	readLessElement[0].style.display = 'block';
	showThisElement.style.display = 'block'
}

readLessElement[0].onclick = function() {
	readLessElement[0].style.display = 'none';
	readMoreElement[0].style.display = 'block';
	showThisElement.style.display = 'none'
}

//Show Learnmore text element

var learnMoreElement = document.getElementsByClassName('learnmore');
var learnMoreTextElement = document.getElementById('learnmoretext')

learnMoreElement[0].onclick = function(event) {
	learnMoreElement[0].style.display = 'none';
	learnMoreTextElement.style.display = 'block';
	event.preventDefault();
}


















