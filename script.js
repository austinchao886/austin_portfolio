// AOS JS 

AOS.init();

// Mixitup JS 

if (document.querySelector('.pf-container') && window.mixitup) {
    mixitup('.pf-container');
}


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

// Play project previews only while they are visible.
const projectPreviews = document.querySelectorAll('.project-preview');

if ('IntersectionObserver' in window && projectPreviews.length) {
    const previewObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play().catch(() => {});
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.45 });

    projectPreviews.forEach((preview) => previewObserver.observe(preview));
}
