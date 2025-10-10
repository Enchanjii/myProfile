const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});