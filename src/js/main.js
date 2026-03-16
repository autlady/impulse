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


const swiperStilist= new Swiper('.stilist-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '#slider-next-stilist',
    prevEl: '#slider-prev-stilist',
  },
});

const swiperVisagist= new Swiper('.visagist-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '#slider-next-visagist',
    prevEl: '#slider-prev-visagist',
  },
});

const swiperNailprofi= new Swiper('.nailprofi-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '#slider-next-nailprofi',
    prevEl: '#slider-prev-nailprofi',
  },
});

const swiperBrowprofi= new Swiper('.browprofi-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 16,

  navigation: {
    nextEl: '#slider-next-browprofi',
    prevEl: '#slider-prev-browprofi',
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
});

// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

for (item of tabHeaders) {
    item.addEventListener('click', function(e) {
        for (el of tabHeaders) {
            el.classList.remove('active');
        }
        e.target.classList.add('active');

        // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

        // 2. Выбрать нужный content box и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    })
}