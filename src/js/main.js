document.addEventListener("DOMContentLoaded", function () {

  const toggleMenu = document.querySelector('.menu-toggle');
  const headerTop = document.querySelector('.header-top');
  const menu = document.querySelector('.menu-wrapper');
  const bodyEl = document.body;

  function closeMenu() {
    toggleMenu.classList.remove('active');
    headerTop.classList.remove('active');
    menu.style.height = 0;
    bodyEl.classList.remove('lock');
  }

  function openMenu() {
    toggleMenu.classList.add('active');
    headerTop.classList.add('active');
    menu.style.height = '100vh';
    bodyEl.classList.add('lock');
  }

if (toggleMenu){
    toggleMenu.addEventListener('click', function(){

        if(this.classList.contains('active')){
          closeMenu();
        }else{
          openMenu();
        }
    })
}

const menuItems = menu.querySelectorAll('a');

menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        for (el of menuItems) {
          closeMenu();
        }
    });
}
);

  // GALLERY SLIDER
  let specificSwiperGallery = null;

  function initSpecificSwiperGallery() {
    const windowWidth = window.innerWidth;
    const swiperContainerGallery = document.querySelector(".gallery-slider");

    if (windowWidth <= 767 && swiperContainerGallery && !specificSwiperGallery) {
      specificSwiperGallery = new Swiper(".gallery-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          525: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 767 && specificSwiperGallery) {
      specificSwiperGallery.destroy(true, true);
      specificSwiperGallery = null;
    }
  }

  initSpecificSwiperGallery();
  window.addEventListener("resize", initSpecificSwiperGallery);
  /************************************* */


const swiperStilist= new Swiper('stilist-slider', {

  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});

	/* ==== Fancybox ===== */
	Fancybox.bind('[data-fancybox]', {
    Thumbs: false,
    Toolbar: {
     display: {
     left: [],
     middle: [],
     right: [ "close"],
     },
   },
 });
})