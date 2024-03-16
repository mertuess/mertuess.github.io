
let arrow = document.querySelector('.arr-icon');

window.addEventListener('scroll', e => {
    document.body.style.cssText = '--scrollTop: ' + this.scrollY + 'px'
    if(this.scrollY >= 200)
        arrow.classList.add('invisible')
    else
        arrow.classList.remove('invisible')
})

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.text', {delay:200, origin:'top'});
sr.reveal('.img', {delay:600, origin:'right'});
sr.reveal('.step', {delay:100, origin:'left'});

document.querySelector("#copy").addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("#copy").innerText).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(error) {
        console.error('Error:', error);
    });
});