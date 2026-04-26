

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
			musicBtn.textContent = '🎵 Pause Friendship Song';
		} else {
			music.pause();
			musicBtn.textContent = '🎵 Play Friendship Song';
		}
		musicOn = !musicOn;
	});
}

// Animated Glowing Particles
function createGlowingParticles() {
	const particles = document.getElementById('particles');
	for (let i = 0; i < 24; i++) {
		const p = document.createElement('div');
		p.className = 'particle';
		const size = Math.random() * 18 + 12;
		p.style.width = `${size}px`;
		p.style.height = `${size}px`;
		p.style.position = 'absolute';
		p.style.top = `${Math.random() * 100}vh`;
		p.style.left = `${Math.random() * 100}vw`;
		p.style.background = `radial-gradient(circle, #ff4da6 0%, #7f53ac 80%, transparent 100%)`;
		p.style.opacity = Math.random() * 0.4 + 0.2;
		p.style.borderRadius = '50%';
		p.style.filter = 'blur(2px)';
		p.style.animation = `float ${Math.random() * 8 + 8}s ease-in-out infinite`;
		particles.appendChild(p);
	}
}

// Floating Hearts Animation
function createFloatingHearts() {
	const hearts = document.getElementById('floating-hearts');
	for (let i = 0; i < 16; i++) {
		const h = document.createElement('div');
		h.className = 'floating-heart';
		h.innerHTML = '❤️';
		h.style.position = 'absolute';
		h.style.left = `${Math.random() * 100}vw`;
		h.style.bottom = `-${Math.random() * 40 + 20}px`;
		h.style.fontSize = `${Math.random() * 24 + 18}px`;
		h.style.opacity = Math.random() * 0.5 + 0.3;
		h.style.animation = `heartFloat ${Math.random() * 8 + 8}s linear infinite`;
		h.style.animationDelay = `${Math.random() * 8}s`;
		hearts.appendChild(h);
	}
}

// Add keyframes for hearts and particles
const style = document.createElement('style');
style.innerHTML = `
@keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-40px); } 100% { transform: translateY(0); } }
@keyframes heartFloat { 0% { transform: translateY(0) scale(1); opacity: 1; } 80% { opacity: 0.7; } 100% { transform: translateY(-110vh) scale(1.2); opacity: 0; } }
`;
document.head.appendChild(style);
createGlowingParticles();
createFloatingHearts();

// Responsive confetti canvas
window.addEventListener('resize', () => {
	confettiCanvas.width = window.innerWidth;
	confettiCanvas.height = window.innerHeight;
});

// Gallery Slider
const gallerySlider = document.getElementById('gallery-slider');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
if (gallerySlider && galleryPrev && galleryNext) {
	let scrollAmount = 0;
	galleryPrev.addEventListener('click', () => {
		gallerySlider.scrollBy({ left: -220, behavior: 'smooth' });
	});
	galleryNext.addEventListener('click', () => {
		gallerySlider.scrollBy({ left: 220, behavior: 'smooth' });
	});
}
