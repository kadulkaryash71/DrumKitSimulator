// Listening to click events
document.querySelectorAll('.drum').forEach( elem => {
	elem.addEventListener("click", actionOnClick);
})

const actionOnClick = (e) => makeSound(e.target.innerHTML);

// Listeneing to keyboard events
document.addEventListener(
	"keydown", actionOnKeypress
);

const actionOnKeypress = (e) => makeSound(e.key);


const addStyle = (key) => {
	const elem = document.querySelector("." + key);
	elem.classList.add("pressed");
	setInterval(() => elem.classList.remove("pressed"), 100);
}

function makeSound(key) {
	addStyle(key);
	switch(key) {
		case 'w':
			(new Audio('sounds/tom-1.mp3')).play();
			break;
		case 'a':
			(new Audio('sounds/tom-2.mp3')).play();
			break;
		case 's':
			(new Audio('sounds/tom-3.mp3')).play();
			break;
		case 'd':
			(new Audio('sounds/tom-4.mp3')).play();
			break;
		case 'j':
			(new Audio('sounds/snare.mp3')).play();
			break;
		case 'k':
			(new Audio('sounds/kick-bass.mp3')).play();
			break;
		case 'l':
			(new Audio('sounds/crash.mp3')).play();
			break;
		default:
			break;
	}
}