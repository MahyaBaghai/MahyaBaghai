const terminalContent = [
  {text: "Hello, I'm [Your Name]!", delay: 1000},
  {text: "Full-stack developer | AI enthusiast", delay: 1500},
  {text: "Check out my projects below ↓", delay: 2000}
];

let currentLine = 0;
let charIndex = 0;
const terminalOutput = document.getElementById('terminal-output');
const typingText = document.getElementById('typing-text');

function typeText() {
  if (currentLine < terminalContent.length) {
    if (charIndex < terminalContent[currentLine].text.length) {
      typingText.textContent += terminalContent[currentLine].text.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 50);
    } else {
      terminalOutput.innerHTML += `<div>> ${typingText.textContent}</div>`;
      typingText.textContent = "";
      charIndex = 0;
      currentLine++;
      setTimeout(typeText, terminalContent[currentLine-1].delay);
    }
  } else {
    setTimeout(() => {
      terminalOutput.innerHTML = "";
      currentLine = 0;
      charIndex = 0;
      typeText();
    }, 3000);
  }
}

document.addEventListener('DOMContentLoaded', typeText);