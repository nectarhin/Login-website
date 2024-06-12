const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.navbar-links-container');

hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})