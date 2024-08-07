const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to the WebSocket server");
};

ws.onmessage = (event) => {
  console.log("Received message:", event.data);
  try {
    const data = JSON.parse(event.data);
    displayMessage(data.message);
  } catch (e) {
    displayMessage(event.data);
  }
};

ws.onclose = () => {
  console.log("Disconnected from the WebSocket server");
};

function sendMessage() {
  const messageInput = document.getElementById("message");
  const message = messageInput.value;

  console.log("Sending message:", message);

  if (message !== "") {
    ws.send(message);
    messageInput.value = "";
  }
}

function displayMessage(message) {
  console.log("Displaying message:", message);
  const output = document.getElementById("output");
  output.innerHTML += `<p>${message}</p>`;
  output.scrollTop = output.scrollHeight;
}
                                                                                                                                                                                                                                                                    