$(window).ready(function(){
	let map = [
		{
			"block" : "auavid-team-content",
			"link"	: "auavid-team-bar"
		},
		{
			"block" : "auavid-thema-content",
			"link"	: "auavid-thema-bar"
		},
		{
			"block" : "auavid-focus-content",
			"link"	: "auavid-focus-bar"
		},
		{
			"block" : "auavid-workshop-content",
			"link"	: "auavid-workshop-bar"
		},
		{
			"block" : "auavid-ssad-content",
			"link"	: "auavid-ssad-bar"
		},
		{
			"block" : "auavid-ahp-content",
			"link"	: "auavid-ahp-bar"
		},
		{
			"block" : "dsus-team-content",
			"link"	: "dsus-team-bar"
		},
		{
			"block" : "dsus-thema-content",
			"link"	: "dsus-thema-bar"
		},
		{
			"block" : "dsus-produkt-content",
			"link"	: "dsus-produkt-bar"
		},
		{
			"block" : "dsus-recht-content",
			"link"	: "dsus-recht-bar"
		},
		{
			"block" : "dsus-arch-content",
			"link"	: "dsus-arch-bar"
		},
		{
			"block" : "dsus-oauth-content",
			"link"	: "dsus-oauth-bar"
		},
		{
			"block" : "dsus-model-content",
			"link"	: "dsus-model-bar"
		},
		{
			"block" : "dsus-registr-content",
			"link"	: "dsus-registr-bar"
		},
		{
			"block" : "dsus-umsetz-content",
			"link"	: "dsus-umsetz-bar"
		},
	];

	$(window).on('scroll', function(){
		map.forEach(function(value, index){
			let distance = $('#' + map[index]['block']).offset().top - $(window).scrollTop();
			if(distance < 20 && distance > 0){
				removeSelection($('#' + map[index]['link']));
			}
		});
	});
});

function removeSelection(link){
	$(link).parent().children().each(function(){
		$(this).removeClass('side-bar-selected');
	});
	$(link).addClass('side-bar-selected');
}

function scrollToDiv(link, e){
	if(link!=null) removeSelection(link);
	$('html,body').animate({
        scrollTop: $("#" + e).offset().top
    }, 'slow');
}

