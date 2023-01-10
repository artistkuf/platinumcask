var HowitworkSwiper = new Swiper('.swiper__howitworks', {
   slidesPerView: 4,
   spaceBetween: 50,
   draggable: true,
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
       slidesPerView: 2.5,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 30,
     },
     1200: {
       slidesPerView: 4,
       spaceBetween: 50,
     },
   },
 });
 