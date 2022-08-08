const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over h1");
const clouds = document.querySelector(".clouds");

const jump = (event) => {
  event.preventDefault();
  if (event.keyCode === 32) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 800);
  }
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  const cloudPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = `./img/game-over.png`;
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";
    gameOver.style.display = "block";
    clouds.style.animation = "none";
    clouds.style.left = `${cloudPosition}px`;

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keypress", jump);
