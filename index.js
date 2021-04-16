'use-strict';

// implementing smmoth scrool to sections

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        const idOfSection = e.target.getAttribute('href')
        document.querySelector(idOfSection).scrollIntoView({ behavior: "smooth" })
    }
});

// Navigation sticky

const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const navheight = nav.getBoundingClientRect().height
console.log(navheight)

const stickyNavi = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
    // console.log(entry)
};

const headerObserver = new IntersectionObserver(stickyNavi, { rootMargin: `-${navheight}px` });
headerObserver.observe(header)

