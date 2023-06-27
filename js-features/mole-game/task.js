const hole = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

let killedMole = 0;
let miss = 0;

hole.forEach(holes => {
	holes.addEventListener('click', function () {
		const plus = holes.className.includes('hole_has-mole');
		if (plus) {
			killedMole++;
			dead.textContent = killedMole;
		} else {
			miss++
			lost.textContent = miss;
		}
		if (killedMole >= 10) {
			alert("Вы выйграли!");
			resetGame();
		} else if (miss >= 5) {
			alert('Слишком много промахов. Попробуйте ещё раз!');
			resetGame();
		}
	})
})

function resetGame() {
	killedMole = 0;
	miss = 0;
	dead.textContent = killedMole;
	lost.textContent = miss;
}