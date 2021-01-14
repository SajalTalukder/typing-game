let x = `
Ready to start building GitHub is built for collaboration. Set up an organization to improve the way your Using the Hello World guide, you’ll create a repository, start Discover interesting projects and people to populate your personal news feed.
Your news feed helps you keep up with recent activity on repositories you watch and people you follow.

 a branch, write comments, and open a pull request. team works together, and get access to more features. Create a repository for a new idea or bring over an existing repository to keep contributing to it.

`;
const wordArr = x.trim().split(" ");

const wordInp = document.getElementById("wordInp");
const word = document.getElementById("word");
const select = document.getElementById("select");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const start = document.getElementById("start");
let isPlaying = false;
start.addEventListener("click", () => {
  if (!isPlaying) {
    wordInp.focus();
    showWord();
    const interval = setInterval(updateTime, 1000);
    function updateTime() {
      time--;
      timeEl.innerHTML = `Time Left : ${time}s`;

      if (time <= 0) {
        clearInterval(interval);
        gameOver();
      }
    }
    isPlaying = true;
  } else {
    return;
  }
});

let score = 0;
let time = 10;
let random;

function randomWord() {
  return wordArr[Math.floor(Math.random() * wordArr.length)];
}
function showWord(typeWord) {
  random = randomWord();
  word.innerHTML = random;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = `Score : ${score}`;
}

function gameOver() {
  const gameContainer = document.querySelector(".container");
  gameContainer.innerHTML = `Gameover!!! Your Score ${score}<br><form><button class="reload" type="submit">Reload</button></form>`;
}

wordInp.addEventListener("input", (e) => {
  let typedWord = e.target.value;
  const option = select.value;
  if (typedWord == random) {
    showWord();
    updateScore();
    e.target.value = "";
    if (option === "hard") {
      time += 2;
    } else if (option === "medium") {
      time += 3;
    } else {
      time += 4;
    }
  }
});
