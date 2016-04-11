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

	/*Header Menu*/
	sr.reveal('.Header-menuItem',{origin:'right',distance:'320px'},400);

	/*Puertos*/
	sr.reveal('.Puertos-description');
	sr.reveal('.Puertos-title');
	sr.reveal('.Puertos-desc2');
	sr.reveal('.Puertos-listItem');

	sr.reveal('.Puertos-fancy',{origin:'top',distance:'320px'},400);
	
	/*Quienes somos*/
	sr.reveal('.About-desc2',{origin:'left',delay:200});

	/*Social*/
	sr.reveal('.Social-item',{delay:100,origin:'right',distance:'100px',duration:800},400);
	sr.reveal('.Social-title');
	sr.reveal('.Social-desc2');

	/*Footer*/
	sr.reveal('.Footer-redes .icon-facebook',{delay:50,scale:1.1});
	sr.reveal('.Footer-redes .icon-twitter',{delay:100,scale:1.1});
	sr.reveal('.Footer-redes .icon-google-plus',{delay:150,scale:1.1});
});