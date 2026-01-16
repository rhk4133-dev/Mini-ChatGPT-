const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Enter key support
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = botReply(text);
    addMessage(reply, "bot");
  }, 400);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = "message " + sender;
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hi 👋 How can I help you?";
  }

  if (msg.includes("how are you")) {
    return "I'm fine 😄 Built using pure JavaScript.";
  }

  if (msg.includes("your name")) {
    return "I'm a Mini ChatBot, not real ChatGPT.";
  }

  if (msg.includes("who made you")) {
    return "I was built using HTML, CSS and JavaScript.";
  }

  if (msg.includes("help")) {
    return "I can answer basic questions. No internet, no API.";
  }

  if (msg.includes("bye")) {
    return "Bye 👋 Have a good day!";
  }

  // Random replies for unknown input
  const randomReplies = [
    "I don't understand that yet 🤔",
    "Try asking something simple.",
    "I'm still learning 😅",
    "That sounds interesting.",
    "Can you explain more?"
  ];

  return randomReplies[Math.floor(Math.random() * randomReplies.length)];
}

  
