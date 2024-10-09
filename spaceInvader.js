"use strict";

//alert("Draw your space invader here");

backGround();

function backGround() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.fillRect(50, 50, 300, 300);
	context.fillStyle = "black";
	context.fill();
	context.stroke();
}
