$(window).ready(function(){
	$('#arrow').on('click', function(){ scrollToDiv('explore-content');});

	$('#start').on('click', function(){scrollToDiv('content');});

	$('#security').on('click', function(){scrollToDiv('security-block');});

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

