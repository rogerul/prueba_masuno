$(document).ready(function(){

	/********************* MODAL****************************/

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


	/************** VALIDACION DE FORUMLARIO*******************/


var expr_mail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;  //expresion regular par email

	$('#nombre').focusout(function () {
		var nombre=$('#nombre').val();
			if(nombre=="" || !isNaN(nombre)){
				$(this).stop().after("<span class='alerta'>Escribir nombre (no acepta caracteres números)</span>");
				$(this).next().stop().delay(1000).fadeOut(300);
				$(this).val("");
					document.getElementById("nombre").focus()
			}
	});

	$('#email').focusout(function() {
		var correo=$('#email').val();
		if(correo == "" || !expr_mail.test(correo)){  // verifcando si correo tiene los campor requeridos
			$(this).stop().after("<span class='alerta'>Debe contener el simbolo @ </span>");
			$(this).next().stop().delay(1000).fadeOut(300);
			$(this).val("");
			document.getElementById("email").focus();
		}
	});


		$('#clave').focusout(function (){
			var clave=$('#clave').val();
			if(clave.length<4){
				$('#clave').stop().after("<span class='alerta'>minimo 4 caracteres</span>");
				$('#clave').next().stop().delay(1000).fadeOut(400);
				 document.getElementById("clave").focus();
			}
		});

		//PALABRAS SOCECES

		var groserias=["idiota", "imbecil", "carajo", "mierda", "estupido"];
		var signos="#@?!%#&";  
		
		$('#comentario').change(function(){
			var comentario=$('#comentario').val();
			var palabras_array=comentario.split(" ");

			for(var i=0; i<groserias.length; i++){
				for (var p=0; p<palabras_array.length; p++) {
					if(palabras_array[p]==groserias[i]){
						var palabra_g=palabras_array[p];
							palabra_g='######';
					}
				}
			}
			alert(palabra_g);
		});

});


