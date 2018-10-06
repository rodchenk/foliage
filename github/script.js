$(window).ready(function(){
	$('#arrow').on('click', function(){
		$('html,body').animate({
	        scrollTop: $("#explore-content").offset().top
	    }, 'slow');
	});
	$('#start').on('click', function(){
		scrollToDiv('content');
		// $('html,body').animate({
	 //        scrollTop: $("#get-started").offset().top
	 //    }, 'slow');
	});
	$('#github-top').on('click', function(){
		window.location ='https://github.com/rodchenk/foliage-api';
	});
	$('#download-top').on('click', function(){
		window.location ='https://github.com/rodchenk/foliage-api/archive/master.zip';
	});
});

function scrollToDiv(e){
	$('html,body').animate({
        scrollTop: $("#" + e).offset().top
    }, 'slow');
}

