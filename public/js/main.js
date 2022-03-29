var urlString = window.location.search;
$(document).ready(function(){
	$('.deleteUser').on('click', deleteUser);
	$('.editUser').on('click', editUser);
	if(urlString == ''){
		return false;
	}else{
		$('.boton').on('click', updateUser);
	}
});

function deleteUser(){
	//alert('Borrar!');
	alert($(this).data('id'));
}

function deleteUser(){
    var confirmation = confirm('Are You Sure?');
	if(confirmation){
		$.ajax({
			type: 'DELETE',
			url:  '/users/delete/'+$(this).data('id')
		}).done(function(response){
			window.location.replace('/')
		});
	} else {
		return false;
	}
}

function editUser(){

	var id = $(this).data('id');
	$.ajax({
		type: 'GET',
		url:  '/users/edit/'+$(this).data('id')
	}).done(function(response){
		window.location.replace('/?id='+id+'&first_name='+response[0].first_name+'&last_name='+response[0].last_name+'&email='+response[0].email);
	});
}

function updateUser(){
		$.ajax({
			type: 'POST',
			url:  '/users/update/'+$(this).data('id')
		}).done(function(response){
			window.location.replace('/')
		});

}


$(document).ready(function(){
	var urlParam = new URLSearchParams(urlString);
	if(urlString == ''){
		return false;
	}else{
		$('.boton').val('Editar');
		$('#form').attr('action', '/users/update/:id');
		$('#id').val(urlParam.get('id'));
		$('#nombre').val(urlParam.get('first_name'));
		$('#apellido').val(urlParam.get('last_name'));
		$('#email').val(urlParam.get('email'));
	}
});
