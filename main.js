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

window.addEventListener("load", () => {
	drawRandomCircle();
});
