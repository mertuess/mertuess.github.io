const parallax_back_ground = document.querySelector('.background');

document.addEventListener('scroll', function() {
    parallax_back_ground.setAttribute("style", "background-position-y: " + window.scrollY/1.5 + "px;");
});