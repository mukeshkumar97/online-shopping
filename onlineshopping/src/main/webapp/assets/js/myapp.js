$(function() {
	//solving the active menu
	switch(menu) {
	    
	case 'About Us':
		$('#about').addClass('active');
		bresk;
		
	case 'Contact Us':
		$('#contact').addClass('active');
		bresk;
		
	default:
		$('#home').addClass('active');
		
	
	}
	
	
});