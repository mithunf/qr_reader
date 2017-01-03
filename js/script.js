// import QrCode from 'qrcode-reader';
// import $ from 'jquery';


// var qr = new QrCode();

// $(document).ready(function() {

// 	qr.callback = function(result,err) {
// 			if( result ) {
// 				console.log("result : " + result);	
// 				$('#imageContainer').append(result);
// 			}
// 			if( err ) {
// 				console.log("error : " + err);
// 				$('#imageContainer').append(err);
// 			}
		 	
		 		
// 	   }

// 	var canvas =  document.getElementById("qr-canvas");
// 	var ctx = canvas.getContext("2d");

// 	var input = document.querySelector('input[type=file]');
// 	input.addEventListener('change', function () {
//     	var file = input.files[0];
// 	    check(file);
// 	});

// 	function check(file) {

// 	   var reader = new FileReader();

// 	   reader.onload = function (e) {
// 	     var dataURL = e.target.result;
// 	        $('#tempImage').attr("src", dataURL);
// 			/*$('#tempImage').css("display","none");*/	        
// 	        var img =  document.getElementById('tempImage');
// 	        img.onload = function() {
// 	        	ctx.drawImage(img,0,0,150,180);
// 	      		qr.decode();
// 	        };
	        
// 	    }; 
// 	    reader.readAsDataURL(file);
// 	}


// });


