 const swiperHero = new Swiper('.swiper-slider', {
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   calculateHeight: true,
   speed: 500,
   slidesPerView: 1,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   loop: true,
   autoplay: 500,
   autoplayDisableOnInteraction: true
 });