const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
        console.log('working')
    })
});

const toggle = document.getElementById('toggle-button')
const nav = document.getElementById('nav')
const navbarLinks = document.getElementById('navbar-links')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    navbarLinks.classList.toggle('active')
})


