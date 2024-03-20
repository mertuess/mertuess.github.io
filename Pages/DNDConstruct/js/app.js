let arrow = document.querySelector('.arr-icon');
let menu = document.getElementById('menu');
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');

let _name = document.querySelector('.name');
let _post = document.querySelector('.post');
let _info = document.querySelector('.info');

class Employee {
    constructor(name, post, info) {
        this.name = name;
        this.post = post;
        this.info = info;
    }
}

let employers = [
    new Employee('Дмитрий Тюриков', 'Программист', 'Пишет всякое на паскале. На районе называют "Хакер". Один раз взломал шаурмечную у дома, так он называет попытку не заплатить за шаурму за которую его избили веником'),
    new Employee('Алиса Мешкова', 'Team Lead', 'Ведет весь процесс по заданной траектории. Следит чтобы не были просрочены дедлайны (так себе) и чтобы никто не отлынивал. В целом топ шеф'),
    new Employee('Любовь Зайцева', 'Дизайнер UI', 'Создает макет. Кнопки, расположение кнопок, текст на кнопках, обводка кнопок, эффект когда наводишься на кнопку, button - всем этим занимается она. Признана лучшим дизайнером по версии журнала "Сыктывкар сегодня" и удостоена 3 звездам Мишлен.'),
    new Employee('Матвей Куклин', 'Креативный директор', 'Он ответсвенен за то, чтобы его идеи были отклонены остальными. Он придумал все это приложение, а так-же постоянно участвует в разработке, дополняя, и без того, не осуществимые идеи.'),
    new Employee('Андрей Истрин', 'Писарь', 'Ес че тумяю на связи кста. По причине того, что все что умеет Андрей - это пользоватся клавиатурой (большой K/D в Таркове кста) он назначен на должность писать много текста и выражать свое мнение в общем чате. Он заполняет листы персонажей, дополняет базу данных всякими NPC и пр.'),
    new Employee('Мишель Климова', 'Художник', 'Во-первых - это наш маскот, а во-вторых - талантливый художник. Она рисует арты, фоны, драконов и кубики д20, чтобы наполнить интерфейс хоть каким-то "растром"')
]

function openMenu() {
    menu.classList.toggle('open');
    menuIcon.classList.toggle('bx-x');
}

function selectEmployee(id){
    _name.innerText = employers[id].name;
    _post.innerText = employers[id].post;
    _info.innerText = employers[id].info;
}

window.addEventListener('scroll', e => {
    document.body.style.cssText = '--scrollTop: ' + this.scrollY + 'px'
    if(this.scrollY >= 200)
        header.classList.add('hide')
    else
        header.classList.remove('hide')
})

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.text', {delay:0, origin:'top'});
sr.reveal('.splash img', {delay:200, origin:'top', duration: 3000});
sr.reveal('.main-section', {delay:300, origin:'top'});

document.querySelector("#copy").addEventListener("click", function() {
    navigator.clipboard.writeText(document.querySelector("#copy").innerText).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(error) {
        console.error('Error:', error);
    });
});