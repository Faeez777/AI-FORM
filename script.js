const popupOverlay = document.getElementById("popupOverlay");
const registerButton = document.getElementById("hello");
const form = document.querySelector("form");

registerButton.addEventListener("click", function (e) {
  e.preventDefault(); // Stop the form from submitting

  if (form.checkValidity()) {
    // If form is valid, show popup
    popupOverlay.style.display = "flex";
  } else {
    // Let the browser show validation errors
    form.reportValidity();
  }
});

form.addEventListener("submit", function (e) {
  const emailInput = form.querySelector('input[type="email"]');
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
  if (emailInput) {
    if (!gmailPattern.test(emailInput.value)) {
      e.preventDefault();
      emailInput.setCustomValidity(
        "Please enter a valid @gmail.com email address."
      );
      emailInput.reportValidity();
      emailInput.focus();
    } else {
      emailInput.setCustomValidity(""); // Clear custom error if valid
    }
  }
});
