var HowitworkSwiper = new Swiper('.swiper__howitworks', {
   slidesPerView: 1,
   spaceBetween: 50,
   draggable: true,
   lazy: true,
   loop: true,
   autoplay: {
     delay: 5000,
   },
   pagination: {
     el: '.swiper-container',
     type: 'bullets',
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 