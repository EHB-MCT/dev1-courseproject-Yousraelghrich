"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

// cirkels
function drawRandomCircle() {
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let radius = Math.random() * 50 + 10;

	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, 
                              ${Math.floor(Math.random() * 256)}, 
                              ${Math.floor(Math.random() * 256)})`; // willekeurige kleur
	context.fill();
}

// Functie om meerdere willekeurige cirkels te tekenen
function drawMultipleCircles(numberOfCircles) {
	for (let i = 0; i < numberOfCircles; i++) {
		drawRandomCircle();
	}
}

window.addEventListener("load", () => {
	// Teken bijvoorbeeld 20 willekeurige cirkels
	drawMultipleCircles(100);
});
