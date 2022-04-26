var coins = 0;
var coins_counter = document.getElementById('coins-counter');
var coin = document.getElementById('coin-img-tag');
var coin_plus = document.getElementById('coins-counter-1');

var pops = document.getElementsByClassName('pop');

function addCoins(){
    coins++;
    if(!coins_counter.classList.contains('_active')){
        coins_counter.classList.add('_active');
    }
    coins_counter.innerText = '' + coins;

    if(!coin_plus.classList.contains('_active')){
        coin_plus.classList.add('_active');
    }
    else{
        coin_plus.classList.remove('_active');
    }
}

function pop_it(id){
    if(!pops[id].classList.contains('_popped')){
        pops[id].classList.add('_popped');
        document.getElementById('pop-snd').play();
    }
    else{
        pops[id].classList.remove('_popped');
        document.getElementById('pop-snd-1').play();
    }
}

