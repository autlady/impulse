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


const swiper = new Swiper('#products-slider', {

  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  pagination: {
    el: '#products-slider-pagination',
  },

  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prev',
  },
});


})