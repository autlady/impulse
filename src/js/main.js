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

const Swiper = window.Swiper;

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


// Элементы
const tabButtons = document.querySelectorAll('.tab-btn');
const swiperContainers = document.querySelectorAll('.profi-slider');
const prevBtn = document.getElementById('slider-prev-profi');
const nextBtn = document.getElementById('slider-next-profi');

// Инициализируем все слайдеры
const swipers = [];
swiperContainers.forEach((container, index) => {
  const swiperProfi = new Swiper(container, {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 16,
    on: {
      init: function() {
        // Даём время на инициализацию, затем обновляем навигацию
        setTimeout(updateNavigation, 100);
      },
      slideChange: updateNavigation
    }
  });
  swipers.push(swiperProfi);
});

// Функция для активации таба и соответствующего слайдера
function activateTab(tabIndex) {
  // Убираем активный класс у всех табов
  tabButtons.forEach(btn => btn.classList.remove('active'));
  // Добавляем активный класс выбранному табу
  tabButtons[tabIndex].classList.add('active');

  // Скрываем все слайдеры
  swiperContainers.forEach(container => container.classList.remove('active'));
  // Показываем нужный слайдер
  swiperContainers[tabIndex].classList.add('active');

      // Сбрасываем активный слайдер на первый слайд при переключении таба
      const activeSwiper = swipers[tabIndex];
      if (activeSwiper) {
        activeSwiper.slideTo(0); // переходим на первый слайд
      }

      setTimeout(updateNavigation, 50);
}

// Обработчики для табов
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activateTab(index);
  });
});

// Общая навигация для всех слайдеров
prevBtn.addEventListener('click', () => {
  // Находим активный слайдер и вызываем метод prev()
  const activeSwiper = swipers.find((_, index) =>
    swiperContainers[index].classList.contains('active')
  );
  if (activeSwiper && !activeSwiper.isBeginning) {
    activeSwiper.slidePrev();
    updateNavigation(); // обновляем состояние стрелок
  }
});

nextBtn.addEventListener('click', () => {
  // Находим активный слайдер и вызываем метод next()
  const activeSwiper = swipers.find((_, index) =>
    swiperContainers[index].classList.contains('active')
  );
  if (activeSwiper && !activeSwiper.isEnd) {
    activeSwiper.slideNext();
    updateNavigation(); // обновляем состояние стрелок
  }
});

function updateNavigation() {
  const activeSwiper = swipers.find((_, index) =>
    swiperContainers[index].classList.contains('active')
  );

  if (!activeSwiper) return;

  // Получаем реальное количество слайдов (исключая клонированные при loop: false)
  const realSlides = activeSwiper.slides.filter(slide =>
    !slide.classList.contains('swiper-slide-duplicate')
  ).length;
  const hasMultipleSlides = realSlides > 1;

  const isBegin = activeSwiper.isBeginning;
  const isEnd = activeSwiper.isEnd;

    // Если в слайдере только один слайд — скрываем обе стрелки
    if (!hasMultipleSlides) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      // Показываем стрелки, если слайдов больше одного
      prevBtn.style.display = 'inline-block';
      nextBtn.style.display = 'inline-block';

      // Стилизация кнопки «Назад»
      if (isBegin) {
        prevBtn.style.color = '#ccc'; // серая (неактивная)
        prevBtn.disabled = true;
      } else {
        prevBtn.style.color = 'black'; // чёрная (активная)
        prevBtn.disabled = false;
      }

      // Стилизация кнопки «Вперёд»
      if (isEnd) {
        nextBtn.style.color = '#ccc'; // серая (неактивная)
        nextBtn.disabled = true;
      } else {
        nextBtn.style.color = 'black'; // чёрная (активная)
        nextBtn.disabled = false;
      }
    }
  }

// Активируем первый таб по умолчанию
activateTab(0);

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

// instagram slider

const swiperInsta = new Swiper('.instagram-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
/************************************* */

});
