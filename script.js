const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});

const toggle = document.getElementById('toggle-button')
const nav = document.getElementById('nav')
const navbarLinks = document.getElementById('navbar-links')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    navbarLinks.classList.toggle('active')
})
