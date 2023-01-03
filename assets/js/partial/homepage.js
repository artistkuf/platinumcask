var swiperAnimation = new SwiperAnimation();
var HeroBannerSwiper = new Swiper(".swiper__herobanner", {
  lazy: true,
  loop: true,
  speed: 500,
  effect: "fade",
  grabCursor: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  on: {
    init: function () {
      swiperAnimation.init(this).animate();
    },
    slideChange: function () {
      swiperAnimation.init(this).animate();
    },
  },
});


