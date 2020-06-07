$(document).ready(function(){

	//var wrapper = $('#wrapper');
	//wrapper.fadeIn(1000);

	/*
	$('.slide-right').on("click", function(event)
	{
		var id = $(this).attr('id');
		var iw = wrapper.innerWidth()*-1 + 'px';
		wrapper.animate({'left': iw}, 500);
		$(':animated').promise().done(function(event)
		{
			window.location.href = $('#' + id).attr('href');
		});
		return false;
	});

	$('#slide-right').on("click", function(event)
	{
		var iw = wrapper.innerWidth()*-1 + 'px';
		wrapper.animate({'left': iw}, 500);
		$(':animated').promise().done(function()
		{
			window.location.href = $('#slide-right').attr('href');
		});
		return false;
	});

	$('#slide-left').on("click", function(event)
	{
		var iw = wrapper.innerWidth() + 'px';
		wrapper.animate({'left': iw}, 500);
		$(':animated').promise().done(function()
		{
			window.location.href = $('#slide-left').attr('href');
		});
		return false;
	});
	 */

	$('.contentDetailDisplayAreaClose').on("click", function(event)
	{
		var str  = $(this).attr('id');
		var myID = "#content" + str.substring(str.indexOf("_") + 1);
		$(myID).hide(500);
                setTimeout(function() {
			$('body').scrollTo('#top', 500);
                }, 500);
                return false;

	});

	$('#readMoreContent').on("click", function(event)
	{
		$('#contenteCommerce').hide(500);
		$('#contentDevelopment').hide(500);
		$('#contentConsulting').hide(500);
		$('#contentContent').show(500);
		$('body').scrollTo('#contentTop', 500);
		return false;
	});

	$('#readMoreeCommerce').on("click", function(event)
	{
		$('#contentContent').hide(500);
		$('#contentDevelopment').hide(500);
		$('#contentConsulting').hide(500);
		$('#contenteCommerce').show(500);
		setTimeout(function() {
        	$('body').scrollTo('#contentTop', 500);
		}, 500);
		return false;
	});

	$('#readMoreDevelopment').on("click", function(event)
	{
		$('#contentContent').hide(500);
		$('#contenteCommerce').hide(500);
		$('#contentConsulting').hide(500);
		$('#contentDevelopment').show(500);
        setTimeout(function() {
        	$('body').scrollTo('#contentTop', 500);
        }, 500);
		return false;
	});

	$('#readMoreConsulting').on("click", function(event)
	{
		$('#contentContent').hide(500);
		$('#contenteCommerce').hide(500);
		$('#contentDevelopment').hide(500);
		$('#contentConsulting').show(500);
        setTimeout(function() {
        	$('body').scrollTo('#contentTop', 500);
        }, 500);
		return false;
	});
});

