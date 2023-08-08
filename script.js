const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_IMG = "../static/images/chatbot.jpg";
const PERSON_IMG = "../static/images/you.jpg";
const BOT_NAME = "CHIX";
const PERSON_NAME = "You";

const predefinedResponses = {
  "hello": "Hello there! How can I help you?",
  "how are you": "I am fine until internet goes off",
  "who developed you?": "She is called Joyeuse, and she is a Software Developer",
  "goodbye": "Goodbye! Have a nice day!",
  "do you know a joke":"hhhhhh, You are funny"
  
};

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
  botResponse(msgText);
});

function botResponse(userInput) {
  const input = userInput.toLowerCase();
  let response = "I'm sorry, I don't understand that.";

  for (const keyword in predefinedResponses) {
    if (input.includes(keyword)) {
      response = predefinedResponses[keyword];
      break;
    }
  }

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", response);
  }, 1000);
}

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
