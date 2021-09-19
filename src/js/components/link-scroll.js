const sections = Array.from(document.querySelectorAll("section[id]"));

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop,
      sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".privacy-policy__link[href*=" + sectionId + "]").classList.add("privacy-policy__link--active");
    } else {
      document.querySelector(".privacy-policy__link[href*=" + sectionId + "]").classList.remove("privacy-policy__link--active");
    }
  });
}