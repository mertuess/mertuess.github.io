const header = document.querySelector('header');
let _position = 0;
let _scroll = 0;

document.addEventListener('scroll', function() {
    _scroll = window.scrollY;
});

document.addEventListener('mousemove', function(event) {
    _position = event.clientY;
});

function HideAndSeek(){
    if(_scroll >= 100){
        if(_position > 100){
            header.classList.add('hide');
        }
        else{
            header.classList.remove('hide');
        }
    }
    else{
        header.classList.remove('hide');
    }
}

setInterval(HideAndSeek, 250);