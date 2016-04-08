$(document).ready(function() {

	/**/
	var arrow_izq ='<span class="icon-chevron-thin-left"></span>';
	var arrow_der ='<span class="icon-chevron-thin-right"></span>';

	/*Banner del Index*/
	$('.Banner-slides.owl-carousel').owlCarousel({
		// itemsCustom: [
		// 	[0, 1]
		// ],
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	/*Slider Otros Proyectos*/
	$('.Index-itemSlideCarousel.owl-carousel').owlCarousel({		
		nav: false,
		autoPlay: false,
		slideSpeed: 1000,
		dots: true,
		loop:true,
		responsive: {
			0:{
				items:1
			}
		}
	});

	/*Carrusel Noticias*/
	$('.News-list.owl-carousel').owlCarousel({
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: false,
		loop:true,
		responsive: {
			0:{
				items:1
			},
			600:{
				items:2
			},
			840:{
				items:3
			}
		},
		navText: [arrow_izq,arrow_der]
	});	

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

});