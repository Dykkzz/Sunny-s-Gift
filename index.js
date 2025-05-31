function showMultipleAlerts() {
  const messages = [
    "Halo Sun,..",
    "Hope you like it",
    "Have a nice day pretty girl"
  ];
  for (let i = 0; i < messages.length; i++) {
    alert(messages[i]);
  }
}

// Reveal hidden text on click
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("revealBtn");
  const hiddenText = document.getElementById("hiddenText");

  btn.addEventListener("click", function () {
    const isVisible = hiddenText.classList.contains("show");
    hiddenText.classList.toggle("show");
    if (!isVisible) {
      alert("SCROLL DOWN PLEASE :)");
      hiddenText.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Optional: reveal on hover
  // btn.addEventListener("mouseenter", function() {
  //   hiddenText.classList.add("show");
  // });
  // btn.addEventListener("mouseleave", function() {
  //   hiddenText.classList.remove("show");
  // });
});