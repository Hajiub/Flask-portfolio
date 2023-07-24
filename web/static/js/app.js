const textArray = ["I'm a Developer", "I'm a Coder", "I'm a Dreamer"];
let index = 0;
let letterIndex = 0;
let typingInterval;

function type() {
  const currentText = textArray[index];
  const letter = currentText.slice(0, ++letterIndex);

  document.querySelector('.text').textContent = letter;

  if (letter.length === currentText.length) {
    clearInterval(typingInterval);
    setTimeout(() => {
      typingInterval = setInterval(deleteText, 50);
    }, 1000);
  }
}

function deleteText() {
  const currentText = textArray[index];
  const letter = currentText.slice(0, --letterIndex);

  document.querySelector('.text').textContent = letter;

  if (letter.length === 0) {
    clearInterval(typingInterval);
    if (index === textArray.length - 1) {
      index = 0;
    } else {
      index++;
    }
    letterIndex = 0;
    setTimeout(() => {
      typingInterval = setInterval(type, 100);
    }, 500);
  }
}

typingInterval = setInterval(type, 100);