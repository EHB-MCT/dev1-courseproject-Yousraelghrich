"use strict";

//alert("Draw your space invader here");
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

backGround();
signature();
//drawRectangles();

function backGround() {
	context.beginPath();
	context.fillRect(55, 55, 300, 300);
	context.fillStyle = "black";
	context.fill();
	context.stroke();
}

function signature() {
	// 1ste rij
	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(80, 150, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(80, 200, 50, 50);
	context.fill();

	//2de rij

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(130, 100, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(130, 150, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(130, 200, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(130, 250, 50, 50);
	context.fill();

	//midden

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(180, 200, 50, 50);
	context.fill();

	//3DE RIJ

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(230, 100, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(230, 150, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(230, 200, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(230, 250, 50, 50);
	context.fill();

	// 4DE RIJ

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(280, 150, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#00FF00";
	context.rect(280, 200, 50, 50);
	context.fill();
}

/* function signature() {
	context.beginPath();
	context.fillStyle = color;
	context.rect(x, y, width, height);
	context.fill();
	context.stroke();
    
}

function drawRectangles() {
	var color = "green";

	drawRectangle(50, 50, 500, 200, color);
	drawRectangle(50, 50, 100, 200, color);
	drawRectangle(50, 50, 100, 200, color);
	drawRectangle(50, 50, 100, 200, color);
}
*/
