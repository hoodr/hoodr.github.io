$(document).on('click', '.navbar-right li', function() {
   $(".navbar-right li").removeClass("active");
   $(this).addClass("active");
});

$(document).ready(function() {
    setTimeout(function() {
    	$('#moving-element').removeClass('rollIn animated');
    	$('#moving-element').addClass('zoomOutDown animated');
    	}, 5000);
});