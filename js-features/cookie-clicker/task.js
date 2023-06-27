let cookies = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let clickSpeedElement = document.getElementById('clicker__speed');
let curent = 0;

cookies.addEventListener('click', function () {
	curent++;
	if (curent > 30) {
		alert('Вы потратили время впустую!)');
		curent = 0;
	}
	counter.innerHTML = curent;
	let size = (curent % 2 === 0) ? '200px' : '170px';
	cookies.style.height = size;
	cookies.style.width = size;
});