const list = document.getElementById("screenshots");
const ref = document.getElementById("reference");
const b1 = document.getElementsByClassName('swipe-button-right');
const b2 = document.getElementsByClassName('swipe-button-left');
const ref_size = ref.offsetWidth;
var scrollPos = list.scrollLeft;
var ss_count = $('#screenshots .item').length
var maxValue = (ss_count-1)*1360;

b1[0].addEventListener("animationend", AnimationHandler, false);
b2[0].addEventListener("animationend", AnimationHandler2, false);

function AnimationHandler () {
    b1[0].classList.remove('_pressed');
}

function AnimationHandler2 () {
    b2[0].classList.remove('_pressed');
}

function moveRight(){
    if(scrollPos < maxValue){
        scrollPos += 1360;
    }else{
        scrollPos = 0;
    }
    
    jQuery('ul').animate({scrollLeft: scrollPos}, "slow");
    b1[0].classList.add('_pressed');
}

function moveLeft(){
    if(scrollPos > 0){
        scrollPos -= 1360;
    }else{
        scrollPos = maxValue;
    }
    
    jQuery('ul').animate({scrollLeft: scrollPos}, "slow");
    b2[0].classList.add('_pressed');
}