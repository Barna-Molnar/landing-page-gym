'use-strict';

// implementing smmoth scrool to sections

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
        const idOfSection = e.target.getAttribute('href')
        document.querySelector(idOfSection).scrollIntoView({ behavior: "smooth" })
    }
});

