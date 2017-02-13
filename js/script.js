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


	//validar nombre
	$('#nombre').focusout(function (event) {
		event.stopImmediatePropagation();	
		var nombre=$('#nombre').val();
			if(nombre=="" || !isNaN(nombre)){
				$(this).after("<span class='alerta' style=font-size:12px;>Campo obligatorio (no acepta caracteres númericos)</span>").stop();
				$(this).val("");
			} else{
				$(this).next().stop().fadeOut(300);
			}
	});

	$('#nombre').focusin(function(){
		$(this).next().stop().fadeOut(300);
	});	


	//validar email
	var expr_mail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;  //expresion regular par email
	$('#email').focusout(function() {
		var correo=$('#email').val();
		if(correo == "" || !expr_mail.test(correo)){  // verifcando si correo tiene los campos requeridos
			$(this).stop().after("<span class='alerta' style=font-size:12px;>Campo obligatorio debe contener el simbolo @ </span>");
			$(this).val("");
			return false;
		} else{
			$(this).next().stop().fadeOut(300);
		}
	});

	$('#email').focusin(function(){
		$(this).next().stop().fadeOut(300);
	});


	//validar clave
		$('#clave').focusout(function (){
			var clave=$('#clave').val();
			if(clave.length<4){
				$(this).stop().after("<span class='alerta' style=font-size:12px;>La contraseña debe contener entre mínimo 4 caracteres</span>");
				$(this).val("");
				return false;
			} else{
				$(this).next().stop().fadeOut(300);
			}
		});

		$('#clave').focusin(function(){
			$(this).next().stop().fadeOut(300);
		});


		//VALIDAR TEXTAREA COMENTARIO - PALABRAS SOECES

		var groserias=["idiota", "imbecil", "carajo", "mierda", "estupido", "estupida", "puta"];
		var signos="######";  
		
		$('#comentario').keyup(function() {
			var comentario=$('#comentario').val();
			var palabras_array=comentario.split(" ");

				for(var i=0; i<groserias.length; i++){
					for (var p=0; p<palabras_array.length; p++) {
						if(palabras_array[p].toLowerCase()==groserias[i]){
							palabras_array[p]=signos;
						} 					
					}
				}
			$('#comentario').val(palabras_array);
		});


		// $('#comentario').keyup(function(){
		// 	corregirPalabra();
		// }).keyup();


			

});


