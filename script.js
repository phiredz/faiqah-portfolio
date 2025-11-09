let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollingDown = scrollTop > lastScrollTop;
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (inView) {
      if (scrollingDown) {
        section.classList.add("down", "fade-in-down");
        section.classList.remove("up", "fade-in-up");
      } else {
        section.classList.add("up", "fade-in-up");
        section.classList.remove("down", "fade-in-down");
      }
    } else {
      section.classList.remove("fade-in-down", "fade-in-up");
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
