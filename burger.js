$(document).ready(function(){
    $(".header_burger").click(function(event){
        $(".header_burger,.header_menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
});









$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('.js-overlay-campaign').hasClass('disabled')) {
			return false;
		} else {
			
			$(".js-overlay-campaign").fadeIn();
		}
	}, 5000);
});