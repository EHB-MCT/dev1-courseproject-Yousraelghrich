"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

// Array om de cirkels op te slaan
let circles = [];

//random cirkel te tekenen op het canvas
function drawRandomCircle(x, y, radius, color) {
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

function createRandomCircle() {
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let radius = Math.random() * 50 + 10;
	let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
		Math.random() * 256
	)}, ${Math.floor(Math.random() * 256)})`;

	return {
		x,
		y,
		radius,
		color,
		a: Math.random() * 2 - 1,
		b: Math.random() * 2 - 1,
		isHovered: false,
	};
}

//achtergrond zwart
function backGround() {
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

// space invader
function drawRectangles() {
	const size = 50;

	context.fillStyle = "#00FF00";
	// 1ste rij
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

//animatie
function animate() {
	backGround();
	circles.forEach((circle) => {
		circle.x += circle.a;
		circle.y += circle.b;

		// Als de cirkel de rand van het canvas raakt andere richting letsgooooo
		if (
			circle.x + circle.radius > canvas.width ||
			circle.x - circle.radius < 0
		) {
			circle.a = -circle.a;
		}
		if (
			circle.y + circle.radius > canvas.height ||
			circle.y - circle.radius < 0
		) {
			circle.b = -circle.b;
		}

		// Controleer of de muis over de cirkel > kleur verandering periodddd
		if (isMouseOverCircle(circle)) {
			if (!circle.isHovered) {
				circle.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
					Math.random() * 256
				)}, ${Math.floor(Math.random() * 256)})`;
				circle.isHovered = true;
			}
		} else {
			circle.isHovered = false;
		}

		drawRandomCircle(circle.x, circle.y, circle.radius, circle.color);
	});

	drawRectangles();

	requestAnimationFrame(animate);
}

function isMouseOverCircle(circle) {
	const mouseX = mousePosition.x;
	const mouseY = mousePosition.y;
	const distance = Math.sqrt(
		Math.pow(mouseX - circle.x, 2) + Math.pow(mouseY - circle.y, 2)
	);
	return distance < circle.radius;
}

// Mouse
let mousePosition = { x: 0, y: 0 };
window.addEventListener("mousemove", (event) => {
	mousePosition.x = event.x;
	mousePosition.y = event.y;
});

window.addEventListener("load", () => {
	backGround();

	for (let i = 0; i < 250; i++) {
		circles.push(createRandomCircle());
	}

	animate();
});
