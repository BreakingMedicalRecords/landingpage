//////CONTACT FORM VALIDATION
jQuery(document).ready(function ($) {
	console.log("This is startt")
   
	//if submit button is clicked
	$('#submit').click(function () {
    $("#contactform").attr("action", "https://www.getform.org/f/7f3281a4-b3ca-4c91-82b6-245610d1dc45");
    $("#contactform").attr("method", "POST");
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');

			console.log("This is picking up2");


	
	});	
});	