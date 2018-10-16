var $body,
	windowHeight,
	windowWidth,
	header,
	navPanel;

$(function() {
	$body = $('body');

});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	menuOffcanvas();
}

function resizeFunc() {
	updateSizes();
}

function scrollFunc() {
	
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}


// OFFCANVAS MENU ==================================================================
//==================================================================================/



// CUSTOM SELECT ===================================================================
//==================================================================================/
