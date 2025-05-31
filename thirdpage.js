document.addEventListener("DOMContentLoaded", function () {
  const bookText = document.getElementById('bookText');
  const pages = Array.from(bookText.querySelectorAll('.book-page'));
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentPage = 0;
  let isAnimating = false;

  function showPage(index) {
    pages.forEach((el, i) => {
      el.style.display = i === index ? '' : 'none';
    });
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
  }

  // Initial page
  showPage(currentPage);

  function animateToPage(newIndex) {
    if (isAnimating || newIndex === currentPage) return;
    isAnimating = true;

    bookText.classList.remove('fade-in');
    bookText.classList.add('fade-out');

    setTimeout(() => {
      currentPage = newIndex;
      showPage(currentPage);
      bookText.classList.remove('fade-out');
      bookText.classList.add('fade-in');
      setTimeout(() => {
        isAnimating = false;
      }, 400);
    }, 400);
  }

  nextBtn.addEventListener('click', function () {
    animateToPage((currentPage + 1) % pages.length);
  });

  prevBtn.addEventListener('click', function () {
    if (currentPage > 0) {
      animateToPage(currentPage - 1);
    }
  });

  // --- Swipe gesture support ---
  let touchStartX = null;
  let touchEndX = null;
  const minSwipeDistance = 50; // px

  bookText.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  });

  bookText.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    touchEndX = e.changedTouches[0].clientX;
    const dx = touchEndX - touchStartX;

    if (Math.abs(dx) > minSwipeDistance) {
      if (dx < 0) {
        animateToPage((currentPage + 1) % pages.length);
      } else if (dx > 0 && currentPage > 0) {
        animateToPage(currentPage - 1);
      }
    }
    touchStartX = null;
    touchEndX = null;
  });
});