function showMessage() {
  document.getElementById("secret").style.display = "block";
}

const audio = document.getElementById("loveAudio");
const progressBar = document.getElementById("progressBar");
const button = document.querySelector(".play-button");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    button.textContent = "⏸️";
  } else {
    audio.pause();
    button.textContent = "▶️";
  }
}

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
});

audio.addEventListener("ended", () => {
  button.textContent = "▶️";
  progressBar.style.width = "0%";
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);

// Sparkles and floating hearts
const sparkleCount = 20;
const heartCount = 10;
const background = document.querySelector(".background-effects");

for (let i = 0; i < sparkleCount; i++) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.animationDuration = 6 + Math.random() * 5 + "s";
  background.appendChild(s); // ✅ Append to background
}

for (let i = 0; i < heartCount; i++) {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.top = Math.random() * 100 + "vh";
  h.style.animationDuration = 10 + Math.random() * 10 + "s";
  background.appendChild(h); // ✅ Append to background
}
