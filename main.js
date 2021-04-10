//Copyright Code written by Suleyman Mulayim//

var imageArray = ["/images/Bart-Simpson-01-icon.png","/images/Bart-Simpson-02-Skate-icon.png",
	"/images/Bart-Simpson-03-Scare-icon.png", "/images/Bart-Simpson-04-Bartman-icon.png",
	"/images/Bart-Simpson-05-Greeting-icon.png", "/images/Bart-Simpson-06-Nirvana-Nevermind-icon.png",
	"/images/Homer-Simpson-01-Donut-icon.png" , "/images/Homer-Simpson-02-Donut-icon.png",
	"/images/Homer-Simpson-03-Beer-icon.png", "/images/Homer-Simpson-04-Happy-icon.png",
	"/images/Homer-Simpson-05-The-Incredible-Homer-icon.png", "/images/Lisa-Simpson-icon.png",
	"/images/Maggie-Simpson-icon.png", "/images/Marge-Simpson-icon.png",
	"/images/The-Simpsons-01-icon.png", "/images/The-Simpsons-02-icon.png",
	"/images/The-Simpsons-03-icon.png", "/images/The-Simpsons-04-icon.png",
	"/images/Bart-Simpson-01-icon.png","/images/Bart-Simpson-02-Skate-icon.png",
	"/images/Bart-Simpson-03-Scare-icon.png", "/images/Bart-Simpson-04-Bartman-icon.png",
	"/images/Bart-Simpson-05-Greeting-icon.png", "/images/Bart-Simpson-06-Nirvana-Nevermind-icon.png",
	"/images/Homer-Simpson-01-Donut-icon.png" , "/images/Homer-Simpson-02-Donut-icon.png",
	"/images/Homer-Simpson-03-Beer-icon.png", "/images/Homer-Simpson-04-Happy-icon.png",
	"/images/Homer-Simpson-05-The-Incredible-Homer-icon.png", "/images/Lisa-Simpson-icon.png",
	"/images/Maggie-Simpson-icon.png", "/images/Marge-Simpson-icon.png",
	"/images/The-Simpsons-01-icon.png", "/images/The-Simpsons-02-icon.png",
	"/images/The-Simpsons-03-icon.png", "/images/The-Simpsons-04-icon.png"
];

var opened = [];

function randomShuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
var moves = 0;
var boxes = document.getElementsByClassName("boxes");
for (let i = 0; i < boxes.length; i++) {

	boxes[i].onclick = function () {
		if(opened.length <= 1) {
		moves++;
		console.log("moves",moves);
		boxes[i].firstElementChild.classList.add("hideImg")
		boxes[i].style.pointerEvents = "none"
		opened.push(boxes[i]);
		if(opened.length%2===0)
		fcompareCards()
		}
	}
	
}

function fDeckCards() {
	const newArray = randomShuffle(imageArray)
	for (let index = 0; index < boxes.length; index++) {
		boxes[index].lastElementChild.src = newArray[index];
		
	}
}

function match() {
	var matchedImg = []
		matchedImg[0] = opened[0].lastElementChild
		matchedImg[1] = opened[1].lastElementChild
		matchedImg[0].classList.add("match")
		matchedImg[1].classList.add("match")
		document.body.style.pointerEvents = "auto";
		opened = [];
		
}

function noMatch() {
	var defaultImg = []
	defaultImg[0] = opened[0].firstElementChild
	defaultImg[1] = opened[1].firstElementChild
	opened[0].lastElementChild.classList.add("notmatch")
	opened[1].lastElementChild.classList.add("notmatch")
	
	
	disable();
	setTimeout(function () {
		defaultImg[0].classList.remove('hideImg');
		defaultImg[1].classList.remove('hideImg');
		opened[0].style.pointerEvents = "auto";
		opened[1].style.pointerEvents = "auto";
		document.body.style.pointerEvents = "auto";
		opened = []

	}, 2000);
}

function disable(){
	Array.prototype.filter.call(boxes, function(box) {
		box.classList.add('disabled');
	});
}

function fcompareCards() {
	if (opened.length === 2 && moves === 2) {
		document.body.style.pointerEvents = "none";
	}
	if (opened.length === 2 && opened[0].lastElementChild.src === opened[1].lastElementChild.src) {
		match();
	} else if (opened.length === 2 && opened[0].lastElementChild.src != opened[1].lastElementChild.src) {
		noMatch();
	}
	console.log(opened)
	moves=0;
}

