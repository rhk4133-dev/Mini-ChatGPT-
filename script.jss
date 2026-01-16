const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Allow Enter key
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, "bot");
  }, 500);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userText) {
  userText = userText.toLowerCase();

  if (userText.includes("hi") || userText.includes("hello")) {
    return "Hi 👋 How can I help you?";
  }
  if (userText.includes("who are you")) {
    return "I am a Mini ChatGPT built using HTML, CSS and JS.";
  }
  if (userText.includes("help")) {
    return "Tell me what you want to build or learn.";
  }
  if (userText.includes("bye")) {
    return "Bye 👋 Come back later.";
  }

  return "I don't understand that yet 😐";
}
