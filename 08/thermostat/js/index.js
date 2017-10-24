//Variables

var currentTemp = 71;
var currentTempElement = document.getElementById('currentTemp');//Object
var button = document.getElementById('setTemperature');
var inputField = document.getElementById('newTemp');
var body = document.getElementsByTagName('body');

console.dir(button);
console.dir(inputField);

//Logic
currentTempElement.innerHTML = currentTemp;
changeBackground(currentTemp);

button.onclick = function() {
	currentTemp = inputField.value;

	if (currentTemp !== '') {
		currentTempElement.innerHTML = currentTemp;
		changeBackground(currentTemp);
	}


}

function changeBackground(temp) {
	if(temp <= 65) {
		console.log('I am turning blue');
		body[0].style.backgroundColor = 'blue';
	} else if (temp > 65 && temp < 85) {
		console.log('I am turning yellow');
		body[0].style.backgroundColor = 'yellow';
	} else if (temp >= 85 && temp < 95) {
		console.log('I am turning orange')
		body[0].style.backgroundColor = 'orange';
	} else {
		console.log('I am turning red');
		body[0].style.backgroundColor = 'red';
	}
}

	console.dir(inputField.value)