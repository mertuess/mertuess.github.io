let patterns = [
    "...убивать ЧВК в шапке-ушанке и жилете дикого.",
    "...искать LedX'ы по всем локам... Абсолютно везде.",
    "...в шлеме и броне Untar ловить диких.",
    "...выполнять \"Гренадер\".",
    "...пушить базу Решалы.",
    "...сидеть в меню тридцать минут и умирать за пять в рейде.",
    "...выходить на лабу в поисках ПМа на трассерах.",
];

let message = document.getElementById('message');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.addEventListener('scroll', e => {
    document.body.style.cssText = '--scrollTop: ' + this.scrollY + 'px'
})

document.getElementById('message').textContent = patterns[getRandomInt(patterns.length-1)]