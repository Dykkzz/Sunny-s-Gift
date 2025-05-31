document.addEventListener("DOMContentLoaded", function () {
  // Disable browser caching using meta tags (for HTML) and force reload once using sessionStorage
  if (!sessionStorage.getItem('secondpageRefreshed')) {
    sessionStorage.setItem('secondpageRefreshed', 'true');
    // Add cache-busting query param to force reload from server
    location.replace(window.location.pathname + '?nocache=' + Date.now());
    return;
  }

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
    // Redirect to another page with a unique query parameter to force a full refresh
    window.location.href = 'thirdpage.html?refresh=' + Date.now(); // Change 'thirdpage.html' to your target page
  });
});