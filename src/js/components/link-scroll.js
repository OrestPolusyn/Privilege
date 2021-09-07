document.querySelectorAll('a[href^="#"').forEach(link => {
 
 

  link.addEventListener('click', function (e) {
    e.preventDefault();

    this.parentElement.classList.add("privacy-policy__tab--active");

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.privacy-policy__quick').offsetHeight;
    // const topOffset = 0; 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;


    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});