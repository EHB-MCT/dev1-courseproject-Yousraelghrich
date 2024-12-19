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
		isHovered: false, // checken of de muis over de cirkel is
	};
}

// achtergrond zwart
function backGround() {
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
}

// Animatie
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
				// Als de cirkel nog niet is gehighlight, verander de kleur
				circle.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
					Math.random() * 256
				)}, ${Math.floor(Math.random() * 256)})`;
				circle.isHovered = true; // Zet de flag naar true
			}
		} else {
			circle.isHovered = false; // false als het niet meer op de cirkel staat
		}

		drawRandomCircle(circle.x, circle.y, circle.radius, circle.color);
	});

	requestAnimationFrame(animate);
}

//  controleren of de muis boven een cirkel is
function isMouseOverCircle(circle) {
	const mouseX = mousePosition.x;
	const mouseY = mousePosition.y;
	// Berekenen afstand tussen de muis en het midden van de cirkel
	const distance = Math.sqrt(
		Math.pow(mouseX - circle.x, 2) + Math.pow(mouseY - circle.y, 2)
	);
	return distance < circle.radius;
}

//muispositie
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
