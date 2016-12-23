import QrCode from 'qrcode-reader';
var qr = new QrCode();


$(document).ready(function() {
		

	var input = document.querySelector('input[type=file]');
	input.addEventListener('change', function () {
    	var file = input.files[0];
	    drawOnCanvas(file);
	});

	function drawOnCanvas(file) {

		 qr.callback = function(result,err) {
		 	console.log(result);
		 	$('#imageContainer').append(result);	
		 }






		// We use the File APi to read the content of the input file element
	   var reader = new FileReader();

	    // On reader load with parse the content and draw it on Canvas
	    reader.onload = function (e) {
	       var dataURL = e.target.result;
	        $('#tempImage').attr("src", dataURL);


	         var data =	qr.decode(dataURL);
	      
	    };

	    reader.readAsDataURL(file);
	}
});