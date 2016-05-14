$(document).ready(function() { 
	$('ul.menu').superfish({ 
		delay:       600,                            // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'normal',                          // faster animation speed 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 
	});
	
	$('.footer-menu a').not('.active').hover(
	function(){$(this).stop().animate({color:'#fff'}, {duration:250})},
	function(){$(this).stop().animate({color:'#545051'}, {duration:250})}); 
	
	/* ---------------------------------------------------------------------- */
	/*	Twitter
	/* ---------------------------------------------------------------------- */

	(function() {
		
		if($("#tweet").length) {
			
			$('#tweet').jTweetsAnywhere({
				username: 'JeramyBlacksTKD',
				count: 2,
				showTweetFeed: {
					paging: { mode: 'prev-next' }
				}
			});	
			
		}

	})();
	
	/* end Twitter */	
});			
