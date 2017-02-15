$(document).ready(function(){

	/********************* MODAL****************************/

	$('#btn-ingresar').click(function() {  // mostrar modal
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
		if(correo == "" || !expr_mail.test(correo)){  // verifcando si correo tiene los campos de la variable expr_mail
			$(this).stop().after("<span class='alerta' style=font-size:12px;>Campo obligatorio debe contener el simbolo @ </span>");
			$(this).val("");
			// return false;
		} else{
			$(this).next().stop().fadeOut(300);
		}
	});

	$('#email').focusin(function(){
		$(this).next().stop().fadeOut(300);
	});


	//validar clave como mínimo 4 caracteres
		$('#clave').focusout(function (){
			var clave=$('#clave').val();
			if(clave.length<4){  // si es mas de 4 mostrar un crea .after 
				$(this).stop().after("<span class='alerta' style=font-size:12px;>La contraseña debe contener entre mínimo 4 caracteres</span>");
				$(this).val("");
				return false;
			} else{
				$(this).next().stop().fadeOut(300);  // ocultando el el sigiente (el after).
			}
		});

		$('#clave').focusin(function(){
			$(this).next().stop().fadeOut(300);
		});


		//VALIDAR TEXTAREA restringir PALABRAS SOECES

		var groserias=["idiota", "imbecil", "carajo", "mierda", "estupido", "estupida", "puta", "puto", "cojudo", "cojuda", "putamare", "jodas", "joder"];
		var signos="######";  
		
		function corregirPalabra() {
			var comentario=$('#comentario').val();  //almacenando valor del textarea #comentario
			var palabras_array=comentario.split(" "); //convertir string en array
			// alert("la funcion corregirPalabra")
				for(var i=0; i<groserias.length; i++){
					for (var p=0; p<palabras_array.length; p++) {
						if(palabras_array[p].toLowerCase()==groserias[i]){
							palabras_array[p]=signos;
						} 					
					}
				}
				var textoCadena=palabras_array.toString();  // convertir array a string
				textoReemplazo=textoCadena.replace(/,/g," "); //reemplazar la coma "," por espacio
				// document.getElementById('comentario').value=textoReemplazo;
				$('#comentario').val(textoReemplazo);
		};

		//llamando funcion
		$('#comentario').keypress(function(e){
			var tecla = (document.all) ? e.keyCode : e.which;  // reconocer tecla pulsada 

			if(tecla==32){  // evento con tecla backSpace
				corregirPalabra();
			}	
			if (tecla==13){  // evento con tecla enter
				corregirPalabra(); 
				return false; // evitar uso de tecla enter
			}
		});

		$('#comentario').focusout(function() {
			corregirPalabra();
		});
});


