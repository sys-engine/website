const screens = document.querySelectorAll(".screen");
const nextButtons = document.querySelectorAll(".next");
const music = document.getElementById("bgMusic");

let current = 0;

function showScreen(index) {
  screens.forEach(s => s.classList.remove("active"));
  screens[index].classList.add("active");
}

document.getElementById("startBtn").onclick = () => {
  music.volume = 0;
  music.play();
  let fade = setInterval(() => {
    if (music.volume < 0.8) music.volume += 0.05;
    else clearInterval(fade);
  }, 200);

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#f6c177', '#e89f71']
  });

  showScreen(1);
  current = 1;
};

nextButtons.forEach(btn => {
  btn.onclick = () => {
    current++;
    showScreen(current);

    if (screens[current].id === "final") {
      confetti({
        particleCount: 120,
        spread: 360,
        shapes: ['heart'],
        colors: ['#f6c177']
      });
    }
  };
});
function softCelebration() {
  confetti({
    particleCount: 12,
    spread: 60,
    startVelocity: 10,
    gravity: 0.6,
    ticks: 200,
    origin: {
      x: Math.random(),
      y: Math.random() * 0.6
    },
    colors: ['#f6c177', '#e89f71']
  });
}

setInterval(() => {
  if (screens[current].id === "birthday") {
    softCelebration();
  }
}, 1500);