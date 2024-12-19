"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

backGround();

drawRectangles();
// black rectangle
function backGround() {
	context.fillStyle = "black";
	context.fillRect(55, 55, 300, 300);
}

function drawRectangles() {
	const size = 50;

	// 1ste rij
	context.fillStyle = "#00FF00";
	context.fillRect(80, 150, size, size);
	context.fillRect(80, 200, size, size);

	// 2de rij
	context.fillRect(130, 100, size, size);
	context.fillRect(130, 150, size, size);
	context.fillRect(130, 200, size, size);
	context.fillRect(130, 250, size, size);

	// Middelste
	context.fillRect(180, 200, size, size);

	// 3de rij
	context.fillRect(230, 100, size, size);
	context.fillStyle = "#00FF00";
	context.fillRect(230, 150, size, size);
	context.fillStyle = "#00FF00";
	context.fillRect(230, 200, size, size);
	context.fillRect(230, 250, size, size);

	// 4de rij
	context.fillRect(280, 150, size, size);
	context.fillRect(280, 200, size, size);
}
//export function drawRectangles ();
