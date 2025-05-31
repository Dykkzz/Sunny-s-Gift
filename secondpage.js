document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  let yesScale = 1;

  noBtn.addEventListener('click', function () {
    if (yesScale < 2) {
      yesScale = Math.min(yesScale + 0.1, 2);
      yesBtn.style.transform = `scale(${yesScale})`;
    }
  });

  yesBtn.addEventListener('click', function () {
    alert('Thank you! ❤️');
    window.location.href = 'https://www.example.com/'; // Change to your desired URL
  });
});