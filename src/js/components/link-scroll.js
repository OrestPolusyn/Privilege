const itemLink = document.querySelectorAll('.privacy-policy__tab');

document.querySelectorAll('.privacy-policy__link[href^="#"]').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    itemLink.forEach(item => {
      item.classList.remove("privacy-policy__tab--active");
    });

    this.parentElement.classList.add("privacy-policy__tab--active");

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href),
      topOffset = document.querySelector('.privacy-policy__quick').offsetHeight,
      elementPosition = scrollTarget.getBoundingClientRect().top,
      offsetPosition = elementPosition - topOffset;


    windowScrollClick = window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});