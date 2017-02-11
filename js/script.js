$(document).ready(function(){
	$('#btn-ingresar').click(function() {
		$('#modal').fadeIn(500);
	});


	function cerrarModal(){
		$('#modal').fadeOut(500);
	}

	$('#cerrar-modal').click(function() {
		cerrarModal();
	});

	$('#btn-cancelar').click(function() {
		cerrarModal();
	});

});


