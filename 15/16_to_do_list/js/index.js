$(document).ready(function(){

	//Do something when the form is submitted

		//Get the value of the input field/*

	//})

	var itemCount = 0;

	$('#addTodoList').submit(addToDoListItem);
	$('#clearList').click(emptyToDoList);
	$('#clearCompletedList').click(removeCompletedToDoListItems);
	$('#todos').on('click', '.remove', removeToDoListItem);
	$('#todos').on('click', '.edit', editToDoListItem);
	$('#todos').on('blur', '.editor', saveEditedToDoListItem);
	$('#todos').on('click', 'li', markItemAsComplete)


	function addToDoListItem(){
		
		//Get the value of theinput field 
		var item = $('#addTodoItem').val();

		//Append the item to the unordered list
		//$('#todos').append('<li>'+item+'</li>');

		$('#todos').append('<li><span class="item">'+item+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

		updateNumberOfToDoListItems(); 
	}

	function removeToDoListItem() {
		$(this).parents('li').remove();

	}

	function editToDoListItem() {
		var editClicked = $(this).parents('li');
		var itemContent = $(this).siblings('.item').text();

		console.log(itemContent);
		$(editClicked).html('<form class="editor" action=""><input type="text" value="'+itemContent+'"/></form>');
	}

	function saveEditedToDoListItem () {
		var newItem = $(this).find('input').val();
		var listItem = $(this).parents('li');
		$(listItem).html('<li><span class="item">'+newItem+'</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
	}

	function markItemAsComplete() {
		$(this).toggleClass('done');
		updateNumberOfToDoListItems();
	} 

	function emptyToDoList () {
		$('#todos').empty();
	}

	function removeCompletedToDoListItems() {
		$('.done').remove();
	}

	function updateNumberOfToDoListItems() {
		var count = $('#todos li').not('.done').length;
		$('#count').html(count);
	}

});