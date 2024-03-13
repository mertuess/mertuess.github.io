let menu = document.getElementById('menu');
let menuIcon = document.querySelector('#menu-icon');

function openMenu() {
    menu.classList.toggle('open');
    menuIcon.classList.toggle('bx-x');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.sec-block', {delay:200, origin:'top'});