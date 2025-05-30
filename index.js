function showMultipleAlerts() {
  const messages = [
    "Halo Sun,..",
    "Hope you enjoy it",
    "Have a nice day pretty girl"
  ];
  for (let i = 0; i < messages.length; i++) {
    alert(messages[i]);
  }
}

// Reveal hidden text on click
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("revealBtn");
  const hiddenText = document.getElementById("hiddenText");

  btn.addEventListener("click", function() {
    hiddenText.classList.toggle("show");
  });

  // Optional: reveal on hover
  // btn.addEventListener("mouseenter", function() {
  //   hiddenText.classList.add("show");
  // });
  // btn.addEventListener("mouseleave", function() {
  //   hiddenText.classList.remove("show");
  // });
});