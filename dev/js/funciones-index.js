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

	/*Scroll Reveal*/

	window.sr = ScrollReveal();

	/*Header Menu*/
	sr.reveal('.Header-menuItem',{origin:'right',distance:'320px'},400);

	/*Paneles Index*/
	sr.reveal('.Panels-item',{origin:'right',distance:'320px'},200);	

});