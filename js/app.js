

const swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    
      autoplay: 3000,
      autoplayDisableOnInteraction: false,
      runCallbacksOnInit: true,
       

      // Обновляем номер слайда при инициализации
      on: {
        init: function (swiper) {
          const offer = document.querySelector('#numberSlides');
          offer.innerHTML = (swiper.realIndex + 3) + '/6 ';
          const prevButton = document.querySelector('.swiper-button-prev');
          if (swiper.realIndex === 0) {
            prevButton.classList.add('disabled');
          } else {
            prevButton.classList.remove('disabled');
          }
        },
        
        // Обновляем номер слайда при изменении
        slideChange: function (swiper) {
          const offer = document.querySelector('#numberSlides');
          offer.innerHTML = (swiper.realIndex + 3) + '/6';
          const prevButton = document.querySelector('.swiper-button-prev');
        if (swiper.realIndex === 0) {
          prevButton.classList.add('disabled');
        } else {
          prevButton.classList.remove('disabled');
        }


        const nextButton = document.querySelector('.swiper-button-next');
        if (swiper.realIndex === 3) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
        }
      }
     
});


const swiper2 = new Swiper('.stages-slider', {
  slidesPerView: 1, 
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  mousewheel:{ },
  pagination:{
        el: '.swiper-pagination',
        clickable:true
    },
  
  runCallbacksOnInit: true,
       

      // Обновляем номер слайда при инициализации
      on: {
        init: function (swiper) {
          
          const prevButton = document.querySelector('.swiper-button-prev2');
          if (swiper.realIndex === 0) {
            prevButton.classList.add('disabled');
          } else {
            prevButton.classList.remove('disabled');
          }
          

          
        },
      slideChange: function (swiper) {
        const prevButton = document.querySelector('.swiper-button-prev2');
        if (swiper.realIndex === 0) {
          prevButton.classList.add('disabled');
        } else {
          prevButton.classList.remove('disabled');
        }

        const nextButton = document.querySelector('.swiper-button-next2');
        if (swiper.realIndex === 4) {
          nextButton.classList.add('disabled');
        } else {
          nextButton.classList.remove('disabled');
        }
      
      }},
  
  
  breakpoints: {
    768: {
      slidesPerView: 3, // Показываем 3 карточки в сетке на больших экранах
      enabled: false, // Отключаем слайдер на десктопной версии
    }
  },
  
});