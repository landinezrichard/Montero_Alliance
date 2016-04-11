$(document).ready(function() {

	/*Funcionalidades Menu*/

	var menus = ['.Menu-index','.Header-redes'];

	/*Mostrar menu mobile*/
	$('.Header-mobileMenu').click(function(){
		mostrarOcultar('.Menu-index');
	});

	/*Mostrar redes*/
	$('.Header-mobileRedes').click(function(){
		mostrarOcultar('.Header-redes');
	});	

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}

});