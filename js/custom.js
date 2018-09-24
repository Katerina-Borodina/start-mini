$(function(){

    $('.menu_toggle').click(function(){
        $(this).toggleClass('active')
        $('.menu').slideToggle(400)
    })

	$('.tabs a').click(function(){
		$(this).parents('.tab_wrap').find('.tab_cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial-slider').slick({
		arrows: false,
		dots: true,
	});

	$('.portfolio-slider').slick({
		dots: true,
		appendArrows: '.portfolio-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		responsive: - [
			{
				breakpoint: - 767,
				setting: - {
					dots: - false,
				}
			}
		]
	})
});


$nav_tabs_slider = $('.nav_tab_list');
settings = {
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    infinite: false,
}

$nav_tabs_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).parents('.tab_wrap').find('.tab_cont').addClass('hide');
    $(this).find('.slick-current').siblings().removeClass('active');
    var id = $(this).find('.slick-current a').attr('href');
    $(id).removeClass('hide');
    $(this).find('.slick-current').addClass('active');
    return false
})


$(window).on('resize load', function(){
    if($(window).width() > 767) {
        if($nav_tabs_slider.hasClass('slick-initialized')) {
            $nav_tabs_slider.slick('unslick')
        }
        return
    }
    if(!$nav_tabs_slider.hasClass('slick-initialized')) {
        return $nav_tabs_slider.slick(settings)
    }
})


function initMap() {
    var coordinates = {lat: -37.806006, lng: 144.961291}, // Координаты центра карты 
        markerImg = 'img/marker.png', //  Иконка для маркера  
   
    // создаем карту и настраеваем 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: 16, // определяет первоначальный масштаб
        disableDefaultUI: true, // убирает элементы управления
        scrollwheel: false, // отключает масштабирование колесиком мыши (бывает полезно, если карта на всю ширину страницы и перебивает прокрутку вниз).
    	
    });

    // маркер
    marker = new google.maps.Marker({
        position: coordinates, // координаты маркера 
        map: map, //  ставим маркер в карту с id map
        animation: google.maps.Animation.DROP, // анимация маркера DROP / BOUNCE
        icon: markerImg,
    });

    // Отцентровка карты при ресайзе
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

}

// Запускаем карту при загрузки страницы
google.maps.event.addDomListener(window, 'load', initMap);

styles: [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#444444"}]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{"color": "#f2f2f2"}]
}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{"saturation": -100}, {"lightness": 45}]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{"visibility": "simplified"}]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{"visibility": "off"}]
}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}]


