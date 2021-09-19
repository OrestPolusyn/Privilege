document.addEventListener("DOMContentLoaded", () => {
  const swiperHero = new Swiper('.swiper-slider', heroSliderConfig),

    swiperCatalog = new Swiper('.catalog__swiper', catalogSliderConfig),

    galleryPreview = new Swiper('.gallery__preview', galleryPreviewConfig),

    galleryThumbs = new Swiper('.gallery__thumbs', galleryThumbsConfig),

    galleryThumbsImg = document.querySelector('.gallery__thumbs');


  galleryPreview.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryPreview;

  if (galleryThumbsImg) {
    galleryThumbs.update();
  }

});