let min = 1;
let max = 100;

let tries = 1;

let guess = Math.floor((min + max) / 2);

const guessDisplay = document.getElementById('guessDisplay');
const minDisp = document.getElementById('minDisp');
const maxDisp = document.getElementById('maxDisp');
const triesDisplay = document.getElementById('tries');
const hintText = document.getElementById('hintText');

const btnSmaller = document.getElementById('btnSmaller');
const btnGreater = document.getElementById('btnGreater');
const btnCorrect = document.getElementById('btnCorrect');
const btnRestart = document.getElementById('btnRestart');

function updateDisplay() {
  guessDisplay.textContent = guess;
  minDisp.textContent = min;
  maxDisp.textContent = max;
  triesDisplay.textContent = tries;
}

btnSmaller.addEventListener('click', () => {
  max = guess - 1;
  tries++;
  guess = Math.floor((min + max) / 2);
  updateDisplay();
});

btnGreater.addEventListener('click', () => {
  min = guess + 1;
  tries++;
  guess = Math.floor((min + max) / 2);
  updateDisplay();
});

btnCorrect.addEventListener('click', () => {
  hintText.textContent = `Deine Nummer ist: ${guess} in ${tries} Versuchen`;
});

btnRestart.addEventListener('click', () => {
  location.reload();
});

  updateDisplay();