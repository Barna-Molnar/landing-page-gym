'use-strict';

// implementing smmoth scrool to sections

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        const idOfSection = e.target.getAttribute('href')
        document.querySelector(idOfSection).scrollIntoView({ behavior: "smooth" })
    }
});
///header btn smooth scroll 
document.querySelector('.btn-header').addEventListener('click', function (e) {
    e.preventDefault()
    const idOfSection = e.target.getAttribute('href')
    document.querySelector(idOfSection).scrollIntoView({ behavior: "smooth" })

})

// Navigation sticky

const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const navheight = nav.getBoundingClientRect().height


const stickyNavi = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')

};

const headerObserver = new IntersectionObserver(stickyNavi, { rootMargin: `-${navheight}px` });
headerObserver.observe(header)

//Section animation 


const allSection = document.querySelectorAll('.section')
const slideInSection = function (entries, observer) {
    const [entry] = entries
    console.log(entry)

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)

}

const sectionObserver = new IntersectionObserver(slideInSection, { root: null, threshold: .1 })

allSection.forEach(section => {
    sectionObserver.observe(section)
    section.classList.add('section--hidden')

})

const allImg = document.querySelectorAll('.features__img')
console.log(allImg)

const removeBlur = function (entries, observer) {
    const [entry] = entries

    if (!entry.isIntersecting) return

    else {

        console.log(entry.target)

        entry.target.classList.remove('blur')
    }

    observer.unobserve(entry.target)


}


const imgObserver = new IntersectionObserver(removeBlur, { root: null, threshold: .4 })

allImg.forEach(img => {
    imgObserver.observe(img)
    img.classList.add('blur')

});


/// popup functionality 
const popupWindow = document.querySelector('.popup')
const btnClosePopup = document.querySelector('.btn--close')
const btnMembershipNav = document.querySelector('.btn--show-popup')
const cards = document.querySelectorAll('.card')
const overlay = document.querySelector('.overlay')

console.log(overlay)
btnMembershipNav.addEventListener('click', () => {
    // popupWindow.classList.remove('hidden')
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        popupWindow.classList.remove('hidden')
        overlay.classList.remove('hidden')

    })
})



btnClosePopup.addEventListener('click', () => {
    popupWindow.classList.add('hidden')
    overlay.classList.add('hidden')
})

// scroll down arrow functionality 
const arrowIcon = document.querySelector('.downArrow');
console.log(arrowIcon)
window.addEventListener('scroll', () => {
    if (window.scrollY > 130) {
        arrowIcon.style.opacity = 0
    }
    if (window.scrollY < 30) {
        arrowIcon.style.opacity = 1
    }

})

// burger menu
const menu = document.querySelector('.nav__toggler__list');
const burger = document.querySelector('.burger');
const menuBackSide = document.querySelector('.nav__toggler__list__side--back')
console.log(menuBackSide)
const openMenu = function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav__toggler__list--active');
    menuBackSide.classList.toggle('nav__toggler__list__side--back--active');
};
burger.addEventListener('click', openMenu);
