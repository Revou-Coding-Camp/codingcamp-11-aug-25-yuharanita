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

// Form Validation
function sendMessage() {
  let userEmail = document.getElementById("user-email").value;
  let userMessage = document.getElementById("user-message").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email format
  if (!emailPattern.test(userEmail)) {
    document.getElementById("email-error").classList.remove("hidden");
  } else {
    document.getElementById("email-error").classList.add("hidden");
    // Validate message content
    if (userEmail && userMessage) {
      document.getElementById("message-error").classList.add("hidden");
      document.getElementById("message-success").classList.remove("hidden");
      document.getElementById("message-recap").classList.remove("hidden");
      document.getElementById("recap-email").textContent = userEmail;
      document.getElementById("recap-message").textContent = userMessage;
    } else {
      document.getElementById("message-error").classList.remove("hidden");
      document.getElementById("message-success").classList.add("hidden");
      document.getElementById("message-recap").classList.add("hidden");
    }
  }
}

// Responsive Navbar Toggle
function Menu(e) {
  let list = document.querySelector("ul");
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[60px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[60px]"),
      list.classList.remove("opacity-100"));
}
