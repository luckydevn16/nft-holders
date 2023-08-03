// STICKY HEADER
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// NAVIGATION
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth",block:"center"});
}

// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// MOBILE MENU
let body = document.querySelector('body');
let menuOpenImg = document.querySelector('.menu-open-img');
let menuCloseImg = document.querySelector('.menu-close-img');
let menuMobile = document.querySelector('.navigation.mobile');
let navListMobile = document.querySelector('.nav-list.mobile');


const menuOpening = () => {
    menuMobile.style.transform = 'scaleX(1)';
    menuMobile.style.opacity = '1';
    body.classList.add('blocked');
}

const menuClosing = () => {
    menuMobile.style.transform = 'scaleX(0)';
    menuMobile.style.opacity = '0';
    body.classList.remove('blocked');
}

menuOpenImg.onclick = () => {
    menuOpening();
}
menuCloseImg.onclick = () => {
    menuClosing();
}

// CURRENT YEAR
document.querySelector('.year').innerText = new Date().getFullYear();

// FORM SUBMISSION
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let phoneValue = document.querySelector('.phone');
let requiredFields = document.querySelectorAll('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '' && phoneValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.forEach((e) => {
            e.classList.add('visible');
        })
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email, .phone');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        requiredFields.forEach((e) => {
            if (e.classList.contains('visible')) {
                e.classList.remove('visible');
            }
        })
    });
}
                            
                            