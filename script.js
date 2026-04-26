
// Confetti Animation
function launchConfetti() {
	const canvas = document.getElementById('confetti-canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let confetti = [];
	for (let i = 0; i < 120; i++) {
		confetti.push({
			x: Math.random() * canvas.width,
			y: Math.random() * -canvas.height,
			r: Math.random() * 7 + 4,
			d: Math.random() * 120 + 40,
			color: `hsl(${Math.random()*360}, 90%, 60%)`,
			tilt: Math.random() * 10 - 10
		});
	}
	let angle = 0;
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		angle += 0.01;
		for (let i = 0; i < confetti.length; i++) {
			let c = confetti[i];
			ctx.beginPath();
			ctx.ellipse(c.x, c.y, c.r, c.r/2, c.tilt, 0, 2 * Math.PI);
			ctx.fillStyle = c.color;
			ctx.fill();
			c.y += (Math.cos(angle + c.d) + 2 + c.r/2) * 0.9;
			c.x += Math.sin(angle) * 2;
			c.tilt += Math.random() * 0.2 - 0.1;
			if (c.y > canvas.height) {
				c.x = Math.random() * canvas.width;
				c.y = Math.random() * -20;
			}
		}
		requestAnimationFrame(draw);
	}
	draw();
	setTimeout(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}, 3500);
}

// Surprise Button
const surpriseBtn = document.getElementById('surprise-btn');
const hiddenMsg = document.getElementById('hidden-message');
const confettiCanvas = document.getElementById('confetti-canvas');
if (surpriseBtn) {
	surpriseBtn.addEventListener('click', () => {
		hiddenMsg.classList.add('show');
		launchConfetti();
		setTimeout(() => {
			hiddenMsg.classList.remove('show');
		}, 7000);
	});
}

// Music Toggle
const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('birthday-music');
let musicOn = false;
if (musicBtn && music) {
	musicBtn.addEventListener('click', () => {
		if (!musicOn) {
			music.play();
			musicBtn.textContent = '🎵 Music ON';
		} else {
			music.pause();
			musicBtn.textContent = '🎵 Music OFF';
		}
		musicOn = !musicOn;
	});
}

// Floating Particles
function createParticles() {
	for (let i = 0; i < 18; i++) {
		const particle = document.createElement('div');
		particle.className = 'particle';
		const size = Math.random() * 18 + 8;
		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.background = `radial-gradient(circle, #ff4da6 0%, #7f53ac 80%, transparent 100%)`;
		particle.style.top = `${Math.random() * 100}vh`;
		particle.style.left = `${Math.random() * 100}vw`;
		particle.style.opacity = Math.random() * 0.5 + 0.2;
		particle.style.animation = `float ${Math.random() * 8 + 8}s ease-in-out infinite`;
		document.body.appendChild(particle);
	}
}

// Floating animation
const style = document.createElement('style');
style.innerHTML = `@keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-40px); } 100% { transform: translateY(0); } }`;
document.head.appendChild(style);
createParticles();

// Responsive confetti canvas
window.addEventListener('resize', () => {
	confettiCanvas.width = window.innerWidth;
	confettiCanvas.height = window.innerHeight;
});
