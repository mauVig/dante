const caract = document.querySelector(".caract")



const swiper = new Swiper(".swiper1",{    
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 200,
      slideShadows: true,
    },
    loop:true,
    clickable:false,
    clickableClass:".swiper-pagination-clickable",
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },   

});
