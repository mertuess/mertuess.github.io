const slider = document.getElementById('volume');
var audio = document.getElementById('pearl-abyss');

slider.addEventListener('change', updateValue);

function updateValue(e){
    audio.volume = e.target.value/100;
}