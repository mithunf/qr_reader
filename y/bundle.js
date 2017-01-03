/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	"use strict";

/***/ }
/******/ ]);