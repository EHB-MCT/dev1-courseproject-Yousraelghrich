"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext("2d");

let circles = [];

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
		isHovered: false, // Voeg een flag toe om te checken of de muis over de cirkel is
	};
}

function backGround() {
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
	backGround();
	circles.forEach((circle) => {
		circle.x += circle.a;
		circle.y += circle.b;

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

		// Controleer of de muis over de cirkel is en verander de kleur alleen als dat het geval is
		if (isMouseOverCircle(circle)) {
			if (!circle.isHovered) {
				circle.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
					Math.random() * 256
				)}, ${Math.floor(Math.random() * 256)})`;
				circle.isHovered = true; // Zet de flag naar true
			}
		} else {
			circle.isHovered = false; // Zet de flag naar false als de muis niet meer over de cirkel is
		}

		drawRandomCircle(circle.x, circle.y, circle.radius, circle.color);
	});

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
