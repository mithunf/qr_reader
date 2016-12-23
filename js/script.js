$(document).ready(function() {
	
	var input = document.querySelector('input[type=file]');
	input.addEventListener('change', function () {
    	var file = input.files[0];
	    drawOnCanvas(file);
	});

	function drawOnCanvas(file) {
		// We use the File APi to read the content of the input file element
	   var reader = new FileReader();

	    // On reader load with parse the content and draw it on Canvas
	    reader.onload = function (e) {
	        var dataURL = e.target.result;
	        /*$('#imageContainer').append('<img src = '+ dataURL +' id ="imageId">');*/
	        $('#tempImage').attr("src", dataURL);
	    };

	    reader.readAsDataURL(file);
	}
});