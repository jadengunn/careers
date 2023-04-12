// Initialize AOS
AOS.init();

// Initialize Rellax
var rellax = new Rellax('.rellax');

var deloitte = document.querySelector('img[alt="Deloitte"]');
var ey = document.querySelector('img[alt="EY"]');
var kpmg = document.querySelector('img[alt="KPMG"]');
var kearney = document.querySelector('img[alt="Kearney and Company"]');

deloitte.addEventListener('click', function() {
	window.location.href = 'deloitte.html';
});

ey.addEventListener('click', function() {
	window.location.href = 'ey.html';
});

kpmg.addEventListener('click', function() {
	window.location.href = 'kpmg.html';
});

kearney.addEventListener('click', function() {
	window.location.href = 'kearney.html';
});