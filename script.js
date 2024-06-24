document.addEventListener("DOMContentLoaded", function () {
  const responseElement = document.getElementById("computer-response");
  const formElement = document.getElementById("name-form");
  const inputElement = document.getElementById("user-input");

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = inputElement.value.trim().toLowerCase();
    const enemies = ["plankton", "moe", "larry"]; // Add your enemies' names here in lowercase

    if (enemies.includes(userName)) {
      responseElement.textContent = "Go away!";
      responseElement.style.color = "red"; // Emphasize the enemy response
    } else {
      responseElement.textContent = `Hello, ${userName}!`;
      responseElement.style.color = "green"; // Emphasize the friend response
    }

    inputElement.value = ""; // Clear the input field
  });
});

// based on the name entered
