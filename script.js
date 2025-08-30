// AOS JS 

AOS.init();

// Mixitup JS 

var mixer = mixitup('.pf-container');


// Swiper Slider

var swiper = new Swiper('.testSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed:600,
    autoplay: {
        delay: 5000,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// FAQS 

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card =>{
    card.addEventListener('click',() =>{
        faqCards.forEach(item =>{
            if(item !== card){
                item.classList.remove('faq-active');
            }
        });
        card.classList.toggle('faq-active');
    });
});