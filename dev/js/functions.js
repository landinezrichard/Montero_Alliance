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

	/*Scroll Reveal*/

	window.sr = ScrollReveal();

	/*Puertos*/
	sr.reveal('.Puertos-description');
	sr.reveal('.Puertos-title');
	sr.reveal('.Puertos-desc2');
	sr.reveal('.Puertos-listItem');

	/*Social*/
	sr.reveal('.Social-item');
	sr.reveal('.Social-title');
	sr.reveal('.Social-desc2');

	/*Footer*/
	sr.reveal('.Footer-redes .icon-facebook',50);
	sr.reveal('.Footer-redes .icon-twitter',50);
	sr.reveal('.Footer-redes .icon-google-plus',50);
});