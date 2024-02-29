let patterns = [
    "...убивать ЧВК в шапке-ушанке и жилете дикого.",
    "...искать LedX'ы по всем локам... Абсолютно везде.",
    "...в шлеме и броне Untar ловить диких.",
    "...выполнять \"Гренадер\".",
    "...пушить базу Решалы.",
    "...сидеть в меню тридцать минут и умирать за пять в рейде.",
    "...выходить на лабу в поисках ПМа на трассерах.",
    "Backend error! 228 - ItemsMoving: failed to lock profile",
    "...собирать тушенку.",
    "...собирать метовые сборки Кедра.",
    "...помечать топливники.",
    "...фармить на диких.",
    "...качаться в убежке.",
    "...вылетать с рейда.",
    "...а, не. Не будем! Мож лучше по пивку? :3",
];

let message = document.getElementById('message');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.addEventListener('scroll', e => {
    document.body.style.cssText = '--scrollTop: ' + this.scrollY + 'px'
})

document.getElementById('message').textContent = patterns[getRandomInt(patterns.length)]