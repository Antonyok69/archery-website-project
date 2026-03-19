const contactButton = document.getElementById("contactButton");
const message = document.getElementById("message");

contactButton.addEventListener("click", function () {
  message.textContent = "Thank you for your interest. Our team will get back to you soon.";
});