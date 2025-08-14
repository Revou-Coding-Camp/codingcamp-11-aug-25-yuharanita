welcomeSpeech();

function welcomeSpeech() {
  let userName = prompt("What is your name?");
  if (userName != "") {
    document.getElementById("user-greeting").textContent =
      ", " + userName + "!";
  } else {
    document.getElementById("user-greeting").textContent = "!";
  }
}

function sendMessage() {
  let userName = document.getElementById("user-name").value;
  let userEmail = document.getElementById("user-email").value;
  let userContact = document.getElementById("user-contact").value;
  let userMessage = document.getElementById("user-message").value;

  if (userName && userEmail && userMessage) {
    alert(
      `Thank you for your message, ${userName}! We will get back to you at ${userEmail}.`
    );
  } else {
    alert("Please fill in all required fields.");
  }
}
