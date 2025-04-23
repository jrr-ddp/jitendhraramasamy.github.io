/*==================== SCROLLING COUNTER ====================*/
function animateCounter(element, end, duration = 2000) {
    let start = 0;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = (current < 10 ? `0${current}` : `${current}`) + '+';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = `${end < 10 ? '0' + end : end}+`;
      }
    };

    window.requestAnimationFrame(step);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".home__info-number");
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      animateCounter(counter, target, 2000); // adjust duration here
    });
  });

  /*==================== DYNAMIC YEAR UPDATE ====================*/

  document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  });