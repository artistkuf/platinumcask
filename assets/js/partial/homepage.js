var swiperAnimation = new SwiperAnimation();
var HeroBannerSwiper = new Swiper(".swiper__herobanner", {
  lazy: true,
  loop: true,
  speed: 2000,
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


var MembershipSwiper = new Swiper('.swiper__membership', {
  pagination: {
    el: '.swiper-container',
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});


document.addEventListener('DOMContentLoaded', function() {
  var caskBottles = document.querySelector('.blk__caskbottles');
  window.addEventListener('scroll', function() {
    var caskBottlesTop = caskBottles.offsetTop;
    var caskBottlesHeight = caskBottles.offsetHeight;
    var windowTop = window.scrollY;
    if (caskBottlesTop + caskBottlesHeight >= windowTop && caskBottlesTop <= windowTop + window.innerHeight) {
      var caskBottlesImages = caskBottles.querySelectorAll('img');
      for (var i = 0; i < caskBottlesImages.length; i++) {
        caskBottlesImages[0].classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        caskBottlesImages[1].classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
        caskBottlesImages[2].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        caskBottlesImages[3].classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
        caskBottlesImages[4].classList.add('animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
      }
    }
  });
});




