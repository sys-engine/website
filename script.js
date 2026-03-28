const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");
const firstChapter = document.querySelector(".chapter");
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.25 }
);

revealEls.forEach((el) => observer.observe(el));

startBtn.addEventListener("click", async () => {
  try {
    bgMusic.volume = 0;
    await bgMusic.play();

    const fade = setInterval(() => {
      if (bgMusic.volume < 0.75) {
        bgMusic.volume = Math.min(0.75, bgMusic.volume + 0.05);
      } else {
        clearInterval(fade);
      }
    }, 200);
  } catch (error) {
    console.log("Audio could not start:", error);
  }

  firstChapter.scrollIntoView({ behavior: "smooth", block: "start" });
});