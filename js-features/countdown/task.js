const countDownElement = document.getElementById("timer");

let time = 59;
let timer = setInterval(() => {
	time--;
	countDownElement.textContent = time;
	if (time < 0) {
        alert("Вы победили в конкурсе!");
		clearInterval(timer);
	}
}, 1000)
