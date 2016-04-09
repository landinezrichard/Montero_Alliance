$(document).ready(function() {	

	/*Funcionalidades Menu*/

	var menus = ['.Menu','.Header-redes'];

	/*Mostrar menu mobile*/
	$('.Header-mobileMenu').click(function(){
		mostrarOcultar('.Menu');
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

	// /*Flip Paneles*/
	// $('.Panels-hover').hover(function(){
	// 	$(this).addClass('flip');
	// },function(){
	// 	$(this).removeClass('flip');
	// });

});