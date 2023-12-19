var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "creative",

    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
});



var clientSwiper = new Swiper(".client-swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.querySelector('.accordion-header').addEventListener('click', function () {
        const content = this.nextElementSibling;
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            const openItem = document.querySelector('.accordion-content.active');
            if (openItem) {
                openItem.classList.remove('active');
            }
            content.classList.add('active');
        }
    });
});



// toggle function
// const toggleFunc = (className, className2) => {
//     const main = document.querySelector(className);
//     const collapse = document.querySelector(className2);

//     main.addEventListener("click", function () {
//         main.classList.toggle() = "active";
//         collapse.classList.toggle() = "active";
//     });
// }



// console.log(accordionActive);

// toggleFunc(".accordion", ".accordion-active");


// const accordion = document.querySelector("#accordion-heading");
// const accordionActive = document.querySelector("#accordion-collapse");



// accordion.addEventListener("click", function () {
//     accordion.classList.toggle("active");
//     accordionActive.classList.toggle("active");
// });


// function toggleContent(item) {
//     const content = item.nextElementSibling;
//     content.classList.toggle('hidden');
//     content.classList.toggle('h-auto');
// }