let clickCount = 0;
const giftBox = document.getElementById("giftBox");
const message = document.getElementById("message");

// Cambia esto por la URL sorpresa
const finalURL = "https://angel4to.github.io";

const messages = [
  "⚠️¡GIRA LA PANTALA EN HORIZOTAL⚠️!",
  "¡Qué emoción!",
  "¿Preparado para la sorpresa?",
  "¡Ya casi llegas!",
  "Solo un poco más...",
  "¡Último clic!"
];

giftBox.addEventListener("click", () => {
  clickCount++;

 
  giftBox.style.transform = "scale(1.2)";
  setTimeout(() => {
    giftBox.style.transform = "scale(1)";
  }, 150);

  if (clickCount <= messages.length) {
    message.textContent = messages[clickCount - 1];
  }

  if (clickCount > messages.length) {
    window.location.href = finalURL;
  }
});
